import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Award, ShieldCheck, Users, HeartPulse, Building2, ChevronRight, X, Quote, MapPin, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HomeHeader from '../components/HomePage/HomeHeader';
import HomeFooter from '../components/HomePage/HomeFooter';
import FinalCTASection from '../components/HomePage/FinalCTASection';
import ExecutiveLeadership from '../components/ExecutiveLeadership';
import ImpactStatistics from '../components/ImpactStatistics';
import ClinicalLeaders from '../components/ClinicalLeaders';
import { getAssetUrl } from '../utils/getAssetUrl';

// Register GSAP ScrollTrigger plugin safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const MILESTONES = [
  {
    year: '2010',
    title: 'The Beginning',
    location: 'Kothapet, Hyderabad',
    description: 'OMNI Hospitals begins its journey with the launch of its flagship multi-specialty facility at Kothapet, driven by a vision to make tertiary healthcare accessible, affordable, and compassionate.',
    image: '/images/hospitals/kothapet-card.jpg'
  },
  {
    year: '2014',
    title: 'Expansion & Partnerships',
    location: 'Telangana & Andhra Pradesh',
    description: 'Expanded network footprint under the Incor Group umbrella, establishing strategic healthcare centers across key urban centers in Hyderabad and Vizag.',
    image: '/images/hospitals/vizag-card.jpg'
  },
  {
    year: '2018',
    title: 'Centers of Excellence',
    location: 'UDAI OMNI & Giggles',
    description: 'Pioneered dedicated single-specialty centers including UDAI OMNI Orthopedics at Nampally and Giggles Mother & Child Care in Vizag, setting new clinical benchmarks.',
    image: '/images/hospitals/giggles-vizag-card.jpg'
  },
  {
    year: 'TODAY',
    title: 'A Leading Regional Network',
    location: '6 Locations Across 2 States',
    description: 'Now operating 6 super-specialty hospitals with over 1,000 beds, 500+ doctors, and 2,000+ clinical staff dedicated to delivering patient-first medical excellence.',
    image: '/images/hospitals/timeline-today.jpg'
  }
];

const VALUES = [
  {
    num: '01',
    title: 'COMPASSION',
    subtitle: 'Empathy in Every Interaction',
    desc: 'Treating every patient and family with dignity, respect, and deep human empathy. We believe healing begins with listening.'
  },
  {
    num: '02',
    title: 'INTEGRITY',
    subtitle: 'Transparent & Ethical Medicine',
    desc: 'Maintaining the highest standards of professional conduct, evidence-based medical advice, and transparent billing practices.'
  },
  {
    num: '03',
    title: 'COLLABORATION',
    subtitle: 'Multi-Disciplinary Teamwork',
    desc: 'Fostering seamless collaboration between surgeons, physicians, nurses, and diagnostics to deliver holistic patient outcomes.'
  }
];

const LEADERSHIP_TEAM = [
  {
    name: 'Dr. Radha Krishna',
    title: 'Director - Giggles',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Dr. Ved Prakash',
    title: 'Director - Udai Omni',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Dr. Raghava Dutt M',
    title: 'Director - Udai Omni',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Dr. Udai Prakash',
    title: 'Director - Udai Omni',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Dr. M Goutham Reddy',
    title: 'Director - Omni Kothapet',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Dr. E Venkat Ramana Reddy',
    title: 'Director - Omni Kothapet',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Dr. Y Sandeep Reddy',
    title: 'Director - Omni Kothapet',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop'
  }
];

export default function AboutPage({ onNavigate, onBookAppointment }) {
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [showChairmanModal, setShowChairmanModal] = useState(false);

  // References for Section 02 Journey Track
  const journeySectionRef = useRef(null);
  const milestoneTextRef = useRef(null);
  const imageContainerRef = useRef(null);

  const journeyTrackRef = useRef(null);
  const progressLineRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!journeyTrackRef.current) return;
      const rect = journeyTrackRef.current.getBoundingClientRect();
      const scrollableHeight = rect.height - window.innerHeight;
      if (scrollableHeight <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / scrollableHeight));

      if (progressLineRef.current) {
        progressLineRef.current.style.height = `${progress * 100}%`;
      }

      let step = 0;
      if (progress >= 0.75) step = 3;
      else if (progress >= 0.5) step = 2;
      else if (progress >= 0.25) step = 1;
      else step = 0;

      setActiveStep((prev) => (prev !== step ? step : prev));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNodeClick = (idx) => {
    if (!journeyTrackRef.current) return;
    const rect = journeyTrackRef.current.getBoundingClientRect();
    const scrollableHeight = rect.height - window.innerHeight;
    const targets = [0.05, 0.35, 0.68, 0.95];
    const targetScrollY = window.scrollY + rect.top + targets[idx] * scrollableHeight;
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
  };

  return (
    <div className="omni-about-page-wrapper">
      <HomeHeader currentView="about" onNavigate={onNavigate} onBookAppointment={onBookAppointment} />

      <main className="about-page-main">

        {/* SECTION 01 — ARCHITECTURAL BRAND HERO */}
        <section className="about-hero-section">
          {/* Background Video Layer with Refined Light Overlay */}
          <div className="about-hero-bg">
            <video
              className="about-hero-bg-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={getAssetUrl('/images/omni-hero-poster.jpg')}
            >
              <source src={getAssetUrl('/videos/omni-about-hero.mp4')} type="video/mp4" />
            </video>
            <div className="about-hero-light-overlay" aria-hidden="true" />
            
            {/* Subtle Omni Architectural Line Motifs */}
            <div className="hero-brand-motif-lines" aria-hidden="true">
              <span className="motif-line-horizontal" />
              <span className="motif-dot-green" />
            </div>
          </div>

          <div className="about-hero-editorial-layout">
            
            {/* MAIN CONTENT STACK */}
            <div className="hero-content-clean-stack">
              <h1 className="about-hero-title">
                <span className="title-line-white">HEALTHCARE,</span>
                <span className="title-line-brand">
                  <span className="brand-text-blue">BUILT AROUND</span>
                </span>
                <span className="title-line-green">
                  <span className="brand-text-green">PEOPLE.</span>
                </span>
              </h1>

              <p className="about-hero-subtitle">
                A multi-specialty healthcare network built on clinical excellence, compassion, and trust. Part of the Incor Group, delivering world-class medical outcomes across Telangana and Andhra Pradesh.
              </p>
            </div>

            {/* REFINED FLOATING SCROLL INDICATOR */}
            <div className="hero-floating-scroll-bar">
              <div className="scroll-indicator-track">
                <span className="scroll-pill-dot" />
                <span className="scroll-label-text">SCROLL TO EXPLORE STORY</span>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 02 — REDESIGNED CINEMATIC OMNI JOURNEY */}
        <section className="omni-journey-track-wrapper" ref={journeyTrackRef}>
          <div className="omni-journey-sticky-viewport">
            <div className="omni-journey-container">
              
              {/* Desktop Split Experience */}
              <div className="omni-journey-desktop">
                
                {/* Left Column: Fixed Identity & Overview */}
                <div className="omni-journey-left">
                  <div className="journey-identity-block">
                    <div className="journey-brand-badge">
                      <span className="badge-logo-dot" />
                      <span>Omni Hospitals • Our Journey</span>
                    </div>
                    <h2 className="who-main-title">
                      <span className="title-white">More Than a Hospital.</span> <br />
                      <span className="accent-text">A Healthcare Partner.</span>
                    </h2>
                    <p className="who-lead-paragraph">
                      Established in 2010, OMNI Hospitals has evolved into a premier multi-specialty healthcare provider in South India. As an integral component of the Incor Group, we blend advanced medical technology with personalized patient care.
                    </p>
                    <p className="who-body-paragraph">
                      Our network was built on a single founding premise: that high-end tertiary healthcare should be transparent, accessible, and delivered with genuine human empathy.
                    </p>
                  </div>
                </div>

                {/* Center Column: Interactive Timeline Line */}
                <div className="omni-journey-timeline">
                  <div className="timeline-track">
                    <div className="timeline-progress-bar" ref={progressLineRef} />
                  </div>
                  <div className="timeline-nodes">
                    {MILESTONES.map((m, idx) => {
                      const isActive = idx === activeStep;
                      const isCompleted = idx < activeStep;
                      return (
                        <button
                          key={m.year}
                          type="button"
                          className={`timeline-node-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                          onClick={() => handleNodeClick(idx)}
                        >
                          <span className="node-year">{m.year}</span>
                          <span className="node-dot" />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Right Column: Dynamic Cinematic Viewport */}
                <div className="omni-journey-right">
                  <div className="cinematic-viewport">
                    {/* Image Stack */}
                    <div className="cinematic-image-stack">
                      {MILESTONES.map((m, idx) => (
                        <img
                          key={m.year}
                          src={getAssetUrl(m.image)}
                          alt={m.title}
                          className={`omni-journey-img ${idx === activeStep ? 'active' : ''}`}
                        />
                      ))}
                      <div className="viewport-overlay" />
                    </div>

                    {/* All 4 Content Cards Absolute Stacked for Smooth Crossfade */}
                    {MILESTONES.map((m, idx) => (
                      <div
                        key={m.year}
                        className={`cinematic-content-card ${idx === activeStep ? 'active' : ''}`}
                      >
                        <div className="milestone-badge">
                          <span className="badge-year">{m.year}</span>
                          <span className="badge-sep">•</span>
                          <span className="badge-loc">{m.location}</span>
                        </div>
                        <h3 className="milestone-title">{m.title}</h3>
                        <p className="milestone-desc">{m.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Section 2 Details: 4 Feature Cards Grid */}
              <div className="journey-features-grid">
                {/* Card 1: NABH Accredited */}
                <div className="journey-feature-card">
                  <div className="feature-icon-badge">
                    <svg viewBox="0 0 48 48" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="nabhSilverBezel" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="30%" stopColor="#cbd5e1" />
                          <stop offset="70%" stopColor="#64748b" />
                          <stop offset="100%" stopColor="#ffffff" />
                        </linearGradient>
                        <linearGradient id="nabhGreenCore" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#15803d" />
                          <stop offset="100%" stopColor="#052e16" />
                        </linearGradient>
                        <filter id="nabhShadow" x="-20%" y="-20%" width="140%" height="140%">
                          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#22c55e" floodOpacity="0.4"/>
                        </filter>
                      </defs>
                      <path d="M24 3 L41 9 V22 C41 33.5 24 44 24 44 C24 44 7 33.5 7 22 V9 L24 3 Z" fill="url(#nabhSilverBezel)" filter="url(#nabhShadow)" />
                      <path d="M24 6.5 L38 11.5 V22 C38 31.5 24 40.5 24 40.5 C24 40.5 10 31.5 10 22 V11.5 L24 6.5 Z" fill="url(#nabhGreenCore)" stroke="#22c55e" strokeWidth="1" />
                      <rect x="21.5" y="13" width="5" height="12" rx="1" fill="#ffffff" />
                      <rect x="18" y="16.5" width="12" height="5" rx="1" fill="#ffffff" />
                      <text x="24" y="33" fill="#ffffff" fontSize="7" fontWeight="900" textAnchor="middle" letterSpacing="0.8" fontFamily="system-ui, sans-serif">NABH</text>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h4 className="feature-title">NABH Accredited</h4>
                    <p className="feature-desc">Committed to the highest standards of quality and safety.</p>
                  </div>
                </div>

                {/* Card 2: Advanced Technology */}
                <div className="journey-feature-card">
                  <div className="feature-icon-badge">
                    <svg viewBox="0 0 48 48" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="techRim" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="25%" stopColor="#94a3b8" />
                          <stop offset="50%" stopColor="#4ade80" />
                          <stop offset="75%" stopColor="#cbd5e1" />
                          <stop offset="100%" stopColor="#ffffff" />
                        </linearGradient>
                        <radialGradient id="techPearlBg" cx="35%" cy="30%" r="65%">
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="55%" stopColor="#f1f5f9" />
                          <stop offset="100%" stopColor="#cbd5e1" />
                        </radialGradient>
                        <filter id="techShadow" x="-20%" y="-20%" width="140%" height="140%">
                          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#22c55e" floodOpacity="0.4"/>
                        </filter>
                      </defs>
                      <circle cx="24" cy="24" r="21" fill="url(#techRim)" filter="url(#techShadow)" />
                      <circle cx="24" cy="24" r="17.5" fill="url(#techPearlBg)" stroke="#94a3b8" strokeWidth="0.8" />
                      <path d="M16 12 C16 12 17.5 12 17.5 14 V19 C17.5 22.5 25.5 22.5 25.5 19 V14 C25.5 12 27 12 27 12" stroke="#15803d" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M21.5 21.5 V25 C21.5 28 26.5 28 26.5 25" stroke="#15803d" strokeWidth="2.2" strokeLinecap="round" />
                      <circle cx="26.5" cy="24.5" r="3" fill="#16a34a" stroke="#15803d" strokeWidth="1" />
                      <circle cx="26.5" cy="24.5" r="1.2" fill="#ffffff" />
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h4 className="feature-title">Advanced Technology</h4>
                    <p className="feature-desc">State-of-the-art infrastructure and modern medical technology.</p>
                  </div>
                </div>

                {/* Card 3: Patient-Centric Care */}
                <div className="journey-feature-card">
                  <div className="feature-icon-badge">
                    <svg viewBox="0 0 48 48" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="careRim" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="25%" stopColor="#94a3b8" />
                          <stop offset="50%" stopColor="#4ade80" />
                          <stop offset="75%" stopColor="#cbd5e1" />
                          <stop offset="100%" stopColor="#ffffff" />
                        </linearGradient>
                        <radialGradient id="carePearlBg" cx="35%" cy="30%" r="65%">
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="55%" stopColor="#f1f5f9" />
                          <stop offset="100%" stopColor="#cbd5e1" />
                        </radialGradient>
                        <filter id="careShadow" x="-20%" y="-20%" width="140%" height="140%">
                          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#22c55e" floodOpacity="0.4"/>
                        </filter>
                      </defs>
                      <circle cx="24" cy="24" r="21" fill="url(#careRim)" filter="url(#careShadow)" />
                      <circle cx="24" cy="24" r="17.5" fill="url(#carePearlBg)" stroke="#94a3b8" strokeWidth="0.8" />
                      <path d="M24 14 C22.5 11.5 18.5 11.5 16.5 14 C14.5 16.5 15.5 20 18 22.5 L24 28 L30 22.5 C32.5 20 33.5 16.5 31.5 14 C29.5 11.5 25.5 11.5 24 14 Z" fill="#16a34a" />
                      <path d="M12.5 25 C14.5 29 19 32 24 32.5 C29 32 33.5 29 35.5 25 C33 26.5 28.5 27.5 24 27.5 C19.5 27.5 15 26.5 12.5 25 Z" fill="#15803d" />
                      <path d="M13.5 22.5 C15 25.5 18.5 28.5 24 29 C21 28 17 26 15 23 L13.5 22.5 Z" fill="#22c55e" />
                      <path d="M34.5 22.5 C33 25.5 29.5 28.5 24 29 C27 28 31 26 33 23 L34.5 22.5 Z" fill="#22c55e" />
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h4 className="feature-title">Patient-Centric Care</h4>
                    <p className="feature-desc">Compassionate care with empathy at the heart of everything we do.</p>
                  </div>
                </div>

                {/* Card 4: Trusted by Millions */}
                <div className="journey-feature-card">
                  <div className="feature-icon-badge">
                    <svg viewBox="0 0 48 48" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="trustRim" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="30%" stopColor="#cbd5e1" />
                          <stop offset="65%" stopColor="#64748b" />
                          <stop offset="100%" stopColor="#ffffff" />
                        </linearGradient>
                        <radialGradient id="trustPearlBg" cx="35%" cy="30%" r="65%">
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="55%" stopColor="#f8fafc" />
                          <stop offset="100%" stopColor="#e2e8f0" />
                        </radialGradient>
                        <filter id="trustShadow" x="-20%" y="-20%" width="140%" height="140%">
                          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#22c55e" floodOpacity="0.4"/>
                        </filter>
                      </defs>
                      <path d="M24 3 L41 9 V22 C41 33.5 24 44 24 44 C24 44 7 33.5 7 22 V9 L24 3 Z" fill="url(#trustRim)" filter="url(#trustShadow)" />
                      <path d="M24 6.5 L38 11.5 V22 C38 31.5 24 40.5 24 40.5 C24 40.5 10 31.5 10 22 V11.5 L24 6.5 Z" fill="url(#trustPearlBg)" stroke="#94a3b8" strokeWidth="0.8" />
                      <path d="M16 23 L22 29 L32 17" stroke="#16a34a" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h4 className="feature-title">Trusted by Millions</h4>
                    <p className="feature-desc">A legacy of trust, built over years of excellence.</p>
                  </div>
                </div>
              </div>

              {/* Mobile Fallback: Vertical Storytelling Flow */}
              <div className="omni-journey-mobile">
                <div className="mobile-intro">
                  <span className="section-eyebrow-tag">Who We Are</span>
                  <h2 className="who-main-title">
                    <span className="title-white">More Than a Hospital.</span> <br />
                    <span className="accent-text">A Healthcare Partner.</span>
                  </h2>
                  <p className="who-lead-paragraph">
                    Established in 2010, OMNI Hospitals has evolved into a premier multi-specialty healthcare provider in South India. As an integral component of the <strong>Incor Group</strong>, we blend advanced medical technology with personalized patient care.
                  </p>
                </div>

                {/* Mobile Features Grid */}
                <div className="journey-features-grid">
                  <div className="journey-feature-card">
                    <div className="feature-icon-badge">
                      <svg viewBox="0 0 48 48" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="nabhSilverBezelMob" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="30%" stopColor="#cbd5e1" />
                            <stop offset="70%" stopColor="#64748b" />
                            <stop offset="100%" stopColor="#ffffff" />
                          </linearGradient>
                          <linearGradient id="nabhGreenCoreMob" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#15803d" />
                            <stop offset="100%" stopColor="#052e16" />
                          </linearGradient>
                          <filter id="nabhShadowMob" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#22c55e" floodOpacity="0.4"/>
                          </filter>
                        </defs>
                        <path d="M24 3 L41 9 V22 C41 33.5 24 44 24 44 C24 44 7 33.5 7 22 V9 L24 3 Z" fill="url(#nabhSilverBezelMob)" filter="url(#nabhShadowMob)" />
                        <path d="M24 6.5 L38 11.5 V22 C38 31.5 24 40.5 24 40.5 C24 40.5 10 31.5 10 22 V11.5 L24 6.5 Z" fill="url(#nabhGreenCoreMob)" stroke="#22c55e" strokeWidth="1" />
                        <rect x="21.5" y="13" width="5" height="12" rx="1" fill="#ffffff" />
                        <rect x="18" y="16.5" width="12" height="5" rx="1" fill="#ffffff" />
                        <text x="24" y="33" fill="#ffffff" fontSize="7" fontWeight="900" textAnchor="middle" letterSpacing="0.8" fontFamily="system-ui, sans-serif">NABH</text>
                      </svg>
                    </div>
                    <div className="feature-text">
                      <h4 className="feature-title">NABH Accredited</h4>
                      <p className="feature-desc">Committed to the highest standards of quality and safety.</p>
                    </div>
                  </div>

                  <div className="journey-feature-card">
                    <div className="feature-icon-badge">
                      <svg viewBox="0 0 48 48" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="techRimMob" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="25%" stopColor="#94a3b8" />
                            <stop offset="50%" stopColor="#4ade80" />
                            <stop offset="75%" stopColor="#cbd5e1" />
                            <stop offset="100%" stopColor="#ffffff" />
                          </linearGradient>
                          <radialGradient id="techPearlBgMob" cx="35%" cy="30%" r="65%">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="55%" stopColor="#f1f5f9" />
                            <stop offset="100%" stopColor="#cbd5e1" />
                          </radialGradient>
                          <filter id="techShadowMob" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#22c55e" floodOpacity="0.4"/>
                          </filter>
                        </defs>
                        <circle cx="24" cy="24" r="21" fill="url(#techRimMob)" filter="url(#techShadowMob)" />
                        <circle cx="24" cy="24" r="17.5" fill="url(#techPearlBgMob)" stroke="#94a3b8" strokeWidth="0.8" />
                        <path d="M16 12 C16 12 17.5 12 17.5 14 V19 C17.5 22.5 25.5 22.5 25.5 19 V14 C25.5 12 27 12 27 12" stroke="#15803d" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21.5 21.5 V25 C21.5 28 26.5 28 26.5 25" stroke="#15803d" strokeWidth="2.2" strokeLinecap="round" />
                        <circle cx="26.5" cy="24.5" r="3" fill="#16a34a" stroke="#15803d" strokeWidth="1" />
                        <circle cx="26.5" cy="24.5" r="1.2" fill="#ffffff" />
                      </svg>
                    </div>
                    <div className="feature-text">
                      <h4 className="feature-title">Advanced Technology</h4>
                      <p className="feature-desc">State-of-the-art infrastructure and modern medical technology.</p>
                    </div>
                  </div>

                  <div className="journey-feature-card">
                    <div className="feature-icon-badge">
                      <svg viewBox="0 0 48 48" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="careRimMob" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="25%" stopColor="#94a3b8" />
                            <stop offset="50%" stopColor="#4ade80" />
                            <stop offset="75%" stopColor="#cbd5e1" />
                            <stop offset="100%" stopColor="#ffffff" />
                          </linearGradient>
                          <radialGradient id="carePearlBgMob" cx="35%" cy="30%" r="65%">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="55%" stopColor="#f1f5f9" />
                            <stop offset="100%" stopColor="#cbd5e1" />
                          </radialGradient>
                          <filter id="careShadowMob" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#22c55e" floodOpacity="0.4"/>
                          </filter>
                        </defs>
                        <circle cx="24" cy="24" r="21" fill="url(#careRimMob)" filter="url(#careShadowMob)" />
                        <circle cx="24" cy="24" r="17.5" fill="url(#carePearlBgMob)" stroke="#94a3b8" strokeWidth="0.8" />
                        <path d="M24 14 C22.5 11.5 18.5 11.5 16.5 14 C14.5 16.5 15.5 20 18 22.5 L24 28 L30 22.5 C32.5 20 33.5 16.5 31.5 14 C29.5 11.5 25.5 11.5 24 14 Z" fill="#16a34a" />
                        <path d="M12.5 25 C14.5 29 19 32 24 32.5 C29 32 33.5 29 35.5 25 C33 26.5 28.5 27.5 24 27.5 C19.5 27.5 15 26.5 12.5 25 Z" fill="#15803d" />
                        <path d="M13.5 22.5 C15 25.5 18.5 28.5 24 29 C21 28 17 26 15 23 L13.5 22.5 Z" fill="#22c55e" />
                        <path d="M34.5 22.5 C33 25.5 29.5 28.5 24 29 C27 28 31 26 33 23 L34.5 22.5 Z" fill="#22c55e" />
                      </svg>
                    </div>
                    <div className="feature-text">
                      <h4 className="feature-title">Patient-Centric Care</h4>
                      <p className="feature-desc">Compassionate care with empathy at the heart of everything we do.</p>
                    </div>
                  </div>

                  <div className="journey-feature-card">
                    <div className="feature-icon-badge">
                      <svg viewBox="0 0 48 48" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="trustRimMob" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="30%" stopColor="#cbd5e1" />
                            <stop offset="65%" stopColor="#64748b" />
                            <stop offset="100%" stopColor="#ffffff" />
                          </linearGradient>
                          <radialGradient id="trustPearlBgMob" cx="35%" cy="30%" r="65%">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="55%" stopColor="#f8fafc" />
                            <stop offset="100%" stopColor="#e2e8f0" />
                          </radialGradient>
                          <filter id="trustShadowMob" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#22c55e" floodOpacity="0.4"/>
                          </filter>
                        </defs>
                        <path d="M24 3 L41 9 V22 C41 33.5 24 44 24 44 C24 44 7 33.5 7 22 V9 L24 3 Z" fill="url(#trustRimMob)" filter="url(#trustShadowMob)" />
                        <path d="M24 6.5 L38 11.5 V22 C38 31.5 24 40.5 24 40.5 C24 40.5 10 31.5 10 22 V11.5 L24 6.5 Z" fill="url(#trustPearlBgMob)" stroke="#94a3b8" strokeWidth="0.8" />
                        <path d="M16 23 L22 29 L32 17" stroke="#16a34a" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="feature-text">
                      <h4 className="feature-title">Trusted by Millions</h4>
                      <p className="feature-desc">A legacy of trust, built over years of excellence.</p>
                    </div>
                  </div>
                </div>

                <div className="mobile-milestone-list">
                  {MILESTONES.map((m) => (
                    <div key={m.year} className="mobile-milestone-card">
                      <div className="mobile-card-image-box">
                        <img 
                          src={getAssetUrl(m.image)} 
                          alt={m.title} 
                          className="mobile-card-img" 
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = getAssetUrl('/images/hospitals/kothapet-card.jpg');
                          }}
                        />
                        <div className="mobile-year-tag">{m.year}</div>
                      </div>
                      <div className="mobile-card-body">
                        <span className="mobile-loc">{m.location}</span>
                        <h3 className="mobile-title">{m.title}</h3>
                        <p className="mobile-desc">{m.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 04 — OMNI TODAY (IMPACT STATISTICS) */}
        <ImpactStatistics />

        {/* SECTION 06 — VISION + MISSION */}
        <section className="vision-mission-section">
          <div className="vision-mission-container">
            <div className="split-editorial-grid">
              
              <div className="vision-card">
                <span className="split-tag vision-tag">OUR VISION</span>
                <h3 className="split-quote">
                  "To build a healthcare institution that provides best-in-class treatment at an affordable price, with empathy and compassion."
                </h3>
                <div className="quote-author-line">
                  <span>OMNI HOSPITALS FOUNDING VISION</span>
                </div>
              </div>

              <div className="mission-card">
                <span className="split-tag mission-tag">OUR MISSION</span>
                <h3 className="split-heading">
                  PATIENT-FIRST CLINICAL EXCELLENCE
                </h3>
                <ul className="mission-points-list">
                  <li>
                    <CheckCircle2 size={18} className="point-icon" />
                    <span>Deliver tertiary healthcare with strict international safety protocols.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="point-icon" />
                    <span>Equip our surgeons with cutting-edge robotic & diagnostic technology.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="point-icon" />
                    <span>Maintain transparent, ethical, and patient-friendly medical practices.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={18} className="point-icon" />
                    <span>Ensure 24/7 rapid-response emergency and trauma interventions.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 08 — EXECUTIVE LEADERSHIP */}
        <ExecutiveLeadership 
          onReadChairmanMessage={() => setShowChairmanModal(true)}
          onNavigate={onNavigate}
        />

        {/* SECTION 09 — CLINICAL LEADERS (7-CARD CENTER FOCUS CAROUSEL) */}
        <ClinicalLeaders onNavigate={onNavigate} />

        {/* SECTION 11 — HUMAN SIDE OF OMNI */}
        <section className="human-side-section" id="human-side">
          {/* Ambient Background Glows in Brand Logo Colors */}
          <div className="human-bg-glow glow-white" aria-hidden="true" />
          <div className="human-bg-glow glow-green" aria-hidden="true" />
          <div className="human-watermark" aria-hidden="true">OMNI CARE</div>

          <div className="human-content-container">
            <div className="human-card-box">
              {/* Prominent Solid Brand Color Pill Badge (Inspired by Reference Image 2) */}
              <div className="human-pill-badge">
                <span>PATIENT-FIRST EMBRACE</span>
              </div>

              <h2 className="human-title">
                Healthcare is <span className="human-title-accent">Personal.</span>
              </h2>

              <p className="human-desc">
                Behind every bed, every scan, and every operation lies a human story. At OMNI Hospitals, our physicians, nurses, and care teams measure success not just in clinical benchmarks, but in the trust, comfort, and peace of mind we bring to every family.
              </p>

              <div className="human-card-footer-line" />
            </div>
          </div>
        </section>

        {/* SECTION — FINAL CTA */}
        <FinalCTASection onBookAppointment={() => onNavigate && onNavigate('doctors')} />

      </main>

      {/* CHAIRMAN MESSAGE MODAL */}
      {showChairmanModal && (
        <div className="modal-backdrop" onClick={() => setShowChairmanModal(false)}>
          <div className="modal-card-box" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="modal-close"
              onClick={() => setShowChairmanModal(false)}
            >
              <X size={20} />
            </button>

            <span className="modal-tag">CHAIRMAN'S MESSAGE</span>
            <h3 className="modal-heading">Suryanarayana Reddy Pulagam</h3>
            <span className="modal-sub">Chairman & Managing Director, OMNI Hospitals (Incor Group)</span>

            <div className="modal-body-text">
              <p>
                "Welcome to OMNI Hospitals. Since our inception in 2010, we have been driven by a singular mission: to provide world-class tertiary medical care that is compassionate, ethical, and accessible to all sections of society."
              </p>
              <p>
                "Healthcare is evolving rapidly with advancements in minimally invasive surgeries, robotic interventions, and digital diagnostics. At OMNI, we continue to invest heavily in state-of-the-art medical technology while preserving the sacred human touch that defines healing."
              </p>
              <p>
                "We thank our patients for placing their trust in OMNI Hospitals across Telangana and Andhra Pradesh. Our promise is to continue striving for clinical excellence every single day."
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <HomeFooter onNavigate={onNavigate} onBookAppointment={onBookAppointment} />
    </div>
  );
}