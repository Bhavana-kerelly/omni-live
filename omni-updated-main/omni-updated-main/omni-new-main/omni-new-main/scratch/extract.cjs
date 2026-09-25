const fs = require('fs');
const path = require('path');

const dataStr = fs.readFileSync(path.join(__dirname, '../src/data/doctorsData.js'), 'utf8');

// Using a basic regex to extract just the array part:
const match = dataStr.match(/export const DOCTORS_DATA = (\[[\s\S]*?\]);\s*export/);

if (match) {
  try {
    // A bit hacky but eval will work if we wrap it properly or just parse it.
    // However, JS object notation isn't always strict JSON.
    // Let's use a simpler string processing to find names and images.
  } catch (e) {}
}

// Fallback manual parsing since it's just text
const lines = dataStr.split('\n');
let inDoc = false;
let docName = '';
let docBranch = '';
let docImage = '';
const results = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('{')) {
    inDoc = true;
    docName = '';
    docBranch = '';
    docImage = '';
  }
  
  const nameMatch = line.match(/"name":\s*"(.*?)"/);
  if (nameMatch) docName = nameMatch[1];
  
  const branchMatch = line.match(/"branch":\s*"(.*?)"/);
  if (branchMatch) docBranch = branchMatch[1];
  
  const imageMatch = line.match(/"image":\s*"(.*?)"/);
  if (imageMatch) docImage = imageMatch[1];
  
  if (line.includes('}') && inDoc) {
    if (docBranch && docBranch.toLowerCase().includes('udai')) {
      results.push(`* **${docName}** -> \`${path.basename(docImage)}\``);
    }
    inDoc = false;
  }
}

fs.writeFileSync(path.join(__dirname, 'output.md'), results.join('\n'));
console.log(`Extracted ${results.length} doctors`);
