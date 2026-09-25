import fs from 'fs';

const doctorsFilePath = 'c:\\Users\\bhava\\Downloads\\omni-main\\omni-main\\src\\data\\doctorsData.js';
const content = fs.readFileSync(doctorsFilePath, 'utf8');

// Parse DOCTORS_DATA array string
const match = content.match(/export const DOCTORS_DATA = (\[[\s\S]*?\]);\s*export const SPECIALTY_CATEGORIES/);
if (!match) {
  console.error('Failed to parse DOCTORS_DATA array!');
  process.exit(1);
}

let doctors = JSON.parse(match[1]);

console.log(`Initial total doctors count: ${doctors.length}`);

// Remove any existing Giggles / Giggles Vizag doctors
const nonGigglesDoctors = doctors.filter(d => {
  const loc = (d.location || d.branch || '').toLowerCase();
  return !loc.includes('giggles');
});

console.log(`Non-giggles doctors count: ${nonGigglesDoctors.length}`);

// The exact 4 doctors for Giggles Vizag branch:
const gigglesDoctors = [
  {
    id: "doc-giggles-dr-n-sridevi",
    name: "Dr N Sridevi",
    slug: "dr-n-sridevi",
    specialty: "Gynecology & Obstetrics",
    deptTag: "FERTILITY & GYNECOLOGY",
    designation: "Chief Fertility Specialist",
    qualifications: "MBBS, DGO, DNB, DRM",
    experience: "15+ Years",
    branch: "Giggles Vizag",
    location: "Giggles Vizag",
    languages: ["English", "Telugu", "Hindi"],
    availability: "Mon - Sat: 10:00 AM - 05:00 PM",
    featured: true,
    image: "/images/doctors/dr-n-sridevi.jpg",
    bio: "Chief Fertility Specialist at Giggles OMNI Vizag, specializing in advanced IVF, reproductive medicine, and fertility preservation."
  },
  {
    id: "doc-giggles-dr-k-pavani",
    name: "Dr K Pavani",
    slug: "dr-k-pavani",
    specialty: "Gynecology & Obstetrics",
    deptTag: "OBSTETRICS & GYNECOLOGY",
    designation: "Consultant obstetrician & gynecologist",
    qualifications: "MBBS, MS",
    experience: "12+ Years",
    branch: "Giggles Vizag",
    location: "Giggles Vizag",
    languages: ["English", "Telugu", "Hindi"],
    availability: "Mon - Sat: 10:00 AM - 05:00 PM",
    featured: true,
    image: "/images/doctors/dr-k-pavani.jpg",
    bio: "Consultant Obstetrician & Gynecologist at Giggles OMNI Vizag, providing high-risk pregnancy care, painless delivery, and comprehensive women's healthcare."
  },
  {
    id: "doc-giggles-dr-ch-sandeep-anand",
    name: "Dr Ch Sandeep Anand",
    slug: "dr-ch-sandeep-anand",
    specialty: "Pediatrics",
    deptTag: "NEONATOLOGY & PAEDIATRICS",
    designation: "Consultant - Neonatology & Paediatrics",
    qualifications: "MBBS, DCH, Fellowship in Neonatology",
    experience: "10+ Years",
    branch: "Giggles Vizag",
    location: "Giggles Vizag",
    languages: ["English", "Telugu", "Hindi"],
    availability: "Mon - Sat: 09:30 AM - 04:30 PM",
    featured: true,
    image: "/images/doctors/dr-ch-sandeep-anand.jpg",
    bio: "Consultant Neonatologist & Pediatrician at Giggles OMNI Vizag, expert in neonatal intensive care (NICU), preterm baby care, and pediatric medicine."
  },
  {
    id: "doc-giggles-dr-eda-shekinah-phibe",
    name: "Dr Eda Shekinah Phibe",
    slug: "dr-eda-shekinah-phibe",
    specialty: "Pediatrics",
    deptTag: "PAEDIATRICS",
    designation: "Consultant - Paediatrics",
    qualifications: "MBBS, DCH",
    experience: "8+ Years",
    branch: "Giggles Vizag",
    location: "Giggles Vizag",
    languages: ["English", "Telugu", "Hindi"],
    availability: "Mon - Sat: 10:00 AM - 04:00 PM",
    featured: true,
    image: "/images/doctors/dr-eda-shekinah-phibe.jpg",
    bio: "Consultant Pediatrician at Giggles OMNI Vizag, specializing in childhood vaccinations, growth & development monitoring, and pediatric illness management."
  }
];

const updatedDoctors = [...nonGigglesDoctors, ...gigglesDoctors];

const updatedContent = content.replace(
  /export const DOCTORS_DATA = \[[\s\S]*?\];\s*export const SPECIALTY_CATEGORIES/,
  `export const DOCTORS_DATA = ${JSON.stringify(updatedDoctors, null, 2)};\n\nexport const SPECIALTY_CATEGORIES`
);

fs.writeFileSync(doctorsFilePath, updatedContent);
console.log(`Updated DOCTORS_DATA successfully! Total doctors: ${updatedDoctors.length}`);
