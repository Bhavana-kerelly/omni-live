import { MAIN_GA_MEASUREMENT_ID, BRANCH_GA_CONFIG } from '../config/analyticsConfig.js';

// Track configured IDs to avoid redundant config calls
const configuredIds = new Set();
let isScriptInjected = false;

/**
 * Validates whether a given string is a valid GA4 Measurement ID
 */
export function isValidMeasurementId(id) {
  return typeof id === 'string' && /^G-[A-Z0-9]+$/i.test(id.trim());
}

/**
 * Injects Google Tag (gtag.js) script into document head once
 */
function injectGtagScript(primaryId) {
  if (isScriptInjected || typeof document === 'undefined') return;

  if (document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
    isScriptInjected = true;
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${primaryId}`;
  document.head.appendChild(script);
  isScriptInjected = true;
}

/**
 * Ensures gtag is initialized on window and configures a given measurement ID
 */
export function ensureMeasurementIdConfigured(measurementId) {
  if (typeof window === 'undefined') return;
  if (!isValidMeasurementId(measurementId)) return;

  const cleanId = measurementId.trim();

  // Initialize dataLayer and gtag if not present
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
  }

  // Inject script using the first valid ID found
  if (!isScriptInjected) {
    injectGtagScript(cleanId);
  }

  // Configure ID with send_page_view: false to prevent double-counting in SPA
  if (!configuredIds.has(cleanId)) {
    window.gtag('config', cleanId, { send_page_view: false });
    configuredIds.add(cleanId);
  }
}

/**
 * Resolves hospital branch from pathname (e.g., /hospitals/kothapet)
 */
export function getBranchFromPath(pathname = '') {
  if (!pathname) return null;

  const normalized = pathname.toLowerCase().replace(/\/+$/, '');
  const match = normalized.match(/\/hospitals\/([a-z0-9-]+)/);

  if (!match) return null;

  const slug = match[1];

  // Direct slug match
  if (BRANCH_GA_CONFIG[slug]) {
    return BRANCH_GA_CONFIG[slug];
  }

  // Check aliases
  for (const key of Object.keys(BRANCH_GA_CONFIG)) {
    const branch = BRANCH_GA_CONFIG[key];
    if (branch.aliases && branch.aliases.includes(slug)) {
      return branch;
    }
  }

  return null;
}

/**
 * Initializes Analytics by registering all valid measurement IDs
 */
export function initAnalytics() {
  if (typeof window === 'undefined') return;

  // Configure Main Tag
  if (isValidMeasurementId(MAIN_GA_MEASUREMENT_ID)) {
    ensureMeasurementIdConfigured(MAIN_GA_MEASUREMENT_ID);
  }

  // Configure any active Branch Tags
  Object.values(BRANCH_GA_CONFIG).forEach((branch) => {
    if (isValidMeasurementId(branch.measurementId)) {
      ensureMeasurementIdConfigured(branch.measurementId);
    }
  });
}

/**
 * Tracks a page view for SPA navigation
 * - Always sends to Main Hospital tag (if configured)
 * - Sends to specific Branch tag if on a branch page (if branch tag configured)
 */
export function trackPageView(pathname = window.location.pathname, title = document.title) {
  if (typeof window === 'undefined') return;

  const path = pathname || '/';
  const pageTitle = title || document.title;
  const branch = getBranchFromPath(path);

  const targets = [];

  // 1. Send to Main Hospital Tag
  if (isValidMeasurementId(MAIN_GA_MEASUREMENT_ID)) {
    ensureMeasurementIdConfigured(MAIN_GA_MEASUREMENT_ID);
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: pageTitle,
      page_location: window.location.href,
      hospital_branch: branch ? branch.name : 'Main / Global',
      send_to: MAIN_GA_MEASUREMENT_ID.trim(),
    });
    targets.push(`Main (${MAIN_GA_MEASUREMENT_ID})`);
  }

  // 2. Send to Specific Branch Tag
  if (branch && isValidMeasurementId(branch.measurementId)) {
    ensureMeasurementIdConfigured(branch.measurementId);
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: pageTitle,
      page_location: window.location.href,
      hospital_branch: branch.name,
      send_to: branch.measurementId.trim(),
    });
    targets.push(`Branch: ${branch.name} (${branch.measurementId})`);
  }

  // Helpful console feedback in development mode
  if (import.meta.env.DEV) {
    if (targets.length > 0) {
      console.log(`[Omni Analytics] Page view tracked on "${path}" ->`, targets.join(' | '));
    } else {
      console.log(`[Omni Analytics] Page view on "${path}" (No GA measurement IDs configured yet)`);
    }
  }
}

/**
 * Tracks custom interaction/conversion events (e.g. Appointment, Call, WhatsApp)
 */
export function trackEvent(eventName, eventParams = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  const branch = getBranchFromPath(window.location.pathname);
  const enrichedParams = {
    ...eventParams,
    hospital_branch: branch ? branch.name : 'Main / Global',
  };

  // Send to Main Tag
  if (isValidMeasurementId(MAIN_GA_MEASUREMENT_ID)) {
    window.gtag('event', eventName, {
      ...enrichedParams,
      send_to: MAIN_GA_MEASUREMENT_ID.trim(),
    });
  }

  // Send to Branch Tag
  if (branch && isValidMeasurementId(branch.measurementId)) {
    window.gtag('event', eventName, {
      ...enrichedParams,
      send_to: branch.measurementId.trim(),
    });
  }
}
