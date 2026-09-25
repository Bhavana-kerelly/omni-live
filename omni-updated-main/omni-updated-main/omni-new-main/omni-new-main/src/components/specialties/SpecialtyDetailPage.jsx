import React, { useState, useRef, useMemo } from 'react';
import { 
  ChevronRight, 
  Calendar, 
  User, 
  CheckCircle2, 
  MapPin, 
  Award, 
  ChevronLeft, 
  PhoneCall, 
  Heart, 
  Activity, 
  ShieldCheck, 
  Stethoscope, 
  Zap, 
  Users, 
  Building2, 
  Medal,
  HeartPulse
} from 'lucide-react';
import { getSpecialtyData } from '../../data/specialtiesData';
import { DOCTORS_DATA } from '../../data/doctorsData';
import { getAssetUrl } from '../../utils/getAssetUrl';
import { getDoctorImage, getDoctorAvatarFallback } from '../../utils/getDoctorImage';
import { openWhatsAppAppointment } from '../../utils/whatsappHelper';
import SpecialtyConditions from './SpecialtyConditions';
import DoctorProfileModal from '../DoctorProfileModal';
import './SpecialtyDetailPage.css';

export default function SpecialtyDetailPage({ specialtySlug = 'cardiology', onNavigate, onBookAppointment }) {
  const [selectedDoctorModal, setSelectedDoctorModal] = useState(null);

  // Retrieve specialty configuration dynamically based on specialtySlug prop
  const specialty = useMemo(() => {
    return getSpecialtyData(specialtySlug);
  }, [specialtySlug]);

  // Dynamic Central Doctor Dataset Filtering for this specific specialty
  const specialtyDoctors = useMemo(() => {
    if (!DOCTORS_DATA || !Array.isArray(DOCTORS_DATA)) return [];
    
    const targetName = specialty.name.toLowerCase();
    const targetSlug = specialty.slug.toLowerCase();

    let matched = DOCTORS_DATA.filter((doc) => {
      const docSpec = (doc.specialty || '').toLowerCase();
      const docDept = (doc.deptTag || '').toLowerCase();
      
      return (
        docSpec.includes(targetName) ||
        targetName.includes(docSpec) ||
        docDept.includes(targetSlug) ||
        (targetSlug === 'cardiology' && (docSpec.includes('cardio') || docSpec.includes('vascular') || docDept.includes('cardio'))) ||
        (targetSlug === 'orthopedics' && (docSpec.includes('ortho') || docSpec.includes('spine') || docDept.includes('ortho'))) ||
        (targetSlug === 'neurology' && (docSpec.includes('neuro') || docSpec.includes('brain') || docDept.includes('neuro'))) ||
        (targetSlug === 'gastroenterology' && (docSpec.includes('gastro') || docSpec.includes('liver') || docSpec.includes('hepat') || docDept.includes('gastro'))) ||
        (targetSlug === 'obstetrics-gynaecology' && (docSpec.includes('gynaec') || docSpec.includes('gynec') || docSpec.includes('obstet') || docDept.includes('gynaec'))) ||
        (targetSlug === 'ent' && (docSpec.includes('ent') || docSpec.includes('ear') || docSpec.includes('ent'))) ||
        (targetSlug === 'nephrology' && (docSpec.includes('nephro') || docSpec.includes('kidney') || docSpec.includes('renal') || docSpec.includes('uro') || docSpec.includes('nephro'))) ||
        (targetSlug === 'pulmonology' && (docSpec.includes('pulmo') || docSpec.includes('chest') || docSpec.includes('lung') || docSpec.includes('pulmo'))) ||
        (targetSlug === 'dermatology' && (docSpec.includes('derma') || docSpec.includes('skin') || docSpec.includes('derma'))) ||
        (targetSlug === 'psychiatry' && (docSpec.includes('psych') || docSpec.includes('mind') || docSpec.includes('psych'))) ||
        (targetSlug === 'emergency-medicine' && (docSpec.includes('emergen') || docSpec.includes('critical') || docSpec.includes('casualty') || docDept.includes('emergen'))) ||
        (targetSlug === 'general-medicine' && (docSpec.includes('general medicine') || docSpec.includes('physician') || docSpec.includes('internal'))) ||
        (targetSlug === 'general-surgery' && (docSpec.includes('general surgery') || docSpec.includes('laparoscop') || docSpec.includes('bariatric'))) ||
        (targetSlug === 'plastic-surgery' && (docSpec.includes('plastic') || docSpec.includes('reconstructive') || docSpec.includes('cosmetic')))
      );
    });

    if (matched.length === 0) {
      matched = DOCTORS_DATA.slice(0, 8);
    }

    return matched;
  }, [specialty]);

  // Available Branch Locations for filtering
  const availableLocations = useMemo(() => {
    const locations = new Set();
    specialtyDoctors.forEach((doc) => {
      if (doc.location) locations.add(doc.location);
      else if (doc.branch) {
        const cleanBranch = doc.branch.replace(/UDAI OMNI|OMNI/g, '').trim();
        locations.add(cleanBranch || doc.branch);
      }
    });
    const locList = Array.from(locations);
    if (locList.length === 0) {
      return ['All Locations', 'Kothapet', 'Kukatpally', 'Nampally', 'Vizag', 'Warangal'];
    }
    return ['All Locations', ...locList];
  }, [specialtyDoctors]);

  // Active Location Filter (Default: "All Locations")
  const [selectedLocation, setSelectedLocation] = useState('All Locations');

  // Filtered doctors based on selected location
  const filteredDoctors = useMemo(() => {
    if (selectedLocation === 'All Locations') return specialtyDoctors;
    return specialtyDoctors.filter((doc) => {
      const docLoc = (doc.location || doc.branch || '').toLowerCase();
      return docLoc.includes(selectedLocation.toLowerCase());
    });
  }, [specialtyDoctors, selectedLocation]);

  // Dynamic doctor and branch counts
  const doctorCount = specialtyDoctors.length || 8;
  const branchCount = useMemo(() => {
    const branches = new Set(specialtyDoctors.map((doc) => doc.branch || doc.location));
    return branches.size || 5;
  }, [specialtyDoctors]);

  // Carousel ref
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;
    const scrollAmount = direction === 'left' ? -360 : 360;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Helper navigation
  const handleNavigateView = (view, slug) => {
    if (onNavigate) onNavigate(view, slug);
  };

  const handleBookClick = (e, doc = null) => {
    if (e) e.preventDefault();
    if (onBookAppointment) onBookAppointment();
    else openWhatsAppAppointment(doc || { specialty: specialty.name });
  };

  return (
    <div className="specialty-detail-page">
      
      {/* 1. HERO SECTION (DYNAMIC FOR EVERY SPECIALTY) */}
      <section className="screenshot-hero-section">
        <div className="screenshot-hero-container">
          
          {/* Left Hero Content */}
          <div className="screenshot-hero-left">
            <nav className="screenshot-breadcrumbs" aria-label="Breadcrumb">
              <a 
                href="#home" 
                onClick={(e) => { e.preventDefault(); handleNavigateView('home'); }}
                className="crumb-link"
              >
                Home
              </a>
              <span className="crumb-sep">/</span>
              <a 
                href="#specialities" 
                onClick={(e) => { e.preventDefault(); handleNavigateView('specialities'); }}
                className="crumb-link"
              >
                Specialities
              </a>
              <span className="crumb-sep">/</span>
              <span className="crumb-active">{specialty.name}</span>
            </nav>

            <span className="screenshot-hero-tagline">{specialty.deptTag || specialty.name.toUpperCase()}</span>

            <h1 className="screenshot-hero-headline">
              {specialty.titleLine1 || `${specialty.name} Care.`} <br />
              {specialty.titleLine2 || 'Without Compromise.'}
            </h1>

            <p className="screenshot-hero-subtitle">
              {specialty.heroDescription || `Comprehensive ${specialty.name.toLowerCase()} care powered by advanced medical technology and delivered by experienced specialists across all Omni Hospitals.`}
            </p>

            <div className="screenshot-hero-buttons">
              <a 
                href="#book" 
                onClick={(e) => handleBookClick(e)} 
                className="btn-navy-pill"
              >
                <span>Book an Appointment</span>
                <Calendar size={16} />
              </a>

              <a 
                href="#our-specialists" 
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('our-specialists');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-white-pill"
              >
                <span>Find a {specialty.name} Specialist</span>
                <User size={16} />
              </a>
            </div>
          </div>

          {/* Right Hero Visual */}
          <div className="screenshot-hero-right">
            <div className="heart-visual-wrapper">
              <img 
                src={getAssetUrl(specialty.heroImage || '/images/cardiology.jpg')} 
                alt={`${specialty.name} Visual`}
                className="heart-3d-img"
              />
              
              {/* Floating Vital Badges */}
              <div className="badge-card badge-bpm">
                <span className="badge-num">24/7</span>
                <span className="badge-unit">CARE</span>
                <span className="badge-desc">Omni Network</span>
              </div>

              <div className="badge-card badge-care">
                <span className="badge-title">Level 1</span>
                <span className="badge-sub">{specialty.name} Unit</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. CONDITIONS WE TREAT (INTERACTIVE ORBITAL FOR ALL SPECIALTIES) */}
      <SpecialtyConditions specialty={specialty} onNavigate={onNavigate} />

      {/* 4. SPECIALISTS SECTION (DYNAMICALLY FILTERED PER SPECIALTY) */}
      <section className="screenshot-doctors-section" id="our-specialists">
        <div className="screenshot-section-header center">
          <span className="section-tag-blue">OUR {specialty.name.toUpperCase()} SPECIALISTS</span>
          <p className="doctors-header-subtext">Experienced {specialty.name.toLowerCase()} specialists across all Omni Hospitals</p>
        </div>

        {/* Location Filter Pills & Right Side Count */}
        <div className="doctors-filter-bar">
          <div className="filter-pills-row">
            {availableLocations.map((loc) => (
              <button
                key={loc}
                type="button"
                className={`loc-pill ${selectedLocation === loc ? 'active' : ''}`}
                onClick={() => setSelectedLocation(loc)}
              >
                {loc}
              </button>
            ))}
          </div>

          <div className="doctors-count-info">
            <span className="count-num">{doctorCount} Specialists</span>
            <span className="count-sub">Across {branchCount} Hospitals</span>
          </div>
        </div>

        {/* Doctors Carousel with Side Arrows */}
        <div className="carousel-relative-box">
          <button 
            type="button"
            className="carousel-side-arrow left"
            onClick={() => scrollCarousel('left')}
            aria-label="Previous doctors"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="doctors-flex-track" ref={carouselRef}>
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doc) => (
                <div 
                  key={doc.id || doc.slug} 
                  className="screenshot-doctor-card"
                  onClick={() => setSelectedDoctorModal(doc)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="doc-img-left">
                    <img 
                      src={getDoctorImage(doc)} 
                      alt={doc.name} 
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = getDoctorAvatarFallback(doc.name);
                      }}
                      className="screenshot-doc-portrait"
                    />
                  </div>
                  <div className="doc-info-right">
                    <h3 className="doc-name">{doc.name}</h3>
                    <p className="doc-qual">{doc.qualifications || 'MBBS, MD'}</p>
                    <p className="doc-desig">{doc.designation || `Consultant ${specialty.name}`}</p>

                    <div className="doc-meta-row">
                      <span className="meta-exp">{doc.experience || '15+ Years Experience'}</span>
                    </div>

                    <div className="doc-location-row">
                      <MapPin size={13} className="pin-icon" />
                      <span>{doc.branch || doc.location || 'Omni Hospitals'}</span>
                    </div>

                    <div className="doc-card-buttons">
                      <button 
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedDoctorModal(doc);
                        }}
                        className="btn-card-white"
                      >
                        View Profile
                      </button>
                      <button 
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBookClick(e, doc);
                        }}
                        className="btn-card-navy"
                      >
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-doctors-found" style={{ width: '100%', padding: '2.5rem', textStyle: 'center' }}>
                <p>No {specialty.name} specialists found for location "{selectedLocation}".</p>
                <button 
                  type="button"
                  onClick={() => setSelectedLocation('All Locations')}
                  className="btn-white-pill"
                  style={{ marginTop: '1rem' }}
                >
                  View All Locations
                </button>
              </div>
            )}
          </div>

          <button 
            type="button"
            className="carousel-side-arrow right"
            onClick={() => scrollCarousel('right')}
            aria-label="Next doctors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="carousel-dots-row">
          <span className="dot active" />
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER (DYNAMIC FOR EVERY SPECIALTY) */}
      <section className="screenshot-cta-section">
        <div className="cta-navy-card">
          
          <div className="cta-card-left">
            <h2 className="cta-title">
              {`${specialty.ctaTitleLine1 || `Your ${specialty.name} Health.`} ${specialty.ctaTitleLine2 || 'Our Priority.'}`}
            </h2>
            <p className="cta-desc">
              {specialty.ctaDescription || `Take the first step towards better health. Book your appointment with our ${specialty.name.toLowerCase()} experts today.`}
            </p>

            <div className="cta-btn-group">
              <a 
                href="#book"
                onClick={(e) => handleBookClick(e)}
                className="btn-cta-white-pill"
              >
                <span>Book an Appointment</span>
                <Calendar size={16} />
              </a>

              <a 
                href="tel:8880101000" 
                className="btn-cta-outline-pill"
              >
                <PhoneCall size={16} />
                <span>Call Us Now</span>
              </a>
            </div>
          </div>

          <div className="cta-card-right">
            <img 
              src={getAssetUrl(specialty.heroImage || '/images/cardiology.jpg')} 
              alt="Medical Care Graphic"
              className="cta-heart-img"
            />
          </div>

        </div>
      </section>

      {/* Minimal Doctor Profile Overlay */}
      {selectedDoctorModal && (
        <DoctorProfileModal 
          doctor={selectedDoctorModal}
          onClose={() => setSelectedDoctorModal(null)}
        />
      )}

    </div>
  );
}
