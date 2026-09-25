import React from 'react';
import { Calendar, MapPin, Building2, Stethoscope, Users, Clock, PhoneCall } from 'lucide-react';
import { getAssetUrl } from '../../utils/getAssetUrl';
import './RankedHospitalSection.css';

export default function RankedHospitalSection({ onBookAppointment, onNavigate }) {
  return (
    <section className="ranked-hospital-wrapper" id="ranked-hospital-section">
      
      {/* Glowy Atmospheric Sky Background */}
      <div className="ranked-bg-sky">
        <div className="sky-glow-white"></div>
        <div className="sky-glow-blue"></div>
      </div>
      
      {/* Giant Glass Bubble & Middle Cross */}
      <div className="giant-glass-bubble">
        <div className="bubble-ring"></div>
        <div className="middle-glass-cross">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35 10 C35 5, 40 0, 45 0 L55 0 C60 0, 65 5, 65 10 L65 35 L90 35 C95 35, 100 40, 100 45 L100 55 C100 60, 95 65, 90 65 L65 65 L65 90 C65 95, 60 100, 55 100 L45 100 C40 100, 35 95, 35 90 L35 65 L10 65 C5 65, 0 60, 0 55 L0 45 C0 40, 5 35, 10 35 L35 35 L35 10 Z" fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.7)" strokeWidth="2" filter="url(#glass-blur)" />
            <defs>
              <filter id="glass-blur" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#003296" floodOpacity="0.08"/>
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* Left Large Glass Cross */}
      <div className="left-glass-cross">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35 10 C35 5, 40 0, 45 0 L55 0 C60 0, 65 5, 65 10 L65 35 L90 35 C95 35, 100 40, 100 45 L100 55 C100 60, 95 65, 90 65 L65 65 L65 90 C65 95, 60 100, 55 100 L45 100 C40 100, 35 95, 35 90 L35 65 L10 65 C5 65, 0 60, 0 55 L0 45 C0 40, 5 35, 10 35 L35 35 L35 10 Z" fill="rgba(255,255,255,0.5)" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" filter="url(#glass-blur-left)" />
          <defs>
            <filter id="glass-blur-left" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#003296" floodOpacity="0.1"/>
            </filter>
          </defs>
        </svg>
      </div>



      <div className="ranked-container">
        
        {/* Top Promotional Content Area */}
        <div className="promo-content-row">
          
          {/* Left Text Content */}
          <div className="promo-text-col" style={{ paddingTop: '30px' }}>
            <h2 className="promo-main-heading" style={{ textTransform: 'none' }}>
              Compassionate Care. <br />
              <span style={{ color: '#3cb832' }}>Advanced Expertise.</span> <br />
              Better Outcomes.
            </h2>
            <p className="promo-desc" style={{ marginTop: '35px', fontSize: '1.1rem', color: '#334155', fontWeight: '500' }}>
              “Omni Hospitals is committed to delivering world-class healthcare with cutting-edge technology and a patient-first approach.”
            </p>

            
            <div className="promo-cta-group">
              <button 
                className="btn-exact btn-blue-glossy" 
                onClick={onBookAppointment}
              >
                <div className="btn-top-shine"></div>
                <Calendar size={18} strokeWidth={2.5} />
                <span>BOOK APPOINTMENT</span>
              </button>
              <button 
                className="btn-exact btn-white-glossy"
                onClick={() => onNavigate && onNavigate('locations')}
              >
                <div className="btn-top-shine"></div>
                <MapPin size={18} strokeWidth={2.5} />
                <span>FIND A HOSPITAL</span>
              </button>
            </div>
          </div>
          
          {/* Right Image Visual - Ready for your new image */}
          <div className="promo-img-col">
            <img 
              src={getAssetUrl('/images/hospitals/hospitals-hero.jpg')} 
              alt="Omni Hospitals" 
              className="exact-hospital-image"
              onError={(e) => {
                e.currentTarget.src = getAssetUrl('/images/hospitals/kothapet-card.jpg');
              }}
            />
          </div>

        </div>

        {/* Bottom Statistics Glass Bar */}
        <div className="exact-stats-bar">
          <div className="stats-bar-shine"></div>
          
          <div className="promo-stat-item">
            <div className="exact-icon-circle">
              {/* Custom Exact Hospital Icon */}
              <svg viewBox="0 0 24 24" width="26" height="26" fill="#0b4b8a">
                <path d="M9 2h6v20H9V2zm-6 6h5v14H3V8zm13 0h5v14h-5V8z" />
                <path d="M11 4h2v4h-2V4zm-1 1h4v2h-4V5z" fill="#ffffff" />
                <path d="M11 18h2v4h-2v-4z" fill="#ffffff" />
                <rect x="4.5" y="11" width="2" height="2" fill="#ffffff" />
                <rect x="4.5" y="15" width="2" height="2" fill="#ffffff" />
                <rect x="17.5" y="11" width="2" height="2" fill="#ffffff" />
                <rect x="17.5" y="15" width="2" height="2" fill="#ffffff" />
              </svg>
            </div>
            <div className="promo-stat-text">
              <span className="promo-stat-number">6</span>
              <span className="promo-stat-label">Hospitals</span>
            </div>
          </div>

          <div className="exact-divider"></div>

          <div className="promo-stat-item">
            <div className="exact-icon-circle">
              {/* Custom Exact Doctor Icon */}
              <svg viewBox="0 0 24 24" width="28" height="28">
                <circle cx="12" cy="6.5" r="4.5" fill="#0b4b8a" />
                <path d="M12 13c-4.42 0-8 2.69-8 6v3h16v-3c0-3.31-3.58-6-8-6z" fill="#0b4b8a" />
                <path d="M9 14l3 3 3-3" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 17v2" fill="none" stroke="#ffffff" strokeWidth="2" />
                <circle cx="12" cy="20.5" r="1.5" fill="#ffffff" />
              </svg>
            </div>
            <div className="promo-stat-text">
              <span className="promo-stat-number">2000+</span>
              <span className="promo-stat-label">Dedicated clinical, nursing, & support staff</span>
            </div>
          </div>

          <div className="exact-divider"></div>

          <div className="promo-stat-item">
            <div className="exact-icon-circle">
              {/* Custom Exact Users Icon */}
              <svg viewBox="0 0 24 24" width="32" height="32" fill="#0b4b8a">
                <circle cx="12" cy="7" r="3.5" />
                <path d="M12 11.5c-3 0-8 1.5-8 4.5V20h16v-4c0-3-5-4.5-8-4.5z" />
                <circle cx="5" cy="7.5" r="2.5" />
                <path d="M5 11c-2 0-4 .8-4 2.5V18h3v-4.5c0-1.5 2-2 3-2z" />
                <circle cx="19" cy="7.5" r="2.5" />
                <path d="M19 11c-.7 0-1.5.1-2 .2 1 .5 2 1.5 2 3.3V18h3v-4.5C23 11.8 21 11 19 11z" />
              </svg>
            </div>
            <div className="promo-stat-text">
              <span className="promo-stat-number">50 Lakh+</span>
              <span className="promo-stat-label">Happy Patients</span>
            </div>
          </div>

          <div className="exact-divider"></div>

          <div className="promo-stat-item">
            <div className="exact-icon-circle">
              {/* Custom Exact 24/7 Clock Icon */}
              <svg viewBox="0 0 24 24" width="26" height="26" fill="#0b4b8a">
                <path d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z" />
                <path d="M13 6v5.6l4.3 2.5-.8 1.4-5-3V6h1.5z" />
              </svg>
            </div>
            <div className="promo-stat-text">
              <span className="promo-stat-number">24/7</span>
              <span className="promo-stat-label">Emergency Care</span>
            </div>
          </div>

        </div>
        


      </div>
    </section>
  );
}
