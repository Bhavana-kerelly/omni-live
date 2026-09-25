const fs = require('fs');
const path = require('path');

const rawData = `Dr.Ch.Nagaraj	Anaesthesia	Anaesthesiologist	MBBS,M.D.- Anaesthesiology	29
Dr.V.A VANI	Anaesthesia	Anaesthesiologist	MBBS,DA,FCCM-Anaesthesiology	15
Dr.N.Surya	Anaesthesia	Anaesthesiologist	MBBS,MD,Anaesthesiology	18 
Dr.Surya prakash Reddy	General surgery	General Surgeon	MBBS,MS.General Surgery	10+
Dr.Gopireddy Pavan Kumar Reddy	General Medicine	General Physician	MBBS,M.D-General Medicine	20
Dr.Radlam Padma Kumari	Gynaecology	Gynaecologist	MBBS,M.D.Obstetrics and Gynaecology	25
Dr.Kotha Shyam Sunder Reddy	Orthopaedics	Orthopedic Surgeon	MBBS,DNB - Orthopaedic Surgery	20
Dr.Palla Raghu Deep	Pulmonogy	Pulmonologist	MBBS,M.D( Pulmonary Medicine )	11
Dr.Pavan	Radiology	Radiologist	MBBS,DMRD,DNB-Radiology	10+
Dr.Vijay Kumar Kurella	Urology	Urologist	MBBS, M.Ch-Urology	11 `;

const experienceMap = {};
rawData.split('\n').forEach(line => {
  const parts = line.split('\t');
  if (parts.length >= 5) {
    // Some lines have 5 parts: Name, Speciality, Designation, Qual, Exp
    const name = parts[0].trim();
    // Normalizing name to easily match, ignoring spaces after 'Dr.'
    const normalizedName = name.replace(/Dr\.\s*/i, 'Dr. ').trim();
    const exp = parts[4].trim();
    experienceMap[normalizedName.toLowerCase()] = exp;
  }
});

const dataPath = path.join(process.cwd(), 'src/data/doctorsData.js');
let content = fs.readFileSync(dataPath, 'utf8');

const arrayStart = content.indexOf('export const DOCTORS_DATA = [') + 'export const DOCTORS_DATA = '.length;
const arrayEnd = content.indexOf('];\n\nexport const') + 1;

let arrayStr = content.substring(arrayStart, arrayEnd);
let doctors = JSON.parse(arrayStr);

let updatedSet = 0;
let clearedSet = 0;

for (let doc of doctors) {
  if (doc.branch.includes('Kothapet')) {
    const normalizedDocName = doc.name.replace(/Dr\.\s*/i, 'Dr. ').trim().toLowerCase();
    
    // Check if we have an exact or partial match
    let foundExp = experienceMap[normalizedDocName];
    
    // If not found exactly, try partial matching
    if (!foundExp) {
      for (const [key, value] of Object.entries(experienceMap)) {
        if (normalizedDocName.includes(key) || key.includes(normalizedDocName)) {
          foundExp = value;
          break;
        }
      }
    }

    if (foundExp) {
      doc.experience = foundExp.replace('+', ''); // If we need it as a number, but some are "10+"
      // If we want to keep it as "10+" it has to be a string or we can just set it as is.
      // The current schema uses numbers for experience, so I will parse to int.
      doc.experience = parseInt(foundExp, 10);
      updatedSet++;
    } else {
      doc.experience = null; // Set to empty as requested
      clearedSet++;
    }
  }
}

const newArrayStr = JSON.stringify(doctors, null, 2);
content = content.substring(0, arrayStart) + newArrayStr + content.substring(arrayEnd);
fs.writeFileSync(dataPath, content, 'utf8');

console.log('Successfully updated ' + updatedSet + ' doctors.');
console.log('Cleared experience for ' + clearedSet + ' doctors.');
