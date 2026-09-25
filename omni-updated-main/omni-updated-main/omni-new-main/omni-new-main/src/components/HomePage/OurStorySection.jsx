import React from 'react';
import { ArrowRight, ShieldCheck, Award, Building2, Cpu, Heart, Sparkles } from 'lucide-react';
import AnimatedNumber from '../AnimatedNumber';
import { getAssetUrl } from '../../utils/getAssetUrl';

export default function OurStorySection({ onExploreStory }) {
  const BOTTOM_CARDS = [
    {
      icon: Award,
      title: '15+ Years',
      subtitle: 'of Trusted Care'
    },
    {
      icon: Building2,
      title: '6 Locations',
      subtitle: 'Across 2 States'
    },
    {
      icon: Cpu,
      title: 'Advanced Technology',
      subtitle: 'Modern infrastructure for better outcomes'
    },
    {
      icon: Heart,
      title: 'Patient First',
      subtitle: 'Compassionate care that puts you first'
    }
  ];

  return (
    <section className="our-story-section-v2" id="our-story">
      <div className="story-v2-container">
        {/* Main Grid Box Enclosure */}
        <div className="story-grid-card-box">
          {/* TOP ROW: Content Left | 15 Years Center | Curved Hospital Visual Right */}
          <div className="story-top-composition">
            
            {/* Left Editorial Copy */}
            <div className="story-left-col">
              <div className="story-eyebrow-pill-v2">
                <span>Our Story</span>
              </div>
              <div className="story-dash-accent" />

              <h2 className="story-headline-v2">
                <span className="text-navy-heavy">Built on Trust.</span>
                <span className="text-leaf-accent">Driven by Excellence.</span>
              </h2>

              <p className="story-body-paragraph">
                Since 2010, OMNI Hospitals has been on a journey to make advanced, compassionate healthcare more accessible across Telangana and Andhra Pradesh.
              </p>

              <p className="story-body-paragraph">
                Today, OMNI brings together experienced specialists, advanced technology and patient-first care across a growing network of hospitals and healthcare centres.
              </p>

              <button 
                type="button" 
                className="story-cta-outline-btn"
                onClick={onExploreStory}
              >
                <span>Discover Our Story</span>
                <ArrowRight size={15} className="btn-arrow-v2" />
              </button>
            </div>

            {/* Center 15 YEARS Element */}
            <div className="story-center-15-badge">
              <div className="giant-15-gradient-num">
                <AnimatedNumber value={15} />
              </div>
              <div className="meta-15-labels">
                <span className="label-years-bold">Years</span>
                <span className="label-care-sub">Of Care and Trust</span>
              </div>
            </div>

            {/* Right Organic Curved Hospital Image Container */}
            <div className="story-right-visual-col">
              <div className="organic-curved-visual-mask">
                <img 
                  src={getAssetUrl('/omni-story.jpg')} 
                  onError={(e) => { 
                    if (!e.currentTarget.dataset.triedPng) {
                      e.currentTarget.dataset.triedPng = 'true';
                      e.currentTarget.src = getAssetUrl('/omni-story.png');
                    } else {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1400&auto=format&fit=crop';
                    }
                  }} 
                  alt="OMNI Hospitals Architectural Center" 
                  className="curved-hospital-img"
                />
                


                {/* Floating Dark Glass "Our Promise" Card */}
                <div className="floating-promise-glass-card">
                  <div className="promise-shield-circle">
                    <ShieldCheck size={18} className="shield-icon-v2" />
                  </div>
                  <div className="promise-text-content">
                    <h4 className="promise-title">Our Promise</h4>
                    <p className="promise-subtitle">Every patient. Every time. We're here for life.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* BOTTOM ROW: Glassmorphism Ribbon */}
          <div className="story-glass-ribbon-container">
            {BOTTOM_CARDS.map((card, idx) => {
              const Icon = card.icon;
              return (
                <React.Fragment key={idx}>
                  <div className="ribbon-segment">
                    <div className="ribbon-icon-circle">
                      <Icon size={20} className="ribbon-lucide-icon" />
                    </div>
                    <div className="ribbon-text-group">
                      <h4 className="ribbon-main-title">{card.title}</h4>
                      <p className="ribbon-sub-title">{card.subtitle}</p>
                    </div>
                  </div>
                  {idx < BOTTOM_CARDS.length - 1 && <div className="ribbon-divider" />}
                </React.Fragment>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
