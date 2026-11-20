import React, { useState } from 'react';
import { 
  MapPin, 
  CheckCircle2, 
  UserCheck, 
  Calendar, 
  ArrowRight, 
  Building2, 
  ShieldCheck 
} from 'lucide-react';
import { getAssetUrl } from '../../utils/getAssetUrl';
import { openWhatsAppAppointment } from '../../utils/whatsappHelper';

const OMNI_LOCATIONS = [
  {
    id: 'kothapet',
    name: 'Kothapet',
    badge: 'KOTHAPET',
    fullName: 'OMNI Hospitals, Kothapet',
    city: 'Hyderabad, Telangana',
    description: 'Premier multi-specialty tertiary care hospital offering 24/7 emergency, advanced interventional cardiology, robotic joint replacement, and comprehensive ICU care.',
    image: '/images/hospitals/kothapet-card.jpg',
    stats: [
      { label: 'SPECIALISTS', val: '150+' },
      { label: 'ADVANCED CARE', val: 'Robotic & ICU' },
      { label: 'BEDS', val: '350+' },
      { label: 'ACCREDITATION', val: 'NABH' }
    ]
  },
  {
    id: 'kukatpally',
    name: 'Kukatpally',
    badge: 'KUKATPALLY',
    fullName: 'OMNI Hospitals, Kukatpally',
    city: 'Hyderabad, Telangana',
    description: 'State-of-the-art super-specialty hospital featuring advanced Cath Labs, high-precision neurosurgery suites, robotic surgical technology, and 24/7 trauma care.',
    image: '/images/hospitals/kukatpally-card.jpg',
    stats: [
      { label: 'SPECIALISTS', val: '180+' },
      { label: 'ADVANCED CARE', val: 'Cath Lab & Neuro' },
      { label: 'BEDS', val: '300+' },
      { label: 'ACCREDITATION', val: 'NABH' }
    ]
  },
  {
    id: 'nampally',
    name: 'UDAI OMNI – Nampally',
    badge: 'NAMPALLY',
    fullName: 'UDAI OMNI Hospitals, Nampally',
    city: 'Hyderabad, Telangana',
    description: 'Iconic orthopedic, trauma, and multi-specialty hospital recognized for landmark joint replacements, spine surgery, emergency care, and specialized rehab.',
    image: '/images/hospitals/nampally-card.jpg',
    stats: [
      { label: 'SPECIALISTS', val: '120+' },
      { label: 'ADVANCED CARE', val: 'Ortho & Spine' },
      { label: 'BEDS', val: '250+' },
      { label: 'ACCREDITATION', val: 'NABH' }
    ]
  },
  {
    id: 'vizag',
    name: 'Vizag',
    badge: 'VIZAG',
    fullName: 'OMNI Hospitals, Vizag',
    city: 'Visakhapatnam, Andhra Pradesh',
    description: 'Premier super-specialty healthcare destination serving Coastal AP with advanced cardiac care, gastroenterology, nephrology, and 24/7 critical care.',
    image: '/images/hospitals/vizag-card.jpg',
    stats: [
      { label: 'SPECIALISTS', val: '160+' },
      { label: 'ADVANCED CARE', val: 'Cardiac & GI' },
      { label: 'BEDS', val: '300+' },
      { label: 'ACCREDITATION', val: 'NABH' }
    ]
  },
  {
    id: 'giggles-vizag',
    name: 'Giggles Vizag',
    badge: 'GIGGLES VIZAG',
    fullName: 'Giggles by OMNI Hospitals, Vizag',
    city: 'Visakhapatnam, Andhra Pradesh',
    description: 'Exclusive mother and child specialty hospital offering advanced NICU, level-3 pediatric intensive care, fetal medicine, and compassionate maternity suites.',
    image: '/images/hospitals/giggles-vizag-card.jpg',
    stats: [
      { label: 'SPECIALISTS', val: '80+' },
      { label: 'ADVANCED CARE', val: 'NICU & Maternity' },
      { label: 'BEDS', val: '150+' },
      { label: 'ACCREDITATION', val: 'NABH' }
    ]
  },
  {
    id: 'kurnool',
    name: 'Kurnool',
    badge: 'KURNOOL',
    fullName: 'OMNI Hospitals, Kurnool',
    city: 'Kurnool, Andhra Pradesh',
    description: 'Leading tertiary care hospital in Rayalaseema offering comprehensive emergency medicine, general surgery, critical care, and advanced diagnostic imaging.',
    image: '/images/hospitals/kurnool-card.jpg',
    stats: [
      { label: 'SPECIALISTS', val: '100+' },
      { label: 'ADVANCED CARE', val: 'Trauma & Surgery' },
      { label: 'BEDS', val: '200+' },
      { label: 'ACCREDITATION', val: 'NABH' }
    ]
  }
];

export default function FinalCTASection({ onFindDoctor, onBookAppointment }) {
  const getInitialLoc = () => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('omni_preferred_location');
      if (saved) {
        const found = OMNI_LOCATIONS.find((l) => 
          l.id === saved || 
          l.name.toLowerCase() === saved.toLowerCase() ||
          saved.toLowerCase().includes(l.id) ||
          l.fullName.toLowerCase().includes(saved.toLowerCase())
        );
        if (found) return found;
      }
    }
    return OMNI_LOCATIONS[0];
  };

  const [activeLoc, setActiveLoc] = useState(getInitialLoc);
  const [isFading, setIsFading] = useState(false);

  const handleSelectLocation = (loc) => {
    if (loc.id === activeLoc.id) return;
    setIsFading(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('omni_preferred_location', loc.name);
    }
    setTimeout(() => {
      setActiveLoc(loc);
      setIsFading(false);
    }, 200);
  };

  return (
    <section className="omni-locations-section" id="locations">
      <div className="locations-container">
        
        {/* TOP HEADER BLOCK WITH LOGO COLOUR BRANDING */}
        <div className="locations-header-block">
          <h2 className="locations-heading-brand">
            <span className="heading-omni-blue">Your Health.</span>{' '}
            <span className="heading-omni-green-pill">
              <span className="green-pill-bg" aria-hidden="true" />
              <span className="green-pill-text">Your OMNI.</span>
            </span>
          </h2>

          <p className="locations-subtext">
            Connect with expert specialists, advanced robotic facilities, and world-class care across OMNI Hospitals.
          </p>
        </div>

        {/* HORIZONTAL LOCATION SELECTOR */}
        <div className="locations-selector-wrapper">
          <div className="selector-label-row">
            <MapPin size={15} className="pin-icon-accent" />
            <span>Choose Your OMNI Location</span>
          </div>

          <div className="locations-pill-track">
            {OMNI_LOCATIONS.map((loc) => {
              const isActive = activeLoc.id === loc.id;
              return (
                <button
                  key={loc.id}
                  type="button"
                  className={`location-card-pill ${isActive ? 'active' : ''}`}
                  onClick={() => handleSelectLocation(loc)}
                >
                  <div className="pill-img-thumb">
                    <img src={getAssetUrl(loc.image)} alt={loc.name} className="thumb-img" />
                  </div>
                  <div className="pill-text-info">
                    <span className="pill-name">{loc.name}</span>
                  </div>
                  {isActive && (
                    <CheckCircle2 size={15} className="active-check-icon" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* MAIN DYNAMIC HOSPITAL SHOWCASE PANEL */}
        <div className="hospital-showcase-panel">
          
          {/* LEFT: Hospital Image Display */}
          <div className={`showcase-image-col ${isFading ? 'is-transitioning' : ''}`}>
            <img 
              src={getAssetUrl(activeLoc.image)} 
              alt={activeLoc.fullName} 
              className="showcase-main-img"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop';
              }}
            />
            <div className="showcase-img-gradient" />
            <div className="showcase-img-badge">
              <Building2 size={14} className="badge-icon" />
              <span>{activeLoc.city}</span>
            </div>
          </div>

          {/* RIGHT: Hospital Details & Stats */}
          <div className={`showcase-info-col ${isFading ? 'is-transitioning' : ''}`}>
            
            <div className="showcase-top-badge">
              <MapPin size={13} className="badge-pin" />
              <span>{activeLoc.badge}</span>
            </div>

            <h3 className="showcase-title">
              <span className="title-brand-blue">OMNI Hospitals, </span>
              <span className="title-brand-green">{activeLoc.name}</span>
            </h3>

            <p className="showcase-desc">{activeLoc.description}</p>

            {/* Statistics / Key Facilities Grid */}
            <div className="showcase-stats-grid">
              {activeLoc.stats.map((stat, idx) => (
                <div key={idx} className="stat-card-item">
                  <span className="stat-label">{stat.label}</span>
                  {stat.label === 'ACCREDITATION' ? (
                    <div className="accreditation-logo-wrapper">
                      <img 
                        src={getAssetUrl('/images/nabh-logo.png')} 
                        alt="NABH Accredited" 
                        className="nabh-logo-img"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallbackEl = e.currentTarget.nextElementSibling;
                          if (fallbackEl) fallbackEl.style.display = 'inline-block';
                        }}
                      />
                      <span className="stat-value nabh-text-fallback" style={{ display: 'none' }}>{stat.val}</span>
                    </div>
                  ) : (
                    <span className="stat-value">{stat.val}</span>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Action Buttons */}
            <div className="showcase-actions-row">
              <button 
                type="button" 
                className="showcase-btn-primary"
                onClick={onFindDoctor}
              >
                <UserCheck size={16} />
                <span>Find a Doctor</span>
                <ArrowRight size={15} className="btn-arrow" />
              </button>

              <button 
                type="button" 
                className="showcase-btn-secondary"
                onClick={(e) => {
                  if (e) e.preventDefault();
                  if (typeof window !== 'undefined') {
                    localStorage.setItem('omni_preferred_location', activeLoc.name);
                  }
                  if (onBookAppointment) onBookAppointment(activeLoc.name);
                  else openWhatsAppAppointment({ location: activeLoc.name });
                }}
              >
                <Calendar size={16} />
                <span>Book an Appointment</span>
                <ArrowRight size={15} className="btn-arrow" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
