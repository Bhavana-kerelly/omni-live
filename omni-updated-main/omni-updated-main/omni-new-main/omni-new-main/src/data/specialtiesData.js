import { SEO_METADATA } from '../utils/seoData.js';

export const SPECIALTIES_DATA = {
  cardiology: {
    id: 'cardiology',
    name: 'Cardiology',
    slug: 'cardiology',
    deptTag: 'CARDIOLOGY',
    heroTagline: 'CENTRE OF EXCELLENCE IN CARDIAC SCIENCES',
    titleLine1: 'Heart Care.',
    titleLine2: 'Without Compromise.',
    heroDescription: 'Advanced cardiac diagnosis, treatment and comprehensive heart care delivered by experienced specialists across the Omni Hospitals network.',
    heroImage: '/images/cardiology.jpg',
    orbitalImage: '/images/cardiology_center.jpg',
    
    aboutTag: 'ABOUT CARDIOLOGY',
    aboutTitle: 'Expert Care for Every Heart',
    aboutDescription: [
      'At OMNI Hospitals, our Department of Cardiac Sciences provides round-the-clock emergency, preventive, diagnostic, interventional, and surgical care for complex cardiovascular conditions.',
      'Equipped with state-of-the-art Flat-Panel Cath Labs, Cardiac Intensive Care Units (CICU), and advanced electrophysiology suites, our senior cardiologists deliver personalized treatments designed for long-term health and wellness.'
    ],
    aboutImage: '/images/cardiology.jpg',

    stats: [
      { label: 'Successful Procedures', value: '25,000+' },
      { label: '24/7 STEMI Cath Lab', value: 'Level 1' },
      { label: 'Door-to-Balloon Time', value: '< 45 Mins' },
      { label: 'Patient Satisfaction', value: '99.4%' }
    ],

    conditions: [
      { name: 'Coronary Artery Disease', desc: 'Plaque buildup inside coronary arteries restricting blood flow to heart muscle.' },
      { name: 'Arrhythmias', desc: 'Irregular heartbeat conditions including Atrial Fibrillation, Tachycardia & Bradycardia.' },
      { name: 'Heart Failure', desc: 'Chronic condition where the heart muscles do not pump blood efficiently.' },
      { name: 'Valve Disorders', desc: 'Stenosis or regurgitation affecting Mitral, Aortic, Tricuspid & Pulmonary valves.' },
      { name: 'Hypertension', desc: 'Severe high blood pressure requiring clinical management and organ protection.' },
      { name: 'Heart Attack (MI)', desc: 'Acute coronary blockage requiring immediate emergency thrombolysis or primary angioplasty.' },
      { name: 'Congenital Heart Conditions', desc: 'Structural heart defects present from birth in pediatric and adult patients.' }
    ],

    services: [
      { title: 'Preventive Cardiology', desc: 'Comprehensive risk assessments, lipid profiling, and lifestyle modification counseling.' },
      { title: 'Diagnostic Cardiology', desc: '3D Echocardiography, Stress TMT, Holter Monitoring & Coronary CT Angiography.' },
      { title: 'Interventional Cardiology', desc: 'Primary Angioplasty, Complex Stenting, Rotablation & FFR Assessment.' },
      { title: 'Electrophysiology (EP)', desc: 'Cardiac Pacemaker implantation, ICDs, CRT-D & Catheter Ablation for arrhythmias.' },
      { title: 'Cardiac Imaging', desc: 'High-definition Cardiac MRI and Multi-slice CT Coronary Scans.' },
      { title: 'Heart Failure Management', desc: 'Specialized clinic for advanced heart failure therapy and cardiac rehab.' },
      { title: 'Cardiac Rehabilitation', desc: 'Structured post-surgical recovery and monitored physical conditioning programs.' },
      { title: 'Pediatric Cardiology', desc: 'Diagnostic and non-surgical interventions for infants and children with heart conditions.' },
      { title: 'Cardiac Surgery Support', desc: 'Pre-operative evaluation and post-CABG critical care monitoring.' },
      { title: 'Emergency Cardiac Care', desc: '24/7 dedicated STEMI response team and fully equipped Cardiac ICUs.' }
    ],

    whyOmni: [
      { title: 'Expert Specialists', desc: 'Senior cardiologists with 20+ years of clinical mastery.' },
      { title: 'Advanced Technology', desc: 'Ultra-modern Cath Labs & 3D Echocardiography systems.' },
      { title: 'Comprehensive Care', desc: 'From preventive screenings to complex emergency angioplasty.' },
      { title: 'Patient-First Approach', desc: 'Empathetic post-care monitoring and dedicated cardiac rehabilitation.' },
      { title: '24/7 Emergency Care', desc: 'Instant STEMI protocols and door-to-balloon time under 45 minutes.' }
    ],

    faqs: [
      {
        question: 'When should I consult a cardiologist?',
        answer: 'You should consult a cardiologist if you experience symptoms like chest pain, shortness of breath, sudden dizziness, irregular heartbeat, unexplained fatigue, or if you have risk factors such as high blood pressure, diabetes, high cholesterol, or a family history of heart disease.'
      },
      {
        question: 'What symptoms require immediate emergency cardiac attention?',
        answer: 'Immediate emergency medical care is required if you feel severe chest pressure or squeezing pain radiating to your left arm, shoulder, jaw, or back, accompanied by cold sweats, shortness of breath, or nausea.'
      },
      {
        question: 'What tests may be required during my first cardiology visit?',
        answer: 'Depending on your symptoms, your cardiologist may recommend an Electrocardiogram (ECG), Echocardiogram (Echo), Treadmill Stress Test (TMT), Blood Biomarker Panel, or a Holter Monitor.'
      },
      {
        question: 'Do I need a doctor referral to see an OMNI cardiologist?',
        answer: 'No referral is required. You can directly book an appointment with any cardiologist across our OMNI Hospitals network.'
      },
      {
        question: 'How can I book an appointment with an OMNI cardiologist?',
        answer: 'You can book an appointment online through our website button above, or call our direct helpline at 1800 123 4567 for immediate assistance.'
      }
    ],

    ctaTitleLine1: 'Your Heart.',
    ctaTitleLine2: 'Our Priority.',
    ctaDescription: 'Take the next step toward better heart health with Omni\'s experienced cardiac specialists across our hospital network.'
  },

  orthopedics: {
    id: 'orthopedics',
    name: 'Orthopedics',
    slug: 'orthopedics',
    deptTag: 'ORTHOPAEDICS',
    heroTagline: 'ROBOTIC JOINT REPLACEMENT & SPINE CARE',
    titleLine1: 'Movement Restored.',
    titleLine2: 'Life Renewed.',
    heroDescription: 'State-of-the-art orthopedic surgery, robotic joint replacements, complex spine interventions, and sports medicine across Omni Hospitals.',
    heroImage: '/images/orthopedics.jpg',

    aboutTag: 'ABOUT ORTHOPEDICS',
    aboutTitle: 'Pioneering Bone & Joint Care',
    aboutDescription: [
      'The Department of Orthopedics at OMNI Hospitals is renowned for pioneering robotic joint replacements, complex fracture management, and keyhole arthroscopic surgeries.',
      'Our team of UK and US-trained orthopedic surgeons works closely with dedicated physiotherapists to ensure rapid post-operative recovery and pain-free mobility.'
    ],
    aboutImage: '/images/orthopedics.jpg',

    stats: [
      { label: 'Joint Replacements', value: '30,000+' },
      { label: 'Robotic Precision', value: 'Sub-Millimeter' },
      { label: 'Physiotherapy Suite', value: 'Advanced' },
      { label: 'Surgical Success', value: '99.6%' }
    ],

    conditions: [
      { name: 'Osteoarthritis', desc: 'Progressive joint cartilage wear causing knee, hip, and shoulder joint pain.' },
      { name: 'Spine Deformities & Disc Prolapse', desc: 'Herniated discs, sciatica, scoliosis, and degenerative spinal conditions.' },
      { name: 'Ligament & ACL Injuries', desc: 'Sports injuries including ACL, PCL, and Meniscus tears.' },
      { name: 'Complex Fractures & Trauma', desc: 'High-energy trauma and multi-fragment bone fractures.' },
      { name: 'Rheumatoid Arthritis', desc: 'Autoimmune joint inflammation affecting multiple joints.' },
      { name: 'Shoulder & Rotator Cuff Tears', desc: 'Chronic shoulder impingement and tendon tears.' }
    ],

    services: [
      { title: 'Robotic Knee Replacement', desc: 'Computer-navigated minimally invasive total and partial knee replacement.' },
      { title: 'Total Hip Replacement', desc: 'Durable ceramic-on-polyethylene ceramic hip implants for pain-free mobility.' },
      { title: 'Spine Surgery', desc: 'Minimally invasive microdiscectomy, spinal fusion, and scoliosis correction.' },
      { title: 'Arthroscopy & Sports Medicine', desc: 'Keyhole knee and shoulder ligament reconstructions.' },
      { title: 'Pediatric Orthopedics', desc: 'Deformity correction, clubfoot treatment, and growth plate injuries.' },
      { title: 'Trauma & Fracture Care', desc: '24/7 surgical stabilization of complex polytrauma fractures.' }
    ],

    whyOmni: [
      { title: 'Robotic Precision', desc: 'Advanced robotic systems for sub-millimeter surgical accuracy.' },
      { title: 'Senior Surgeons', desc: 'Interationally certified orthopedic specialists with 25+ years experience.' },
      { title: 'Comprehensive Rehab', desc: 'In-house physical rehabilitation center for rapid recovery.' },
      { title: 'Patient Safety', desc: 'Zero-infection ultra-clean laminar flow operation theaters.' },
      { title: '24/7 Trauma Suite', desc: 'Round-the-clock orthopedic emergency response team.' }
    ],

    faqs: [
      {
        question: 'When should I consider total knee replacement surgery?',
        answer: 'You should consider knee replacement if severe joint pain restricts daily activities like walking or climbing stairs, and conservative treatments like medication and physical therapy no longer provide relief.'
      },
      {
        question: 'What is the recovery time after robotic joint replacement?',
        answer: 'Most patients begin walking with support within 24 hours of robotic joint surgery and return to routine light activities within 2 to 3 weeks.'
      }
    ],

    ctaTitleLine1: 'Pain-Free Mobility.',
    ctaTitleLine2: 'Starts Here.',
    ctaDescription: 'Consult our renowned orthopedic specialists for robotic joint replacement and advanced spine care.'
  },

  neurology: {
    id: 'neurology',
    name: 'Neurology & Neurosurgery',
    slug: 'neurology',
    deptTag: 'NEUROLOGY',
    heroTagline: 'ADVANCED BRAIN, SPINE & STROKE CARE',
    titleLine1: 'Precision Neuro Care.',
    titleLine2: 'Every Second Counts.',
    heroDescription: '24/7 acute stroke interventions, brain tumor surgeries, epilepsy management, and comprehensive spine care at Omni Hospitals.',
    heroImage: '/images/neurology.jpg',

    aboutTag: 'ABOUT NEUROLOGY',
    aboutTitle: 'Excellence in Neuro Sciences',
    aboutDescription: [
      'The Department of Neuro Sciences integrates expert Neurologists and Neurosurgeons to treat critical brain, spinal cord, and peripheral nerve disorders.',
      'Equipped with 3T MRI, 128-slice CT, and dedicated Neuro ICUs, our emergency stroke team operates with rapid thrombolysis and endovascular thrombectomy protocols.'
    ],
    aboutImage: '/images/neurology.jpg',

    stats: [
      { label: 'Stroke Interventions', value: '5,000+' },
      { label: 'Neuro ICU Beds', value: 'Dedicated 24/7' },
      { label: '3T MRI Precision', value: 'Ultra-High' },
      { label: 'Clinical Mastery', value: '25+ Years' }
    ],

    conditions: [
      { name: 'Acute Ischemic Stroke', desc: 'Sudden brain blood vessel blockage requiring emergency thrombolysis.' },
      { name: 'Brain & Spinal Tumors', desc: 'Benign and malignant lesions requiring precision neurosurgery.' },
      { name: 'Epilepsy & Seizures', desc: 'Neurological electrical disturbances managed by advanced medication or surgery.' },
      { name: 'Parkinson\'s & Movement Disorders', desc: 'Progressive motor system disorders affecting movement and balance.' },
      { name: 'Migraine & Chronic Headaches', desc: 'Severe recurring headaches requiring specialized neurological management.' },
      { name: 'Neuropathy & Nerve Pain', desc: 'Peripheral nerve weakness, numbness, and tingling disorders.' }
    ],

    services: [
      { title: 'Emergency Stroke Unit', desc: '24/7 rapid IV thrombolysis and Mechanical Thrombectomy.' },
      { title: 'Microsurgical Neurosurgery', desc: 'Image-guided brain tumor excision and aneurysm clipping.' },
      { title: 'Epilepsy Care Center', desc: 'Video EEG monitoring and comprehensive anti-epileptic therapy.' },
      { title: 'Spine & Nerve Surgery', desc: 'Minimally invasive spinal decompression and nerve repair.' }
    ],

    whyOmni: [
      { title: '24/7 Stroke Protocol', desc: 'Immediate brain imaging and emergency clot removal.' },
      { title: 'Neuro Intensive Care', desc: 'Specialized Neuro-ICUs monitored by neuro-critical care specialists.' },
      { title: 'Advanced Diagnostics', desc: '3T MRI, 128-Slice CT, Digital EEG, and Electromyography (EMG).' }
    ],

    faqs: [
      {
        question: 'What are the warning signs of a stroke (FAST)?',
        answer: 'F - Face drooping, A - Arm weakness, S - Speech difficulty, T - Time to call emergency. If you notice any of these signs, reach OMNI emergency immediately.'
      }
    ],

    ctaTitleLine1: 'Rapid Neuro Response.',
    ctaTitleLine2: 'Trusted Expertise.',
    ctaDescription: 'Connect with senior neurologists and neurosurgeons for brain, spine, and stroke care.'
  },

  urology: {
    id: 'urology',
    name: 'Urology & Andrology',
    slug: 'urology',
    deptTag: 'UROLOGY',
    heroTagline: 'CENTRE OF EXCELLENCE IN ADVANCED UROLOGY & ANDROLOGY',
    titleLine1: 'Advanced Urology.',
    titleLine2: 'Precision Laser Care.',
    heroDescription: 'State-of-the-art laser kidney stone treatments, minimally invasive prostate care, endourology, and reconstructive urological surgery at Omni Hospitals.',
    heroImage: '/images/urology.jpg',
    orbitalImage: '/images/urology_center.jpg',

    aboutTag: 'ABOUT UROLOGY',
    aboutTitle: 'Advanced Urological & Andrological Care',
    aboutDescription: [
      'The Department of Urology & Andrology at OMNI Hospitals offers comprehensive clinical and surgical management for disorders of the urinary tract, kidneys, bladder, and male reproductive health.',
      'Equipped with advanced Holmium Laser systems, digital flexible ureterorenoscopy (RIRS), and cutting-edge laparoscopic suites, our senior urologists provide minimally invasive procedures ensuring quick recovery and minimal discomfort.'
    ],
    aboutImage: '/images/urology.jpg',

    stats: [
      { label: 'Successful Procedures', value: '15,000+' },
      { label: 'Laser Stone Removal', value: '100% Day Care' },
      { label: 'Urological Suites', value: 'Ultra-Modern' },
      { label: 'Patient Recovery', value: 'Rapid / 24h' }
    ],

    conditions: [
      { name: 'Kidney & Ureteral Stones', desc: 'Calcified mineral deposits causing severe flank pain, hematuria, and urinary obstruction.' },
      { name: 'Benign Prostatic Hyperplasia (BPH)', desc: 'Enlarged prostate leading to frequent urination, weak stream, and urinary retention.' },
      { name: 'Urinary Tract Infections (UTI)', desc: 'Acute and recurrent bacterial infections affecting the bladder, urethra, or kidneys.' },
      { name: 'Urological Cancers', desc: 'Malignancies of the kidney, bladder, prostate, and testes diagnosed and treated with precision.' },
      { name: 'Male Infertility & Andrology', desc: 'Varicocele, erectile dysfunction, and male reproductive disorders treated with modern micro-surgery.' },
      { name: 'Stricture Urethra & Reconstructive Needs', desc: 'Narrowing of the urethra requiring laser or buccal mucosal graft urethroplasty.' }
    ],

    services: [
      { title: 'Laser Kidney Stone Surgery (RIRS / PCNL)', desc: 'Minimally invasive keyhole and retrograde intrarenal surgery using advanced Holmium laser.' },
      { title: 'Prostate Laser Surgery (TURP / HoLEP)', desc: 'Advanced endoscopic prostate resection and laser enucleation for enlarged prostate.' },
      { title: 'Laparoscopic & Robotic Uro-Surgery', desc: 'Keyhole surgical removal of kidney tumors, pyeloplasty, and reconstructive procedures.' },
      { title: 'Uro-Oncology Care', desc: 'Comprehensive surgical and multi-disciplinary care for bladder, kidney, and prostate cancers.' },
      { title: 'Andrology & Men\'s Health Clinic', desc: 'Specialized clinic for erectile dysfunction, varicocelectomy, and male fertility care.' },
      { title: '24/7 Renal Colic Emergency Care', desc: 'Instant pain relief and emergency stenting for acute urinary stone blockages.' }
    ],

    whyOmni: [
      { title: 'Advanced Laser Technology', desc: 'High-power Holmium laser for painless and scarless stone dusting.' },
      { title: 'Senior Urologists', desc: 'Renowned surgeons with over 20+ years of endourology experience.' },
      { title: 'Day-Care Interventions', desc: 'Same-day or 24-hour discharge for most laser urology procedures.' },
      { title: 'Infection-Free Suites', desc: 'State-of-the-art modular theaters adhering to strict sterilization protocols.' },
      { title: '24/7 Emergency Relief', desc: 'Round-the-clock emergency management for acute stone pain and retention.' }
    ],

    faqs: [
      {
        question: 'When should I consult a urologist?',
        answer: 'You should consult a urologist if you experience burning during urination, blood in your urine (hematuria), severe lower back or flank pain, frequent night urination, weak urine flow, or difficulty passing urine.'
      },
      {
        question: 'How are kidney stones treated at OMNI Hospitals?',
        answer: 'Depending on the stone size and location, we utilize painless laser techniques such as RIRS (Retrograde Intrarenal Surgery), PCNL (Percutaneous Nephrolithotomy), or URSL, which require no large incisions and allow rapid recovery.'
      },
      {
        question: 'Is surgery always required for an enlarged prostate (BPH)?',
        answer: 'Not always. Mild to moderate BPH is often managed effectively with medications. For significant obstruction, advanced laser or endoscopic procedures like TURP offer fast and long-lasting relief.'
      },
      {
        question: 'How do I book an appointment with an OMNI Urologist?',
        answer: 'You can book an appointment online via our website or call our 24/7 helpline at 1800 123 4567.'
      }
    ],

    ctaTitleLine1: 'Advanced Urological Care.',
    ctaTitleLine2: 'Fast Relief & Recovery.',
    ctaDescription: 'Consult our leading urologists for advanced laser stone treatments, prostate care, and men\'s health.'
  },

  'emergency-medicine': {
    id: 'emergency-medicine',
    name: 'Emergency Medicine',
    slug: 'emergency-medicine',
    deptTag: 'EMERGENCY',
    heroTagline: '24/7 LEVEL-1 TRAUMA & EMERGENCY CARE',
    titleLine1: 'Immediate Action.',
    titleLine2: 'Lifesaving Care.',
    heroDescription: 'Round-the-clock emergency medical response, Level-1 trauma care, cardiac emergency resuscitation, and advanced ICUs.',
    heroImage: '/images/emergency.jpg',

    aboutTag: 'ABOUT EMERGENCY MEDICINE',
    aboutTitle: '24/7 Lifesaving Emergency Network',
    aboutDescription: [
      'OMNI Emergency Services are structured to deliver instantaneous triage, advanced life support, and rapid critical care for trauma, heart attacks, and stroke.'
    ],
    aboutImage: '/images/emergency.jpg',
    stats: [
      { label: 'Emergency Response', value: '24 / 7 / 365' },
      { label: 'Triage Response Time', value: '< 2 Mins' }
    ],
    conditions: [
      { name: 'Acute Cardiac Emergencies', desc: 'Heart attack, acute arrhythmia, and sudden cardiac arrest.' },
      { name: 'Trauma & Accident Injuries', desc: 'High-speed road traffic injuries, fractures, and severe blood loss.' },
      { name: 'Acute Respiratory Failure', desc: 'Severe asthma attacks, acute pulmonary edema, and choking.' }
    ],
    services: [
      { title: '24/7 Advanced Life Support Ambulance', desc: 'ICU-on-wheels equipped with ventilators and defibrillators.' },
      { title: 'Level-1 Trauma Bay', desc: 'Dedicated trauma bay with immediate surgical theater connectivity.' }
    ],
    whyOmni: [
      { title: 'Zero Delay Triage', desc: 'Immediate doctor evaluation upon arrival.' }
    ],
    faqs: [
      { question: 'Is OMNI Emergency open 24/7?', answer: 'Yes, our Emergency Department operates 24/7 365 days a year across all branches.' }
    ],
    ctaTitleLine1: 'Emergency Helpline.',
    ctaTitleLine2: 'Call 1800 123 4567.',
    ctaDescription: 'Instant emergency ambulance dispatch and Level-1 trauma response.'
  },

  gastroenterology: {
    id: 'gastroenterology',
    name: 'Gastroenterology',
    slug: 'gastroenterology',
    deptTag: 'GASTROENTEROLOGY',
    heroTagline: 'DIGESTIVE HEALTH & ADVANCED ENDOSCOPY',
    titleLine1: 'Complete Digestive Care.',
    titleLine2: 'Advanced Endoscopy.',
    heroDescription: 'Comprehensive medical and surgical gastroenterology, liver care, ERCP, and minimally invasive digestive interventions.',
    heroImage: '/images/gastroenterology.jpg',
    aboutTag: 'ABOUT GASTROENTEROLOGY',
    aboutTitle: 'Expert Liver & Digestive Health',
    aboutDescription: [
      'Our Department of Gastroenterology provides expert diagnosis and treatment for diseases of the esophagus, stomach, intestine, liver, pancreas, and gallbladder.'
    ],
    aboutImage: '/images/gastroenterology.jpg',
    stats: [
      { label: 'Endoscopies Performed', value: '15,000+' },
      { label: 'Liver Care Clinic', value: 'Specialized' }
    ],
    conditions: [
      { name: 'GERD & Severe Acidity', desc: 'Gastroesophageal reflux disease and esophageal ulcers.' },
      { name: 'Liver Cirrhosis & Hepatitis', desc: 'Chronic liver disease management and viral hepatitis therapy.' },
      { name: 'Gallstones & Pancreatitis', desc: 'Biliary duct stones and acute or chronic pancreatic inflammation.' }
    ],
    services: [
      { title: 'Diagnostic & Therapeutic Endoscopy', desc: 'Upper GI endoscopy and colonoscopy for early polyp detection.' },
      { title: 'Advanced ERCP & EUS', desc: 'Endoscopic Retrograde Cholangiopancreatography for bile duct clearance.' }
    ],
    whyOmni: [
      { title: 'Advanced Endoscopy Suite', desc: 'High-definition Olympus endoscopy and colonoscopy equipment.' }
    ],
    faqs: [
      { question: 'When is an upper GI endoscopy required?', answer: 'An endoscopy is recommended for persistent acidity, difficulty swallowing, unexplained abdominal pain, or GI bleeding.' }
    ],
    ctaTitleLine1: 'Digestive Comfort.',
    ctaTitleLine2: 'Expert Gastroenterologists.',
    ctaDescription: 'Book your consultation for digestive and liver health management.'
  },

  'obstetrics-gynaecology': {
    id: 'obstetrics-gynaecology',
    name: 'Obstetrics & Gynaecology',
    slug: 'obstetrics-gynaecology',
    deptTag: 'GYNAECOLOGY',
    heroTagline: 'COMPREHENSIVE WOMEN\'S HEALTH & MATERNITY',
    titleLine1: 'Nurturing Mothers.',
    titleLine2: 'Empowering Women.',
    heroDescription: 'High-risk pregnancy management, fetal medicine, laparoscopic gynaecological surgery, and holistic women\'s wellness.',
    heroImage: '/images/gynaecology.jpg',
    orbitalImage: '/images/gynaecology_center.jpg',
    aboutTag: 'ABOUT OBSTETRICS & GYNAECOLOGY',
    aboutTitle: 'Care Through Every Stage of Life',
    aboutDescription: [
      'Our Department of Women\'s Health delivers compassionate maternity care, painless labor facilities, high-risk pregnancy ICUs, and advanced laparoscopic gynaecologic surgeries.'
    ],
    aboutImage: '/images/gynaecology.jpg',
    stats: [
      { label: 'Safe Deliveries', value: '18,000+' },
      { label: 'Level 3 NICU', value: 'In-House' }
    ],
    conditions: [
      { name: 'High-Risk Pregnancy', desc: 'Pregnancies complicated by hypertension, gestational diabetes, or multiple gestations.' },
      { name: 'PCOS & Hormonal Imbalance', desc: 'Polycystic Ovarian Syndrome, menstrual irregularities, and metabolic care.' },
      { name: 'Uterine Fibroids & Endometriosis', desc: 'Benign pelvic tumors and endometrial pain disorders.' }
    ],
    services: [
      { title: 'Comprehensive Birthing Suites', desc: 'Painless labor epidurals and luxurious birthing rooms.' },
      { title: 'Laparoscopic Gynaec Surgery', desc: 'Keyhole hysterectomy, fibroid removal, and ovarian cystectomy.' }
    ],
    whyOmni: [
      { title: '24/7 Female Gynecologists', desc: 'Round-the-clock senior obstetricians available.' }
    ],
    faqs: [
      { question: 'What facilities are available for high-risk pregnancies?', answer: 'We offer specialized high-risk pregnancy clinics, fetal monitoring, and level-3 Neonatal Intensive Care (NICU).' }
    ],
    ctaTitleLine1: 'Your Maternity Journey.',
    ctaTitleLine2: 'Safe & Cherished.',
    ctaDescription: 'Schedule a consultation with our experienced obstetricians and gynaecologists.'
  },

  gynaecology: {
    id: 'gynaecology',
    name: 'Obstetrics & Gynaecology',
    slug: 'gynaecology',
    deptTag: 'GYNAECOLOGY',
    heroTagline: 'COMPREHENSIVE WOMEN\'S HEALTH & MATERNITY',
    titleLine1: 'Nurturing Mothers.',
    titleLine2: 'Empowering Women.',
    heroDescription: 'High-risk pregnancy management, fetal medicine, laparoscopic gynaecological surgery, and holistic women\'s wellness.',
    heroImage: '/images/gynaecology.jpg',
    orbitalImage: '/images/gynaecology_center.jpg',
    aboutTag: 'ABOUT OBSTETRICS & GYNAECOLOGY',
    aboutTitle: 'Care Through Every Stage of Life',
    aboutDescription: [
      'Our Department of Women\'s Health delivers compassionate maternity care, painless labor facilities, high-risk pregnancy ICUs, and advanced laparoscopic gynaecologic surgeries.'
    ],
    aboutImage: '/images/gynaecology.jpg',
    stats: [
      { label: 'Safe Deliveries', value: '18,000+' },
      { label: 'Level 3 NICU', value: 'In-House' }
    ],
    conditions: [
      { name: 'High-Risk Pregnancy', desc: 'Pregnancies complicated by hypertension, gestational diabetes, or multiple gestations.' },
      { name: 'PCOS & Hormonal Imbalance', desc: 'Polycystic Ovarian Syndrome, menstrual irregularities, and metabolic care.' },
      { name: 'Uterine Fibroids & Endometriosis', desc: 'Benign pelvic tumors and endometrial pain disorders.' }
    ],
    services: [
      { title: 'Comprehensive Birthing Suites', desc: 'Painless labor epidurals and luxurious birthing rooms.' },
      { title: 'Laparoscopic Gynaec Surgery', desc: 'Keyhole hysterectomy, fibroid removal, and ovarian cystectomy.' }
    ],
    whyOmni: [
      { title: '24/7 Female Gynecologists', desc: 'Round-the-clock senior obstetricians available.' }
    ],
    faqs: [
      { question: 'What facilities are available for high-risk pregnancies?', answer: 'We offer specialized high-risk pregnancy clinics, fetal monitoring, and level-3 Neonatal Intensive Care (NICU).' }
    ],
    ctaTitleLine1: 'Your Maternity Journey.',
    ctaTitleLine2: 'Safe & Cherished.',
    ctaDescription: 'Schedule a consultation with our experienced obstetricians and gynaecologists.'
  },

  ent: {
    id: 'ent',
    name: 'ENT (Ear, Nose & Throat)',
    slug: 'ent',
    deptTag: 'ENT',
    heroTagline: 'MICRO-ENDOSCOPIC HEAD & NECK CARE',
    titleLine1: 'Clear Hearing.',
    titleLine2: 'Breathe Easy.',
    heroDescription: 'Microscopic ear surgery, endoscopic sinus procedures, voice disorders therapy, and pediatric ENT care at Omni Hospitals.',
    heroImage: '/images/ent.jpg',
    aboutTag: 'ABOUT ENT',
    aboutTitle: 'Advanced Ear, Nose & Throat Care',
    aboutDescription: [
      'The Department of ENT provides comprehensive diagnostic audiometry, sinus endoscopy, coblation adenoidectomy, and micro-laryngeal surgery.'
    ],
    aboutImage: '/images/ent.jpg',
    stats: [
      { label: 'ENT Surgeries', value: '12,000+' },
      { label: 'Audiometry Suite', value: 'Digital' }
    ],
    conditions: [
      { name: 'Chronic Sinusitis & Nasal Polyps', desc: 'Blocked sinuses, nasal congestion, and facial pressure.' },
      { name: 'Hearing Loss & Tinnitus', desc: 'Conductive and sensorineural hearing impairment or ringing in ears.' },
      { name: 'Tonsillitis & Adenoid Enlargement', desc: 'Recurrent throat infections, snoring, and pediatric airway obstruction.' }
    ],
    services: [
      { title: 'Functional Endoscopic Sinus Surgery (FESS)', desc: 'Minimally invasive clear sinus drainage surgery.' },
      { title: 'Microscopic Tympanoplasty', desc: 'Ear drum repair and hearing restoration surgery.' }
    ],
    whyOmni: [
      { title: 'Coblation Technology', desc: 'Bloodless, painless coblation technique for tonsil and adenoid removal.' }
    ],
    faqs: [
      { question: 'When is sinus surgery recommended?', answer: 'Sinus surgery (FESS) is advised when chronic sinusitis does not respond to nasal sprays and antibiotics.' }
    ],
    ctaTitleLine1: 'Better Hearing & Breathing.',
    ctaTitleLine2: 'Consult ENT Specialists.',
    ctaDescription: 'Book an appointment with senior ENT surgeons at Omni Hospitals.'
  },

  nephrology: {
    id: 'nephrology',
    name: 'Nephrology & Kidney Care',
    slug: 'nephrology',
    deptTag: 'NEPHROLOGY',
    heroTagline: 'ADVANCED KIDNEY DISEASE & DIALYSIS CENTER',
    titleLine1: 'Protecting Kidney Health.',
    titleLine2: '24/7 Dialysis Excellence.',
    heroDescription: 'Comprehensive renal disease management, acute kidney injury therapy, hypertensive kidney care, and 24/7 hemodialysis.',
    heroImage: '/images/nephrology.jpg',
    aboutTag: 'ABOUT NEPHROLOGY',
    aboutTitle: 'Dedicated Renal Sciences Center',
    aboutDescription: [
      'Our Department of Nephrology specializes in preventing, diagnosing, and treating acute and chronic kidney failure, electrolyte imbalances, and diabetic nephropathy.'
    ],
    aboutImage: '/images/nephrology.jpg',
    stats: [
      { label: 'Dialysis Sessions', value: '50,000+' },
      { label: 'Dialysis Units', value: '24/7 Active' }
    ],
    conditions: [
      { name: 'Chronic Kidney Disease (CKD)', desc: 'Progressive loss of kidney function managed with medical therapy and dialysis.' },
      { name: 'Diabetic Nephropathy', desc: 'Kidney damage caused by chronic high blood sugar levels.' },
      { name: 'Kidney Stones & Proteinuria', desc: 'Renal calculus disease and abnormal protein leakage in urine.' }
    ],
    services: [
      { title: '24/7 Hemodialysis Unit', desc: 'Ultra-pure water treatment plant with automated dialysis machines.' },
      { title: 'Sustained Low-Efficiency Dialysis (SLED)', desc: 'Specialized slow dialysis for hemodynamically unstable ICU patients.' }
    ],
    whyOmni: [
      { title: 'Strict Infection Control', desc: 'Dedicated dialysis machines for seropositive and general patients.' }
    ],
    faqs: [
      { question: 'What are the early signs of kidney disease?', answer: 'Early signs include swelling in feet/ankles, puffiness around eyes, changes in urination frequency, fatigue, and foamy urine.' }
    ],
    ctaTitleLine1: 'Comprehensive Renal Care.',
    ctaTitleLine2: 'Expert Nephrologists.',
    ctaDescription: 'Schedule a consultation with our senior kidney specialists.'
  },

  'emergency-medicine': {
    id: 'emergency-medicine',
    name: 'Emergency & Critical Care',
    slug: 'emergency-medicine',
    deptTag: 'EMERGENCY MEDICINE',
    heroTagline: '24/7 LEVEL-1 TRAUMA & CRITICAL CARE CENTER',
    titleLine1: '24/7 Emergency Care.',
    titleLine2: 'Rapid Lifesaving Response.',
    heroDescription: 'Round-the-clock emergency care, Level-1 trauma response, STEMI cardiac protocols, and advanced critical care ICUs.',
    heroImage: '/images/emergency.jpg',
    orbitalImage: '/images/emergency_center.jpg',
    aboutTag: 'ABOUT EMERGENCY MEDICINE',
    aboutTitle: 'Level-1 Emergency & Trauma Care',
    aboutDescription: [
      'OMNI Hospitals provides round-the-clock emergency medical response led by experienced emergency physicians, trauma surgeons, and critical care specialists.',
      'Our emergency rooms are equipped with advanced life support systems, instant triage response, and dedicated cardiac and neuro resuscitation bays.'
    ],
    aboutImage: '/images/emergency.jpg',
    stats: [
      { label: 'Emergency Response', value: '24/7 Active' },
      { label: 'Level-1 Trauma Center', value: 'Dedicated' },
      { label: 'Door-to-Triage Time', value: '< 5 Mins' }
    ],
    conditions: [
      { name: 'Acute Cardiac Emergency (STEMI)', desc: 'Immediate emergency thrombolysis and primary PCI protocol.' },
      { name: 'Polytrauma & Head Injury', desc: 'Comprehensive multi-disciplinary trauma surgical stabilization.' },
      { name: 'Acute Stroke Response', desc: 'Rapid neuro-imaging and thrombolytic therapy within golden hour.' }
    ],
    services: [
      { title: '24/7 Advanced Life Support Ambulance', desc: 'Fully equipped mobile ICUs with ventilator support.' },
      { title: 'Level-1 Trauma Bay', desc: 'Immediate surgical and critical care resuscitation suites.' }
    ],
    whyOmni: [
      { title: 'Zero-Wait Triage', desc: 'Instant clinical prioritization for critical emergency cases.' }
    ],
    faqs: [
      { question: 'What emergency services are available 24/7?', answer: 'Our 24/7 emergency department handles trauma, heart attacks, stroke, acute respiratory distress, severe burns, and pediatric emergencies.' }
    ],
    ctaTitleLine1: '24/7 Emergency Response.',
    ctaTitleLine2: 'Call Our Helpline Now.',
    ctaDescription: 'Reach our 24/7 emergency response team immediately.'
  },

  'general-medicine': {
    id: 'general-medicine',
    name: 'General Medicine',
    slug: 'general-medicine',
    deptTag: 'GENERAL MEDICINE',
    heroTagline: 'COMPREHENSIVE INTERNAL MEDICINE & WELLNESS',
    titleLine1: 'Holistic Health Care.',
    titleLine2: 'Expert General Physicians.',
    heroDescription: 'Comprehensive diagnosis, lifestyle disease management, acute fever therapy, and preventive health screenings.',
    heroImage: '/images/general_medicine.jpg',
    orbitalImage: '/images/general_medicine_center.jpg',
    aboutTag: 'ABOUT GENERAL MEDICINE',
    aboutTitle: 'Comprehensive Internal Care',
    aboutDescription: [
      'The Department of General Medicine at OMNI Hospitals offers complete primary and tertiary medical care for acute illnesses, chronic lifestyle conditions, and complex multi-system disorders.',
      'Our senior physicians provide personalized care plans, preventive screening programs, and evidence-based disease management.'
    ],
    aboutImage: '/images/general_medicine.jpg',
    stats: [
      { label: 'Outpatient Consultations', value: '100,000+' },
      { label: 'Preventive Screenings', value: 'Comprehensive' }
    ],
    conditions: [
      { name: 'Diabetes & Hypertension', desc: 'Long-term glycemic control and organ protection monitoring.' },
      { name: 'Acute Infectious Fevers', desc: 'Dengue, Typhoid, Malaria, and viral illness diagnostic management.' },
      { name: 'Thyroid & Metabolic Disorders', desc: 'Hormonal diagnostic evaluations and medical management.' }
    ],
    services: [
      { title: 'Executive Health Checkups', desc: 'Full-body preventive screening and physician assessment.' },
      { title: 'Chronic Disease Clinic', desc: 'Structured monitoring for hypertension, diabetes, and dyslipidemia.' }
    ],
    whyOmni: [
      { title: 'Senior Physicians', desc: 'Experienced internal medicine consultants providing evidence-based care.' }
    ],
    faqs: [
      { question: 'What does a general physician consult cover?', answer: 'General medicine consultation includes physical examination, symptom evaluation, diagnostic lab orders, and comprehensive treatment planning.' }
    ],
    ctaTitleLine1: 'Complete Health Protection.',
    ctaTitleLine2: 'Book General Physician.',
    ctaDescription: 'Schedule a consultation with our senior general medicine specialists.'
  },

  pulmonology: {
    id: 'pulmonology',
    name: 'Pulmonology',
    slug: 'pulmonology',
    deptTag: 'PULMONOLOGY',
    heroTagline: 'CENTRE OF EXCELLENCE IN RESPIRATORY MEDICINE',
    titleLine1: 'Breathe Easy.',
    titleLine2: 'Advanced Lung Care.',
    heroDescription: 'Comprehensive pulmonary diagnosis, asthma & allergy management, interventional bronchoscopy, and critical respiratory care delivered by senior pulmonologists across OMNI Hospitals.',
    heroImage: '/images/pulmonology.jpg',
    orbitalImage: '/images/pulmonology_center.jpg',
    aboutTag: 'ABOUT PULMONOLOGY',
    aboutTitle: 'Advanced Care for Lungs & Breathing Disorders',
    aboutDescription: [
      'The Department of Pulmonology at OMNI Hospitals offers comprehensive inpatient, outpatient, and intensive care management for acute and chronic respiratory disorders.',
      'From advanced Pulmonary Function Testing (PFT) and video bronchoscopy to dedicated respiratory ICUs and sleep medicine labs, our specialists deliver personalized treatment plans for asthma, COPD, ILD, and lung infections.'
    ],
    aboutImage: '/images/pulmonology.jpg',
    stats: [
      { label: 'Patient Recovery Rate', value: '98.5%' },
      { label: 'Emergency Respiratory Care', value: '24/7' },
      { label: 'Advanced PFT Labs', value: 'Equipped' },
      { label: 'Bronchoscopy Procedures', value: '5,000+' }
    ],
    conditions: [
      { name: 'Asthma & Allergic Bronchitis', desc: 'Comprehensive management of airway hyperreactivity, wheezing, and allergic triggers.' },
      { name: 'COPD (Emphysema & Bronchitis)', desc: 'Advanced clinical therapy, bronchodilators, and pulmonary rehabilitation for chronic smokers and long-term lung damage.' },
      { name: 'Pneumonia & Chest Infections', desc: 'Rapid microbiological diagnosis and targeted antibiotic therapy for viral and bacterial lung infections.' },
      { name: 'Interstitial Lung Disease (ILD)', desc: 'High-resolution imaging and personalized antifibrotic therapy for pulmonary fibrosis.' },
      { name: 'Sleep Apnea & Snoring', desc: 'Diagnostic Polysomnography (Sleep Study) and CPAP/BiPAP titration therapy.' },
      { name: 'Pleural Effusion & Pneumothorax', desc: 'Thoracentesis, chest tube insertion, and medical pleurodesis.' }
    ],
    services: [
      { title: 'Pulmonary Function Testing (PFT)', desc: 'Spirometry, DLCO, lung volumes, and 6-minute walk tests.' },
      { title: 'Diagnostic & Therapeutic Bronchoscopy', desc: 'Fiber-optic bronchoscopy, BAL, transbronchial lung biopsy, and foreign body removal.' },
      { title: 'Sleep Disorder Lab', desc: 'Comprehensive overnight sleep studies and obstructive sleep apnea management.' },
      { title: 'Pulmonary Critical Care & RICU', desc: 'Dedicated mechanical ventilation, non-invasive ventilation, and ECMO support.' },
      { title: 'Allergy Testing & Immunotherapy', desc: 'Skin prick tests and targeted allergen immunotherapy.' },
      { title: 'Smoking Cessation Clinic', desc: 'Behavioral counseling and pharmacotherapy for tobacco de-addiction.' }
    ],
    whyOmni: [
      { title: 'Senior Pulmonologists', desc: 'Experienced chest physicians and critical care respiratory experts.' },
      { title: 'State-of-the-Art Diagnostics', desc: 'Ultra-modern video bronchoscopy suites and digital PFT systems.' },
      { title: '24/7 Emergency Support', desc: 'Rapid response teams for acute respiratory failure and severe asthma attacks.' }
    ],
    faqs: [
      { question: 'When should I consult a pulmonologist?', answer: 'You should consult a pulmonologist if you have a persistent cough lasting more than 3 weeks, unexplained shortness of breath, wheezing, coughing up blood, or frequent chest infections.' },
      { question: 'What is a Pulmonary Function Test (PFT)?', answer: 'PFT is a non-invasive breathing test that measures lung capacity and airflow to diagnose asthma, COPD, and other lung disorders.' }
    ],
    ctaTitleLine1: 'Breathe Confidently.',
    ctaTitleLine2: 'Book Pulmonology Consultation.',
    ctaDescription: 'Schedule an appointment with senior pulmonologists and chest specialists at OMNI Hospitals.'
  },

  dermatology: {
    id: 'dermatology',
    name: 'Dermatology & Cosmetology',
    slug: 'dermatology',
    deptTag: 'DERMATOLOGY',
    heroTagline: 'CENTRE OF EXCELLENCE IN SKIN, HAIR & NAIL CARE',
    titleLine1: 'Radiant Skin.',
    titleLine2: 'Advanced Clinical Care.',
    heroDescription: 'Expert clinical dermatology, aesthetic cosmetology, and advanced laser treatments for all skin, hair, and nail conditions across OMNI Hospitals.',
    heroImage: '/images/dermatology.jpg',
    orbitalImage: '/images/dermatology_center.jpg',
    aboutTag: 'ABOUT DERMATOLOGY',
    aboutTitle: 'Comprehensive Skin, Hair & Aesthetic Solutions',
    aboutDescription: [
      'The Department of Dermatology at OMNI Hospitals provides world-class clinical, surgical, and cosmetic care for patients of all age groups.',
      'Our team of qualified dermatologists treats chronic inflammatory skin conditions like psoriasis and eczema while offering state-of-the-art aesthetic procedures such as laser scar reduction, chemical peels, and hair restoration.'
    ],
    aboutImage: '/images/dermatology.jpg',
    stats: [
      { label: 'Procedures Completed', value: '15,000+' },
      { label: 'Patient Satisfaction', value: '99.1%' },
      { label: 'Advanced Lasers', value: 'FDA Approved' },
      { label: 'Dermatology Specialists', value: '15+ Yrs Exp' }
    ],
    conditions: [
      { name: 'Acne & Acne Scarring', desc: 'Medical therapy, chemical peels, and fractional lasers for active acne and scar remodeling.' },
      { name: 'Psoriasis & Vitiligo', desc: 'Targeted phototherapy, biologics, systemic medications, and surgical skin grafting.' },
      { name: 'Eczema & Atopic Dermatitis', desc: 'Allergy testing, barrier repair therapy, and long-term flare management.' },
      { name: 'Hair Loss & Alopecia', desc: 'PRP/PRF therapy, mesotherapy, and medical treatments for androgenetic alopecia and alopecia areata.' },
      { name: 'Fungal & Bacterial Infections', desc: 'Accurate scraping microscopy and targeted anti-infective treatment.' },
      { name: 'Pigmentation & Melasma', desc: 'Q-switched Nd:YAG laser toning and medical depigmentation protocols.' }
    ],
    services: [
      { title: 'Clinical Dermatology', desc: 'Diagnosis and management of eczema, psoriasis, hives, and complex dermatoses.' },
      { title: 'Cosmetic Dermatology & Lasers', desc: 'Laser hair reduction, laser tattoo removal, and photo-rejuvenation.' },
      { title: 'Hair Restoration Clinic', desc: 'Platelet-Rich Plasma (PRP) therapy and advanced trichological treatments.' },
      { title: 'Dermatosurgery', desc: 'Mole removal, cyst excision, earlobe repair, and skin biopsies.' },
      { title: 'Chemical Peels & Facials', desc: 'Salicylic, Glycolic, and TCA peels for hyperpigmentation and skin rejuvenation.' }
    ],
    whyOmni: [
      { title: 'Board-Certified Dermatologists', desc: 'Experienced doctors trained in clinical and aesthetic dermatology.' },
      { title: 'FDA-Approved Technology', desc: 'Safe, medical-grade laser equipment and sterilized clinical suites.' },
      { title: 'Personalized Treatment Plans', desc: 'Customized protocols tailored to your specific skin and hair type.' }
    ],
    faqs: [
      { question: 'What skin conditions do your dermatologists treat?', answer: 'We treat acne, eczema, psoriasis, vitiligo, hair loss, skin allergies, fungal infections, warts, moles, and cosmetic skin concerns.' },
      { question: 'Is PRP therapy safe for hair loss?', answer: 'Yes, PRP therapy utilizes the patient’s own blood platelets to stimulate natural hair follicle growth and is completely biocompatible and safe.' }
    ],
    ctaTitleLine1: 'Healthy, Glowing Skin.',
    ctaTitleLine2: 'Consult Top Dermatologists.',
    ctaDescription: 'Book an appointment with certified skin and hair specialists at OMNI Hospitals.'
  },

  psychiatry: {
    id: 'psychiatry',
    name: 'Psychiatry & Mental Health',
    slug: 'psychiatry',
    deptTag: 'PSYCHIATRY',
    heroTagline: 'CENTRE OF EXCELLENCE IN BEHAVIOURAL SCIENCES & MENTAL HEALTH',
    titleLine1: 'Healing Minds.',
    titleLine2: 'Compassionate Care.',
    heroDescription: 'Comprehensive mental healthcare, psychotherapeutic counseling, and psychiatric evaluation delivered with utmost empathy and confidentiality at OMNI Hospitals.',
    heroImage: '/images/psychiatry.jpg',
    orbitalImage: '/images/psychiatry_center.jpg',
    aboutTag: 'ABOUT PSYCHIATRY',
    aboutTitle: 'Holistic Mental Health & Psychological Wellbeing',
    aboutDescription: [
      'The Department of Psychiatry & Behavioral Sciences at OMNI Hospitals provides supportive, confidential, and evidence-based mental healthcare for adolescents, adults, and seniors.',
      'Our team of psychiatrists and clinical psychologists specializes in treating anxiety, depression, bipolar disorder, sleep disturbances, and addiction through medication management, psychotherapy, and behavioral counseling.'
    ],
    aboutImage: '/images/psychiatry.jpg',
    stats: [
      { label: 'Patient Consultations', value: '10,000+' },
      { label: 'Strict Confidentiality', value: '100%' },
      { label: 'Psychological Therapies', value: 'Evidence-Based' },
      { label: 'Dedicated Specialists', value: 'Compassionate' }
    ],
    conditions: [
      { name: 'Depression & Mood Disorders', desc: 'Compassionate medical and psychotherapeutic treatment for Major Depressive Disorder and dysthymia.' },
      { name: 'Anxiety, Panic & Phobias', desc: 'Cognitive Behavioral Therapy (CBT) and pharmacotherapy for generalized anxiety and panic attacks.' },
      { name: 'Stress & Sleep Disorders', desc: 'Evaluation and clinical management of chronic insomnia and stress-related fatigue.' },
      { name: 'Bipolar & Psychotic Disorders', desc: 'Long-term mood stabilization, antipsychotic monitoring, and rehabilitation support.' },
      { name: 'Obsessive-Compulsive Disorder (OCD)', desc: 'ERP therapy and pharmacological management for intrusive thoughts and compulsive behaviors.' },
      { name: 'Substance De-addiction', desc: 'Medically supervised detoxification and relapse prevention counseling.' }
    ],
    services: [
      { title: 'Psychiatric Evaluation & Medication', desc: 'Detailed diagnostic assessment and judicious psychotropic prescription management.' },
      { title: 'Cognitive Behavioral Therapy (CBT)', desc: 'Structured talk therapy focusing on reframing negative thought patterns.' },
      { title: 'Stress & Lifestyle Counseling', desc: 'Techniques for workplace burnout, emotional resilience, and mindfulness.' },
      { title: 'Child & Adolescent Psychiatry', desc: 'Assessment and counseling for ADHD, learning difficulties, and behavioral concerns.' },
      { title: 'Geriatric Psychiatry', desc: 'Specialized care for dementia, depression in the elderly, and memory disorders.' }
    ],
    whyOmni: [
      { title: 'Complete Confidentiality', desc: 'Your privacy, dignity, and medical records are protected with 100% confidentiality.' },
      { title: 'Empathetic Approach', desc: 'Compassionate clinical psychiatrists who listen without judgment.' },
      { title: 'Multidisciplinary Care', desc: 'Integrated psychiatric care alongside general medicine and neurology.' }
    ],
    faqs: [
      { question: 'When should I visit a psychiatrist?', answer: 'Consider seeing a psychiatrist if you experience persistent sadness, severe anxiety, panic attacks, drastic mood swings, sleep disturbances, or difficulty coping with daily life.' },
      { question: 'Are psychiatric consultations confidential?', answer: 'Yes, all psychiatric consultations, therapy sessions, and medical details are treated with strict medical confidentiality.' }
    ],
    ctaTitleLine1: 'Prioritize Your Mental Well-being.',
    ctaTitleLine2: 'Book Psychiatry Appointment.',
    ctaDescription: 'Speak with compassionate mental health specialists and psychiatrists at OMNI Hospitals.'
  },

  'plastic-surgery': {
    id: 'plastic-surgery',
    name: 'Plastic & Reconstructive Surgery',
    slug: 'plastic-surgery',
    deptTag: 'PLASTIC SURGERY',
    heroTagline: 'CENTRE OF EXCELLENCE IN RECONSTRUCTIVE & COSMETIC SURGERY',
    titleLine1: 'Restoring Form.',
    titleLine2: 'Enhancing Function.',
    heroDescription: 'Advanced reconstructive microsurgery, trauma reconstruction, burn injury care, and aesthetic cosmetic surgical procedures at OMNI Hospitals.',
    heroImage: '/images/plastic_surgery.jpg',
    orbitalImage: '/images/plastic_surgery_center.jpg',
    aboutTag: 'ABOUT PLASTIC SURGERY',
    aboutTitle: 'Precision Surgery for Restoration & Aesthetics',
    aboutDescription: [
      'The Department of Plastic & Reconstructive Surgery at OMNI Hospitals is dedicated to restoring both form and function for patients affected by trauma, congenital defects, burns, or oncological resections.',
      'Led by skilled plastic surgeons utilizing advanced microsurgical techniques and ultra-modern modular operation theaters, we perform life-changing reconstructive and aesthetic surgeries with highest safety standards.'
    ],
    aboutImage: '/images/plastic_surgery.jpg',
    stats: [
      { label: 'Reconstructive Surgeries', value: '8,000+' },
      { label: 'Microsurgical Success', value: '99%' },
      { label: '24/7 Trauma Plastic Care', value: 'Available' },
      { label: 'Ultra-Modern Modular OTs', value: 'Equipped' }
    ],
    conditions: [
      { name: 'Maxillofacial & Facial Trauma', desc: 'Restoration of facial fractures, soft tissue lacerations, and dental alveolar trauma.' },
      { name: 'Burn Injuries & Post-Burn Contractures', desc: 'Acute burn critical care, skin grafting, and surgical contracture release.' },
      { name: 'Hand Injuries & Complex Trauma', desc: 'Tendon repairs, nerve reconstruction, and replantation micro-surgeries.' },
      { name: 'Diabetic Foot & Chronic Wounds', desc: 'Advanced microvascular flap reconstruction for limb salvage and healing.' },
      { name: 'Congenital Anomalies (Cleft Lip/Palate)', desc: 'Pediatric plastic surgery to restore speech, feeding, and facial appearance.' },
      { name: 'Scar Revision & Keloids', desc: 'Surgical excision, steroid injection, and laser remodeling for traumatic scars.' }
    ],
    services: [
      { title: 'Reconstructive Microsurgery', desc: 'Free tissue transfers and nerve repair for trauma and post-cancer defect restoration.' },
      { title: 'Acute Burn & Wound Management', desc: 'State-of-the-art burn ICU care and collagen/autologous skin grafting.' },
      { title: 'Hand & Peripheral Nerve Surgery', desc: 'Tendon transfers, carpal tunnel decompression, and fracture fixation.' },
      { title: 'Aesthetic & Cosmetic Surgery', desc: 'Rhinoplasty, gynecomastia reduction, liposuction, abdominoplasty, and scar revision.' },
      { title: 'Limb Salvage Reconstruction', desc: 'Complex flap surgeries preventing amputation in severe trauma and diabetic foot.' }
    ],
    whyOmni: [
      { title: 'Senior Plastic Surgeons', desc: 'German and internationally trained surgeons skilled in microsurgical techniques.' },
      { title: 'Advanced Modular OTs', desc: 'Equipped with operating microscopes and specialized micro-instruments.' },
      { title: 'Comprehensive Post-Op Rehabilitation', desc: 'Dedicated hand therapy, scar management, and functional recovery programs.' }
    ],
    faqs: [
      { question: 'What is the difference between reconstructive and cosmetic surgery?', answer: 'Reconstructive surgery focuses on repairing defects caused by trauma, birth disorders, burns, or disease to restore normal function and appearance, whereas cosmetic surgery focuses primarily on enhancing aesthetic features.' },
      { question: 'How are traumatic scars treated?', answer: 'Scars can be treated through a combination of scar revision surgery, medical silicone sheets, steroid injections, and laser resurfacing depending on the severity and age of the scar.' }
    ],
    ctaTitleLine1: 'Precision Surgical Excellence.',
    ctaTitleLine2: 'Book Plastic Surgery Consult.',
    ctaDescription: 'Schedule a consultation with senior plastic and reconstructive surgeons at OMNI Hospitals.'
  }
};

// Fallback helper to return specialty configuration or generate default schema
export function getSpecialtyData(slug) {
  const normalized = (slug || 'cardiology').toLowerCase();
  const seo = SEO_METADATA[normalized];

  if (SPECIALTIES_DATA[normalized]) {
    return {
      ...SPECIALTIES_DATA[normalized],
      seoTitle: seo?.title,
      metaDescription: seo?.description
    };
  }
  
  // Format readable title
  const formattedName = normalized
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const imageBase = (
    normalized === 'emergency-medicine' ? 'emergency' :
    normalized === 'general-medicine' ? 'general_medicine' :
    normalized === 'obstetrics-gynaecology' ? 'gynaecology' :
    normalized.replace(/-/g, '_')
  );

  return {
    id: normalized,
    name: formattedName,
    slug: normalized,
    seoTitle: seo?.title,
    metaDescription: seo?.description,
    deptTag: formattedName.toUpperCase(),
    heroTagline: 'CENTRE OF EXCELLENCE AT OMNI HOSPITALS',
    titleLine1: `${formattedName} Care.`,
    titleLine2: 'Without Compromise.',
    heroDescription: `Comprehensive ${formattedName.toLowerCase()} diagnosis, treatment, and medical care delivered by senior specialists across Omni Hospitals.`,
    heroImage: `/images/${imageBase}.jpg`,
    aboutImage: `/images/${imageBase}.jpg`,
    orbitalImage: `/images/${imageBase}_center.jpg`,

    stats: [
      { label: 'Patient Satisfaction', value: '99%' },
      { label: 'Emergency Response', value: '24/7' },
      { label: 'Advanced ICUs', value: 'Level 1' },
      { label: 'Senior Doctors', value: '20+ Yrs Exp' }
    ],

    conditions: [
      { name: `Acute ${formattedName} Conditions`, desc: `Specialized management for complex ${formattedName.toLowerCase()} symptoms.` },
      { name: `Chronic ${formattedName} Management`, desc: `Long-term therapeutic monitoring and prevention of disease progression.` },
      { name: 'Inflammatory & Metabolic Disorders', desc: 'Comprehensive systemic diagnostic evaluations and clinical therapy.' }
    ],

    services: [
      { title: 'Diagnostic & Screening Services', desc: 'High-precision diagnostic imaging and pathological laboratory testing.' },
      { title: 'Outpatient & Inpatient Consultations', desc: 'Detailed physical evaluation and tailored treatment plans.' },
      { title: 'Surgical & Interventional Suite', desc: 'Minimally invasive keyhole procedures and inpatient surgical care.' }
    ],

    whyOmni: [
      { title: 'Expert Specialists', desc: 'Senior clinicians with decades of specialized medical mastery.' },
      { title: 'Advanced Technology', desc: 'Latest diagnostic imaging and modular operation theaters.' },
      { title: '24/7 Care Support', desc: 'Round-the-clock emergency and intensive care unit access.' }
    ],

    faqs: [
      {
        question: `When should I consult a ${formattedName.toLowerCase()} specialist?`,
        answer: `You should consult a ${formattedName.toLowerCase()} specialist if you experience persistent symptoms or have been advised specialized evaluation by your primary doctor.`
      },
      {
        question: 'How can I book an appointment?',
        answer: 'You can book an appointment online using the Book Appointment button or call our helpline at 1800 123 4567.'
      }
    ],

    ctaTitleLine1: 'Expert Care.',
    ctaTitleLine2: 'Always Near You.',
    ctaDescription: `Schedule your appointment with senior ${formattedName.toLowerCase()} specialists across Omni Hospitals.`
  };
}
