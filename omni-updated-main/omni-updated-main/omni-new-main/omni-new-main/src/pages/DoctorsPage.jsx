import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  MapPin, 
  ChevronDown, 
  ChevronUp,
  X, 
  Share2,
  PhoneCall,
  Calendar,
  SlidersHorizontal,
  ArrowUpRight,
  Sparkles,
  Check
} from 'lucide-react';
import HomeHeader from '../components/HomePage/HomeHeader';
import HomeFooter from '../components/HomePage/HomeFooter';
import DoctorProfileModal from '../components/DoctorProfileModal';
import { DOCTORS_DATA, SPECIALTY_CATEGORIES, LOCATION_OPTIONS } from '../data/doctorsData';
import { getAssetUrl } from '../utils/getAssetUrl';
import { getDoctorImage, getDoctorAvatarFallback } from '../utils/getDoctorImage';
import { openWhatsAppAppointment } from '../utils/whatsappHelper';
import './DoctorsPageRedesign.css';

export default function DoctorsPage({ onNavigate, onBookAppointment }) {
  const [heroSearch, setHeroSearch] = useState('');
  const [listSearch, setListSearch] = useState('');
  const searchQuery = heroSearch || listSearch;
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');
  const [selectedLocation, setSelectedLocation] = useState('All Hospitals');
  const [specialtySearch, setSpecialtySearch] = useState('');
  const [branchSearch, setBranchSearch] = useState('');
  
  // Accordion toggle states
  const [specialtyOpen, setSpecialtyOpen] = useState(true);
  const [branchOpen, setBranchOpen] = useState(true);

  // Modal and toast states
  const [selectedDoctorModal, setSelectedDoctorModal] = useState(null);
  const [bookingSuccessMsg, setBookingSuccessMsg] = useState(false);
  const [copiedDoctorId, setCopiedDoctorId] = useState(null);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (selectedDoctorModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedDoctorModal]);

  // Filter Doctors dynamically by search, specialty, and branch location
  const filteredDoctors = useMemo(() => {
    return DOCTORS_DATA.filter((doc) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        (doc.name || '').toLowerCase().includes(q) ||
        (doc.specialty || '').toLowerCase().includes(q) ||
        (doc.deptTag || '').toLowerCase().includes(q) ||
        (doc.designation || '').toLowerCase().includes(q) ||
        (doc.branch || '').toLowerCase().includes(q);

      const matchesSpecialty =
        selectedSpecialty === 'All Specialties' ||
        (doc.specialty || '').toLowerCase() === selectedSpecialty.toLowerCase() ||
        (doc.deptTag || '').toLowerCase().includes(selectedSpecialty.toLowerCase());

      const matchesLocation = (() => {
        if (selectedLocation === 'All Hospitals') return true;
        const sel = selectedLocation.toLowerCase().trim();
        const docLoc = `${doc.branch} ${doc.location}`.toLowerCase();
        
        if (sel === 'vizag') {
          return docLoc.includes('vizag') && !docLoc.includes('giggles');
        }
        if (sel.includes('giggles')) {
          return docLoc.includes('giggles');
        }
        return docLoc.includes(sel);
      })();

      return matchesQuery && matchesSpecialty && matchesLocation;
    });
  }, [searchQuery, selectedSpecialty, selectedLocation]);

  // Filtered Specialties list for left sidebar search
  const filteredSpecialtiesList = useMemo(() => {
    return SPECIALTY_CATEGORIES.filter((cat) =>
      cat.toLowerCase().includes(specialtySearch.toLowerCase().trim())
    );
  }, [specialtySearch]);

  // Filtered Locations list for left sidebar search
  const filteredLocationsList = useMemo(() => {
    return LOCATION_OPTIONS.filter((loc) =>
      loc.toLowerCase().includes(branchSearch.toLowerCase().trim())
    );
  }, [branchSearch]);

  const handleResetFilters = () => {
    setHeroSearch('');
    setListSearch('');
    setSelectedSpecialty('All Specialties');
    setSelectedLocation('All Hospitals');
    setSpecialtySearch('');
    setBranchSearch('');
  };

  const handleShareDoctor = (doc) => {
    setCopiedDoctorId(doc.id);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
    }
    setTimeout(() => {
      setCopiedDoctorId(null);
    }, 2000);
  };

  return (
    <div className="omni-apple-wrapper">
      {/* 1. Header Navbar */}
      <HomeHeader currentView="doctors" onNavigate={onNavigate} onBookAppointment={onBookAppointment} />

      {/* 2. BACKGROUND SYSTEM: Technical Medical Grid & Light Glows */}
      <div className="omni-tech-bg" aria-hidden="true">
        <div className="bg-grid-layer" />
        <div className="bg-glow-teal" />
        <div className="bg-glow-blue" />
      </div>

      <main className="omni-apple-main">
        
        {/* =========================================================================
            3. CINEMATIC HERO SECTION (PRESERVED)
           ========================================================================= */}
        <section className="omni-hero-section">
          <div className="omni-container hero-container">
            <div className="hero-text-content">
              <div className="hero-eyebrow">
                <span className="eyebrow-pulse" />
                <span>Expert Medical Faculty</span>
              </div>
              <h1 className="hero-title">
                Find the Right <br />
                <span className="hero-title-accent">Specialist for You.</span>
              </h1>
              <p className="hero-subtitle">
                Connect with highly experienced consultants across OMNI Hospitals. Dedicated multi-disciplinary specialists delivering compassionate, world-class healthcare.
              </p>

              {/* HERO SEARCH BAR */}
              <div className="hero-search-wrapper">
                <div className="apple-search-bar">
                  <Search className="apple-search-icon" size={20} />
                  <input
                    type="text"
                    className="apple-search-input"
                    placeholder="Search doctor name, specialty, or condition..."
                    value={heroSearch}
                    onChange={(e) => {
                      setHeroSearch(e.target.value);
                      if (e.target.value) setListSearch('');
                    }}
                  />
                  {heroSearch && (
                    <button
                      type="button"
                      className="clear-search-btn"
                      onClick={() => setHeroSearch('')}
                      aria-label="Clear search"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Hero Visual Composition */}
            <div className="hero-visual-composition">
              <div className="portrait-mask-wrapper">
                <img
                  src={getAssetUrl('/images/doctors-hero.jpg')}
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop';
                  }}
                  alt="OMNI Medical Specialist"
                  className="portrait-hero-img"
                />
                <div className="hero-portrait-overlay" />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. 2-COLUMN MAIN LAYOUT (APOLLO SIDEBAR FILTER + DOCTOR GRID - IMAGE 2)
           ========================================================================= */}
        <div className="omni-apollo-main-layout">
          <div className="omni-apollo-container">
            
            {/* LEFT COLUMN: SIDEBAR FILTER PANEL */}
            <aside className="apollo-filter-sidebar">
              <div className="sidebar-header">
                <div className="sidebar-title-group">
                  <SlidersHorizontal size={18} className="icon-blue" />
                  <h3 className="sidebar-heading">Filter By</h3>
                </div>
                <button 
                  type="button" 
                  className="clear-all-link"
                  onClick={handleResetFilters}
                >
                  Clear All
                </button>
              </div>

              {/* ACCORDION 1: SPECIALITIES */}
              <div className="filter-accordion-group">
                <button 
                  type="button" 
                  className="accordion-header-btn"
                  onClick={() => setSpecialtyOpen(!specialtyOpen)}
                >
                  <span>Specialities</span>
                  {specialtyOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {specialtyOpen && (
                  <div className="accordion-content-body">
                    <div className="sidebar-search-box">
                      <Search size={14} className="search-icon-sm" />
                      <input 
                        type="text" 
                        placeholder="Search Speciality"
                        value={specialtySearch}
                        onChange={(e) => setSpecialtySearch(e.target.value)}
                        className="sidebar-search-input"
                      />
                    </div>

                    <div className="filter-checkbox-scroll-list">
                      {filteredSpecialtiesList.map((cat) => {
                        const isSelected = selectedSpecialty === cat;
                        return (
                          <label key={cat} className="checkbox-item-row">
                            <input 
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => {
                                setSelectedSpecialty(isSelected ? 'All Specialties' : cat);
                              }}
                              className="custom-checkbox-input"
                            />
                            <span className="checkbox-label-text">{cat}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* ACCORDION 2: SELECT CITY / BRANCH */}
              <div className="filter-accordion-group">
                <button 
                  type="button" 
                  className="accordion-header-btn"
                  onClick={() => setBranchOpen(!branchOpen)}
                >
                  <span>Select City / Branch</span>
                  {branchOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {branchOpen && (
                  <div className="accordion-content-body">
                    <div className="sidebar-search-box">
                      <Search size={14} className="search-icon-sm" />
                      <input 
                        type="text" 
                        placeholder="Search Cities"
                        value={branchSearch}
                        onChange={(e) => setBranchSearch(e.target.value)}
                        className="sidebar-search-input"
                      />
                    </div>

                    <div className="filter-checkbox-scroll-list">
                      {filteredLocationsList.map((loc) => {
                        const isSelected = selectedLocation === loc;
                        return (
                          <label key={loc} className="checkbox-item-row">
                            <input 
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => {
                                setSelectedLocation(isSelected ? 'All Hospitals' : loc);
                              }}
                              className="custom-checkbox-input"
                            />
                            <span className="checkbox-label-text">{loc}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

            </aside>

            {/* RIGHT COLUMN: DOCTOR CARDS GRID */}
            <section className="apollo-content-main">
              
              {/* Active Filter Tags Bar */}
              <div className="active-filters-tags-bar">
                {(selectedSpecialty !== 'All Specialties' || selectedLocation !== 'All Hospitals' || searchQuery) && (
                  <button type="button" className="tag-pill reset-tag" onClick={handleResetFilters}>
                    <span>Reset</span> <X size={12} />
                  </button>
                )}

                {selectedLocation !== 'All Hospitals' && (
                  <span className="tag-pill filter-tag">
                    <span>{selectedLocation}</span> 
                    <X size={12} onClick={() => setSelectedLocation('All Hospitals')} className="tag-close" />
                  </span>
                )}

                {selectedSpecialty !== 'All Specialties' && (
                  <span className="tag-pill filter-tag">
                    <span>{selectedSpecialty}</span> 
                    <X size={12} onClick={() => setSelectedSpecialty('All Specialties')} className="tag-close" />
                  </span>
                )}

                {searchQuery && (
                  <span className="tag-pill filter-tag">
                    <span>"{searchQuery}"</span> 
                    <X size={12} onClick={() => { setHeroSearch(''); setListSearch(''); }} className="tag-close" />
                  </span>
                )}
              </div>

              {/* Header Row */}
              <div className="content-main-header-row">
                <h2 className="meet-experts-heading">
                  Meet Our <em className="italic-highlight">Experts</em> <span className="count-badge">({filteredDoctors.length})</span>
                </h2>

                <div className="top-search-bar-box">
                  <input 
                    type="text" 
                    placeholder="Search for Doctors"
                    value={listSearch}
                    onChange={(e) => {
                      setListSearch(e.target.value);
                      if (e.target.value) setHeroSearch('');
                    }}
                    className="top-doctor-search-input"
                  />
                  <button type="button" className="top-search-btn" aria-label="Search">
                    <Search size={18} />
                  </button>
                </div>
              </div>

              {/* DOCTOR CARDS GRID */}
              {filteredDoctors.length > 0 ? (
                <div className="apollo-doctors-grid">
                  {filteredDoctors.map((doc) => (
                    <div 
                      key={doc.id} 
                      className="apollo-doctor-card"
                      onClick={() => setSelectedDoctorModal(doc)}
                      style={{ cursor: 'pointer' }}
                    >
                      
                      {/* Top Body (Image Left + Info Right) */}
                      <div className="card-top-body">
                        {/* Left Doctor Image Frame */}
                        <div className="card-left-img-col">
                          <img 
                            src={getDoctorImage(doc)} 
                            alt={doc.name} 
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = getDoctorAvatarFallback(doc.name);
                            }}
                            className="doc-portrait-img"
                          />
                        </div>

                        {/* Right Doctor Meta Information */}
                        <div className="card-right-info-col">
                          <div className="doc-title-row">
                            <h3 className="doc-card-name">{doc.name}</h3>
                            <button 
                              type="button" 
                              className="share-icon-btn"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleShareDoctor(doc);
                              }}
                              title="Share doctor profile"
                            >
                              {copiedDoctorId === doc.id ? <Check size={16} className="text-green" /> : <Share2 size={16} />}
                            </button>
                          </div>

                          <span className="doc-specialty-sub">{doc.designation || doc.specialty}</span>


                          <div className="doc-meta-row">
                            <span className="exp-text">{doc.experience ? doc.experience : '15+ Years'}</span>
                          </div>

                          {/* Location Pin */}
                          <div className="doc-location-row">
                            <MapPin size={14} className="location-pin-icon" />
                            <span className="location-branch-name">{doc.branch}</span>
                          </div>
                        </div>
                      </div>

                        {/* Bottom Action Buttons Row */}
                        <div className="card-bottom-actions">
                          <button 
                            type="button" 
                            className="btn-book-appointment"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (onBookAppointment) {
                                onBookAppointment(doc);
                              } else {
                                openWhatsAppAppointment(doc);
                              }
                            }}
                          >
                            <span>Book Appointment</span>
                            <ArrowUpRight size={15} />
                        </button>

                        <a 
                          href="tel:8880101000" 
                          className="btn-call-now"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <PhoneCall size={14} />
                          <span>Call Now</span>
                        </a>
                      </div>

                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-doctors-found-box">
                  <Sparkles size={32} className="no-found-icon" />
                  <h3>No Specialists Found</h3>
                  <p>We couldn't find any doctor matching your search filters.</p>
                  <button type="button" className="reset-btn-pill" onClick={handleResetFilters}>
                    Reset All Filters
                  </button>
                </div>
              )}

            </section>

          </div>
        </div>

      </main>

      {/* 5. Minimal Doctor Profile Overlay */}
      {selectedDoctorModal && (
        <DoctorProfileModal 
          doctor={selectedDoctorModal}
          onClose={() => setSelectedDoctorModal(null)}
          onBookAppointment={onBookAppointment}
        />
      )}

      {/* Footer */}
      <HomeFooter onNavigate={onNavigate} onBookAppointment={onBookAppointment} />
    </div>
  );
}