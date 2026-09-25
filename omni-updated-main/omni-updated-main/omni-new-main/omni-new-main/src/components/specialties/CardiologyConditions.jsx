import React, { useState } from 'react';
import { 
  Heart, 
  Activity, 
  Zap, 
  Stethoscope, 
  ShieldCheck, 
  Users, 
  ChevronRight, 
  Calendar, 
  CheckCircle2, 
  HeartPulse,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { getAssetUrl } from '../../utils/getAssetUrl';
import './CardiologyConditions.css';

const CARDIOLOGY_CONDITIONS = [
  {
    id: 'coronary-artery-disease',
    number: '01',
    name: 'Coronary Artery Disease',
    shortName: 'Coronary Artery Disease',
    icon: HeartPulse,
    description: 'Narrowing or blockage of the coronary arteries caused by plaque buildup, reducing vital blood flow to the heart muscle and increasing the risk of chest pain or heart attack.',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80',
    treatedBy: 'Interventional Cardiologists',
    specialistDescription: 'Complex interventions & angioplasty',
    approach: [
      'Advanced Diagnostics',
      'Minimally Invasive Care',
      'Better Outcomes'
    ]
  },
  {
    id: 'arrhythmias',
    number: '02',
    name: 'Arrhythmias',
    shortName: 'Arrhythmias',
    icon: Activity,
    description: 'Irregularities in the heart’s electrical system causing it to beat too fast, too slow, or erratically. Includes Atrial Fibrillation, Tachycardia, and Bradycardia.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    treatedBy: 'Electrophysiologists',
    specialistDescription: 'Heart rhythm specialists',
    approach: [
      'Advanced Rhythm Testing',
      'Cardiac Monitoring',
      'Personalized Treatment'
    ]
  },
  {
    id: 'heart-failure',
    number: '03',
    name: 'Heart Failure',
    shortName: 'Heart Failure',
    icon: Heart,
    description: 'A chronic condition where the heart muscle does not pump blood efficiently to meet the body’s oxygen requirements, requiring comprehensive medical management.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    treatedBy: 'Heart Failure Specialists / Cardiologists',
    specialistDescription: 'Advanced heart failure care & rehab',
    approach: [
      'Optimization Therapy',
      'Cardiac Rehab',
      'Long-term Monitoring'
    ]
  },
  {
    id: 'valve-disorders',
    number: '04',
    name: 'Valve Disorders',
    shortName: 'Valve Disorders',
    icon: Zap,
    description: 'Stenosis, regurgitation, or prolapse affecting the heart valves (mitral, aortic, tricuspid), impairing smooth directional blood flow through the heart chambers.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    treatedBy: 'Cardiologists / Cardiac Surgeons',
    specialistDescription: 'Structural heart & valve care',
    approach: [
      '3D Echo Evaluation',
      'Minimally Invasive Repairs',
      'Surgical Reconstruction'
    ]
  },
  {
    id: 'hypertension',
    number: '05',
    name: 'Hypertension',
    shortName: 'Hypertension',
    icon: Stethoscope,
    description: 'Persistently elevated arterial pressure that places strain on heart vessels, increasing long-term risks of hypertrophy, stroke, and cardiovascular disease.',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
    treatedBy: 'Cardiologists / Internal Medicine',
    specialistDescription: 'Cardiovascular risk reduction',
    approach: [
      '24/7 BP Monitoring',
      'Organ Protection',
      'Lifestyle Modification'
    ]
  },
  {
    id: 'heart-attack',
    number: '06',
    name: 'Heart Attack (MI)',
    shortName: 'Heart Attack (MI)',
    icon: HeartPulse,
    description: 'An acute cardiac emergency caused by sudden complete coronary arterial blockage requiring immediate emergency angioplasty (primary PCI) within door-to-balloon time.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    treatedBy: 'Interventional Cardiologists',
    specialistDescription: 'Emergency cardiac & primary PCI',
    approach: [
      'Level-1 STEMI Care',
      'Immediate Angioplasty',
      'ICU Stabilization'
    ]
  },
  {
    id: 'congenital-heart-conditions',
    number: '07',
    name: 'Congenital Heart Conditions',
    shortName: 'Congenital Conditions',
    icon: Sparkles,
    description: 'Structural abnormalities of the heart muscle or blood vessels present from birth, managed in pediatric, adolescent, and adult congenital cardiology clinics.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    treatedBy: 'Pediatric & Adult Congenital Cardiologists',
    specialistDescription: 'Congenital cardiac care',
    approach: [
      'Pediatric Screening',
      'Corrective Interventions',
      'Lifelong Monitoring'
    ]
  }
];

const SPECIALIST_CATEGORIES = [
  {
    title: 'Interventional Cardiologists',
    desc: 'Blockages & Stents',
    icon: Activity
  },
  {
    title: 'Electrophysiologists',
    desc: 'Heart Rhythm Specialists',
    icon: Zap
  },
  {
    title: 'Heart Failure Specialists',
    desc: 'Advanced Heart Failure Management',
    icon: Heart
  },
  {
    title: 'Pediatric Cardiologists',
    desc: 'Children\'s Heart Care',
    icon: Users
  },
  {
    title: 'Cardiac Surgeons',
    desc: 'Surgical & Structural Heart Care',
    icon: ShieldCheck
  }
];

export default function CardiologyConditions({ onNavigate }) {
  // Default active condition: "01 - Coronary Artery Disease"
  const [activeCondition, setActiveCondition] = useState(CARDIOLOGY_CONDITIONS[0]);

  const handleFindSpecialist = (e) => {
    if (e) e.preventDefault();
    const el = document.getElementById('our-specialists');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onNavigate) {
      onNavigate('doctors');
    }
  };

  return (
    <section className="cardiology-conditions-section" id="conditions-we-treat">
      
      {/* 1. SECTION HEADER */}
      <div className="cardiology-conditions-header">
        <span className="conditions-eyebrow">CONDITIONS WE TREAT</span>
        <h2 className="conditions-main-title">Comprehensive Cardiac Expertise</h2>
        <p className="conditions-subtext">
          Our cardiology team treats a wide range of heart conditions with advanced technology and compassionate care.
        </p>
      </div>

      {/* 2. INTERACTIVE ORBITAL & DETAIL PANEL CONTAINER */}
      <div className="orbital-main-container">
        
        {/* LEFT / CENTER: ORBITAL HEART VISUALIZATION */}
        <div className="orbital-visual-stage">
          
          {/* Orbital Decorative Rings */}
          <div className="orbit-ring orbit-ring-outer" />
          <div className="orbit-ring orbit-ring-inner" />

          {/* Central Anatomical Heart Visual */}
          <div className="central-heart-anchor">
            <div className="heart-pulse-aura" />
            <img 
              src={getAssetUrl('/images/cardiology_hero_heart.jpg')} 
              alt="Anatomical Heart Visual" 
              className="central-anatomical-heart"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80';
              }}
            />
            <div className="heart-glow-core" />
          </div>

          {/* 7 Orbital Condition Markers */}
          <div className="orbital-markers-layout">
            {CARDIOLOGY_CONDITIONS.map((cond, idx) => {
              const IconComp = cond.icon;
              const isActive = activeCondition.id === cond.id;
              
              return (
                <div
                  key={cond.id}
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
        <div className="condition-detail-panel">
          <div className="panel-top-badge">
            <span className="panel-number">{activeCondition.number}</span>
            <span className="panel-tag">SELECTED CONDITION</span>
          </div>

          <h3 className="panel-condition-title">{activeCondition.name}</h3>

          <div className="panel-divider" />

          <p className="panel-description">{activeCondition.description}</p>

          {/* Condition Medical Visual */}
          <div className="panel-image-wrapper">
            <img 
              src={activeCondition.image} 
              alt={activeCondition.name}
              className="panel-medical-img"
            />
          </div>

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

      </div>

    </section>
  );
}
