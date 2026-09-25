import fs from 'fs';

const mdPath = 'C:\\Users\\bhava\\.gemini\\antigravity-ide\\brain\\7b495624-f449-41d9-88b9-e2c426bc06b3\\.system_generated\\steps\\880\\content.md';
const content = fs.readFileSync(mdPath, 'utf8');

// Filter out header lines before Blog-1
const blogsOnlyContent = content.substring(content.indexOf('Blog-1'));
const rawBlocks = blogsOnlyContent.split(/Blog-\d+/i).filter(b => b.trim().length > 100);

const doctorMap = {
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

const categoryMap = {
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

const imageMap = {
  1: '/images/hospitals/kukatpally-card.jpg',
  2: '/images/hospitals/kothapet-card.jpg',
  3: '/images/hospitals/nampally-card.jpg',
  4: '/images/hospitals/vizag-card.jpg',
  5: '/images/robotic-surgery.jpg',
  6: '/images/hospitals/kurnool-card.jpg',
  7: '/images/pediatrics.jpg',
  8: '/images/hospitals/giggles-vizag-card.jpg',
  9: '/images/orthopedics.jpg',
  10: '/images/cardiology.jpg',
  11: '/images/orthopedics.jpg',
  12: '/images/neurology.jpg',
  13: '/images/gastroenterology.jpg',
  14: '/images/pediatrics.jpg',
  15: '/images/robotic-surgery.jpg',
  16: '/images/cardiology.jpg',
  17: '/images/hospitals/vizag-card.jpg',
  18: '/images/neurology.jpg',
  19: '/images/orthopedics.jpg',
  20: '/images/gastroenterology.jpg'
};

const parsedBlogs = rawBlocks.map((block, index) => {
  const id = index + 1;
  const lines = block.trim().split('\n').map(l => l.trim()).filter(l => l.length > 0);
  const title = lines[0];
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
  let excerpt = lines[1] || '';
  if (excerpt.length < 30 && lines[2]) excerpt = lines[2];
  
  const category = categoryMap[id] || 'General Healthcare';
  const doctor = doctorMap[id] || {
    name: 'OMNI Hospitals Medical Board',
    desig: 'Senior Medical Advisory Panel',
    qual: 'MBBS, MD / MS Specialists',
    dept: category
  };

  const readTime = `${Math.max(4, Math.ceil(block.split(/\s+/).length / 200))} min read`;
  const date = new Date(Date.now() - (21 - id) * 86400000 * 2).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const heroImage = imageMap[id] || '/images/cardiology.jpg';

  return {
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
  };
});

console.log(`Parsed ${parsedBlogs.length} clean blogs.`);

const outputJs = `// OMNI HOSPITALS MASTER BLOGS & HEALTH INSIGHTS DATASTORE (20 FULL ARTICLES)
export const BLOG_CATEGORIES = [
  'All',
  'Multispecialty Care',
  'Robotic Surgery & Orthopedics',
  'Cardiology & Heart Care',
  'Neuro & Spine Surgery',
  'Gastroenterology & Hepatology',
  'Nephrology & Kidney Care',
  'Obstetrics & Gynaecology',
  'Bariatric & Minimal Access Surgery',
  'Plastic & Reconstructive Surgery',
  'Vascular Surgery',
  'Pulmonology & Respiratory Care',
  'Emergency & Trauma',
  'Medical Technology',
  'Family Health'
];

export const BLOGS_DATA = ${JSON.stringify(parsedBlogs, null, 2)};
`;

fs.writeFileSync('c:\\Users\\bhava\\Downloads\\omni-main\\omni-main\\src\\data\\blogsData.js', outputJs);
console.log('Saved 20 clean blogs to src/data/blogsData.js successfully!');
