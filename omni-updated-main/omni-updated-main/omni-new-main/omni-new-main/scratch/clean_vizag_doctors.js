import fs from 'fs';

const doctorsFilePath = 'c:\\Users\\bhava\\Downloads\\omni-main\\omni-main\\src\\data\\doctorsData.js';
const content = fs.readFileSync(doctorsFilePath, 'utf8');

const match = content.match(/export const DOCTORS_DATA = (\[[\s\S]*?\]);\s*export const SPECIALTY_CATEGORIES/);
if (!match) {
  console.error('Failed to parse DOCTORS_DATA array!');
  process.exit(1);
}

let doctors = JSON.parse(match[1]);

console.log(`Original total doctors count: ${doctors.length}`);

// The names/slugs of the 4 Giggles Vizag doctors:
const targetNames = ['sridevi', 'pavani', 'sandeep anand', 'shekinah'];

// Filter out any doctor entry whose name contains any of targetNames AND whose branch/location is NOT strictly Giggles Vizag!
const cleanedDoctors = doctors.filter(doc => {
  const nameLower = doc.name.toLowerCase();
  const isTargetDoctor = targetNames.some(t => nameLower.includes(t));
  
  if (isTargetDoctor) {
    const locLower = `${doc.branch || ''} ${doc.location || ''}`.toLowerCase();
    // If it's a target doctor but NOT giggles, remove it!
    if (!locLower.includes('giggles')) {
      console.log(`Removing duplicate Vizag doctor: ${doc.name} (ID: ${doc.id}, Branch: ${doc.branch})`);
      return false;
    }
  }
  return true;
});

console.log(`Cleaned total doctors count: ${cleanedDoctors.length}`);

// Double check remaining Giggles Vizag doctors count:
const gigglesDocs = cleanedDoctors.filter(d => `${d.branch} ${d.location}`.toLowerCase().includes('giggles'));
console.log(`Giggles Vizag doctors count: ${gigglesDocs.length}`);
gigglesDocs.forEach(d => console.log(` - ${d.name} (${d.designation})`));

const updatedContent = content.replace(
  /export const DOCTORS_DATA = \[[\s\S]*?\];\s*export const SPECIALTY_CATEGORIES/,
  `export const DOCTORS_DATA = ${JSON.stringify(cleanedDoctors, null, 2)};\n\nexport const SPECIALTY_CATEGORIES`
);

fs.writeFileSync(doctorsFilePath, updatedContent);
console.log('Saved cleaned DOCTORS_DATA successfully!');
