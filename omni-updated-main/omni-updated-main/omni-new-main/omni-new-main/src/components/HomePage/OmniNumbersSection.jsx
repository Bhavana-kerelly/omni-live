import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OmniNumbersSection() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const METRICS = [
    { value: 15, suffix: '+', label: 'YEARS OF EXCELLENCE', sub: 'Serving Telangana & AP' },
    { value: 500, suffix: '+', label: 'SENIOR DOCTORS', sub: 'Multi-disciplinary Faculty' },
    { value: 1000, suffix: '+', label: 'ADVANCED BEDS', sub: 'Across 6 Super-specialities' },
    { value: 2500, suffix: '+', label: 'CARE PROFESSIONALS', sub: 'Nurses, Technicians & Staff' }
  ];

  const [counts, setCounts] = useState(METRICS.map(() => 0));

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      onEnter: () => {
        if (hasAnimated) return;
        setHasAnimated(true);

        const duration = 2000;
        const steps = 60;
        const stepTime = duration / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
          currentStep++;
          const progress = currentStep / steps;
          // Ease-out expo
          const easeProgress = 1 - Math.pow(2, -10 * progress);

          setCounts(METRICS.map((m) => Math.floor(easeProgress * m.value)));

          if (currentStep >= steps) {
            clearInterval(timer);
            setCounts(METRICS.map((m) => m.value));
          }
        }, stepTime);
      }
    });

    return () => {
      trigger.kill();
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="numbers-section">
      <div className="section-container">
        <div className="section-header-center">
          <span className="section-eyebrow">CLINICAL SCALE</span>
          <h2 className="section-title-dark">15+ YEARS OF TRUST</h2>
          <p className="section-subtitle-center">
            Built on a foundation of clinical excellence, technological leadership, and uncompromised patient safety.
          </p>
        </div>

        <div className="numbers-grid">
          {METRICS.map((m, idx) => (
            <div key={idx} className="number-stat-item">
              <div className="stat-val-wrapper">
                <span className="stat-val-num">{counts[idx]}</span>
                <span className="stat-val-suffix">{m.suffix}</span>
              </div>
              <h3 className="stat-label">{m.label}</h3>
              <p className="stat-sub">{m.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
