const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/pages/AboutPage.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const startMarker = '              {/* Bottom Section 2 Details: Glowing Stats Capsule Bar */}';
const endMarker = '              {/* Mobile Fallback: Vertical Storytelling Flow */}';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
    console.error('Markers not found.');
    process.exit(1);
}

const extractedBlock = content.slice(startIndex, endIndex);

content = content.slice(0, startIndex) + content.slice(endIndex);

const insertTarget = '        </section>\n\n        {/* SECTION 04 — OMNI TODAY (IMPACT STATISTICS) */}';

const newWrapper = `        </section>

        <section className="omni-journey-stats-wrapper" style={{ paddingBottom: '60px', background: 'transparent' }}>
          <div className="omni-journey-container">
${extractedBlock.replace(/^              /gm, '            ')}          </div>
        </section>

        {/* SECTION 04 — OMNI TODAY (IMPACT STATISTICS) */}`;

content = content.replace(insertTarget, newWrapper);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated AboutPage.jsx');
