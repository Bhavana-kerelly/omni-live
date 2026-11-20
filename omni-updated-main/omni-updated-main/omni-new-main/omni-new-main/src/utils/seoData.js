// Centralized SEO Titles & Meta Descriptions for OMNI Hospitals
export const SEO_METADATA = {
  home: {
    title: 'Best Super Speciality Hospital in Hyderabad & Andhra Pradesh | OMNI Hospitals',
    description: 'Looking for the best super speciality hospital in Hyderabad and Andhra Pradesh? OMNI Hospitals offers advanced medical treatments, expert super speciality doctors, emergency care and comprehensive healthcare across multiple specialties. Book your appointment today.'
  },
  cardiology: {
    title: 'Best Cardiology Hospital in Hyderabad & Andhra Pradesh | OMNI Hospitals',
    description: 'Get advanced heart care, cardiac diagnosis and treatment from experienced cardiologists at OMNI Hospitals in Hyderabad and Andhra Pradesh. Book your consultation today.'
  },
  orthopedics: {
    title: 'Best Orthopedic Hospital & Specialists in Hyderabad and Andhra Pradesh | OMNI Hospitals',
    description: 'Get expert bone, joint, spine and fracture care from experienced orthopedic specialists at OMNI Hospitals, a leading orthopedic hospital in Hyderabad and Andhra Pradesh. Book your consultation today.'
  },
  neurology: {
    title: 'Best Neurology Hospital & Neurologists in Hyderabad and Andhra Pradesh | OMNI Hospitals',
    description: 'Get expert neurological care from experienced neurologists at OMNI Hospitals. Consult specialists for stroke, epilepsy, migraine, brain and nerve disorders in Hyderabad and Andhra Pradesh. Book your appointment today.'
  },
  urology: {
    title: 'Best Urology Hospital & Urologists in Hyderabad and Andhra Pradesh | OMNI Hospitals',
    description: 'Get expert urological care from experienced urologists at OMNI Hospitals. Consult specialists for kidney stones, prostate problems, urinary disorders and other urological conditions in Hyderabad and Andhra Pradesh. Book your appointment today.'
  },
  'emergency-medicine': {
    title: 'Best Emergency Hospital & Emergency Care Specialists in Hyderabad and Andhra Pradesh | OMNI Hospitals',
    description: 'Get immediate medical attention with 24/7 emergency care at OMNI Hospitals. Experienced emergency medicine specialists provide urgent treatment for accidents, injuries and critical conditions across Hyderabad and Andhra Pradesh.'
  },
  'general-medicine': {
    title: 'Best General Medicine Hospital & Physicians in Hyderabad and Andhra Pradesh | OMNI Hospitals',
    description: 'Get expert general medical care from experienced physicians at OMNI Hospitals. Consult specialists for fever, infections, diabetes, hypertension and other health conditions in Hyderabad and Andhra Pradesh. Book your appointment today.'
  },
  gastroenterology: {
    title: 'Best Gastroenterology Hospital & Gastroenterologists in Hyderabad and Andhra Pradesh | OMNI Hospitals',
    description: 'Get expert digestive and liver care from experienced gastroenterologists at OMNI Hospitals. Consult specialists for acidity, ulcers, liver disorders, and gastrointestinal problems in Hyderabad and Andhra Pradesh. Book your appointment today.'
  },
  'obstetrics-gynaecology': {
    title: 'Best Gynaecology Hospital & Gynaecologists in Hyderabad and Andhra Pradesh | OMNI Hospitals',
    description: "Get expert women's healthcare, pregnancy care and maternity services from experienced gynaecologists at OMNI Hospitals. Consult specialists for fertility, menstrual and reproductive health concerns in Hyderabad and Andhra Pradesh. Book your appointment today."
  },
  gynaecology: {
    title: 'Best Gynaecology Hospital & Gynaecologists in Hyderabad and Andhra Pradesh | OMNI Hospitals',
    description: "Get expert women's healthcare, pregnancy care and maternity services from experienced gynaecologists at OMNI Hospitals. Consult specialists for fertility, menstrual and reproductive health concerns in Hyderabad and Andhra Pradesh. Book your appointment today."
  },
  gynecology: {
    title: 'Best Gynaecology Hospital & Gynaecologists in Hyderabad and Andhra Pradesh | OMNI Hospitals',
    description: "Get expert women's healthcare, pregnancy care and maternity services from experienced gynaecologists at OMNI Hospitals. Consult specialists for fertility, menstrual and reproductive health concerns in Hyderabad and Andhra Pradesh. Book your appointment today."
  },
  ent: {
    title: 'Best ENT Hospital & ENT Specialists in Hyderabad and Andhra Pradesh | OMNI Hospitals',
    description: 'Get expert ENT care from experienced ENT specialists at OMNI Hospitals. Consult doctors for ear infections, sinusitis, hearing problems, throat disorders and nasal conditions in Hyderabad and Andhra Pradesh. Book your appointment today.'
  },
  nephrology: {
    title: 'Best Nephrology Hospital & Nephrologists in Hyderabad and Andhra Pradesh | OMNI Hospitals',
    description: 'Get expert kidney care from experienced nephrologists at OMNI Hospitals. Consult specialists for kidney stones, chronic kidney disease, kidney infections and other kidney disorders in Hyderabad and Andhra Pradesh. Book your appointment today.'
  },
  pulmonology: {
    title: 'Best Pulmonology Hospital & Pulmonologists in Hyderabad and Andhra Pradesh | OMNI Hospitals',
    description: 'Get expert lung and respiratory care from experienced pulmonologists at OMNI Hospitals. Consult specialists for asthma, bronchitis, pneumonia, COPD and other respiratory conditions in Hyderabad and Andhra Pradesh. Book your appointment today.'
  },
  dermatology: {
    title: 'Best Dermatology Hospital & Skin Specialists in Hyderabad and Andhra Pradesh | OMNI Hospitals',
    description: 'Get expert skin, hair and nail care from experienced dermatologists at OMNI Hospitals. Consult specialists for acne, eczema, psoriasis, skin allergies and other skin conditions in Hyderabad and Andhra Pradesh. Book your appointment today.'
  },
  psychiatry: {
    title: 'Best Psychiatry Hospital & Psychiatrists in Hyderabad and Andhra Pradesh | OMNI Hospitals',
    description: 'Get expert mental healthcare from experienced psychiatrists at OMNI Hospitals. Consult specialists for anxiety, depression, stress, sleep disorders and other mental health conditions in Hyderabad and Andhra Pradesh. Book your appointment today.'
  },
  'plastic-surgery': {
    title: 'Best Plastic Surgery Hospital & Plastic Surgeons in Hyderabad and Andhra Pradesh | OMNI Hospitals',
    description: 'Get expert plastic and reconstructive surgical care from experienced plastic surgeons at OMNI Hospitals. Explore advanced treatments for reconstructive surgery, burn injuries, scars and cosmetic concerns in Hyderabad and Andhra Pradesh. Book your consultation today.'
  }
};

/**
 * Updates browser document title, meta description, and open-graph tags
 */
export function updatePageSEO(title, description, canonicalPath) {
  if (typeof document === 'undefined') return;

  if (title) {
    document.title = title;
    
    // OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);

    // Twitter Title
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('name', 'twitter:title');
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute('content', title);
  }

  if (description) {
    // Standard Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // OG Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', description);

    // Twitter Description
    let twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDesc) {
      twitterDesc = document.createElement('meta');
      twitterDesc.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDesc);
    }
    twitterDesc.setAttribute('content', description);
  }

  if (canonicalPath) {
    let canonical = document.querySelector('link[rel="canonical"]');
    const fullUrl = `https://omnihospitals.in${canonicalPath.startsWith('/') ? canonicalPath : '/' + canonicalPath}`;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);
  }
}

