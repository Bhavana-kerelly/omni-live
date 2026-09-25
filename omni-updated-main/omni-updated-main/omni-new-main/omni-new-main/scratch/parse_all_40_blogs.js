import fs from 'fs';

const doc1Path = 'C:\\Users\\bhava\\.gemini\\antigravity-ide\\brain\\7b495624-f449-41d9-88b9-e2c426bc06b3\\.system_generated\\steps\\880\\content.md';
const doc2Path = 'C:\\Users\\bhava\\.gemini\\antigravity-ide\\brain\\7b495624-f449-41d9-88b9-e2c426bc06b3\\.system_generated\\steps\\1072\\content.md';

const doc1Content = fs.readFileSync(doc1Path, 'utf8');
const doc2Content = fs.readFileSync(doc2Path, 'utf8');

// Clean doc 1 (Blogs 1 to 20)
const doc1Only = doc1Content.substring(doc1Content.indexOf('Blog-1'));
const doc1Blocks = doc1Only.split(/Blog-\d+/i).filter(b => b.trim().length > 100);

// Clean doc 2 (Blogs 21 to 40)
const doc2Only = doc2Content.substring(doc2Content.indexOf('Blog-1'));
const doc2Blocks = doc2Only.split(/Blog-\d+/i).filter(b => b.trim().length > 100);

console.log(`Doc 1 parsed: ${doc1Blocks.length} blogs.`);
console.log(`Doc 2 parsed: ${doc2Blocks.length} blogs.`);

const doctorMapDoc1 = {
  11: { name: 'Dr. Ranjith Nellore Mahesh', desig: 'Consultant – Orthopaedic Surgeon', qual: 'MBBS, MS (Ortho), FIPO, FIJR, FIRKR', dept: 'Orthopedics & Robotic Surgery' },
  12: { name: 'Dr. Sandeep Pemira', desig: 'Consultant – Nephrologist', qual: 'MBBS, MD (Internal Medicine), DNB (Nephrology)', dept: 'Nephrology' },
  13: { name: 'Dr. Tagore Mohan Grandhi', desig: 'Consultant – GI, Bariatric & Minimal Access Surgeon', qual: 'MBBS, MS, FRCS (UK), DLS (France)', dept: 'Bariatric & Minimal Access Surgery' },
  14: { name: 'Dr. Padmaja Subrahmanyam', desig: 'Consultant – Gynaecologist & Obstetrician', qual: 'MBBS, DGO (MRCOG)', dept: 'Obstetrics & Gynaecology' },
  15: { name: 'Dr. Abhinandan Badam', desig: 'Consultant – Plastic & Reconstructive Surgeon', qual: 'MBBS, DNB, MCh (Plastic Surgery)', dept: 'Plastic & Reconstructive Surgery' },
  16: { name: 'Dr. Ateeq Ur Rahman', desig: 'Consultant – Interventional Cardiologist', qual: 'MBBS, DNB (Gen Med), DrNB (Cardiology)', dept: 'Cardiology' },
  17: { name: 'Dr. Pranay Kumar Mehta', desig: 'Consultant – Vascular & Endovascular Surgeon', qual: 'MBBS, MS, DrNB (Vascular Surgery)', dept: 'Vascular Surgery' },
  18: { name: 'Dr. M. Rama Krishna Reddy & Dr. G. Uma Sri', desig: 'Consultants – Pulmonology & Sleep Medicine', qual: 'MBBS, DTCD, DNB, FCCP (USA)', dept: 'Pulmonology & Sleep Medicine' },
  19: { name: 'Dr. Rajesh Pathi', desig: 'Senior Consultant – Neuro & Spine Surgeon', qual: 'MBBS, MS, MCh, FIMSS', dept: 'Neuro & Spine Surgery' },
  20: { name: 'Dr. CH. Saidulu', desig: 'Consultant – Medical Gastroenterologist', qual: 'MBBS, DrNB (Medical Gastroenterology)', dept: 'Gastroenterology & Hepatology' }
};

const doctorMapDoc2 = {
  1: { name: 'Dr. P S S Subramanyam', desig: 'Sr. Consultant – Cardiologist', qual: 'MD, DM (Cardiology)', dept: 'Cardiology' },
  2: { name: 'OMNI Visakhapatnam Emergency Board', desig: '24/7 Critical Care & Emergency Panel', qual: 'MD (Emergency Medicine), MEM', dept: 'Emergency & Trauma' },
  3: { name: 'Dr. J Naga Srinivasulu', desig: 'Consultant – Nephrologist', qual: 'MBBS, MD, DM (Nephrology)', dept: 'Nephrology & Kidney Care' },
  4: { name: 'Dr. B Mohan Kalyan Phani Teja', desig: 'Consultant – Orthopedic Surgeon', qual: 'MBBS, MS (Ortho), FIJR', dept: 'Orthopedics & Joint Care' },
  5: { name: 'Dr. Pavani Kolla & Dr. Nellimarla Sridevi', desig: 'Consultants – OBG & IVF Specialists', qual: 'MBBS, DGO, MS (OBG)', dept: 'Mother & Child Care' },
  6: { name: 'Dr. Eda Shekinah Phibe & Dr. Sandeep Anand', desig: 'Consultants – Paediatrics & Neonatology', qual: 'MBBS, MD (Pediatrics), Fellowship Neonatology', dept: 'Pediatrics & Neonatology' },
  7: { name: 'Dr. Lagudu Venkateswara Rao', desig: 'Consultant – General Physician', qual: 'MBBS, MD (General Medicine)', dept: 'General Medicine' },
  8: { name: 'Dr. P S S Subramanyam', desig: 'Sr. Consultant – Cardiologist', qual: 'MD, DM (Cardiology)', dept: 'Cardiology' },
  9: { name: 'Dr. J Naga Srinivasulu', desig: 'Consultant – Nephrologist', qual: 'MBBS, MD, DM (Nephrology)', dept: 'Nephrology & Dialysis' },
  10: { name: 'Dr. B Mohan Kalyan Phani Teja', desig: 'Consultant – Orthopedic Surgeon', qual: 'MBBS, MS (Ortho)', dept: 'Orthopedics & Trauma' },
  11: { name: 'Dr. Nellimarla Sridevi', desig: 'Consultant – IVF Specialist & Gynecologist', qual: 'MBBS, MS (OBG), Fellowship IVF', dept: 'Reproductive Medicine & IVF' },
  12: { name: 'Dr. Sandeep Anand Chintala', desig: 'Consultant – Neonatologist', qual: 'MBBS, MD, Fellowship Neonatology', dept: 'Neonatology & NICU' },
  13: { name: 'Dr. Aditya Govindavarjhulla', desig: 'Consultant – Physician', qual: 'MBBS, MD (General Medicine)', dept: 'General Medicine' },
  14: { name: 'OMNI Surgical Sciences Board', desig: 'Senior Surgical Panel', qual: 'MS (General Surgery), FIAGES', dept: 'General & Minimal Access Surgery' },
  15: { name: 'OMNI Health Checkup Panel', desig: 'Preventive Healthcare Board', qual: 'MBBS, MD Consultants', dept: 'Preventive Health Checkups' },
  16: { name: 'Dr. P S S Subramanyam', desig: 'Sr. Consultant – Cardiologist', qual: 'MD, DM (Cardiology)', dept: 'Cardiology' },
  17: { name: 'Dr. J Naga Srinivasulu', desig: 'Consultant – Nephrologist', qual: 'MBBS, MD, DM (Nephrology)', dept: 'Nephrology' },
  18: { name: 'Dr. B Mohan Kalyan Phani Teja', desig: 'Consultant – Orthopedic Surgeon', qual: 'MBBS, MS (Ortho)', dept: 'Orthopedics' },
  19: { name: 'Dr. Pavani Kolla', desig: 'Jr. Consultant – Obstetrician & Gynaecologist', qual: 'MBBS, MS (OBG)', dept: 'Obstetrics & Gynaecology' },
  20: { name: 'Dr. Eda Shekinah Phibe', desig: 'Consultant – Paediatrician', qual: 'MBBS, MD (Pediatrics)', dept: 'Paediatrics & Child Health' }
};

const categoryMapDoc1 = {
  1: 'Multispecialty Care',
  2: 'Hospital Infrastructure',
  3: 'Patient Care',
  4: 'Emergency & Trauma',
  5: 'Medical Technology',
  6: 'Patient Guide',
  7: 'Specialist Care',
  8: 'Hospital Services',
  9: 'Surgical Care',
  10: 'Family Health',
  11: 'Robotic Surgery & Orthopedics',
  12: 'Nephrology & Kidney Care',
  13: 'Bariatric & Minimal Access Surgery',
  14: 'Obstetrics & Gynaecology',
  15: 'Plastic & Reconstructive Surgery',
  16: 'Cardiology & Heart Care',
  17: 'Vascular Surgery',
  18: 'Pulmonology & Respiratory Care',
  19: 'Neuro & Spine Surgery',
  20: 'Gastroenterology & Hepatology'
};

const categoryMapDoc2 = {
  1: 'Multispecialty Care',
  2: 'Emergency & Trauma',
  3: 'Hospital Services',
  4: 'Orthopedics & Robotic Surgery',
  5: 'Obstetrics & Gynaecology',
  6: 'Pediatrics & Neonatology',
  7: 'General Medicine',
  8: 'Cardiology & Heart Care',
  9: 'Nephrology & Kidney Care',
  10: 'Orthopedics & Joint Care',
  11: 'Obstetrics & Gynaecology',
  12: 'Pediatrics & Neonatology',
  13: 'General Medicine',
  14: 'Surgical Care',
  15: 'Family Health',
  16: 'Cardiology & Heart Care',
  17: 'Nephrology & Kidney Care',
  18: 'Orthopedics & Joint Care',
  19: 'Obstetrics & Gynaecology',
  20: 'Pediatrics & Neonatology'
};

const fallbackImages = [
  '/images/cardiology.jpg',
  '/images/orthopedics.jpg',
  '/images/neurology.jpg',
  '/images/gastroenterology.jpg',
  '/images/pediatrics.jpg',
  '/images/robotic-surgery.jpg',
  '/images/hospitals/kukatpally-card.jpg',
  '/images/hospitals/nampally-card.jpg',
  '/images/hospitals/kothapet-card.jpg',
  '/images/hospitals/vizag-card.jpg'
];

const allBlogs = [];

// Parse Doc 1 (Blogs 1 to 20)
doc1Blocks.forEach((block, index) => {
  const id = index + 1;
  const lines = block.trim().split('\n').map(l => l.trim()).filter(l => l.length > 0);
  const title = lines[0];
  const slug = `blog-${id}-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
  
  let excerpt = lines[1] || '';
  if (excerpt.length < 30 && lines[2]) excerpt = lines[2];
  
  const category = categoryMapDoc1[id] || 'General Healthcare';
  const doctor = doctorMapDoc1[id] || {
    name: 'OMNI Hospitals Medical Board',
    desig: 'Senior Medical Advisory Panel',
    qual: 'MBBS, MD / MS Specialists',
    dept: category
  };

  const readTime = `${Math.max(4, Math.ceil(block.split(/\s+/).length / 200))} min read`;
  const date = new Date(Date.now() - (41 - id) * 86400000 * 2).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const heroImage = `/images/blogs/blog-${id}.jpg`;

  allBlogs.push({
    id,
    slug,
    title,
    excerpt,
    category,
    doctor,
    readTime,
    date,
    heroImage,
    fullText: block.trim()
  });
});

// Parse Doc 2 (Blogs 21 to 40)
doc2Blocks.forEach((block, index) => {
  const id = index + 21;
  const doc2Id = index + 1;
  const lines = block.trim().split('\n').map(l => l.trim()).filter(l => l.length > 0);
  const title = lines[0];
  const slug = `blog-${id}-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
  
  let excerpt = lines[1] || '';
  if (excerpt.length < 30 && lines[2]) excerpt = lines[2];
  
  const category = categoryMapDoc2[doc2Id] || 'General Healthcare';
  const doctor = doctorMapDoc2[doc2Id] || {
    name: 'OMNI Hospitals Medical Board',
    desig: 'Senior Medical Advisory Panel',
    qual: 'MBBS, MD / MS Specialists',
    dept: category
  };

  const readTime = `${Math.max(4, Math.ceil(block.split(/\s+/).length / 200))} min read`;
  const date = new Date(Date.now() - (41 - id) * 86400000 * 2).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const heroImage = `/images/blogs/blog-${id}.jpg`;

  allBlogs.push({
    id,
    slug,
    title,
    excerpt,
    category,
    doctor,
    readTime,
    date,
    heroImage,
    fullText: block.trim()
  });
});

console.log(`Successfully combined ALL ${allBlogs.length} blogs!`);

const categoriesSet = new Set(['All']);
allBlogs.forEach(b => categoriesSet.add(b.category));
const categoriesArray = Array.from(categoriesSet);

const outputJs = `// OMNI HOSPITALS MASTER BLOGS DATASTORE (40 FULL ARTICLES)
export const BLOG_CATEGORIES = ${JSON.stringify(categoriesArray, null, 2)};

export const BLOGS_DATA = ${JSON.stringify(allBlogs, null, 2)};
`;

fs.writeFileSync('c:\\Users\\bhava\\Downloads\\omni-main\\omni-main\\src\\data\\blogsData.js', outputJs);
console.log('Saved ALL 40 blogs to src/data/blogsData.js successfully!');
