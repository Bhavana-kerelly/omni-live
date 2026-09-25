import React, { useState, useEffect } from 'react';
import { 
  MapPin, Phone, ArrowRight, Building, Award, 
  Stethoscope, ShieldCheck, Activity, Calendar, UserCheck, 
  Compass, ChevronRight, CheckCircle2, Sparkles, Navigation 
} from 'lucide-react';
import HomeHeader from '../components/HomePage/HomeHeader';
import HomeFooter from '../components/HomePage/HomeFooter';
import { getAssetUrl } from '../utils/getAssetUrl';
import { openWhatsAppAppointment } from '../utils/whatsappHelper';
import './HospitalsPage.css';

const LOCATIONS_DATA = [
  {
    id: 'kothapet',
    name: 'OMNI Hospitals, Kothapet',
    city: 'Hyderabad',
    shortDesc: 'Multi-specialty center of excellence serving East Hyderabad with round-the-clock emergency services, keyhole surgical suites, and comprehensive clinical care.',
    fullStory: 'Established as a cornerstone of healthcare in East Hyderabad, OMNI Kothapet combines advanced emergency response with specialized centers in Pulmonology, Gastroenterology, and Orthopedics. Built around patient-first workflows, the facility ensures rapid triage and precision interventions.',
    beds: '180+ Beds',
    specialists: '65+ Doctors',
    majorFacilities: '24/7 Trauma, ICU, Cath Lab & Dialysis',
    accreditation: 'NABH Accredited',
    technology: 'Digital Cath Lab & 128-Slice CT',
    address: 'Opp. Telephone Exchange, Kothapet, Dilsukhnagar, Hyderabad, Telangana 500035',
    phone: '040-67369999 / 8096369999',
    mapLink: 'https://maps.google.com/?q=OMNI+Hospitals+Kothapet+Hyderabad',
    coords: { x: '44%', y: '52%' },
    image: '/images/hospitals/kothapet-card.jpg',
    editorialImage: '/images/hospitals/kothapet-card.jpg'
  },
  {
    id: 'kukatpally',
    name: 'OMNI Hospitals, Kukatpally',
    city: 'Hyderabad',
    shortDesc: 'Modern healthcare hub in West Hyderabad specializing in minimally invasive surgeries, robotic urology, orthopedics, and mother-and-child care.',
    fullStory: 'Situated in the heart of Hyderabad’s IT corridor, OMNI Kukatpally brings cutting-edge robotic surgical capabilities, advanced urology suites, and comprehensive women’s health programs under one roof, setting new benchmarks in clinical precision.',
    beds: '200+ Beds',
    specialists: '80+ Doctors',
    majorFacilities: 'Robotic OR, Dialysis Unit, NICU & Daycare',
    accreditation: 'NABH & NABL Accredited',
    technology: 'Da Vinci Robotic Surgical System',
    address: 'Near KPBH Metro Station, Kukatpally, Hyderabad, Telangana 500072',
    phone: '040-68252568 / 7799960073',
    mapLink: 'https://maps.google.com/?q=OMNI+Hospitals+Kukatpally+Hyderabad',
    coords: { x: '32%', y: '44%' },
    image: '/images/hospitals/kukatpally-card.jpg',
    editorialImage: '/images/hospitals/kukatpally-card.jpg'
  },
  {
    id: 'udai-nampally',
    name: 'UDAI OMNI Hospitals, Nampally',
    city: 'Hyderabad',
    shortDesc: 'Pioneering center for Advanced Orthopedics, Joint Replacements, Spine Surgery, and Trauma Care with over 40 years of specialized musculoskeletal legacy.',
    fullStory: 'Combining the iconic heritage of UDAI Clinic with OMNI’s modern infrastructure, UDAI OMNI Nampally is celebrated across South India for complex joint reconstruction, sports medicine, computer-navigated spine surgeries, and dedicated orthopedic rehabilitation.',
    beds: '150+ Beds',
    specialists: '50+ Doctors',
    majorFacilities: 'Spine Center, Computer-Navigated OTs & Rehab',
    accreditation: 'NABH Accredited',
    technology: 'ROSA Robotic Joint Replacement Suite',
    address: 'Near Assembly Metro Station, Chapel Road, Nampally, Hyderabad, Telangana 500001',
    phone: '040-23232226 / 040-66292228',
    mapLink: 'https://maps.google.com/?q=UDAI+OMNI+Hospitals+Nampally+Hyderabad',
    coords: { x: '38%', y: '48%' },
    image: '/images/hospitals/nampally-card.jpg',
    editorialImage: '/images/hospitals/nampally-card.jpg'
  },
  {
    id: 'vizag',
    name: 'OMNI Hospitals, Vizag',
    city: 'Visakhapatnam',
    shortDesc: 'Flagship coastal super-specialty hospital offering comprehensive cardiac sciences, neurosurgery, organ care, and round-the-clock emergency services.',
    fullStory: 'Serving the coastal region of Andhra Pradesh, OMNI Vizag stands as a beacon of high-end tertiary care. Equipped with state-of-the-art bi-plane cath labs and neuro-intensive care units, it provides world-class treatment for complex cardiac and neurovascular conditions.',
    beds: '220+ Beds',
    specialists: '90+ Doctors',
    majorFacilities: 'Modular OTs, Cardiac Care Unit & Stroke Suite',
    accreditation: 'NABH Accredited',
    technology: '3T MRI & Bi-Plane Digital Angiography',
    address: 'Waltair Main Road, Ram Nagar, Visakhapatnam, Andhra Pradesh 530002',
    phone: '8008904323',
    mapLink: 'https://maps.google.com/?q=OMNI+Hospitals+Ram+Nagar+Vizag',
    coords: { x: '76%', y: '36%' },
    image: '/images/hospitals/vizag-card.jpg',
    editorialImage: '/images/hospitals/vizag-card.jpg'
  },
  {
    id: 'kurnool',
    name: 'OMNI Hospitals, Kurnool',
    city: 'Kurnool',
    shortDesc: 'Rayalaseema’s premier healthcare destination featuring high-precision diagnostics, cardiac care, critical care, and trauma management.',
    fullStory: 'OMNI Kurnool bridges the healthcare gap in Rayalaseema by bringing metropolitan-grade medical facilities closer to the community. Its emergency and trauma teams operate 24/7 to deliver life-saving care with speed and clinical rigor.',
    beds: '150+ Beds',
    specialists: '55+ Doctors',
    majorFacilities: 'Critical Care, 24/7 Emergency & Trauma Suite',
    accreditation: 'NABH Accredited',
    technology: 'High-Definition Neuro Navigation',
    address: 'Sampath Nagar, Near New Bus Stand, Kurnool, Andhra Pradesh 518003',
    phone: '7569443737 / 08518-277188',
    mapLink: 'https://maps.google.com/?q=OMNI+Hospitals+Kurnool',
    coords: { x: '40%', y: '68%' },
    image: '/images/hospitals/kurnool-card.jpg',
    editorialImage: '/images/hospitals/kurnool-card.jpg'
  },
  {
    id: 'giggles-vizag',
    name: 'Giggles by OMNI, Vizag',
    city: 'Visakhapatnam',
    shortDesc: 'Dedicated Women & Children’s Hospital delivering compassionate maternity, high-risk obstetrics, level-3 NICU care, and pediatric surgery.',
    fullStory: 'Designed specifically around the unique physical and emotional needs of mothers and child patients, Giggles by OMNI blends warm, family-centered hospitality with tertiary neonatal and pediatric intensive care capabilities.',
    beds: '100+ Beds',
    specialists: '45+ Doctors',
    majorFacilities: 'Level-3 NICU, Birthing Suites & Pediatric ICU',
    accreditation: 'NABH Accredited',
    technology: '3D Fetal Echo & Advanced Neonatal Incubators',
    address: 'Health City, Arilova, Visakhapatnam, Andhra Pradesh 530040',
    phone: '7330788815',
    mapLink: 'https://maps.google.com/?q=Giggles+by+OMNI+Vizag',
    coords: { x: '82%', y: '30%' },
    image: '/images/hospitals/giggles-vizag-card.jpg',
    editorialImage: '/images/hospitals/giggles-vizag-card.jpg'
  }
];

const FACILITIES_DATA = [
  {
    id: 'operating-rooms',
    title: 'Advanced Operating Rooms',
    subtitle: 'Ultra-Clean Modular Surgical Suites',
    description: 'HEPA-filtered laminar airflow systems, integrated HD endoscopic towers, and robotic navigation for optimal surgical sterility and outcomes.',
    image: '/images/facilities/operating_rooms.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'robotic-surgery',
    title: 'Robotic Surgery',
    subtitle: 'Sub-Millimeter Surgical Accuracy',
    description: 'Next-generation robotic assistance platforms empowering surgeons with 3D high-definition visualization and wrist-articulated instruments.',
    image: '/images/facilities/robotic_surgery.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'critical-care',
    title: 'Critical Care & ICU',
    subtitle: 'Round-the-Clock Intensive Monitoring',
    description: 'Specialized medical, surgical, cardiac, and neonatal ICUs managed 24/7 by dedicated critical care physicians and specialized nurses.',
    image: '/images/facilities/critical_care.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'diagnostics',
    title: 'High-Precision Diagnostics',
    subtitle: 'Rapid, Accurate Digital Imaging',
    description: 'Ultra-fast 3T MRI, 128-slice CT scans, 4D ultrasound, and fully automated diagnostic pathology labs for early and precise detection.',
    image: '/images/facilities/diagnostics.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'emergency-care',
    title: 'Emergency & Trauma Care',
    subtitle: 'Immediate Golden-Hour Response',
    description: 'Dedicated Level-1 trauma bays, high-speed resuscitation zones, and fully equipped cardiac ambulances available 24 hours a day, 365 days a year.',
    image: '/images/facilities/emergency_trauma.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'patient-rooms',
    title: 'Executive & Patient Suites',
    subtitle: 'Serene, Restorative Healing Spaces',
    description: 'Ergonomically designed patient rooms with natural daylighting, noise isolation, dedicated attendant spaces, and personalized room controls.',
    image: '/images/facilities/patient_suites.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=80'
  }
];

export default function HospitalsPage({ onNavigate, onBookAppointment }) {
  const [selectedId, setSelectedId] = useState('kothapet');
  const [isAnimating, setIsAnimating] = useState(false);

  const selectedLoc = LOCATIONS_DATA.find((item) => item.id === selectedId) || LOCATIONS_DATA[0];

  const handleSelectLocation = (id) => {
    if (id === selectedId) return;
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedId(id);
      setIsAnimating(false);
    }, 250);
  };

  const handleDoctorClick = () => {
    if (onNavigate) onNavigate('doctors');
  };

  const handleAppointmentClick = (e) => {
    if (e) e.preventDefault();
    if (onBookAppointment) onBookAppointment();
    else openWhatsAppAppointment(selectedLoc ? { location: selectedLoc.name } : null);
  };

  return (
    <div className="hospitals-page-wrapper">
      {/* Header */}
      <HomeHeader currentView="hospitals" onNavigate={onNavigate} onBookAppointment={onBookAppointment} />

      <main className="hospitals-main-content">
        {/* =========================================================================
            1. HERO SECTION
           ========================================================================= */}
        <section className="hospitals-hero">
          <div className="hospitals-hero-glow" aria-hidden="true" />
          <div className="hospitals-hero-container">
            <div className="hospitals-hero-eyebrow">
              <Compass size={14} className="eyebrow-icon" />
              <span>Our Hospitals</span>
            </div>
            
            <h1 className="hospitals-hero-title">
              <span className="text-blue-primary">Care, </span>
              <span className="text-green-accent">closer to you.</span>
            </h1>

            <p className="hospitals-hero-lead">
              Discover OMNI Hospitals across our network of advanced healthcare facilities, 
              bringing specialist expertise, technology and compassionate care closer to every patient.
            </p>

            <div className="hospitals-hero-image-wrapper">
              <img 
                src={getAssetUrl('/images/hospitals/hospitals-hero.jpg')} 
                alt="OMNI Hospitals" 
                className="hospitals-hero-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80';
                }}
              />
              <div className="hospitals-hero-img-badge">
                <Building size={16} />
                <span>Multi-Specialty Centers of Excellence</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. LOCATION SELECTOR BAR
           ========================================================================= */}
        <section className="location-selector-section" id="location-selector">
          <div className="selector-container">
            <div className="location-nav-tabs" role="tablist" aria-label="OMNI Hospitals Locations">
              {LOCATIONS_DATA.map((loc) => {
                const isActive = loc.id === selectedId;
                return (
                  <button
                    key={loc.id}
                    role="tab"
                    aria-selected={isActive}
                    className={`location-tab-btn ${isActive ? 'active' : ''}`}
                    onClick={() => handleSelectLocation(loc.id)}
                  >
                    <img src={getAssetUrl(loc.image)} alt="" className="tab-thumb-img" />
                    <span className="tab-text">{loc.name.replace('OMNI Hospitals, ', '')}</span>
                    {isActive && <CheckCircle2 size={16} className="tab-check-icon" />}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. MAIN INTERACTIVE DISPLAY (SPLIT-SCREEN)
           ========================================================================= */}
        <section className="hospitals-showcase-section">
          <div className="showcase-container">
            <div className={`showcase-split-grid ${isAnimating ? 'fade-out' : 'fade-in'}`}>
              
              {/* LEFT: Hospital High-Res Visual */}
              <div className="showcase-visual-column">
                <div className="visual-image-card">
                  <img 
                    src={getAssetUrl(selectedLoc.image)} 
                    alt={selectedLoc.name} 
                    className="visual-main-image"
                  />
                  <div className="visual-gradient-overlay" />
                  
                  <div className="visual-badge-pill">
                    <Building size={14} />
                    <span>{selectedLoc.city}</span>
                  </div>

                  <div className="visual-caption">
                    <span className="caption-tag">{selectedLoc.accreditation}</span>
                    <h3 className="caption-heading">{selectedLoc.name}</h3>
                  </div>
                </div>
              </div>

              {/* RIGHT: Hospital Information & Actions */}
              <div className="showcase-info-column">
                <div className="info-header-block">
                  <div className="info-location-tag">
                    <MapPin size={15} />
                    <span>{selectedLoc.city}</span>
                  </div>
                  <h2 
                    className="info-hospital-name clickable"
                    onClick={() => onNavigate && onNavigate(`hospitals/${selectedLoc.id}`)}
                    style={{ cursor: 'pointer' }}
                    title="Click to view full hospital details"
                  >
                    {selectedLoc.name}
                  </h2>
                  <p className="info-hospital-desc">{selectedLoc.shortDesc}</p>
                </div>

                {/* Key Statistics Grid */}
                <div className="info-stats-grid">
                  <div className="stat-card">
                    <span className="stat-label">Beds Facility</span>
                    <span className="stat-value">{selectedLoc.beds}</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-label">Specialist Doctors</span>
                    <span className="stat-value">{selectedLoc.specialists}</span>
                  </div>
                  <div className="stat-card span-2">
                    <span className="stat-label">Major Facilities</span>
                    <span className="stat-value-sub">{selectedLoc.majorFacilities}</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-label">Accreditation</span>
                    <span className="stat-value-sub">{selectedLoc.accreditation}</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-label">Advanced Tech</span>
                    <span className="stat-value-sub">{selectedLoc.technology}</span>
                  </div>
                </div>

                {/* Address & Contact Info */}
                <div className="info-address-box">
                  <p className="address-text">
                    <strong>Address:</strong> {selectedLoc.address}
                  </p>
                  <p className="phone-text">
                    <strong>Helpdesk:</strong> {selectedLoc.phone}
                  </p>
                </div>

                {/* CTAs */}
                <div className="info-actions-row">
                  <button 
                    type="button" 
                    className="btn-primary-action"
                    onClick={handleDoctorClick}
                  >
                    <UserCheck size={16} />
                    <span>Find a Doctor</span>
                  </button>

                  <button 
                    type="button" 
                    className="btn-secondary-action"
                    onClick={handleAppointmentClick}
                  >
                    <Calendar size={16} />
                    <span>Book Appointment</span>
                  </button>

                  <a 
                    href={selectedLoc.mapLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary-action"
                  >
                    <Navigation size={16} />
                    <span>Get Directions</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            5. "EVERY OMNI HAS ITS OWN STORY" EDITORIAL SECTION
           ========================================================================= */}
        <section className="hospitals-story-section">
          <div className="story-container">
            <div className="story-header-left">
              <span className="story-eyebrow">DISTINCTIVE CARE</span>
              <h2 className="story-main-title">EVERY OMNI HAS ITS OWN STORY</h2>
              <p className="story-lead">
                While every facility shares our unified commitment to clinical excellence, each hospital is specifically 
                tailored to address the unique medical needs of its local community.
              </p>
            </div>

            {/* Asymmetrical Editorial Showcase */}
            <div className="story-editorial-grid">
              
              {/* Feature 1: Selected Hospital Story */}
              <article className="story-card feature-primary">
                <div className="story-card-image-box">
                  <img 
                    src={getAssetUrl(selectedLoc.editorialImage)} 
                    alt={selectedLoc.name} 
                    className="story-card-img"
                  />
                  <div className="story-card-overlay" />
                </div>
                <div className="story-card-content">
                  <span className="story-tag">{selectedLoc.city} • SPECIALTY HIGHLIGHT</span>
                  <h3 className="story-heading">{selectedLoc.name}</h3>
                  <p className="story-text">{selectedLoc.fullStory}</p>
                  
                  <div className="story-feature-list">
                    <div className="feature-chip">
                      <CheckCircle2 size={14} />
                      <span>{selectedLoc.technology}</span>
                    </div>
                    <div className="feature-chip">
                      <CheckCircle2 size={14} />
                      <span>{selectedLoc.accreditation}</span>
                    </div>
                  </div>
                </div>
              </article>

              {/* Feature 2: Specialized Care Insight */}
              <article className="story-card feature-secondary">
                <div className="story-card-content">
                  <span className="story-tag">EXCELLENCE ARCHITECTURE</span>
                  <h3 className="story-heading">Integrated Clinical Networks</h3>
                  <p className="story-text">
                    Our multi-center structure allows instant cross-specialty consultation, shared electronic medical records, 
                    and immediate inter-hospital emergency transport.
                  </p>
                </div>
                <div className="story-card-image-box">
                  <img 
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" 
                    alt="Clinical Collaboration" 
                    className="story-card-img"
                  />
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* =========================================================================
            6. MAJOR HOSPITAL FACILITIES
           ========================================================================= */}
        <section className="hospitals-facilities-section">
          <div className="facilities-container">
            <div className="facilities-header">
              <span className="facilities-eyebrow">WORLD-CLASS INFRASTRUCTURE</span>
              <h2 className="facilities-title">MAJOR HOSPITAL FACILITIES</h2>
              <p className="facilities-lead">
                Equipped with cutting-edge medical technology and patient-centric architecture designed for total healing.
              </p>
            </div>

            <div className="facilities-grid">
              {FACILITIES_DATA.map((fac) => (
                <div key={fac.id} className="facility-editorial-card">
                  <div className="facility-image-wrapper">
                    <img 
                      src={getAssetUrl(fac.image)} 
                      alt={fac.title} 
                      className="facility-img"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = fac.fallbackImage;
                      }}
                    />
                    <div className="facility-image-overlay" />
                  </div>
                  <div className="facility-content">
                    <span className="facility-subtitle">{fac.subtitle}</span>
                    <h3 className="facility-card-title">{fac.title}</h3>
                    <p className="facility-card-desc">{fac.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. FINAL CTA
           ========================================================================= */}
        <section className="hospitals-final-cta">
          <div className="cta-glow-bg" aria-hidden="true" />
          <div className="cta-container">
            <h2 className="cta-heading">
              <span className="text-blue-primary">Find Your </span>
              <span className="text-green-accent">OMNI.</span>
            </h2>
            <p className="cta-lead">
              Expert care, advanced technology and trusted specialists are closer than you think.
            </p>

            <div className="cta-button-group">
              <button 
                type="button" 
                className="cta-btn-primary"
                onClick={handleDoctorClick}
              >
                <UserCheck size={16} />
                <span>Find A Doctor</span>
              </button>

              <button 
                type="button" 
                className="cta-btn-secondary"
                onClick={handleAppointmentClick}
              >
                <Calendar size={16} />
                <span>Book An Appointment</span>
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <HomeFooter onNavigate={onNavigate} onBookAppointment={onBookAppointment} />
    </div>
  );
}
