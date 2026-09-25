import React from 'react';
import { Users, GraduationCap, Sparkles, HeartHandshake } from 'lucide-react';
import { getAssetUrl } from '../utils/getAssetUrl';
import './LifeAtOmni.css';

const VALUES_DATA = [
  {
    num: '01',
    title: 'People',
    icon: Users,
    desc: 'We empower physicians, nurses, technicians, and administrative professionals with supportive leadership and a collaborative environment where every voice matters.',
    image: '/images/careers/people.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80',
    alt: 'Healthcare team collaborating at OMNI'
  },
  {
    num: '02',
    title: 'Learning',
    icon: GraduationCap,
    desc: 'Continuous medical education, cadaveric workshops, simulation labs, and leadership development programs to constantly elevate your clinical practice.',
    image: '/images/careers/learning.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    alt: 'Doctors in training and medical simulation lab'
  },
  {
    num: '03',
    title: 'Innovation',
    icon: Sparkles,
    desc: 'Work alongside state-of-the-art robotic surgical suites, digital cath labs, high-speed 3T MRIs, and AI-assisted clinical decision tools.',
    image: '/images/careers/innovation.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
    alt: 'Robotic surgical suite and medical technology'
  },
  {
    num: '04',
    title: 'Impact',
    icon: HeartHandshake,
    desc: 'Touch thousands of lives across Telangana and Andhra Pradesh through life-saving emergency care, community health initiatives, and clinical excellence.',
    image: '/images/careers/impact.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    alt: 'Doctor providing warm compassionate care to patient'
  }
];

export default function LifeAtOmni() {
  return (
    <section className="life-at-omni-redesign" id="culture-values">
      {/* Background Oversized OMNI Watermark */}
      <div className="life-omni-watermark" aria-hidden="true">OMNI</div>

      {/* Decorative Plus Symbols & Dotted Grid Background Pattern */}
      <div className="life-bg-dots-pattern" aria-hidden="true" />
      <div className="life-plus-symbol plus-1" aria-hidden="true">+</div>
      <div className="life-plus-symbol plus-2" aria-hidden="true">+</div>
      <div className="life-plus-symbol plus-3" aria-hidden="true">+</div>

      {/* Subtle Background Flowing Wave SVG */}
      <svg className="life-bg-wave-svg" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M0,192L60,202.7C120,213,240,235,360,224C480,213,600,171,720,165.3C840,160,960,192,1080,197.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" fill="url(#wave-grad)" fillOpacity="0.18" />
        <defs>
          <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0878E8" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#35A9E8" stopOpacity="0.02" />
          </linearGradient>
        </defs>
      </svg>

      <div className="life-section-container">
        {/* HEADER AREA */}
        <div className="life-header-flex">
          {/* Top Left Editorial Header */}
          <div className="life-header-left">
            <div className="life-eyebrow-wrapper">
              <span className="life-eyebrow-text">Culture &amp; Values</span>
              <span className="life-eyebrow-line" />
            </div>
            <h2 className="life-main-heading">
              <span className="heading-navy">Life at </span>
              <span className="heading-blue-gradient">Omni</span>
            </h2>
            <p className="life-lead-subtitle">
              Our culture is grounded in empathy, professional autonomy, and an unwavering focus on patient-first healing.
            </p>
          </div>


        </div>

        {/* FOUR VALUE ITEMS - CONNECTED JOURNEY TIMELINE */}
        <div className="life-journey-timeline">
          {/* Connecting Line Across Desktop */}
          <div className="timeline-connector-line" aria-hidden="true" />

          <div className="life-values-grid">
            {VALUES_DATA.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.num} className="life-value-card">
                  {/* Circular Numbered Marker */}
                  <div className="value-num-node">
                    <span>{item.num}</span>
                  </div>

                  {/* Outlined Icon Bubble */}
                  <div className="value-icon-bubble">
                    <IconComponent size={24} className="value-lucide-icon" />
                  </div>

                  {/* Title & Short Accent Line */}
                  <h3 className="value-title">{item.title}</h3>
                  <div className="value-title-underline" />

                  {/* Description */}
                  <p className="value-desc">{item.desc}</p>

                  {/* Bottom Rounded Image */}
                  <div className="value-image-frame">
                    <img
                      src={getAssetUrl(item.image)}
                      onError={(e) => {
                        e.currentTarget.src = item.fallbackImage;
                      }}
                      alt={item.alt}
                      className="value-img"
                    />
                    <div className="image-bottom-accent-line" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
