import React, { useState, useRef, useEffect } from 'react';
import HeroVideo from './HeroVideo';
import HeroContent from './HeroContent';
import TrustMetrics from './TrustMetrics';
import VideoControls from './VideoControls';
import ScrollIndicator from './ScrollIndicator';

export default function HomeHero({ onFindDoctor, onBookAppointment, onNavigate }) {
  const videoRef = useRef(null);
  const heroRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  // Guarantee mobile and desktop video autoplay
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    }
  }, []);

  // Video Controls handlers
  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleSound = () => {
    if (!videoRef.current) return;
    const newMutedState = !videoRef.current.muted;
    videoRef.current.muted = newMutedState;
    setIsMuted(newMutedState);
  };

  // Mouse Parallax (Desktop Only)
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth < 1024) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 12; // max 6px shift
      const y = (e.clientY / innerHeight - 0.5) * 12;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll Parallax
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (heroRef.current) {
            const heroHeight = heroRef.current.offsetHeight || window.innerHeight;
            const progress = Math.min(Math.max(window.scrollY / heroHeight, 0), 1);
            setScrollProgress(progress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToNextSection = () => {
    const nextSection = document.getElementById('ranked-hospital-section') || document.getElementById('quick-care') || document.getElementById('network');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef} 
      className="hero omni-cinematic-video-hero"
      style={{
        '--mouse-x': `${mouseOffset.x}px`,
        '--mouse-y': `${mouseOffset.y}px`
      }}
    >
      {/* 1. Full-Screen Background Video Layer & Overlays */}
      <HeroVideo 
        videoRef={videoRef}
        isLoaded={true}
        onVideoError={() => {
          // Graceful video fallback handling
        }}
      />

      {/* 2. Main Hero Left Content Group */}
      <div className="hero-viewport-container hero-content">
        <div className="hero-content-positioner">
          <HeroContent 
            onFindDoctor={onFindDoctor}
            onBookAppointment={onBookAppointment}
          />
        </div>

        {/* 4. Lower-Left Floating Glass Statistics & Micro Statement */}
        <div className="hero-trust-positioner">
          <TrustMetrics />
        </div>

        {/* 6. Bottom-Center Scroll Indicator */}
        <div className="hero-scroll-positioner">
          <ScrollIndicator onClickScroll={handleScrollToNextSection} />
        </div>
      </div>
    </section>
  );
}
