const fs = require('fs');
const path = require('path');

const doctorsDir = path.join(process.cwd(), 'public/images/doctors');
const dataPath = path.join(process.cwd(), 'src/data/doctorsData.js');

const files = fs.readdirSync(doctorsDir);
let content = fs.readFileSync(dataPath, 'utf8');

// Function to generate filename from doctor name
function generateFilename(name) {
  let slug = name.toLowerCase()
    .replace(/\./g, '') // remove dots
    .replace(/[^a-z0-9]+/g, '-') // replace non-alphanumeric with hyphens
    .replace(/^-|-$/g, ''); // remove leading/trailing hyphens
  
  // Custom tweaks since filenames might have initials at the end
  const matches = files.filter(f => f.toLowerCase().includes(slug) || slug.includes(f.toLowerCase().replace(/\.(jpg|png|jpeg)$/, '')));
  
  if (matches.length === 1) return matches[0];
  
  // Try exact start
  const match = files.find(f => f.toLowerCase().startsWith(slug));
  if (match) return match;

  // Try replacing spaces with hyphens in original name and checking if filename contains parts
  const parts = slug.split('-');
  for (const f of files) {
    if (parts.length > 1 && parts.every(p => p.length > 2 ? f.toLowerCase().includes(p) : true)) {
      return f;
    }
  }

  return null;
}

let updated = 0;
// Parse the JSON array from the file (we can extract the array part, parse it, update it, and stringify it back!)
const arrayStart = content.indexOf('export const DOCTORS_DATA = [') + 'export const DOCTORS_DATA = '.length;
const arrayEnd = content.indexOf('];\n\nexport const') + 1;

let arrayStr = content.substring(arrayStart, arrayEnd);
let doctors;
try {
  doctors = JSON.parse(arrayStr);
} catch (e) {
  // If strict JSON parse fails (e.g. single quotes or missing quotes), we can do string replace
  console.log("JSON parse failed, falling back to regex replace");
}

if (!doctors) {
  const blocks = content.split(/\{\s*\"name\":\s*\"/);
  let newContent = blocks[0];

  for (let i = 1; i < blocks.length; i++) {
    let block = blocks[i];
    const nameMatch = block.match(/^(.*?)\"/);
    if (nameMatch) {
      const docName = nameMatch[1];
      const filename = generateFilename(docName);
      
      if (filename) {
        block = block.replace(/\"image\":\s*\"[^\"]+\"/, `"image": "/images/doctors/${filename}"`);
        updated++;
        console.log(`Matched: ${docName} -> ${filename}`);
      } else {
        // console.log(`No match: ${docName}`);
      }
    }
    newContent += '{\n    "name": "' + block;
  }
  fs.writeFileSync(dataPath, newContent, 'utf8');
} else {
  for (let doc of doctors) {
    if (doc.image && doc.image.includes('unsplash')) {
      const filename = generateFilename(doc.name);
      if (filename) {
        doc.image = `/images/doctors/${filename}`;
        updated++;
        console.log(`Matched: ${doc.name} -> ${filename}`);
      }
    }
  }
  const newArrayStr = JSON.stringify(doctors, null, 2);
  content = content.substring(0, arrayStart) + newArrayStr + content.substring(arrayEnd);
  fs.writeFileSync(dataPath, content, 'utf8');
}

console.log('Updated ' + updated + ' doctor images.');
