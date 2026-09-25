const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/pages/AboutPage.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const startMarker = '        <section className="omni-journey-stats-wrapper" style={{ paddingBottom: \'60px\', background: \'transparent\' }}>';
const endMarker = '        {/* SECTION 04 — OMNI TODAY (IMPACT STATISTICS) */}';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
    console.error('Markers not found.');
    process.exit(1);
}

const extractedBlock = content.slice(startIndex, endIndex);

// Remove the extracted wrapper
content = content.slice(0, startIndex) + content.slice(endIndex);

// We need to extract the inner content from extractedBlock
// It's wrapped in:
// <section ...>
//   <div className="omni-journey-container">
// ...
//   </div>
// </section>

const innerContentMatch = extractedBlock.match(/<div className="omni-journey-container">\n([\s\S]*?)          <\/div>\n        <\/section>\n/);
if (!innerContentMatch) {
    console.error('Inner content not found');
    process.exit(1);
}

const innerContent = innerContentMatch[1];
const reIndented = innerContent.replace(/^            /gm, '              ');

const insertTarget = '              {/* Mobile Fallback: Vertical Storytelling Flow */}';
content = content.replace(insertTarget, reIndented + insertTarget);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully reverted AboutPage.jsx');
