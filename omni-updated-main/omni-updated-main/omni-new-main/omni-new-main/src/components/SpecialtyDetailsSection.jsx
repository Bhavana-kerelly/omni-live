import React, { useState } from 'react';
import { Sparkles, Search, ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../utils/getAssetUrl';

const ALL_SPECIALTIES = [
  { 
    id: 'cardiology',
    name: 'Cardiology',
    subtitle: 'Comprehensive Cardiovascular Care & Interventions',
    image: '/images/cardiology.jpg',
    fallback: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 'orthopedics',
    name: 'Orthopedics',
    subtitle: 'Robotic Joint Replacements & Advanced Spine Care',
    image: '/images/orthopedics.jpg',
    fallback: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 'neurology',
    name: 'Neurology',
    subtitle: 'Stroke Intervention, Brain & Neurosurgery Center',
    image: '/images/neurology.jpg',
    fallback: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 'urology',
    name: 'Urology',
    subtitle: 'Advanced Laser Stone Removal, Prostate & Uro Care',
    image: '/images/urology.jpg',
    fallback: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 'emergency-medicine',
    name: 'Emergency Medicine & Critical Care',
    subtitle: '24/7 Level-1 Emergency Trauma & High-Dependency ICUs',
    image: '/images/emergency.jpg',
    fallback: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 'general-medicine',
    name: 'General Medicine',
    subtitle: 'Internal Medicine, Preventive Care & Chronic Management',
    image: '/images/general_medicine.jpg',
    fallback: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 'general-surgery',
    name: 'General Surgery',
    subtitle: 'Minimally Invasive & Advanced Laparoscopic Surgery',
    image: '/images/general_surgery.jpg',
    fallback: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 'gastroenterology',
    name: 'Gastroenterology',
    subtitle: 'Digestive Health, Advanced Endoscopy & Liver Care',
    image: '/images/gastroenterology.jpg',
    fallback: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 'obstetrics-gynaecology',
    name: 'Obstetrics & Gynaecology',
    subtitle: 'High-Risk Maternity, Fetal Medicine & Women\'s Health',
    image: '/images/gynaecology.jpg',
    fallback: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 'ent',
    name: 'ENT',
    subtitle: 'Ear, Nose, Throat & Micro-Endoscopic Head-Neck Surgery',
    image: '/images/ent.jpg',
    fallback: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    objectPosition: '30% 50%',
    transformScale: '1.05'
  },
  { 
    id: 'nephrology',
    name: 'Nephrology',
    subtitle: 'Kidney Disease Management & 24/7 Hemodialysis Unit',
    image: '/images/nephrology.jpg',
    fallback: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 'pulmonology',
    name: 'Pulmonology',
    subtitle: 'Respiratory Diseases, Asthma & Sleep Medicine Center',
    image: '/images/pulmonology.jpg',
    fallback: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 'dermatology',
    name: 'Dermatology',
    subtitle: 'Clinical Dermatology, Dermato-Surgery & Aesthetic Care',
    image: '/images/dermatology.jpg',
    fallback: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 'psychiatry',
    name: 'Psychiatry',
    subtitle: 'Behavioral Health, Neuro-Psychiatry & Wellness Therapy',
    image: '/images/psychiatry.jpg',
    fallback: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    objectPosition: '50% 85%',
    transformScale: '1.25'
  },
  { 
    id: 'plastic-surgery',
    name: 'Plastic Surgery',
    subtitle: 'Reconstructive Surgery, Trauma Repair & Cosmetic Procedures',
    image: '/images/plastic_surgery.jpg',
    fallback: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80'
  }
];

export default function SpecialtyDetailsSection({ onNavigate }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSpecialties = ALL_SPECIALTIES.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleSpecialtyClick = (id) => {
    if (onNavigate) onNavigate(`specialities/${id}`);
  };

  return (
    <section className="specialty-details-section" id="explore-specialties">
      <div className="details-container">
        
        {/* STICKY LEFT SIDE — EDITORIAL HEADER */}
        <div className="details-left-sticky">
          <span className="details-header-tag">Complete Care Directory</span>
          <h2 className="details-title">15+ Centres of Excellence & Specialities</h2>
          <p className="details-subtitle">
            One Destination for Complete Medical Care
          </p>
          <p className="details-body">
            OMNI Hospitals operates multi-disciplinary centers of excellence delivering world-class medical expertise, advanced surgical suites, and 24/7 emergency interventions across all major medical disciplines.
          </p>

          {/* Quick Search Input */}
          <div className="specialty-search-box">
            <Search size={16} className="search-icon" />
            <input 
              type="text"
              placeholder="Search specialty (e.g. Cardiology, ENT)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="specialty-search-input"
            />
          </div>
        </div>

        {/* RIGHT SIDE — VISUAL IMAGE CARD GRID (MATCHING ATTACHED DESIGN) */}
        <div className="highlights-grid-wrapper">
          <div className="visual-specialties-grid">
            {filteredSpecialties.map((item) => (
              <div 
                key={item.id} 
                className="specialty-visual-card"
                onClick={() => handleSpecialtyClick(item.id)}
              >
                {/* Background Image */}
                <img 
                  src={getAssetUrl(item.image)} 
                  alt={item.name} 
                  className="visual-card-bg-img" 
                  style={{
                    objectPosition: item.objectPosition || 'center center',
                    transform: item.transformScale ? `scale(${item.transformScale})` : undefined
                  }}
                  onError={(e) => {
                    e.currentTarget.src = item.fallback;
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="visual-card-gradient-overlay" />

                {/* Bottom Content Area */}
                <div className="visual-card-content">
                  <h3 className="visual-card-title">{item.name}</h3>
                  <div className="visual-card-learn-more">
                    <span>Learn more</span>
                    <ArrowRight size={16} className="learn-arrow" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredSpecialties.length === 0 && (
            <div className="no-specialties-found">
              <p>No medical specialty matches "{searchTerm}".</p>
              <button 
                type="button" 
                onClick={() => setSearchTerm('')}
                className="btn-reset-search"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
