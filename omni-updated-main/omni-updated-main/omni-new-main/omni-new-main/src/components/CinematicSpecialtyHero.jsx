import React, { useEffect, useRef, useState } from 'react';
import { getAssetUrl } from '../utils/getAssetUrl';

const SPECIALTIES = [
  {
    id: 'cardiology',
    number: '01',
    num: '01 / 05',
    eyebrow: 'CARDIOVASCULAR CARE',
    name: 'Heart & Vascular',
    title: 'Heart & Vascular',
    subtitle: 'Advanced Cardiovascular & Interventional Care',
    description: 'Comprehensive cardiac care combining experienced cardiologists, advanced diagnostics, interventional cardiology, and complex cardiac procedures.',
    cta: 'EXPLORE CARDIOLOGY'
  },
  {
    id: 'neurology',
    number: '02',
    num: '02 / 05',
    eyebrow: 'NEUROLOGICAL CARE',
    name: 'Brain & Nervous System',
    title: 'Brain & Nervous System',
    subtitle: 'Precision Neurology & Neurosurgery',
    description: 'Specialized diagnosis and treatment for complex brain, spine, stroke, and neurovascular conditions with 24/7 emergency neuro care.',
    cta: 'EXPLORE NEUROLOGY'
  },
  {
    id: 'orthopedics',
    number: '03',
    num: '03 / 05',
    eyebrow: 'ORTHOPEDIC CARE',
    name: 'Bones & Movement',
    title: 'Bones & Movement',
    subtitle: 'Advanced Joint Replacement & Spine Care',
    description: 'Restoring mobility and performance through robotic joint replacements, complex fracture reconstruction, and minimally invasive spine interventions.',
    cta: 'EXPLORE ORTHOPEDICS'
  },
  {
    id: 'gastroenterology',
    number: '04',
    num: '04 / 05',
    eyebrow: 'GASTROINTESTINAL CARE',
    name: 'Digestive Health',
    title: 'Digestive Health',
    subtitle: 'Advanced Gastro & Hepatology Care',
    description: 'Comprehensive medical and surgical gastroenterology focused on liver disorders, advanced endoscopies, and digestive oncology.',
    cta: 'EXPLORE GASTROENTEROLOGY'
  },
  {
    id: 'pulmonology',
    number: '05',
    num: '05 / 05',
    eyebrow: 'RESPIRATORY CARE',
    name: 'Respiratory Care',
    title: 'Respiratory Care',
    subtitle: 'Advanced Pulmonary & Critical Care',
    description: 'State-of-the-art respiratory care for complex pulmonary diseases, asthma, sleep disorders, and high-dependency ICU support.',
    cta: 'EXPLORE PULMONOLOGY'
  }
];

export default function CinematicSpecialtyHero() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const navListRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollProgressRef = useRef(0);
  const animFrameId = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Passive, butter-smooth native scroll listener
  useEffect(() => {
    const calculateProgress = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const totalScrollHeight = sectionRef.current.offsetHeight - window.innerHeight;
      if (totalScrollHeight <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollHeight));
      scrollProgressRef.current = progress;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', calculateProgress, { passive: true });
    calculateProgress();

    return () => {
      window.removeEventListener('scroll', calculateProgress);
    };
  }, []);

  // Smooth, non-stuttering video frame scrubbing for /videos/specialties-cinematic.mp4 across all 5 scenes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;
    video.pause();

    const smoothScrubVideo = () => {
      if (video && video.duration && !isNaN(video.duration)) {
        // Clamp max playable timestamp to 98.5% so video currentTime never hits end-of-file buffer walls
        const maxPlayableTime = video.duration * 0.985;
        const targetTime = scrollProgressRef.current * maxPlayableTime;
        const diff = targetTime - video.currentTime;
        
        // Higher responsive lerp factor for smooth transition near the end (Digestive -> Respiratory)
        const lerpFactor = scrollProgressRef.current > 0.6 ? 0.26 : 0.20;

        if (Math.abs(diff) > 0.015) {
          try {
            video.currentTime += diff * lerpFactor;
          } catch (e) {
            // Seek handling fallback
          }
        }
      }
      animFrameId.current = requestAnimationFrame(smoothScrubVideo);
    };

    animFrameId.current = requestAnimationFrame(smoothScrubVideo);

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  const totalCount = SPECIALTIES.length;
  const activeIndex = Math.min(
    totalCount - 1,
    Math.floor(scrollProgress * totalCount)
  );

  // Smoothly center the active specialty pill horizontally on mobile
  useEffect(() => {
    if (navListRef.current && typeof window !== 'undefined' && window.innerWidth <= 768) {
      const activeEl = navListRef.current.querySelector('.specialty-progress-item.active');
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeIndex]);

  const handleNavClick = (index) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;
    const totalScrollHeight = sectionRef.current.offsetHeight - window.innerHeight;

    const targetProgress = index / (totalCount - 1);
    const targetScrollY = sectionTop + targetProgress * totalScrollHeight;

    // Immediately update video timestamp on click for instant response
    if (videoRef.current && videoRef.current.duration && !isNaN(videoRef.current.duration)) {
      try {
        const maxPlayableTime = videoRef.current.duration * 0.985;
        videoRef.current.currentTime = targetProgress * maxPlayableTime;
      } catch (e) {}
    }

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    });
  };

  return (
    <section ref={sectionRef} className="specialties-scroll-section" id="specialities">
      {/* NATIVE STICKY 100VH VIEWPORT */}
      <div className="specialties-pin">
        
        {/* EXCLUSIVE CINEMATIC VIDEO LAYER (/videos/specialties-cinematic.mp4 ONLY) */}
        <div className="specialty-video-layer">
          <video
            ref={videoRef}
            src={getAssetUrl('/videos/specialties-cinematic.mp4')}
            className="specialty-video-item"
            muted
            playsInline
            preload="auto"
            style={{
              transform: isMobile ? 'none' : `scale(${1.04 + scrollProgress * 0.1})`,
              filter: `brightness(${1 - scrollProgress * 0.12}) contrast(${1 + scrollProgress * 0.08})`,
              transition: 'transform 0.2s ease-out, filter 0.2s ease-out',
              pointerEvents: 'none'
            }}
            aria-label="Omni Hospitals Centers of Excellence Cinematic Video"
          />
        </div>

        {/* CINEMATIC OVERLAYS & GRADIENTS */}
        <div className="text-readability-overlay" />
        <div className="dark-gradient-overlay" />
        <div className="vignette-frame" />

        {/* TOP-LEFT BRANDING */}
        <div className="top-left-brand">
          <span className="brand-title">OMNI HOSPITALS</span>
          <span className="brand-subtitle">CENTERS OF EXCELLENCE</span>
        </div>

        {/* 5 SPECIALTY INFORMATION PANELS WITH SMOOTH CROSSFADE & SLIDE */}
        <div className="specialty-content-wrapper">
          {SPECIALTIES.map((spec, index) => {
            const step = 1 / (totalCount - 1);
            const targetProgress = index * step;
            const dist = Math.abs(scrollProgress - targetProgress);

            // Tight non-overlapping opacity curve (completely invisible when dist > step * 0.40)
            let opacity = 0;
            if (dist < step * 0.40) {
              opacity = Math.pow(1 - (dist / (step * 0.40)), 2.2);
            }

            const yOffset = (scrollProgress - targetProgress) * -90;
            const clampedY = Math.max(-28, Math.min(28, yOffset));

            const isCurrent = activeIndex === index;

            return (
              <div
                key={spec.id}
                className={`specialty-info-card ${isCurrent ? 'is-active' : ''}`}
                style={{
                  opacity: opacity,
                  transform: `translateY(${clampedY}px)`,
                  pointerEvents: opacity > 0.5 ? 'auto' : 'none',
                  visibility: opacity > 0.05 ? 'visible' : 'hidden',
                  transition: 'opacity 0.2s ease-out, transform 0.25s ease-out'
                }}
              >
                <div className="specialty-counter" aria-label={`Specialty ${spec.number} of 05`}>
                  {spec.num}
                </div>

                <span className="specialty-eyebrow">{spec.eyebrow}</span>
                
                <h1 className="specialty-title">{spec.title}</h1>
                
                <h2 className="specialty-subtitle">{spec.subtitle}</h2>
                
                <p className="specialty-description">{spec.description}</p>
                
                <a
                  href={`#explore-${spec.id}`}
                  className="specialty-cta-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    const targetEl = document.getElementById('explore-specialties');
                    if (targetEl) {
                      targetEl.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  aria-label={`Explore ${spec.name}`}
                >
                  <span>{spec.cta}</span>
                  <span className="cta-arrow" aria-hidden="true">→</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* RIGHT VERTICAL PROGRESS NAVIGATION */}
        <nav className="specialty-progress-nav" aria-label="Specialties Menu">
          <ul ref={navListRef} className="specialty-progress-list">
            {SPECIALTIES.map((spec, index) => {
              const isActive = activeIndex === index;
              return (
                <li
                  key={spec.id}
                  className={`specialty-progress-item ${isActive ? 'active' : 'inactive'}`}
                  onClick={() => handleNavClick(index)}
                >
                  {isActive && <span className="active-dash-indicator" aria-hidden="true" />}
                  <span className="nav-number">{spec.number}</span>
                  <span className="nav-label">{spec.name}</span>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* BOTTOM SCROLL PROMPT */}
        <div className="scroll-indicator">
          <span className="scroll-text">SCROLL TO EXPLORE</span>
          <div className="scroll-line-container" aria-hidden="true">
            <div className="scroll-line" />
          </div>
        </div>

      </div>
    </section>
  );
}

