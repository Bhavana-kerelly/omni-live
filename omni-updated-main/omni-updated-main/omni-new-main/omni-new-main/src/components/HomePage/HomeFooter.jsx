import React from 'react';
import { 
  PhoneCall, 
  ArrowRight,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { getAssetUrl } from '../../utils/getAssetUrl';
import { openWhatsAppAppointment } from '../../utils/whatsappHelper';

/* ============================================================================
   EXACT REFERENCE MATCHED SVG ICONS WITH BLUE (#0190DE) AND GREEN (#70BE44)
   ============================================================================ */

// 1. Cardiology & Vascular (Heart + Green EKG Pulse Line across heart)
function CardiologyIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 27S4 19.5 4 11.5A6.5 6.5 0 0 1 16 7A6.5 6.5 0 0 1 28 11.5C28 19.5 16 27 16 27Z" stroke="#0190DE" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 15H9.5L12 10.5L15.5 19.5L18.5 12.5L20.5 15H30" stroke="#70BE44" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// 2. Neurology & Neurosurgery (Brain Outline)
function NeurologyIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 5V27" stroke="#0190DE" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M16 5C13.5 3.5 9 4 6.5 7.5C4.5 10.5 5 14 7 15.5C4.5 17 4.5 20.5 6.5 22.5C8.5 24.5 13 25.5 16 27" stroke="#0190DE" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 5C18.5 3.5 23 4 25.5 7.5C27.5 10.5 27 14 25 15.5C27.5 17 27.5 20.5 25.5 22.5C23.5 24.5 19 25.5 16 27" stroke="#0190DE" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 11C11.5 12.5 14 12.5 16 12M22 11C20.5 12.5 18 12.5 16 12M9 19C11 18.5 13.5 19.5 16 20.5M23 19C21 18.5 18.5 19.5 16 20.5" stroke="#0190DE" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

// 3. Orthopedics & Joint Replacement (Knee Joint / Bones)
function OrthopedicsIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 4V10C13 12 11 13.5 13 15C14 16 15 16 16 16C17 16 18 16 19 15C21 13.5 19 12 19 10V4" stroke="#0190DE" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 28V22C13 20 11 18.5 13 17C14 16 15 16 16 16C17 16 18 16 19 17C21 18.5 19 20 19 22V28" stroke="#0190DE" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 20V28" stroke="#0190DE" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

// 4. Gastroenterology & Hepatology (Stomach)
function GastroenterologyIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 4V9C12.5 11 14 13 17 14C22.5 16 26.5 13.5 27.5 17.5C28.8 23.5 22 27.5 16 27.5C9.5 27.5 5.5 22.5 5.5 16.5C5.5 12 8 8.5 12.5 4Z" stroke="#0190DE" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.5 18C17 18.5 19 19.5 20 21" stroke="#0190DE" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

// 5. Emergency & Critical Care (Medical Kit Briefcase + Circle Cross)
function EmergencyIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="9" width="24" height="18" rx="4" stroke="#0190DE" strokeWidth="2.4"/>
      <path d="M11 9V6C11 4.9 11.9 4 13 4H19C20.1 4 21 4.9 21 6V9" stroke="#0190DE" strokeWidth="2.2"/>
      <circle cx="16" cy="18" r="5" stroke="#0190DE" strokeWidth="2"/>
      <path d="M16 14.5V21.5M12.5 18H19.5" stroke="#0190DE" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

// 6. Find a Specialist (Doctor + Green Stethoscope)
function FindSpecialistIcon({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="9.5" r="5.5" stroke="#0190DE" strokeWidth="2.5"/>
      <path d="M7 29.5C7 23.2 11.9 18 18 18C24.1 18 29 23.2 29 29.5" stroke="#0190DE" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M24 20.5V24.5C24 26.8 22 28.5 19.5 28.5C18.5 28.5 18 27.8 18 26.5" stroke="#70BE44" strokeWidth="2.4" strokeLinecap="round"/>
      <circle cx="18" cy="26.5" r="1.8" fill="#70BE44"/>
    </svg>
  );
}

// 7. Book Appointment (Calendar + Green Grid Dots)
function BookAppointmentIcon({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="8" width="26" height="23" rx="4" stroke="#0190DE" strokeWidth="2.5"/>
      <path d="M5 14H31" stroke="#0190DE" strokeWidth="2.2"/>
      <path d="M11 5V9M25 5V9" stroke="#0190DE" strokeWidth="2.5" strokeLinecap="round"/>
      <rect x="9.5" y="17.5" width="3.5" height="3.5" rx="0.8" fill="#70BE44"/>
      <rect x="16.25" y="17.5" width="3.5" height="3.5" rx="0.8" fill="#70BE44"/>
      <rect x="23" y="17.5" width="3.5" height="3.5" rx="0.8" fill="#70BE44"/>
      <rect x="9.5" y="23" width="3.5" height="3.5" rx="0.8" fill="#70BE44"/>
      <rect x="16.25" y="23" width="3.5" height="3.5" rx="0.8" fill="#70BE44"/>
      <rect x="23" y="23" width="3.5" height="3.5" rx="0.8" fill="#70BE44"/>
    </svg>
  );
}

// 8. Insurance & Cashless (Shield + Green Cross)
function InsuranceCashlessIcon({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 4.5L30 8.5V16.5C30 24 24.5 29.5 18 32C11.5 29.5 6 24 6 16.5V8.5L18 4.5Z" stroke="#0190DE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 12.5V22.5M13 17.5H23" stroke="#70BE44" strokeWidth="2.6" strokeLinecap="round"/>
    </svg>
  );
}

// 9. Health Resources (Document + Green Cross)
function HealthResourcesIcon({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 4.5C9 3.5 9.9 2.5 11 2.5H21.5L28.5 9.5V31.5C28.5 32.5 27.6 33.5 26.5 33.5H11C9.9 33.5 9 32.5 9 31.5V4.5Z" stroke="#0190DE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.5 2.5V9.5H28.5" stroke="#0190DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.75 13.5V20.5M15.25 17H22.25" stroke="#70BE44" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M14 24.5H23.5M14 28H19.5" stroke="#0190DE" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export default function HomeFooter({ onNavigate, onBookAppointment }) {
  const handleNavClick = (e, view, anchor) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(view);
    }
    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const SPECIALTIES_ROWS = [
    {
      id: 'cardiology',
      name: 'Cardiology & Vascular',
      iconFileName: 'cardiology-icon.png',
      icon: CardiologyIcon,
      view: 'specialities/cardiology'
    },
    {
      id: 'neurology',
      name: 'Neurology & Neurosurgery',
      iconFileName: 'neurology-icon.png',
      icon: NeurologyIcon,
      view: 'specialities/neurology'
    },
    {
      id: 'orthopedics',
      name: 'Orthopedics &\nJoint Replacement',
      iconFileName: 'orthopedics-icon.png',
      icon: OrthopedicsIcon,
      view: 'specialities/orthopedics'
    },
    {
      id: 'gastroenterology',
      name: 'Gastroenterology &\nHepatology',
      iconFileName: 'gastroenterology-icon.png',
      icon: GastroenterologyIcon,
      view: 'specialities/gastroenterology'
    },
    {
      id: 'emergency',
      name: 'Emergency & Critical Care',
      iconFileName: 'emergency-icon.png',
      icon: EmergencyIcon,
      view: 'specialities/emergency-medicine'
    }
  ];

  const SERVICE_CARDS = [
    {
      id: 'find-specialist',
      title: 'Find a\nSpecialist',
      iconFileName: 'find-specialist-icon.png',
      icon: FindSpecialistIcon,
      view: 'doctors'
    },
    {
      id: 'book-appointment',
      title: 'Book\nAppointment',
      iconFileName: 'book-appointment-icon.png',
      icon: BookAppointmentIcon,
      view: 'doctors'
    },
    {
      id: 'insurance',
      title: 'Insurance &\nCashless',
      iconFileName: 'insurance-icon.png',
      icon: InsuranceCashlessIcon,
      view: 'insurance'
    },
    {
      id: 'health-resources',
      title: 'Health\nResources',
      iconFileName: 'health-resources-icon.png',
      icon: HealthResourcesIcon,
      view: 'specialities'
    }
  ];

  return (
    <footer className="omni-exact-footer" role="contentinfo">
      <div className="exact-footer-container">
        
        {/* =========================================================================
            MAIN 4-COLUMN FOOTER CONTENT GRID WITH VERTICAL DIVIDERS
           ========================================================================= */}
        <div className="exact-footer-grid">
          
          {/* -----------------------------------------------------------------------
              COLUMN 1: BRAND & VERTICAL SLOGAN
             ----------------------------------------------------------------------- */}
          <div className="footer-col footer-col-brand">
            <div className="footer-logo-wrapper">
              <a href="/" onClick={(e) => handleNavClick(e, 'home')}>
                <img 
                  src={getAssetUrl('/omni-logo.png')} 
                  onError={(e) => { e.currentTarget.src = getAssetUrl('/omni-logo.svg'); }}
                  alt="OMNI Hospitals" 
                  className="footer-brand-logo" 
                />
              </a>
            </div>

            {/* Vertically Stacked Slogan */}
            <h2 className="footer-exact-slogan">
              <span className="slogan-blue">Healing</span>
              <span className="slogan-green">Lives.</span>
              <span className="slogan-blue">Building</span>
              <span className="slogan-green">Trust.</span>
            </h2>

            {/* Horizontal Blue Accent Line */}
            <div className="slogan-underline-accent" aria-hidden="true" />

            <p className="footer-exact-bio">
              A premier healthcare institution delivering tertiary super speciality medical care, robotic surgical innovations, and compassionate patient care across Telangana &amp; Andhra Pradesh.
            </p>
          </div>

          {/* VERTICAL DIVIDER 1 */}
          <div className="footer-v-divider" aria-hidden="true" />

          {/* -----------------------------------------------------------------------
              COLUMN 2: CARE & SPECIALITIES (5 ROWS)
             ----------------------------------------------------------------------- */}
          <div className="footer-col footer-col-care">
            <div className="col-header-group">
              <h3 className="col-exact-heading">CARE &amp; SPECIALITIES</h3>
              <div className="col-two-tone-line" aria-hidden="true">
                <span className="line-blue" />
                <span className="line-green" />
              </div>
            </div>

            <div className="specialty-exact-rows">
              {SPECIALTIES_ROWS.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="specialty-exact-row-item"
                    onClick={(e) => handleNavClick(e, item.view)}
                  >
                    <div className="specialty-icon-bubble">
                      <img 
                        src={getAssetUrl(`icons/${item.iconFileName}`)} 
                        alt={item.name}
                        className="footer-custom-icon-img"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="fallback-svg-icon" style={{ display: 'none' }}>
                        <IconComponent size={24} className="row-lucide-icon" />
                      </div>
                    </div>
                    <span className="specialty-row-name">{item.name}</span>
                    <ChevronRight size={18} className="row-chevron-dark" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* VERTICAL DIVIDER 2 */}
          <div className="footer-v-divider" aria-hidden="true" />

          {/* -----------------------------------------------------------------------
              COLUMN 3: PATIENT SERVICES (2x2 GRID OF 4 CARDS)
             ----------------------------------------------------------------------- */}
          <div className="footer-col footer-col-services">
            <div className="col-header-group">
              <h3 className="col-exact-heading">PATIENT SERVICES</h3>
              <div className="col-two-tone-line" aria-hidden="true">
                <span className="line-blue" />
                <span className="line-green" />
              </div>
            </div>

            <div className="patient-services-2x2-grid">
              {SERVICE_CARDS.map((card) => {
                const IconComp = card.icon;
                return (
                  <a
                    key={card.id}
                    href={`#${card.id}`}
                    className="patient-service-card"
                    onClick={(e) => {
                      e.preventDefault();
                      if (card.id === 'book-appointment') {
                        const saved = typeof window !== 'undefined' ? localStorage.getItem('omni_preferred_location') : null;
                        if (onBookAppointment) {
                          onBookAppointment(saved);
                        } else {
                          window.dispatchEvent(new CustomEvent('open-appointment-modal', { detail: { location: saved } }));
                        }
                      } else {
                        handleNavClick(e, card.view);
                      }
                    }}
                  >
                    <div className="service-card-icon-bubble">
                      <img 
                        src={getAssetUrl(`icons/${card.iconFileName}`)} 
                        alt={card.title}
                        className="footer-custom-icon-img"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="fallback-svg-icon" style={{ display: 'none' }}>
                        <IconComp size={30} className="card-lucide-blue" />
                      </div>
                    </div>
                    <span className="service-card-title">{card.title}</span>
                    
                    {/* Green Accent Right Arrow at bottom */}
                    <div className="card-bottom-green-accent">
                      <ArrowRight size={18} className="card-arrow-green" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* VERTICAL DIVIDER 3 */}
          <div className="footer-v-divider" aria-hidden="true" />

          {/* -----------------------------------------------------------------------
              COLUMN 4: CONNECT & HELPLINES (ENQUIRY CARD & SOCIAL)
             ----------------------------------------------------------------------- */}
          <div className="footer-col footer-col-connect">
            <div className="col-header-group">
              <h3 className="col-exact-heading">CONNECT &amp; HELPLINES</h3>
              <div className="col-two-tone-line" aria-hidden="true">
                <span className="line-blue" />
                <span className="line-green" />
              </div>
            </div>

            {/* 3D STACKED ENQUIRY CARD WITH GREEN UNDERLAYER */}
            <div className="enquiry-card-stacked-container">
              {/* Stacked Green Secondary Shape Underneath */}
              <div className="enquiry-green-underlayer" aria-hidden="true" />

              {/* Main Blue Card */}
              <a 
                href="tel:8880101000" 
                className="enquiry-main-blue-card"
                onClick={(e) => {
                  e.preventDefault();
                  openWhatsAppAppointment({ location: 'Central Enquiry' });
                }}
              >
                {/* Phone Icon Circle */}
                <div className="enquiry-phone-circle">
                  <PhoneCall size={22} className="phone-blue-icon" />
                </div>

                <div className="enquiry-card-content">
                  <span className="enquiry-card-label">CENTRAL ENQUIRY</span>
                  <span className="enquiry-card-number">8880 101 000</span>
                  <div className="enquiry-card-green-line" aria-hidden="true" />
                </div>
              </a>
            </div>

            {/* STAY CONNECTED SOCIAL MEDIA BLOCK */}
            <div className="stay-connected-wrapper">
              <div className="stay-connected-header">
                <span className="stay-connected-title">STAY CONNECTED</span>
                <div className="stay-connected-line" aria-hidden="true" />
              </div>

              <div className="social-exact-buttons-row">
                <a href="https://www.facebook.com/INCORHospitals" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-exact-btn">
                  <img 
                    src={getAssetUrl('/images/icons/facebook-icon.png')} 
                    alt="Facebook" 
                    className="social-icon-img"
                  />
                </a>
                <a href="https://www.instagram.com/omni_hospitals/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-exact-btn">
                  <img 
                    src={getAssetUrl('/images/icons/instagram-icon.png')} 
                    alt="Instagram" 
                    className="social-icon-img"
                  />
                </a>
                <a href="https://x.com/INCORHospitals" target="_blank" rel="noopener noreferrer" aria-label="Twitter (X)" className="social-exact-btn">
                  <img 
                    src={getAssetUrl('/images/icons/twitter-icon.png')} 
                    alt="Twitter" 
                    className="social-icon-img social-icon-x"
                  />
                </a>
                <a href="https://www.youtube.com/@omni_hospitals" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-exact-btn">
                  <img 
                    src={getAssetUrl('/images/icons/youtube-icon.png')} 
                    alt="YouTube" 
                    className="social-icon-img"
                  />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* =========================================================================
          BOTTOM ACCREDITATION & LEGAL STRIP WITH LEFT DECORATIVE SHAPE
         ========================================================================= */}
      {/* =========================================================================
          EXACT REFERENCE-MATCHED BLUE & GREEN WAVE BOTTOM ACCREDITATION STRIP
         ========================================================================= */}
      <div className="omni-wave-footer-bottom">
        
        {/* Organic Wave Graphic SVG */}
        <div className="bottom-wave-svg-wrapper" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="wave-svg-element">
            {/* Secondary Green Accent Wave on Top-Left */}
            <path d="M0,35 C140,5 340,5 500,42 L0,42 Z" fill="#70BE44" />
            
            {/* Primary OMNI Blue Wave (#0190DE / #087FD1) */}
            <path d="M0,30 C200,68 450,42 900,42 C1150,42 1300,22 1440,2 L1440,60 L0,60 Z" fill="#0190DE" />
          </svg>
        </div>

        {/* Solid Blue Bottom Content Bar */}
        <div className="bottom-blue-content-bar">
          <div className="bottom-strip-container">
            
            {/* 1. Accreditation Info */}
            <div className="bottom-accreditation-block text-white">
              <div className="footer-nabh-logo-wrapper">
                <img 
                  src={getAssetUrl('/images/nabh-logo.png')} 
                  alt="NABH Accredited" 
                  className="footer-nabh-seal-img" 
                />
              </div>
              <div className="acc-text-lines text-white">
                <span>NABH Accredited Tertiary Hospitals</span>
                <span><span className="dot-green">•</span> NABL Certified Diagnostic Laboratories</span>
              </div>
            </div>

            <div className="strip-v-divider-white" aria-hidden="true" />

            {/* 2. Copyright Info */}
            <div className="bottom-copyright-block text-white">
              <span>© {new Date().getFullYear()} OMNI Hospitals.</span>
              <span>All Rights Reserved.</span>
            </div>

            <div className="strip-v-divider-white" aria-hidden="true" />

            {/* 3. Legal Links */}
            <div className="bottom-legal-links text-white">
              <a href="/careers" onClick={(e) => handleNavClick(e, 'careers')}>Careers</a>
              <span className="dot-green">•</span>
              <a href="/privacy">Privacy Policy</a>
              <span className="dot-green">•</span>
              <a href="/terms">Terms of Service</a>
              <span className="dot-green">•</span>
              <a href="/sitemap">Sitemap</a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
