import React, { useEffect, useRef, useState } from 'react';
import { 
  Users, 
  Building2, 
  ArrowRight, 
  Quote, 
  Heart, 
  ShieldPlus 
} from 'lucide-react';
import { getAssetUrl } from '../utils/getAssetUrl';
import './ExecutiveLeadership.css';

const LEADERSHIP_DATA = [
  {
    id: 'chairman',
    name: 'Suryanarayana Reddy Pulagam',
    role: 'CHAIRMAN & MANAGING DIRECTOR',
    quote: 'At OMNI Hospitals, our mission has always been simple yet profound: to create a healthcare ecosystem where patient trust, clinical quality, and affordability converge seamlessly.',
    image: '/images/specialties/suryanarayana-reddy.jpg',
    accent: 'blue',
    ctaText: 'Read Chairman Message',
    iconType: 'users',
    action: 'chairmanModal'
  }
];

export default function ExecutiveLeadership({ onReadChairmanMessage, onNavigate }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCtaClick = (action) => {
    if (action === 'chairmanModal' && onReadChairmanMessage) {
      onReadChairmanMessage();
    } else if (action === 'navigateDoctors' && onNavigate) {
      onNavigate('doctors');
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className={`executive-leadership-section ${isVisible ? 'is-in-view' : ''}`}
      id="executive-leadership"
    >
      {/* Decorative Background Elements */}
      <div className="exec-bg-glow glow-top-left" aria-hidden="true" />
      <div className="exec-bg-glow glow-bottom-right" aria-hidden="true" />
      <div className="exec-bg-dots" aria-hidden="true" />
      <div className="exec-bg-watermark" aria-hidden="true">OMNI Hospitals</div>

      <div className="executive-leadership-container">
        {/* Section Header */}
        <div className="exec-header">
          <div className="exec-eyebrow-wrapper">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">GOVERNANCE & STEWARDSHIP</span>
            <span className="eyebrow-line" />
          </div>

          <h2 className="exec-main-heading">
            Executive <span className="heading-italic-accent">Leadership</span>
          </h2>

          <p className="exec-subtitle">
            The visionaries guiding OMNI Hospitals towards a healthier, stronger tomorrow.
          </p>

          <div className="exec-header-divider">
            <span className="divider-line" />
            <div className="divider-double-circle">
              <span className="circle-left" />
              <span className="circle-right" />
            </div>
            <span className="divider-line" />
          </div>
        </div>

        {/* Leadership Cards Grid */}
        <div className={`exec-cards-grid ${LEADERSHIP_DATA.length === 1 ? 'exec-cards-single' : ''}`}>
          {LEADERSHIP_DATA.map((leader, index) => {
            const isBlue = leader.accent === 'blue';
            
            return (
              <div 
                key={leader.id} 
                className={`exec-card exec-card-${leader.accent} ${
                  index === 0 ? 'anim-card-left' : 'anim-card-right'
                }`}
              >
                {/* Top Section: Portrait & Identity */}
                <div className="exec-card-top">
                  {/* Circular Portrait Frame */}
                  <div className="exec-portrait-wrapper">
                    <div className="exec-portrait-ring outer-ring" />
                    <div className="exec-portrait-ring inner-ring" />
                    
                    {/* Decorative Orbiting Accents */}
                    <span className="orbit-dot dot-1" />
                    <span className="orbit-dot dot-2" />

                    {/* Portrait Image (Cutout Container) */}
                    <div className="exec-portrait-circle">
                      <img 
                        src={getAssetUrl(leader.image)} 
                        alt={leader.name} 
                        className="exec-portrait-img"
                      />
                    </div>

                    {/* Floating Icon Badge */}
                    <div className="exec-portrait-badge">
                      {isBlue ? (
                        <Users className="badge-icon" />
                      ) : (
                        <Building2 className="badge-icon" />
                      )}
                    </div>
                  </div>

                  {/* Role & Name Identity */}
                  <div className="exec-identity">
                    <div className="exec-role-pill">
                      {leader.role}
                    </div>

                    <h3 className="exec-leader-name">
                      {leader.name.split(' ').map((part, i) => (
                        <React.Fragment key={i}>
                          {part} {i === 0 && <br />}
                        </React.Fragment>
                      ))}
                    </h3>

                    <div className="exec-name-divider" />
                  </div>
                </div>

                {/* Quote Panel */}
                <div className="exec-quote-panel">
                  <div className="quote-icon-box">
                    <Quote className="quote-mark" />
                  </div>
                  <p className="exec-quote-text">
                    "{leader.quote}"
                  </p>
                </div>

                {/* CTA Button */}
                <div className="exec-cta-wrapper">
                  <button 
                    type="button" 
                    className="exec-cta-btn"
                    onClick={() => handleCtaClick(leader.action)}
                  >
                    <span>{leader.ctaText}</span>
                    <ArrowRight className="cta-arrow-icon" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
