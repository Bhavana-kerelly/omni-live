const fs = require('fs');
const path = require('path');

const dataPath = path.join(process.cwd(), 'src/data/doctorsData.js');
let content = fs.readFileSync(dataPath, 'utf8');

const arrayStart = content.indexOf('export const DOCTORS_DATA = [') + 'export const DOCTORS_DATA = '.length;
const arrayEnd = content.indexOf('];\n\nexport const') + 1;

let arrayStr = content.substring(arrayStart, arrayEnd);
let doctors = JSON.parse(arrayStr);
let updated = 0;

for (let doc of doctors) {
  if (doc.branch.includes('UDAI OMNI') && doc.image.includes('unsplash')) {
    // Basic gender detection (very naive, but better than nothing)
    const isFemale = /\b(Uma|Sri|Pavani|Sridevi|Godha|Pravallika|Padmaja|Payal|Radlam|Sahitya|Seetha|Vani|Saritha)\b/i.test(doc.name);
    
    if (isFemale) {
      doc.image = "/images/doctors/doctor-avatar-female.svg";
    } else {
      doc.image = "/images/doctors/doctor-avatar-male.svg";
    }
    updated++;
  }
}

const newArrayStr = JSON.stringify(doctors, null, 2);
content = content.substring(0, arrayStart) + newArrayStr + content.substring(arrayEnd);
fs.writeFileSync(dataPath, content, 'utf8');
console.log('Updated ' + updated + ' UDAI OMNI doctors with default avatars.');
