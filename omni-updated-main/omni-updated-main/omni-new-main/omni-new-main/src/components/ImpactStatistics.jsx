import React, { useEffect, useRef, useState } from 'react';
import { Stethoscope, BedDouble, Users, MapPin } from 'lucide-react';
import './ImpactStatistics.css';

const STATS_DATA = [
  {
    id: 'doctors',
    value: 500,
    suffix: '+',
    description: 'Renowned specialists across 30+ medical domains',
    icon: Stethoscope,
    accent: 'blue'
  },
  {
    id: 'beds',
    value: 1000,
    suffix: '+',
    description: 'Including high-dependency ICUs & emergency bays',
    icon: BedDouble,
    accent: 'blue'
  },
  {
    id: 'staff',
    value: 2000,
    suffix: '+',
    description: 'Dedicated clinical, nursing, & support staff',
    icon: Users,
    accent: 'green'
  },
  {
    id: 'locations',
    value: 6,
    suffix: '',
    description: 'Across Hyderabad, Vizag, and Kurnool',
    icon: MapPin,
    accent: 'green'
  }
];

export default function ImpactStatistics() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (prefersReducedMotion) {
            setCounts(STATS_DATA.map(s => s.value));
          } else {
            animateCounts();
          }

          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounts = () => {
    const duration = 1800; // ms
    const startTime = performance.now();

    const updateCounts = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth easeOutCubic curve
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      const nextCounts = STATS_DATA.map(stat => 
        Math.floor(easeProgress * stat.value)
      );

      setCounts(nextCounts);

      if (progress < 1) {
        requestAnimationFrame(updateCounts);
      } else {
        setCounts(STATS_DATA.map(s => s.value));
      }
    };

    requestAnimationFrame(updateCounts);
  };

  const formatNumber = (num) => {
    return num.toLocaleString('en-US');
  };

  return (
    <section 
      ref={sectionRef} 
      className={`impact-statistics-section ${isVisible ? 'is-in-view' : ''}`}
      id="impact-statistics"
    >
      {/* Background Decor & Glows */}
      <div className="impact-bg-glow glow-top" aria-hidden="true" />
      <div className="impact-bg-glow glow-bottom" aria-hidden="true" />
      <div className="impact-bg-particles particles-left" aria-hidden="true" />
      <div className="impact-bg-particles particles-right" aria-hidden="true" />

      {/* Decorative Network Connecting Lines (SVG) */}
      <svg className="impact-connecting-lines" aria-hidden="true" viewBox="0 0 1400 400" fill="none">
        <path 
          d="M 150 200 Q 400 120 700 200 T 1250 200" 
          stroke="url(#impact-line-gradient)" 
          strokeWidth="1.5" 
          strokeDasharray="6 6" 
          opacity="0.4"
        />
        <defs>
          <linearGradient id="impact-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0066E6" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#00B4D8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0066E6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Giant Subconscious Watermark */}
      <div className="impact-watermark-text" aria-hidden="true">
        OMNI HOSPITALS
      </div>

      <div className="impact-statistics-container">
        <div className="impact-stats-grid">
          {STATS_DATA.map((stat, idx) => {
            const IconComponent = stat.icon;
            const currentCount = counts[idx];

            return (
              <div 
                key={stat.id} 
                className={`impact-stat-card card-${stat.accent}`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {/* Radial Top Glow Inside Card */}
                <div className="card-top-radial-glow" aria-hidden="true" />

                {/* Header: Icon & Big Number */}
                <div className="stat-card-header">
                  <div className="stat-icon-wrapper">
                    <IconComponent className="stat-icon" />
                  </div>
                  
                  <div className="stat-number-display">
                    <span className="stat-number">
                      {formatNumber(currentCount)}
                    </span>
                    <span className="stat-suffix">{stat.suffix}</span>
                  </div>
                </div>

                {/* Short Decorative Gradient Divider */}
                <div className="stat-divider" />

                {/* Description */}
                <p className="stat-description">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
