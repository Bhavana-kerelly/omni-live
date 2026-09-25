import React, { useState, useMemo } from 'react';
import { 
  MapPin, Phone, PhoneCall, ArrowRight, Building, Award, 
  Stethoscope, ShieldCheck, Activity, Calendar, UserCheck, 
  Compass, ChevronRight, CheckCircle2, Navigation, Clock, Mail, ExternalLink, Sparkles 
} from 'lucide-react';
import HomeHeader from '../components/HomePage/HomeHeader';
import HomeFooter from '../components/HomePage/HomeFooter';
import { HOSPITALS_DETAIL_DATA } from '../data/hospitalsDetailData';
import { DOCTORS_DATA } from '../data/doctorsData';
import { getAssetUrl } from '../utils/getAssetUrl';
import { getDoctorImage, getDoctorAvatarFallback } from '../utils/getDoctorImage';
import './HospitalDetailPage.css';

export default function HospitalDetailPage({ locationSlug = 'kothapet', onNavigate, onBookAppointment }) {
  // Normalize slug to match dataset keys
  const activeSlug = HOSPITALS_DETAIL_DATA[locationSlug] ? locationSlug : 'kothapet';
  const hospital = HOSPITALS_DETAIL_DATA[activeSlug];

  const [activeFacilityCategory, setActiveFacilityCategory] = useState('All');

  // Filter doctors that belong to this location
  const locationDoctors = useMemo(() => {
    return DOCTORS_DATA.filter((doc) => {
      const docLoc = `${doc.branch || ''} ${doc.location || ''}`.toLowerCase();
      const slugKey = activeSlug.toLowerCase();
      if (slugKey === 'kothapet') return docLoc.includes('kothapet');
      if (slugKey === 'kukatpally') return docLoc.includes('kukatpally');
      if (slugKey === 'udai-nampally') return docLoc.includes('nampally') || docLoc.includes('udai');
      if (slugKey === 'vizag') return docLoc.includes('vizag') && !docLoc.includes('giggles');
      if (slugKey === 'kurnool') return docLoc.includes('kurnool');
      if (slugKey === 'giggles-vizag') return docLoc.includes('giggles');
      return true;
    });
  }, [activeSlug]);

  // Facilities filtering
  const facilityCategories = ['All', 'Technology', 'Critical Care', 'Diagnostics', 'Surgery', 'Patient Facilities'];
  const filteredFacilities = useMemo(() => {
    if (activeFacilityCategory === 'All') return hospital.facilities;
    return hospital.facilities.filter(f => f.category === activeFacilityCategory);
  }, [hospital, activeFacilityCategory]);

  const handleBookAppointment = () => {
    if (onBookAppointment) onBookAppointment();
    else if (onNavigate) onNavigate('contact');
  };

  const handleFindDoctor = () => {
    if (onNavigate) onNavigate('doctors');
  };

  return (
    <div className="hospital-detail-wrapper">
      {/* Global Header */}
      <HomeHeader currentView="hospitals" onNavigate={onNavigate} onBookAppointment={onBookAppointment} />

      <main className="detail-main-content">
        
        {/* =========================================================================
            1. CINEMATIC HERO SECTION
           ========================================================================= */}
        <section className="detail-hero-section">
          <div className="detail-hero-bg">
            <img 
              src={getAssetUrl(hospital.heroImage)} 
              alt={hospital.name} 
              className="detail-hero-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = getAssetUrl('/images/hospitals/hospital-hero.jpg');
              }}
            />
            <div className="detail-hero-overlay" />
          </div>

          <div className="detail-hero-container">
            <div className="detail-hero-eyebrow">
              <Building size={14} className="eyebrow-icon" />
              <span>Omni Hospitals</span>
            </div>

            <h1 className="detail-hero-title">
              {hospital.titleLocation}
            </h1>

            <p className="detail-hero-tagline">
              {hospital.tagline}
            </p>

            <div className="detail-hero-cta-group">
              <button 
                type="button" 
                className="btn-hero-primary"
                onClick={handleBookAppointment}
              >
                <Calendar size={16} />
                <span>Book an Appointment</span>
              </button>

              <a 
                href={hospital.mapUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-hero-secondary"
              >
                <Navigation size={16} />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. COMPACT HOSPITAL INFORMATION BAR
           ========================================================================= */}
        <section className="detail-infobar-section">
          <div className="infobar-container">
            <div className="infobar-item">
              <MapPin size={18} className="infobar-icon" />
              <div className="infobar-text">
                <span className="infobar-label">Location</span>
                <span className="infobar-value">{hospital.city}</span>
              </div>
            </div>

            <div className="infobar-divider" />

            <div className="infobar-item">
              <Building size={18} className="infobar-icon" />
              <div className="infobar-text">
                <span className="infobar-label">Beds</span>
                <span className="infobar-value">{hospital.bedsCount}</span>
              </div>
            </div>

            <div className="infobar-divider" />

            <div className="infobar-item">
              <Stethoscope size={18} className="infobar-icon" />
              <div className="infobar-text">
                <span className="infobar-label">Specialists</span>
                <span className="infobar-value">{hospital.specialistsCount}</span>
              </div>
            </div>

            <div className="infobar-divider" />

            <div className="infobar-item">
              <Activity size={18} className="infobar-icon pulse" />
              <div className="infobar-text">
                <span className="infobar-label">Emergency</span>
                <span className="infobar-value highlight">{hospital.emergencyStatus}</span>
              </div>
            </div>

            <div className="infobar-divider" />

            <div className="infobar-item">
              <ShieldCheck size={18} className="infobar-icon" />
              <div className="infobar-text">
                <span className="infobar-label">Accreditation</span>
                <span className="infobar-value">{hospital.accreditation}</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. ABOUT THIS HOSPITAL (EDITORIAL LAYOUT)
           ========================================================================= */}
        <section className="detail-about-section">
          <div className="detail-about-container">
            <div className="about-editorial-grid">
              
              {/* LEFT: Large Image */}
              <div className="about-visual-col">
                <div className="about-image-card">
                  <img src={hospital.aboutImage} alt={hospital.name} className="about-img" />
                  <div className="about-image-gradient" />
                  <div className="about-image-badge">
                    <Award size={16} />
                    <span>{hospital.accreditation}</span>
                  </div>
                </div>
              </div>

              {/* RIGHT: Hospital Introduction */}
              <div className="about-content-col">
                <span className="about-eyebrow">About This Hospital</span>
                <h2 className="about-title">{hospital.aboutTitle}</h2>

                {hospital.aboutParagraphs.map((p, idx) => (
                  <p key={idx} className="about-text">{p}</p>
                ))}

                <div className="about-highlights-list">
                  {hospital.aboutHighlights.map((item, idx) => (
                    <div key={idx} className="about-highlight-chip">
                      <CheckCircle2 size={16} className="chip-icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            4. SPECIALITIES AT THIS HOSPITAL (REFINED HORIZONTAL EDITORIAL)
           ========================================================================= */}
        <section className="detail-specialties-section">
          <div className="specialties-container">
            <div className="section-header-editorial">
              <span className="section-eyebrow">Clinical Departments</span>
              <h2 className="section-title">Specialities at This Hospital</h2>
              <p className="section-lead">World-class multi-specialty centers led by recognized medical leaders.</p>
            </div>

            <div className="specialties-horizontal-list">
              {hospital.specialties.map((spec, idx) => (
                <div key={idx} className="specialty-editorial-card">
                  <div className="specialty-number">0{idx + 1}</div>
                  <div className="specialty-info">
                    <h3 className="specialty-name">{spec.name}</h3>
                    <p className="specialty-desc">{spec.desc}</p>
                  </div>
                  <ChevronRight size={20} className="specialty-arrow" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. DOCTORS AT THIS HOSPITAL
           ========================================================================= */}
        <section className="detail-doctors-section">
          <div className="doctors-container">
            <div className="section-header-between">
              <div>
                <span className="section-eyebrow">Expert Clinicians</span>
                <h2 className="section-title">Doctors at {hospital.titleLocation}</h2>
              </div>
              <button 
                type="button" 
                className="btn-view-all-doctors"
                onClick={handleFindDoctor}
              >
                <span>View All Doctors</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="doctors-grid">
              {locationDoctors.length > 0 ? (
                locationDoctors.map((doc) => (
                  <div key={doc.id} className="detail-doctor-card">
                    <div className="doc-avatar-box">
                      <img 
                        src={getDoctorImage(doc)} 
                        alt={doc.name} 
                        className="doc-img" 
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = getDoctorAvatarFallback(doc.name);
                        }}
                      />
                      <span className="doc-specialty-badge">{doc.deptTag}</span>
                    </div>

                    <div className="doc-body">
                      <h3 className="doc-name">{doc.name}</h3>
                      <p className="doc-designation">{doc.designation}</p>
                      <p className="doc-qualifications">{doc.qualifications}</p>
                      <div className="doc-experience">
                        <Award size={14} />
                        <span>{doc.experience === '-' ? '-' : (doc.experience?.includes('Years') ? `${doc.experience} Experience` : `${doc.experience} Experience`)}</span>

                      </div>

                      <button 
                        type="button" 
                        className="btn-card-book"
                        onClick={handleBookAppointment}
                      >
                        <Calendar size={14} />
                        <span>Book Consultation</span>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-docs-text">Leading specialists available across all key clinical departments.</p>
              )}
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. FACILITIES AT THIS HOSPITAL
           ========================================================================= */}
        <section className="detail-facilities-section">
          <div className="facilities-container">
            <div className="facilities-header-center">
              <span className="section-eyebrow">Patient Infrastructure</span>
              <h2 className="section-title">Hospital Facilities</h2>
              <p className="section-lead">Advanced medical technology, sterile surgical environments, and patient comfort suites.</p>

              {/* Category Pills */}
              <div className="facilities-category-tabs">
                {facilityCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`fac-tab-btn ${activeFacilityCategory === cat ? 'active' : ''}`}
                    onClick={() => setActiveFacilityCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="facilities-cards-grid">
              {filteredFacilities.map((fac, idx) => (
                <div key={idx} className="fac-card">
                  <div className="fac-img-wrapper">
                    <img src={getAssetUrl(fac.image)} alt={fac.title} className="fac-img" />
                    <span className="fac-cat-badge">{fac.category}</span>
                  </div>
                  <div className="fac-card-body">
                    <h3 className="fac-card-title">{fac.title}</h3>
                    <p className="fac-card-desc">{fac.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. ADVANCED TECHNOLOGY
           ========================================================================= */}
        <section className="detail-tech-section">
          <div className="tech-container">
            <div className="tech-banner-card">
              <div className="tech-left-content">
                <span className="tech-eyebrow">Clinical Innovation</span>
                <h2 className="tech-title">Advanced Technology</h2>
                <p className="tech-subtitle">High-precision diagnostic and surgical machinery available at {hospital.name}.</p>
              </div>

              <div className="tech-highlights-grid">
                {hospital.techHighlights.map((tech, idx) => (
                  <div key={idx} className="tech-highlight-item">
                    <Sparkles size={18} className="tech-item-icon" />
                    <div>
                      <h4 className="tech-item-name">{tech.name}</h4>
                      <p className="tech-item-desc">{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. EMERGENCY STRIP
           ========================================================================= */}
        <section className="detail-emergency-strip">
          <div className="strip-container">
            <div className="strip-left">
              <div className="strip-pulse-indicator" />
              <div>
                <span className="strip-eyebrow">Critical Response Unit</span>
                <h2 className="strip-title">24/7 Emergency Care</h2>
              </div>
            </div>

            <a href={`tel:${hospital.emergencyPhone.replace(/\s+/g, '')}`} className="btn-emergency-call">
              <PhoneCall size={18} />
              <span>Call Emergency ({hospital.emergencyPhone})</span>
            </a>
          </div>
        </section>

        {/* =========================================================================
            9. CONTACT & LOCATION
           ========================================================================= */}
        <section className="detail-contact-section">
          <div className="contact-container">
            <div className="contact-grid">
              
              {/* LEFT: Info */}
              <div className="contact-info-card">
                <span className="section-eyebrow">Location & Hours</span>
                <h2 className="contact-card-title">{hospital.name}</h2>

                <div className="contact-details-list">
                  <div className="contact-detail-row">
                    <MapPin size={18} className="row-icon" />
                    <div>
                      <strong>Address:</strong>
                      <p>{hospital.address}</p>
                    </div>
                  </div>

                  <div className="contact-detail-row">
                    <Phone size={18} className="row-icon" />
                    <div>
                      <strong>Helpdesk Phone:</strong>
                      <p>{hospital.phone}</p>
                    </div>
                  </div>

                  <div className="contact-detail-row">
                    <Mail size={18} className="row-icon" />
                    <div>
                      <strong>Email:</strong>
                      <p>{hospital.email}</p>
                    </div>
                  </div>

                  <div className="contact-detail-row">
                    <Clock size={18} className="row-icon" />
                    <div>
                      <strong>OPD Timings:</strong>
                      <p>{hospital.opdHours}</p>
                    </div>
                  </div>
                </div>

                <a 
                  href={hospital.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-directions-link"
                >
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* RIGHT: Map Container */}
              <div className="contact-map-frame">
                <div className="map-frame-inner">
                  <Building size={48} className="map-placeholder-icon" />
                  <h3>{hospital.name}</h3>
                  <p>{hospital.address}</p>
                  <a 
                    href={hospital.mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-map-open"
                  >
                    <Navigation size={16} />
                    <span>Open in Maps</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            10. FINAL CTA
           ========================================================================= */}
        <section className="detail-final-cta">
          <div className="cta-glow" aria-hidden="true" />
          <div className="cta-content">
            <h2 className="cta-title">Your Care Starts Here.</h2>
            <p className="cta-lead">Book a consultation with our experienced specialists at {hospital.name}.</p>

            <div className="cta-actions">
              <button 
                type="button" 
                className="btn-cta-primary"
                onClick={handleFindDoctor}
              >
                <UserCheck size={16} />
                <span>Find a Doctor</span>
              </button>

              <button 
                type="button" 
                className="btn-cta-secondary"
                onClick={handleBookAppointment}
              >
                <Calendar size={16} />
                <span>Book an Appointment</span>
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Global Footer */}
      <HomeFooter onNavigate={onNavigate} onBookAppointment={onBookAppointment} />
    </div>
  );
}
