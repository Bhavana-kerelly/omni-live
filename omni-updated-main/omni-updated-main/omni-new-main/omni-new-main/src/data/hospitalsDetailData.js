export const HOSPITALS_DETAIL_DATA = {
  'kothapet': {
    id: 'kothapet',
    slug: 'kothapet',
    name: 'OMNI Hospitals, Kothapet',
    titleLocation: 'KOTHAPET',
    city: 'Hyderabad',
    tagline: 'Advanced Care. Trusted Experts. Better Outcomes.',
    heroImage: '/images/hospitals/kothapet-card.jpg',
    aboutImage: '/images/hospitals/kothapet-card.jpg',
    
    // Quick info bar
    bedsCount: '180+ Beds',
    specialistsCount: '65+ Specialists',
    emergencyStatus: '24/7 Active',
    accreditation: 'NABH Accredited',
    phone: '040-67369999 / 8096369999',
    emergencyPhone: '8096369999',
    email: 'kothapet@omnihospitals.in',
    opdHours: 'Mon - Sat: 08:00 AM - 08:00 PM | Sun: 09:00 AM - 01:00 PM',
    address: 'Opp. Telephone Exchange, Kothapet, Dilsukhnagar, Hyderabad, Telangana 500035',
    mapUrl: 'https://maps.google.com/?q=OMNI+Hospitals+Kothapet+Hyderabad',

    // About story
    aboutTitle: 'Healthcare Excellence in East Hyderabad',
    aboutParagraphs: [
      'OMNI Hospitals Kothapet stands as a cornerstone of tertiary healthcare in East Hyderabad. Established with a vision to make international-grade medical care accessible and compassionate, our facility houses state-of-the-art keyhole surgical suites, advanced critical care units, and a dedicated 24/7 cardiac emergency center.',
      'Driven by over 65 senior consultants across 25+ medical specialties, we emphasize rapid clinical response, zero-delay trauma protocols, and individualized care pathways designed around each patient’s wellbeing.'
    ],
    aboutHighlights: [
      '24/7 Level-1 Emergency & Trauma Unit',
      'Advanced Cath Lab with 128-Slice CT Imaging',
      'Modular Sterile Surgical Suites with Laminar Airflow',
      'Dedicated Dialysis & High-Dependency ICU Beds'
    ],

    // Specialties
    specialties: [
      { name: 'Cardiology & Cardiac Surgery', desc: 'Comprehensive angioplasty, pacemaker implantation, and open-heart surgeries.' },
      { name: 'Orthopedics & Joint Replacement', desc: 'Computer-navigated knee/hip replacements and sports injury management.' },
      { name: 'Neurosurgery & Spine Care', desc: 'Sub-millimeter brain surgery, endoscopic spine procedures, and stroke ICU.' },
      { name: 'Pulmonology & Respiratory', desc: 'Advanced bronchoscopy, sleep medicine, and asthma-allergy care.' },
      { name: 'Gastroenterology & Hepatology', desc: 'Advanced GI endoscopy, liver disease care, and bariatric surgery.' },
      { name: 'Emergency & Critical Care', desc: 'Round-the-clock resuscitation bays with dedicated trauma specialists.' }
    ],

    // Facilities
    facilities: [
      {
        category: 'Technology',
        title: 'Digital Cath Lab & 128-Slice CT',
        desc: 'Ultra-low radiation imaging for cardiac angiography and high-speed vascular diagnostics.',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
      },
      {
        category: 'Critical Care',
        title: '40-Bed Multi-Disciplinary ICU',
        desc: 'Hephaestus-grade isolation rooms, hemodialysis capability, and 1:1 dedicated nursing care.',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
      },
      {
        category: 'Diagnostics',
        title: '24/7 NABL Accredited Laboratory',
        desc: 'Fully automated biochemistry, hematology, and histopathology analyzers.',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80'
      },
      {
        category: 'Surgery',
        title: 'Modular Keyhole Surgical Suites',
        desc: 'Ultra-clean laminar airflow OTs designed for zero-infection surgical safety.',
        image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80'
      },
      {
        category: 'Patient Facilities',
        title: 'Deluxe & Executive Patient Suites',
        desc: 'Ergonomic healing environments featuring natural daylight, Wi-Fi, and attendant accommodations.',
        image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80'
      }
    ],

    // Advanced Technology
    techHighlights: [
      { name: '128-Slice Cardiac CT Scanner', desc: 'Non-invasive coronary angiograms in under 5 seconds.' },
      { name: 'Flat-Panel Digital Cath Lab', desc: 'Precision vascular interventions with minimal contrast agent.' },
      { name: 'HD Endoscopic Surgical Suite', desc: 'Minimal tissue trauma and faster post-operative recovery.' }
    ]
  },

  'kukatpally': {
    id: 'kukatpally',
    slug: 'kukatpally',
    name: 'OMNI Hospitals, Kukatpally',
    titleLocation: 'KUKATPALLY',
    city: 'Hyderabad',
    tagline: 'Advanced Care. Trusted Experts. Better Outcomes.',
    heroImage: '/images/hospitals/kukatpally-card.jpg',
    aboutImage: '/images/hospitals/kukatpally-card.jpg',
    
    bedsCount: '200+ Beds',
    specialistsCount: '80+ Specialists',
    emergencyStatus: '24/7 Active',
    accreditation: 'NABH & NABL Accredited',
    phone: '040-68252568 / 7799960073',
    emergencyPhone: '7799960073',
    email: 'kukatpally@omnihospitals.in',
    opdHours: 'Mon - Sat: 08:00 AM - 08:30 PM | Sun: 09:00 AM - 02:00 PM',
    address: 'Near KPBH Metro Station, Kukatpally, Hyderabad, Telangana 500072',
    mapUrl: 'https://maps.google.com/?q=OMNI+Hospitals+Kukatpally+Hyderabad',

    aboutTitle: 'Robotic Surgery & Advanced Healthcare Hub',
    aboutParagraphs: [
      'Serving Hyderabad’s vibrant IT and residential belt, OMNI Hospitals Kukatpally is recognized as a leader in Robotic Surgical Interventions, Advanced Urology, Minimally Invasive Joint Surgery, and Mother & Child Health.',
      'Our facility integrates Da Vinci robotic surgery systems, high-dependency neonatal care units (NICU), and comprehensive diagnostic care, ensuring world-class outcomes with minimal recovery time.'
    ],
    aboutHighlights: [
      'Da Vinci Surgical Robotic Center',
      'Comprehensive Urology & Kidney Transplant Unit',
      'Level-3 Neonatal Intensive Care Unit (NICU)',
      'Computer-Assisted Robotic Knee Alignment'
    ],

    specialties: [
      { name: 'Robotic Urology & Oncology', desc: 'Precision robotic prostate, kidney, and bladder procedures.' },
      { name: 'Robotic Joint Replacements', desc: 'Sub-millimeter knee/hip alignment with rapid mobility protocols.' },
      { name: 'Obstetrics & High-Risk Maternity', desc: 'LDR birthing suites and round-the-clock fetomaternal specialists.' },
      { name: 'Gastroenterology & HPB Surgery', desc: 'Advanced GI endoscopy, ERCP, and complex GI oncology.' },
      { name: 'Nephrology & Dialysis', desc: '24/7 hemodialysis and pre/post kidney transplant care.' }
    ],

    facilities: [
      {
        category: 'Technology',
        title: 'Da Vinci Surgical Robot',
        desc: '3D HD vision and wristed instrumentation for ultra-precise laparoscopic surgery.',
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
      },
      {
        category: 'Critical Care',
        title: 'Level-3 Neonatal ICU (NICU)',
        desc: 'Advanced incubators and ventilation for premature infants and high-risk deliveries.',
        image: 'https://images.unsplash.com/photo-1502740331539-12419076f827?auto=format&fit=crop&w=800&q=80'
      },
      {
        category: 'Diagnostics',
        title: '3T Digital MRI Center',
        desc: 'Silent scan technology with ultra-high resolution neuro and musculoskeletal imaging.',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
      },
      {
        category: 'Surgery',
        title: 'Robotic Surgical Operating Suites',
        desc: 'Integrated digital command centers for robotic and laparoscopic procedures.',
        image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80'
      },
      {
        category: 'Patient Facilities',
        title: 'Luxury Maternity Suites',
        desc: 'Private LDR (Labor-Delivery-Recovery) suites designed for family comfort.',
        image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80'
      }
    ],

    techHighlights: [
      { name: 'Da Vinci Surgical Robotic System', desc: 'Enabling micro-incision surgeries with near-zero blood loss.' },
      { name: '3T Wide-Bore Digital MRI', desc: 'Unmatched diagnostic detail for neuro and orthopedic scans.' },
      { name: 'Holmium Laser Urology System', desc: 'Bloodless kidney stone and prostate treatment.' }
    ]
  },

  'udai-nampally': {
    id: 'udai-nampally',
    slug: 'udai-nampally',
    name: 'UDAI OMNI Hospitals, Nampally',
    titleLocation: 'UDAI OMNI - NAMPALLY',
    city: 'Hyderabad',
    tagline: 'Advanced Care. Trusted Experts. Better Outcomes.',
    heroImage: '/images/hospitals/nampally-card.jpg',
    aboutImage: '/images/hospitals/nampally-card.jpg',
    
    bedsCount: '150+ Beds',
    specialistsCount: '50+ Specialists',
    emergencyStatus: '24/7 Active',
    accreditation: 'NABH Accredited',
    phone: '040-23232226 / 040-66292228',
    emergencyPhone: '040-23232226',
    email: 'nampally@udaiomni.com',
    opdHours: 'Mon - Sat: 08:30 AM - 07:30 PM',
    address: 'Near Assembly Metro Station, Chapel Road, Nampally, Hyderabad, Telangana 500001',
    mapUrl: 'https://maps.google.com/?q=UDAI+OMNI+Hospitals+Nampally+Hyderabad',

    aboutTitle: '40+ Years of Orthopedic & Surgical Legacy',
    aboutParagraphs: [
      'Combining the historical clinical heritage of UDAI Clinic with OMNI’s modern medical ecosystem, UDAI OMNI Nampally is celebrated across South India for complex joint replacements, spine surgery, pediatric orthopedics, and sports medicine.',
      'Our orthopedic specialists have performed over 50,000 successful surgeries, supported by computer-navigated OTs, dedicated physical rehabilitation centers, and specialized trauma response units.'
    ],
    aboutHighlights: [
      '50,000+ Successful Orthopedic Procedures',
      'Computer-Navigated Joint Replacement Center',
      'Specialized Spine & Scoliosis Correction Unit',
      'Comprehensive Sports Injury Rehabilitation'
    ],

    specialties: [
      { name: 'Joint Replacement Surgery', desc: 'Total & revision knee and hip replacements using robotic navigation.' },
      { name: 'Spine & Neuro-Orthopedics', desc: 'Microscopic and endoscopic discectomy, spinal fusion, and scoliosis care.' },
      { name: 'Arthroscopy & Sports Medicine', desc: 'Keyhole repair of ACL/PCL tears, rotator cuff injuries, and cartilage restoration.' },
      { name: 'Trauma & Complex Fractures', desc: 'Polytrauma care, non-union bone corrections, and deformity correction.' },
      { name: 'Physical Therapy & Rehab', desc: 'Hydrotherapy, electrotherapy, and custom post-surgical mobilization.' }
    ],

    facilities: [
      {
        category: 'Technology',
        title: 'ROSA Robotic Joint Navigation',
        desc: 'Real-time surgical tracking for accurate joint implant placement.',
        image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80'
      },
      {
        category: 'Critical Care',
        title: 'Surgical & Post-Op Recovery ICU',
        desc: 'Dedicated monitoring beds for immediate post-joint replacement care.',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
      },
      {
        category: 'Diagnostics',
        title: 'Digital X-Ray & Bone Densitometry (DEXA)',
        desc: 'Precision osteoporosis screening and dynamic joint imaging.',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
      },
      {
        category: 'Surgery',
        title: 'Laminar Airflow Orthopedic OTs',
        desc: 'Ultra-clean surgical environment ensuring near-zero infection risk.',
        image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80'
      },
      {
        category: 'Patient Facilities',
        title: 'Orthopedic Rehabilitation Wing',
        desc: 'State-of-the-art physiotherapy gym and gait analysis lab.',
        image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80'
      }
    ],

    techHighlights: [
      { name: 'ROSA Knee Robotic Assistant', desc: 'Personalized joint alignment based on patient anatomy.' },
      { name: 'C-Arm 3D Surgical Imaging', desc: 'Intraoperative fluoroscopy for pinpoint fracture fixations.' },
      { name: 'Computerized Gait Analysis', desc: 'Optimizing post-rehabilitation movement and biomechanics.' }
    ]
  },

  'vizag': {
    id: 'vizag',
    slug: 'vizag',
    name: 'OMNI Hospitals, Vizag',
    titleLocation: 'VIZAG',
    city: 'Visakhapatnam',
    tagline: 'Advanced Care. Trusted Experts. Better Outcomes.',
    heroImage: '/images/hospitals/vizag-card.jpg',
    aboutImage: '/images/hospitals/vizag-card.jpg',
    
    bedsCount: '220+ Beds',
    specialistsCount: '90+ Specialists',
    emergencyStatus: '24/7 Active',
    accreditation: 'NABH Accredited',
    phone: '8008904323',
    emergencyPhone: '8008904323',
    email: 'vizag@omnihospitals.in',
    opdHours: 'Mon - Sat: 08:00 AM - 08:00 PM',
    address: 'Waltair Main Road, Ram Nagar, Visakhapatnam, Andhra Pradesh 530002',
    mapUrl: 'https://maps.google.com/?q=OMNI+Hospitals+Ram+Nagar+Vizag',

    aboutTitle: 'Coastal Region Flagship Super-Specialty Hospital',
    aboutParagraphs: [
      'OMNI Hospitals Vizag is North Coastal Andhra Pradesh’s premier tertiary healthcare destination. Featuring dedicated institutes for Cardiac Sciences, Neurosciences, Surgical Oncology, and Emergency Trauma, our hospital serves thousands of patients across Andhra Pradesh and Odisha.',
      'Equipped with a bi-plane digital angiography suite, 3T MRI, and 24/7 stroke response units, OMNI Vizag combines technological leadership with warm coastal hospitality.'
    ],
    aboutHighlights: [
      'Coastal AP’s Premier Cardiac & Neuro Institute',
      'Bi-Plane Digital Cath Lab & Stroke Unit',
      '24/7 Emergency & Maritime Trauma Response',
      'Advanced Surgical Oncology & Organ Care'
    ],

    specialties: [
      { name: 'Cardiology & Cardio-Thoracic', desc: 'Complex angioplasties, bypass surgeries (CABG), and heart valve repair.' },
      { name: 'Neurology & Neurosurgery', desc: 'Stroke thrombolysis, brain tumor resections, and neuro-critical care.' },
      { name: 'Surgical Oncology & Chemotherapy', desc: 'Comprehensive cancer care with organ-preserving surgical techniques.' },
      { name: 'Orthopedics & Joint Care', desc: 'Joint replacement, arthroscopy, and complex pelvic trauma care.' },
      { name: 'Urology & Kidney Care', desc: 'Laser stone removal, prostate care, and dialysis services.' }
    ],

    facilities: [
      {
        category: 'Technology',
        title: 'Bi-Plane Cath Lab & 3T MRI',
        desc: '3D vascular roadmapping for complex neuro and cardiac procedures.',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
      },
      {
        category: 'Critical Care',
        title: 'Comprehensive Neuro & Cardiac ICUs',
        desc: 'Ultra-monitored beds with round-the-clock intensivists and cardiologists.',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
      },
      {
        category: 'Diagnostics',
        title: 'Integrated Cancer Diagnostic Suite',
        desc: 'Histopathology, tumor markers, and advanced biopsy guidance.',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80'
      },
      {
        category: 'Surgery',
        title: 'Neuro-Surgical Suites',
        desc: 'High-definition surgical microscopes and intraoperative neuro monitoring.',
        image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80'
      },
      {
        category: 'Patient Facilities',
        title: 'Sea-View Executive Rooms',
        desc: 'Comfortable recovery suites designed for restful healing.',
        image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80'
      }
    ],

    techHighlights: [
      { name: 'Bi-Plane Digital Angiography', desc: 'Simultaneous 2D/3D visualization for neuro-vascular procedures.' },
      { name: '3T Wide-Bore MRI', desc: 'Fast, high-contrast imaging for brain and cardiac tissues.' },
      { name: 'Intraoperative Neuro-Navigation', desc: 'Sub-millimeter guidance for delicate brain and spine surgeries.' }
    ]
  },

  'kurnool': {
    id: 'kurnool',
    slug: 'kurnool',
    name: 'OMNI Hospitals, Kurnool',
    titleLocation: 'KURNOOL',
    city: 'Kurnool',
    tagline: 'Advanced Care. Trusted Experts. Better Outcomes.',
    heroImage: '/images/hospitals/kurnool-card.jpg',
    aboutImage: '/images/hospitals/kurnool-card.jpg',
    
    bedsCount: '150+ Beds',
    specialistsCount: '55+ Specialists',
    emergencyStatus: '24/7 Active',
    accreditation: 'NABH Accredited',
    phone: '7569443737 / 08518-277188',
    emergencyPhone: '7569443737',
    email: 'kurnool@omnihospitals.in',
    opdHours: 'Mon - Sat: 08:30 AM - 08:00 PM',
    address: 'Sampath Nagar, Near New Bus Stand, Kurnool, Andhra Pradesh 518003',
    mapUrl: 'https://maps.google.com/?q=OMNI+Hospitals+Kurnool',

    aboutTitle: 'Rayalaseema’s Premier Multi-Specialty Hospital',
    aboutParagraphs: [
      'OMNI Hospitals Kurnool was established to bring high-end metropolitan healthcare services directly to Rayalaseema. Featuring round-the-clock trauma care, cardiac cath lab facilities, and advanced surgical specialties, we eliminate the need for patients to travel to distant metros for critical care.',
      'With over 55 resident specialists and state-of-the-art diagnostic machinery, OMNI Kurnool delivers world-class clinical expertise rooted in compassionate patient care.'
    ],
    aboutHighlights: [
      'Rayalaseema’s Leading Emergency & Trauma Center',
      'Advanced Cardiac Cath Lab & ICU Infrastructure',
      '24/7 Dialysis & Renal Care Facility',
      'High-Speed CT & 3D Sonography'
    ],

    specialties: [
      { name: 'Emergency & Trauma Care', desc: 'Rapid resuscitation, accident care, and 24/7 surgical readiness.' },
      { name: 'Cardiology & Cath Lab Services', desc: 'Emergency angioplasty (PPCI), pacemakers, and heart failure care.' },
      { name: 'Orthopedics & Joint Replacement', desc: 'Keyhole joint surgeries, fracture care, and arthritis management.' },
      { name: 'General & Laparoscopic Surgery', desc: 'Gallbladder, hernia, appendix, and GI surgeries with minimal scarring.' },
      { name: 'Nephrology & Dialysis', desc: 'Round-the-clock hemodialysis and kidney disease management.' }
    ],

    facilities: [
      {
        category: 'Technology',
        title: 'High-Speed Cardiac Cath Lab',
        desc: 'Enabling immediate emergency angioplasties within the golden hour.',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
      },
      {
        category: 'Critical Care',
        title: '24/7 Trauma & Emergency Bay',
        desc: 'Dedicated triage zones and critical resuscitation systems.',
        image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80'
      },
      {
        category: 'Diagnostics',
        title: 'Multi-Slice CT Scan Center',
        desc: 'Instant whole-body trauma imaging and chest/neuro diagnostics.',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80'
      },
      {
        category: 'Surgery',
        title: 'Sterile Modular Operating Rooms',
        desc: 'Equipped for complex orthopedic, general, and neuro procedures.',
        image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80'
      },
      {
        category: 'Patient Facilities',
        title: 'Spacious Deluxe & Private Rooms',
        desc: 'Designed for optimal rest with comprehensive patient amenities.',
        image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80'
      }
    ],

    techHighlights: [
      { name: 'Digital Cardiac Cath Lab', desc: 'Clear vascular imaging for emergency heart interventions.' },
      { name: 'High-Definition Laparoscopy Unit', desc: 'Minimal tissue trauma for abdominal procedures.' },
      { name: '24/7 Automated Blood Bank & Lab', desc: 'Immediate availability of blood components for trauma cases.' }
    ]
  },

  'giggles-vizag': {
    id: 'giggles-vizag',
    slug: 'giggles-vizag',
    name: 'Giggles by OMNI, Vizag',
    titleLocation: 'GIGGLES VIZAG',
    city: 'Visakhapatnam',
    tagline: 'Advanced Care. Trusted Experts. Better Outcomes.',
    heroImage: '/images/hospitals/giggles-vizag-card.jpg',
    aboutImage: '/images/hospitals/giggles-vizag-card.jpg',
    
    bedsCount: '100+ Beds',
    specialistsCount: '45+ Specialists',
    emergencyStatus: '24/7 Active',
    accreditation: 'NABH Accredited',
    phone: '7330788815',
    emergencyPhone: '7330788815',
    email: 'giggles@omnihospitals.in',
    opdHours: 'Mon - Sat: 08:30 AM - 07:30 PM | Sun: 09:00 AM - 01:00 PM',
    address: 'Health City, Arilova, Visakhapatnam, Andhra Pradesh 530040',
    mapUrl: 'https://maps.google.com/?q=Giggles+by+OMNI+Vizag',

    aboutTitle: 'Dedicated Women & Children’s Hospital',
    aboutParagraphs: [
      'Giggles by OMNI is a specialized center of excellence designed entirely around mothers, infants, and children. Situated in Health City Vizag, Giggles pairs warm, family-first hospitality with tertiary-level neonatal (NICU) and pediatric intensive care capabilities.',
      'From pain-free birthing and high-risk pregnancy care to pediatric sub-specialties like pediatric cardiology and neurology, Giggles ensures every mother and child receives world-class care.'
    ],
    aboutHighlights: [
      'Level-3 Neonatal Intensive Care Unit (NICU)',
      'LDR Birthing Suites & Painless Labor Services',
      'Pediatric ICU (PICU) & Pediatric Surgery Center',
      '4D Fetal Medicine & Genetic Counseling'
    ],

    specialties: [
      { name: 'Obstetrics & High-Risk Pregnancy', desc: 'Comprehensive maternal care, high-risk deliveries, and fetal monitoring.' },
      { name: 'Neonatology & Level-3 NICU', desc: 'Specialized care for micro-preemie babies born as early as 24 weeks.' },
      { name: 'Pediatrics & Pediatric Surgery', desc: 'General pediatrics, vaccination clinic, and keyhole pediatric surgery.' },
      { name: 'Gynecology & Laparoscopy', desc: 'Minimal access surgeries for fibroids, endometriosis, and ovarian cysts.' },
      { name: 'Pediatric Sub-Specialties', desc: 'Pediatric neurology, cardiology, pulmonology, and child development.' }
    ],

    facilities: [
      {
        category: 'Technology',
        title: '3D/4D Fetal Ultrasound & Echo',
        desc: 'Early detection of congenital anomalies and structural organ imaging.',
        image: 'https://images.unsplash.com/photo-1502740331539-12419076f827?auto=format&fit=crop&w=800&q=80'
      },
      {
        category: 'Critical Care',
        title: 'Level-3 Neonatal ICU (NICU)',
        desc: 'Advanced Giraffe incubators, cooling therapy, and high-frequency ventilation.',
        image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80'
      },
      {
        category: 'Diagnostics',
        title: 'Child-Friendly Laboratory & Imaging',
        desc: 'Painless pediatric sampling and gentle, non-stress diagnostic suites.',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80'
      },
      {
        category: 'Surgery',
        title: 'Pediatric Surgical Suites',
        desc: 'Specialized mini-instrumentation for delicate infant and child operations.',
        image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80'
      },
      {
        category: 'Patient Facilities',
        title: 'LDR (Labor-Delivery-Recovery) Suites',
        desc: 'Boutique birthing suites allowing family presence during labor.',
        image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80'
      }
    ],

    techHighlights: [
      { name: 'Giraffe Omnibed Neonatal Care System', desc: 'Optimal thermal and acoustic environment for fragile newborns.' },
      { name: '4D Color Doppler Fetal Scanner', desc: 'Real-time 4D visualization of fetal heart and organ development.' },
      { name: 'High-Frequency Oscillatory Ventilator (HFOV)', desc: 'Gentle lung-protective ventilation for preemies.' }
    ]
  }
};
