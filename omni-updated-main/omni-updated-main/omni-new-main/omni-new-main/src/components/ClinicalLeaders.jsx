import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Plus, ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../utils/getAssetUrl';
import './ClinicalLeaders.css';

const CLINICAL_LEADERS_DATA = [
  {
    id: 1,
    name: 'Dr. Ved Prakash',
    designation: 'Director — UDAI OMNI',
    image: '/images/doctors/dr-ved-prakash.jpg',
    fallback: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Dr. Raghava Dutt M',
    designation: 'Director — UDAI OMNI',
    image: '/images/doctors/dr-raghava-dutt-m.jpg',
    fallback: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Dr. Udai Prakash',
    designation: 'Director — UDAI OMNI',
    image: '/images/doctors/dr-udai-prakash.jpg',
    fallback: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Dr. M Goutham Reddy',
    designation: 'Director — OMNI Kothapet',
    image: '/images/doctors/dr-m-goutham-reddy.jpg',
    fallback: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Dr. E Venkat Ramana Reddy',
    designation: 'Director — OMNI Kothapet',
    image: '/images/doctors/dr-e-venkat-ramana-reddy.jpg',
    fallback: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Dr. Y Sandeep Reddy',
    designation: 'Director — OMNI Kothapet',
    image: '/images/doctors/dr-y-sandeep-reddy.jpg',
    fallback: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop'
  }
];

export default function ClinicalLeaders({ onNavigate }) {
  const [activeIndex, setActiveIndex] = useState(2); // Start with Dr. Udai Prakash (index 2) centered
  const touchStartX = useRef(null);
  const mouseStartX = useRef(null);
  const isDragging = useRef(false);

  const total = CLINICAL_LEADERS_DATA.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  // Continuous non-stopping autoplay functionality (2.5 seconds interval)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 2500);
    return () => clearInterval(interval);
  }, [total]);

  // Keyboard arrow listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Mouse & Touch Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  const handleMouseDown = (e) => {
    mouseStartX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current || mouseStartX.current === null) return;
    const diff = mouseStartX.current - e.clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    isDragging.current = false;
    mouseStartX.current = null;
  };

  // Calculate relative position of card i relative to activeIndex
  const getCardOffset = (index) => {
    let offset = index - activeIndex;
    while (offset > 2) offset -= total;
    while (offset < -3) offset += total;
    return offset;
  };

  return (
    <section 
      className="clinical-leaders-section" 
      id="clinical-leaders"
    >
      {/* Subtle Ambient Background Glows */}
      <div className="bg-glow-radial glow-left" aria-hidden="true" />
      <div className="bg-glow-radial glow-right" aria-hidden="true" />

      {/* Decorative Dotted Grids & Flowing SVG Lines */}
      <div className="bg-dots-grid dots-top-right" aria-hidden="true" />
      <div className="bg-dots-grid dots-bottom-left" aria-hidden="true" />

      <svg className="bg-flowing-line line-top-left" viewBox="0 0 400 300" fill="none" aria-hidden="true">
        <path d="M 0 50 Q 200 150 400 50" stroke="rgba(0, 132, 230, 0.12)" strokeWidth="1.5" fill="none" />
      </svg>
      <svg className="bg-flowing-line line-bottom-right" viewBox="0 0 400 300" fill="none" aria-hidden="true">
        <path d="M 0 250 Q 200 100 400 250" stroke="rgba(112, 190, 68, 0.18)" strokeWidth="1.5" fill="none" />
      </svg>

      {/* Giant Subconscious Watermark */}
      <div className="bg-watermark-omni" aria-hidden="true">
        OMNI
      </div>

      <div className="clinical-leaders-container">
        {/* Section Header */}
        <div className="clinical-header-row">
          <div className="clinical-header-left">
            <div className="eyebrow-badge">
              <Plus className="eyebrow-plus-icon" />
              <span>CLINICAL EXCELLENCE</span>
            </div>
            <h2 className="clinical-main-heading">
              <span className="heading-navy">Meet Our</span> <br />
              <span className="heading-blue">Clinical </span>
              <span className="heading-green">Leaders</span>
            </h2>
            <p className="clinical-subtitle">
              Experienced specialists shaping patient-first care across OMNI Hospitals.
            </p>
          </div>

          {/* Carousel Controls Widget (Desktop Top Right) */}
          <div className="clinical-controls-widget">
            <button 
              type="button" 
              className="carousel-control-btn btn-prev"
              onClick={handlePrev}
              aria-label="Previous Clinical Leader"
            >
              <ChevronLeft />
            </button>

            <span className="control-counter">
              {String(activeIndex + 1).padStart(2, '0')} <span className="counter-slash">/</span> {String(total).padStart(2, '0')}
            </span>

            <button 
              type="button" 
              className="carousel-control-btn btn-next"
              onClick={handleNext}
              aria-label="Next Clinical Leader"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* 7-Card Center Focus Carousel Container */}
        <div 
          className="clinical-carousel-viewport"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <div className="clinical-cards-track">
            {CLINICAL_LEADERS_DATA.map((doctor, idx) => {
              const offset = getCardOffset(idx);
              const isActive = offset === 0;

              return (
                <div
                  key={doctor.id}
                  className={`clinical-doctor-card ${isActive ? 'is-active' : ''} offset-${offset}`}
                  onClick={() => setActiveIndex(idx)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${doctor.name}`}
                >
                  {/* Photo Container */}
                  <div className="doctor-photo-container">
                    <img 
                      src={getAssetUrl(doctor.image)} 
                      alt={doctor.name} 
                      onError={(e) => {
                        e.currentTarget.src = doctor.fallback;
                      }}
                      className="doctor-photo"
                      loading="lazy"
                    />
                    
                    {/* Active Profile CTA Button Overlay */}
                    {isActive && (
                      <button 
                        type="button" 
                        className="active-profile-cta"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onNavigate) onNavigate('/doctors');
                        }}
                      >
                        <span>VIEW PROFILE</span>
                        <ArrowRight className="cta-arrow" />
                      </button>
                    )}
                  </div>

                  {/* Doctor Info Section */}
                  <div className="doctor-info-box">
                    <div className="info-accent-line" />
                    <h3 className="doctor-name">{doctor.name}</h3>
                    <p className="doctor-designation">{doctor.designation}</p>
                    
                    {!isActive && (
                      <div className="inactive-plus-badge">
                        <Plus className="plus-icon" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Progress Bar & Indicator */}
        <div className="clinical-bottom-progress">
          <div className="progress-track">
            <div 
              className="progress-fill"
              style={{ width: `${((activeIndex + 1) / total) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
