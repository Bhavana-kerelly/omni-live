import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configure CORS
const allowedOrigins = process.env.CORS_ORIGIN 
  ? process.env.CORS_ORIGIN.split(',').map(o => o.trim())
  : ['http://localhost:5173', 'http://127.0.0.1:5173'];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes('*') || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    if (origin.startsWith('http://localhost:') || origin.startsWith('http://127.0.0.1:')) {
      return callback(null, true);
    }
    return callback(null, false);
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Accept', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(express.json({ limit: '100kb' }));

// Diagnostic logger (never logs secret keys or credentials)
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} -> HTTP ${res.statusCode} (${duration}ms)`);
  });
  next();
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'OMNI LeadSquared API Service' });
});

// ---------------------------------------------------------------------------
// ConVox Click-to-Call Helper
// POST https://<CONVOX_API_URL>/ConVoxCCS/rest/api
// Docs: ConVoxCCS 4.0.3 API — action: CALL
// ---------------------------------------------------------------------------

/**
 * Generates a unique reference number composed only of letters, numbers,
 * and underscores — safe for ConVox refno field.
 * Format: OMNI_<13-digit epoch ms>_<6 random alphanumeric chars>
 * e.g.  OMNI_1726644718123_a3Bx9Z
 */
function generateRefno() {
  const ts = Date.now().toString();
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let rand = '';
  for (let i = 0; i < 6; i++) {
    rand += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `OMNI_${ts}_${rand}`;
}

/**
 * callConvox(phoneNumber)
 * Triggers a Click-to-Call via the ConVox CCS 4.0.3 API.
 *
 * Returns:
 *   { success: true,  status: 'CL000', message: '...' }   on success
 *   { success: false, status: <code>,  message: '...' }   on API/network error
 *
 * Never throws — all errors are caught and returned as structured objects
 * so that a ConVox failure never masks a successful LeadSquared capture.
 */
async function callConvox(phoneNumber) {
  const convoxApiUrl   = process.env.CONVOX_API_URL;
  const accessToken    = process.env.CONVOX_ACCESS_TOKEN;
  const convoxUserId   = process.env.CONVOX_USERID;
  const dialPrefix     = process.env.CONVOX_DIAL_PREFIX || '';

  // Guard: skip silently if ConVox is not configured
  if (!convoxApiUrl || !accessToken || !convoxUserId) {
    console.warn('[ConVox] Skipping Click-to-Call — CONVOX_API_URL, CONVOX_ACCESS_TOKEN, or CONVOX_USERID not set in environment.');
    return { success: false, status: 'NOT_CONFIGURED', message: 'ConVox credentials not configured on server.' };
  }

  const refno = generateRefno();

  const body = {
    action:       'CALL',
    userid:       convoxUserId,
    phone_number: phoneNumber,
    dial_prefix:  dialPrefix,
    refno:        refno
  };

  // Log the outgoing request — NO secrets printed
  console.log(`[ConVox] REQUEST SENT  | phone: ${phoneNumber} | refno: ${refno} | url: ${convoxApiUrl}`);

  try {
    const response = await fetch(convoxApiUrl, {
      method:  'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept':       'application/json',
        // Access-Token header value is never logged
        'Access-Token': accessToken
      },
      body: JSON.stringify(body),
      // ConVox may use a self-signed cert on internal IPs — allow but log a warning
      // Node 18+ respects NODE_TLS_REJECT_UNAUTHORIZED env var for this
    });

    const responseText = await response.text();
    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch {
      responseData = { raw: responseText };
    }

    console.log(`[ConVox] RESPONSE RECEIVED | HTTP ${response.status} | status field: ${responseData?.STATUS ?? responseData?.status ?? '(none)'}`);

    // ConVoxCCS 4.0.3: success is indicated by STATUS = "CL000"
    const convoxStatus = responseData?.STATUS || responseData?.status || '';
    if (convoxStatus === 'CL000') {
      console.log(`[ConVox] CALL PLACED SUCCESSFULLY | refno: ${refno}`);
      return { success: true, status: 'CL000', message: 'Call placed successfully.', refno };
    }

    // Non-success response from ConVox
    const errorMsg = responseData?.MESSAGE || responseData?.message || responseData?.raw || 'ConVox returned a non-success status.';
    console.error(`[ConVox] ERROR | status: ${convoxStatus} | message: ${errorMsg} | refno: ${refno}`);
    return { success: false, status: convoxStatus || 'UNKNOWN', message: errorMsg, refno };

  } catch (err) {
    // Network error, TLS error, timeout, etc.
    console.error(`[ConVox] NETWORK/REQUEST ERROR | ${err.message} | refno: ${refno}`);
    return { success: false, status: 'NETWORK_ERROR', message: err.message, refno };
  }
}

/**
 * LeadSquared Submit Proxy Endpoint
 * POST /api/leadsquared/submit
 */
app.post('/api/leadsquared/submit', async (req, res) => {
  const leadPayload = req.body;

  // 1. Validate JSON Body is an Array
  if (!Array.isArray(leadPayload)) {
    return res.status(400).json({
      success: false,
      error: 'Invalid payload format. Expected a JSON array of LeadSquared attributes [{ Attribute, Value }].'
    });
  }

  if (leadPayload.length === 0) {
    return res.status(400).json({
      success: false,
      error: 'Payload array cannot be empty.'
    });
  }

  // 2. Validate Attribute-Value Structure
  const isValidStructure = leadPayload.every(
    (item) => item && typeof item === 'object' && typeof item.Attribute === 'string' && item.Value !== undefined
  );

  if (!isValidStructure) {
    return res.status(400).json({
      success: false,
      error: 'Malformed array element. Each item must contain "Attribute" (string) and "Value" properties.'
    });
  }

  // 3. Check for essential lead attributes
  const hasPhone = leadPayload.some((item) => item.Attribute === 'Phone' && String(item.Value).trim().length > 0);
  const hasFirstName = leadPayload.some((item) => item.Attribute === 'FirstName' && String(item.Value).trim().length > 0);

  if (!hasPhone && !hasFirstName) {
    return res.status(400).json({
      success: false,
      error: 'Missing required lead details. Payload must contain at least "FirstName" or "Phone".'
    });
  }

  // 4. Verify Server-Side Credentials
  const baseUrl = process.env.LEADSQUARED_BASE_URL || 'https://api-in21.leadsquared.com/v2/';
  const actionEndpoint = process.env.LEADSQUARED_ENDPOINT_ACTION || 'LeadManagement.svc/Lead.Capture';
  const accessKey = process.env.LEADSQUARED_ACCESS_KEY;
  const secretKey = process.env.LEADSQUARED_SECRET_KEY;

  if (!accessKey || !secretKey || accessKey === 'YOUR_ACCESS_KEY' || secretKey === 'YOUR_SECRET_KEY') {
    console.error('[SECURITY ERROR] LeadSquared credentials missing or unconfigured in environment.');
    return res.status(500).json({
      success: false,
      error: 'Server configuration error: LeadSquared API credentials are not set on the backend server.'
    });
  }

  // 5. Construct Target URL with credentials (kept strictly server-side)
  const cleanBaseUrl = baseUrl.replace(/\/$/, '');
  const cleanAction = actionEndpoint.replace(/^\//, '');
  const targetUrl = `${cleanBaseUrl}/${cleanAction}?accessKey=${encodeURIComponent(accessKey)}&secretKey=${encodeURIComponent(secretKey)}`;

  try {
    console.log(`Forwarding lead submission to LeadSquared (${cleanAction}) with ${leadPayload.length} attributes...`);

    const lsResponse = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(leadPayload)
    });

    const responseText = await lsResponse.text();
    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch {
      responseData = { rawResponse: responseText };
    }

    if (!lsResponse.ok) {
      console.error(`LeadSquared API HTTP ${lsResponse.status} error:`, typeof responseData === 'object' ? JSON.stringify(responseData) : responseText);
      return res.status(lsResponse.status >= 500 ? 502 : 400).json({
        success: false,
        error: responseData.ExceptionMessage || responseData.Message || 'LeadSquared API rejected the submission.',
        details: responseData.ErrorCode || undefined
      });
    }

    // LeadSquared v2 returns Status: "Success" or "Error" inside 200 response
    if (responseData && responseData.Status === 'Error') {
      console.error('LeadSquared returned Status: Error:', responseData.ExceptionMessage || responseData);
      return res.status(400).json({
        success: false,
        error: responseData.ExceptionMessage || 'LeadSquared rejected the lead submission.',
        errorCode: responseData.ErrorCode
      });
    }

    console.log('[LeadSquared] SUCCESS — lead captured.');

    // -----------------------------------------------------------------------
    // Step 2: ConVox Click-to-Call (only runs when LeadSquared succeeds)
    // Extract the phone number submitted with the lead.
    // -----------------------------------------------------------------------
    const phoneItem = leadPayload.find((item) => item.Attribute === 'Phone');
    const patientPhone = phoneItem ? String(phoneItem.Value).trim() : null;

    let convoxResult = { success: false, status: 'NO_PHONE', message: 'No phone number available in lead payload.' };

    if (patientPhone) {
      convoxResult = await callConvox(patientPhone);
    } else {
      console.warn('[ConVox] Skipping Click-to-Call — no Phone attribute found in lead payload.');
    }

    return res.status(200).json({
      success: true,
      message: 'Lead captured successfully in LeadSquared.',
      leadsquared: { success: true },
      convox: {
        success: convoxResult.success,
        status:  convoxResult.status,
        message: convoxResult.message,
        refno:   convoxResult.refno || null
      },
      data: responseData
    });

  } catch (err) {
    console.error('Error forwarding request to LeadSquared:', err.message);
    return res.status(502).json({
      success: false,
      error: 'Failed to communicate with LeadSquared service. Please try again later.'
    });
  }
});

// Fallback 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Endpoint not found' });
});

// Start Express Server
app.listen(PORT, () => {
  const convoxConfigured = !!(process.env.CONVOX_API_URL && process.env.CONVOX_ACCESS_TOKEN && process.env.CONVOX_USERID);
  console.log(`===================================================`);
  console.log(` OMNI Hospitals Backend API Server running on port ${PORT}`);
  console.log(` Endpoint: POST http://localhost:${PORT}/api/leadsquared/submit`);
  console.log(` LeadSquared Action: ${process.env.LEADSQUARED_ENDPOINT_ACTION || 'LeadManagement.svc/Lead.Capture'}`);
  console.log(` ConVox Click-to-Call: ${convoxConfigured ? 'ENABLED' : 'DISABLED (env vars not set)'}`);
  if (convoxConfigured) {
    console.log(` ConVox API URL: ${process.env.CONVOX_API_URL}`);
    console.log(` ConVox User ID: ${process.env.CONVOX_USERID}`);
    console.log(` ConVox Dial Prefix: ${process.env.CONVOX_DIAL_PREFIX || '(none)'}`);
  }
  console.log(` Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`===================================================`);
});
