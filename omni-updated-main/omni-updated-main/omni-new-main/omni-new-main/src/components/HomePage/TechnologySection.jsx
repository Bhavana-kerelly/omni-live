import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { getAssetUrl } from '../../utils/getAssetUrl';

export default function TechnologySection() {
  const [activeTech, setActiveTech] = useState(0);

  const TECHS = [
    {
      id: 'robotic',
      title: 'Robotic Surgery',
      subtitle: 'da Vinci Surgical System',
      desc: '3D High-definition surgical vision with wristed instruments that bend and rotate far beyond the human hand, enabling sub-millimeter precision.',
      specs: ['10x Optical Magnification', '360° Instrument Articulation', 'Reduced Recovery Time by 60%'],
      image: '/images/technology/robotic-surgery.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 'mri',
      title: 'Advanced Imaging',
      subtitle: '3T MRI & 128-Slice CT',
      desc: 'Ultra-high resolution neuro and cardiac imaging with 70% faster scan times, quiet technology, and advanced AI-guided reconstruction.',
      specs: ['Sub-millimeter Spatial Resolution', 'Ultra-fast Cardiac CT Angiography', 'Silent MRI Scanning'],
      image: '/images/technology/advanced-imaging.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 'cathlab',
      title: 'Cardiac Cath Lab',
      subtitle: 'Flat-Panel Digital Angiography',
      desc: 'Real-time 3D vascular roadmapping for complex coronary interventions, electrophysiology ablation, and structural heart procedures.',
      specs: ['50% Lower Radiation Dosage', 'ClarityIQ Image Processing', '24/7 Emergency STEMI Care'],
      image: '/images/technology/cardiac-cathlab.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 'theatres',
      title: 'Modular Operating Theatres',
      subtitle: 'Laminar Airflow Surgical Suites',
      desc: 'Hermetically sealed operating suites featuring HEPA 99.97% air filtration, anti-microbial surfaces, and integrated surgical workflow monitors.',
      specs: ['Class 100 Ultra-clean Air', 'Seamless Touchless Systems', 'Integrated Video Distribution'],
      image: '/images/technology/modular-theatres.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 'icu',
      title: 'Intelligent Critical Care',
      subtitle: 'AI-Monitored 24/7 ICUs',
      desc: 'Continuous multi-parameter hemodynamic monitoring with real-time early warning algorithms and dedicated 1:1 nurse-to-patient ratios.',
      specs: ['Centralized Tele-ICU Command', 'Non-Invasive Cardiac Output Monitoring', 'Isolated Infection Control Bays'],
      image: '/images/technology/critical-care.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  const current = TECHS[activeTech];

  return (
    <section className="technology-section" id="technology">
      {/* Background Ambient Glows */}
      <div className="tech-ambient-glow" aria-hidden="true" />

      <div className="section-container">
        <div className="tech-section-header">
          <h2 className="tech-main-headline">
            <span className="tech-title-navy">Precision, </span>
            <span className="tech-title-leaf">powered by advanced technology.</span>
          </h2>
          <p className="tech-section-subtitle">
            Empowering our medical boards with next-generation diagnostic, imaging, and surgical platforms.
          </p>
        </div>

        {/* Interactive Tech Nav Tabs (No Icons, Green Hover Border) */}
        <div className="tech-nav-tabs">
          {TECHS.map((tech, idx) => {
            const isActive = idx === activeTech;
            return (
              <button
                key={tech.id}
                type="button"
                className={`tech-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTech(idx)}
              >
                <span>{tech.title}</span>
                {isActive && <div className="active-tab-glow-line" aria-hidden="true" />}
              </button>
            );
          })}
        </div>

        {/* Feature Showcase Enclosed Grid Card */}
        <div className="tech-feature-card">
          <div className="tech-info-side">
            <div className="tech-subtitle-badge">
              <span>{current.subtitle}</span>
            </div>
            <h3 className="tech-heading">{current.title}</h3>
            <p className="tech-desc">{current.desc}</p>

            <div className="tech-specs-list">
              {current.specs.map((spec, sIdx) => (
                <div key={sIdx} className="tech-spec-item">
                  <div className="spec-check-circle">
                    <Check size={12} className="check-icon-svg" />
                  </div>
                  <span className="spec-text">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="tech-image-side">
            <img 
              src={getAssetUrl(current.image)} 
              onError={(e) => {
                e.currentTarget.src = current.fallbackImage;
              }}
              alt={current.title} 
              className="tech-img" 
            />
            <div className="tech-glass-badge">
              <span className="badge-pulse-dot" />
              <span>Omni Technology Suite</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
