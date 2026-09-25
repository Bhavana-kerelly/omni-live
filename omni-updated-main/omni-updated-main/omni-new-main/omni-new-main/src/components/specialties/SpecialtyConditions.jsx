import React, { useState, useMemo } from 'react';
import { 
  Heart, 
  Activity, 
  Zap, 
  Stethoscope, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  HeartPulse,
  Sparkles,
  ArrowRight,
  Brain,
  Bone,
  AlertTriangle,
  Flame,
  Microscope,
  Baby,
  Ear
} from 'lucide-react';
import { getAssetUrl } from '../../utils/getAssetUrl';
import './CardiologyConditions.css';

// Specialty-specific icon maps & default visual providers
const ICON_POOL = [Activity, HeartPulse, Zap, Stethoscope, ShieldCheck, Heart, Sparkles, Brain, Bone];

export default function SpecialtyConditions({ specialty, onNavigate }) {
  const specName = specialty?.name || 'Medical';
  const specSlug = specialty?.slug || 'cardiology';

  // Format conditions array for orbital visualization
  const formattedConditions = useMemo(() => {
    if (!specialty || !Array.isArray(specialty.conditions) || specialty.conditions.length === 0) {
      return [
        {
          id: 'cond-1',
          number: '01',
          name: `${specName} Condition 1`,
          shortName: `${specName} Condition 1`,
          icon: Activity,
          description: `Comprehensive diagnosis and clinical management of acute and chronic ${specName.toLowerCase()} conditions.`,
          image: specialty?.heroImage || 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80',
          treatedBy: `${specName} Specialists`,
          specialistDescription: 'Expert clinical care & intervention',
          approach: ['Advanced Diagnostics', 'Minimally Invasive Care', 'Better Outcomes']
        }
      ];
    }

    return specialty.conditions.map((item, idx) => {
      const numStr = String(idx + 1).padStart(2, '0');
      const IconComp = ICON_POOL[idx % ICON_POOL.length];
      
      // Default treatedBy & approach fallback per specialty type
      let treatedBy = item.treatedBy || `${specName} Specialists`;
      let specialistDesc = item.specialistDescription || `Expert ${specName.toLowerCase()} care & management`;
      
      if (specSlug === 'cardiology') {
        if (idx === 0) { treatedBy = 'Interventional Cardiologists'; specialistDesc = 'Complex interventions & angioplasty'; }
        else if (idx === 1) { treatedBy = 'Electrophysiologists'; specialistDesc = 'Heart rhythm specialists'; }
        else if (idx === 2) { treatedBy = 'Heart Failure Specialists'; specialistDesc = 'Advanced heart failure care & rehab'; }
        else if (idx === 3) { treatedBy = 'Cardiologists / Cardiac Surgeons'; specialistDesc = 'Structural heart & valve care'; }
        else if (idx === 4) { treatedBy = 'Cardiologists / Internal Medicine'; specialistDesc = 'Cardiovascular risk reduction'; }
        else if (idx === 5) { treatedBy = 'Interventional Cardiologists'; specialistDesc = 'Emergency cardiac & primary PCI'; }
        else if (idx === 6) { treatedBy = 'Pediatric & Adult Congenital Cardiologists'; specialistDesc = 'Congenital cardiac care'; }
      } else if (specSlug === 'orthopedics') {
        if (idx === 0) { treatedBy = 'Joint Replacement Surgeons'; specialistDesc = 'Robotic knee & hip replacements'; }
        else if (idx === 1) { treatedBy = 'Spine Surgeons'; specialistDesc = 'Microdiscectomy & spinal fusion'; }
        else if (idx === 2) { treatedBy = 'Sports Medicine Specialists'; specialistDesc = 'Keyhole ACL & shoulder arthroscopy'; }
        else if (idx === 3) { treatedBy = 'Trauma Orthopedic Surgeons'; specialistDesc = '24/7 Polytrauma fracture care'; }
      } else if (specSlug === 'neurology') {
        if (idx === 0) { treatedBy = 'Stroke Neurologists'; specialistDesc = '24/7 Emergency stroke intervention'; }
        else if (idx === 1) { treatedBy = 'Neurosurgeons'; specialistDesc = 'Microsurgical brain tumor resection'; }
        else if (idx === 2) { treatedBy = 'Epileptologists'; specialistDesc = 'Advanced EEG & seizure control'; }
      }

      return {
        id: item.name ? item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') : `cond-${idx}`,
        number: numStr,
        name: item.name,
        shortName: item.name,
        icon: IconComp,
        description: item.desc || item.description || `Specialized diagnostic evaluation, targeted intervention, and evidence-based therapeutic management for ${item.name}.`,
        image: item.image || specialty.heroImage || specialty.aboutImage || 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80',
        treatedBy: treatedBy,
        specialistDescription: specialistDesc,
        approach: item.approach || ['Advanced Diagnostics', 'Minimally Invasive Care', 'Better Outcomes']
      };
    });
  }, [specialty, specName, specSlug]);

  // Default active condition: "01"
  const [activeCondition, setActiveCondition] = useState(formattedConditions[0]);

  // Update active condition if formattedConditions changes (e.g. switching specialty page)
  React.useEffect(() => {
    if (formattedConditions && formattedConditions.length > 0) {
      setActiveCondition(formattedConditions[0]);
    }
  }, [formattedConditions]);

  const handleFindSpecialist = (e) => {
    if (e) e.preventDefault();
    const el = document.getElementById('our-specialists');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onNavigate) {
      onNavigate('doctors');
    }
  };

  const centerVisualSrc = getAssetUrl(
    specialty?.orbitalImage || 
    specialty?.centerImage || 
    `/images/${specSlug}_center.jpg`
  );

  return (
    <section className="cardiology-conditions-section" id="conditions-we-treat">
      
      {/* 1. SECTION HEADER */}
      <div className="cardiology-conditions-header">
        <span className="conditions-eyebrow">CONDITIONS WE TREAT</span>
        <h2 className="conditions-main-title">Comprehensive {specName} Expertise</h2>
        <p className="conditions-subtext">
          Our {specName.toLowerCase()} team treats a wide range of conditions with advanced medical technology and compassionate care.
        </p>
      </div>

      {/* 2. INTERACTIVE ORBITAL & DETAIL PANEL CONTAINER */}
      <div className="orbital-main-container">
        
        {/* LEFT / CENTER: ORBITAL VISUAL STAGE */}
        <div className="orbital-visual-stage">
          
          {/* Single Orbital Decorative Ring */}
          <div className="orbit-ring orbit-ring-outer" />

          {/* Central Anatomical / Medical Visual Anchor */}
          <div className="central-heart-anchor">
            <div className="heart-pulse-aura" />
            <img 
              src={centerVisualSrc} 
              alt={`${specName} Medical Visual`} 
              className="central-anatomical-heart"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = getAssetUrl(`/images/${specSlug}.jpg`);
              }}
            />
            <div className="heart-glow-core" />
          </div>

          {/* Orbital Condition Markers */}
          <div className="orbital-markers-layout">
            {formattedConditions.map((cond, idx) => {
              const IconComp = cond.icon;
              const isActive = activeCondition?.id === cond.id;
              
              return (
                <div
                  key={cond.id || idx}
                  className={`orbital-node node-pos-${idx + 1} ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveCondition(cond)}
                  onMouseEnter={() => setActiveCondition(cond)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Select condition: ${cond.name}`}
                >
                  <div className="node-num-badge">{cond.number}</div>
                  <div className="node-icon-circle">
                    <IconComp size={18} />
                  </div>
                  <span className="node-name-label">{cond.shortName}</span>
                </div>
              );
            })}
          </div>

        </div>

        {/* RIGHT: FLOATING DETAIL INFORMATION PANEL */}
        {activeCondition && (
          <div className="condition-detail-panel">
            <div className="panel-top-badge">
              <span className="panel-number">{activeCondition.number}</span>
              <span className="panel-tag">SELECTED CONDITION</span>
            </div>

            <h3 className="panel-condition-title">{activeCondition.name}</h3>

            <div className="panel-divider" />

            <p className="panel-description">{activeCondition.description}</p>

            {/* Treated By Section */}
            <div className="panel-treated-by-box">
              <span className="treated-by-label">TREATED BY</span>
              <h4 className="treated-by-title">{activeCondition.treatedBy}</h4>
              <p className="treated-by-sub">{activeCondition.specialistDescription}</p>
            </div>

            {/* Our Approach Badges */}
            <div className="panel-approach-box">
              <span className="approach-label">OUR APPROACH</span>
              <div className="approach-tags-row">
                {activeCondition.approach.map((item, i) => (
                  <span key={i} className="approach-pill">
                    <CheckCircle2 size={13} className="check-icon" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Find Specialist CTA Button */}
            <button 
              type="button"
              className="panel-cta-btn"
              onClick={handleFindSpecialist}
            >
              <span>Find Specialists</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}

      </div>

    </section>
  );
}
