const fs = require('fs');
const path = require('path');

const rawData = `Dr. Ved Prakash	MBBS, FRCS (Eng) UK	Chairman & Chief of Orthopaedics – Paediatric Orthopaedic Specialist	65
Dr. Raghava Dutt Mulukutla	MBBS, MS (Ortho), FRCS (Edin), MCh (Ortho) Liv. UK	Director & Chief of Spine Surgery Unit	40
Dr. Udai Prakash	MBBS, FRCS (Eng.), FRCS (Edin.), FRCS (Tr & Ortho.) UK, CCST, UK	Director & Chief of Joint Replacement Surgery & Sports Injuries Unit	25
Dr. S. T. Ramanuja Chari	MBBS, MS	Sr. Consultant Orthopaedic Surgeon	44
Dr. Girish Narayan	MD (General Medicine), DM (Nephro), MNAMS (Nephro)	Senior Consultant & Chief Nephrologist	48
Dr. Sudheer Beemarapu	MBBS, MD, DrNB (Neurology)	Consultant Neurologist	4
Dr. Varun Kommalapati	MBBS, MS Orth, MRCS, Fellowship in Foot & Ankle Surgery	Consultant Orthopaedic Foot & Ankle Surgeon	9
Dr. Mohammed Shoeb Ahmed	MBBS, DNB, DM (Cardiology)	Consultant & Intervention Cardiologist	8
Dr. Arvind Umarani	MBBS, MS (Ortho), Fellow in UBE Endoscopic Surgery, Fellow in Advanced Spine Surgery & Navigation	Consultant Spine Surgeon	4
Dr. G. Dattaprasad	MBBS, MD (General Medicine), DNB (General Medicine), DM (Cardiology)	Consultant & Intervention Cardiologist	2
Dr. P. Godha Siri	MBBS, MS Orthopaedics (Osmania)	Consultant Ilizarov, Deformity Correction & Limb Reconstruction Surgeon	12
Dr. Santhi A	MBBS, MD (Obstetrics & Gynaecology)	Consultant Gastroenterologist	18
Dr. Pavan Kumar A	MBBS, D.Ortho	Consultant Orthopaedic Surgeon	28
Dr. Gandhi Govind Jugalkishor	MBBS, DNB Ortho	Consultant Trauma & Joint Replacement Surgeon	8
Dr. Ambadas P. Kathare	D (Ortho), DNB (Ortho), MS (Ortho), MNAMS	Consultant Spine Surgery	18
Dr. P.K. Kartik Yelamarthy	MBBS, MS (Ortho), DNB (Ortho), FNB (Spine Surgery)	Consultant Spine & Orthopedic Surgeon	12
Dr. Vidyasagar Chandankere	MBBS, MS, Fellowship Pediatric Orthopedics	Consultant Pediatric Orthopedic Surgeon	13
Dr. Rajeev Reddy	MBBS, D Ortho, DNB Ortho, FAGE, MNAMS, FOLS, FMO	Consultant Orthopaedic Oncosurgeon	11
Dr. Mirza Shahrukh Baig	DNB (Ortho), FIJR	Consultant Orthopaedic Surgeon	8
Dr. Pradeep Moonot	MBBS (Bom), MS (Ortho)(Bom), DNB (Orth), MRCS (UK), FRCS (Ortho) (UK)	Consultant Foot & Ankle Surgeon	20
Dr. Vimal Rai	MBBS, MD	Sr. Consultant & HOD – Department of Medicine	48
Dr. Srirang Abkari	MBBS, MD (General Medicine)	Consultant General Medicine	19
Dr. Dilip P. Bhanushali	MBBS, MNNS, FCGP, FAIMS, MAIMS	Consultant Family Physician	40
Dr. Md Fawad Ali	MBBS, MD, Dip. Diabetes, John Hopkins, USA	Consultant Physician & Diabetologist	6
Dr. Khaja Abdul Muqeet	MBBS, MS (Gen. Surgery), FAIS	Expert General & Laparoscopic Surgeon	39
Dr. Majid Adil	MBBS, MS (General Surgery), DNB (Urology), MCh (Urology)	Urologist & Andrologist	32
Dr. Malchetty Vikas	MBBS, MD, EDARM (Europe)	Consultant Pulmonologist	6
Dr. L. S. Rajini Kanth	MBBS, DNB (General Medicine), DNB (Neurology)	Consultant Neuro Physician	20
Dr. Muqqurab Ali Khan	MBBS, MS (General Surgery), DNB (Urology)	Urology Specialist Consultant	10
Dr. Chinthamadaka Sai Ram	MBBS, DMRT (MDRT) (KMIO), FIAMS	Consultant Oncologist	30
Dr. Touseef Raza Mohammed	MS (Orthopaedics), FTJR, CRJD, PGCR (Switzerland)	Consultant Rheumatologist & Orthopedic Surgeon	7
Dr. A. Ravi Chander Rao	MBBS, MS (General Surgery), MCh (Plastic Surgery)	Consultant Plastic & Cosmetic Surgeon	22
Dr. Divya Sai Narsingam	MBBS, MS, MCh	Consultant Plastic Surgeon	8
Dr. Avinash Chaitanya S	MBBS, MS, FHNSO	Consultant ENT Surgeon & Head & Neck Oncologist	12
Dr. Rishi Raj Mohammed	MBBS, MD (Psychiatry)	Consultant Psychiatrist	10
Dr. Mohd Hameed Shareef	MBBS, MS (General Surgery), MCh (Neurosurgery)	Consultant Neurosurgeon	7
Dr. B. S. Sheraz	MDS, FICOI, Diplomate ICOI (USA), MFD1 (UK), FIBOI (USA), PhD	Consultant Maxillofacial Surgeon & Implantologist; Associate Professor	16`;

const experienceMap = {};
rawData.split('\n').forEach(line => {
  const parts = line.split('\t');
  if (parts.length >= 4) {
    const name = parts[0].trim();
    const exp = parseInt(parts[3].trim(), 10);
    experienceMap[name] = exp;
  }
});

const dataPath = path.join(process.cwd(), 'src/data/doctorsData.js');
let content = fs.readFileSync(dataPath, 'utf8');

const arrayStart = content.indexOf('export const DOCTORS_DATA = [') + 'export const DOCTORS_DATA = '.length;
const arrayEnd = content.indexOf('];\n\nexport const') + 1;

let arrayStr = content.substring(arrayStart, arrayEnd);
let doctors = JSON.parse(arrayStr);

let updated = 0;
for (let doc of doctors) {
  if (doc.branch.includes('UDAI OMNI')) {
    const docName = doc.name.trim();
    if (experienceMap[docName] !== undefined) {
      doc.experience = experienceMap[docName];
      updated++;
    } else {
      console.log('No matching experience data found for:', docName);
    }
  }
}

const newArrayStr = JSON.stringify(doctors, null, 2);
content = content.substring(0, arrayStart) + newArrayStr + content.substring(arrayEnd);
fs.writeFileSync(dataPath, content, 'utf8');
console.log('Successfully updated ' + updated + ' doctor experience records.');
