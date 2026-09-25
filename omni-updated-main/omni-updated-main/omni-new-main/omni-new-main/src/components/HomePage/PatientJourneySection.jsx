import React, { useState } from 'react';
import { Search, Calendar, Building, Activity, HeartHandshake, Check } from 'lucide-react';

export default function PatientJourneySection() {
  const [activeStep, setActiveStep] = useState(0);

  const STEPS = [
    {
      num: '01',
      title: 'Find Your Doctor',
      desc: 'Browse our directory of 500+ accredited senior specialists by medical domain, experience, and hospital location.',
      icon: Search,
      actionText: 'Browse Specialists',
      tip: 'Filter by nearest hospital or telemedicine options'
    },
    {
      num: '02',
      title: 'Book Consultation',
      desc: 'Select your preferred appointment date and time slot online with instant SMS and WhatsApp confirmation.',
      icon: Calendar,
      actionText: 'Book Slot',
      tip: 'No registration fees for initial online booking'
    },
    {
      num: '03',
      title: 'Visit Omni',
      desc: 'Arrive at our hospital reception where a dedicated patient coordinator assists with smooth check-in and room navigation.',
      icon: Building,
      actionText: 'Get Directions',
      tip: 'Valet parking & executive lounge access available'
    },
    {
      num: '04',
      title: 'Diagnosis & Treatment',
      desc: 'Comprehensive diagnostic evaluation followed by multi-disciplinary treatment planning and robotic or precision care.',
      icon: Activity,
      actionText: 'Explore Tech',
      tip: 'Same-day diagnostic reports via Patient Portal'
    },
    {
      num: '05',
      title: 'Recovery & Follow-up',
      desc: 'Post-treatment rehabilitation, digital prescription access, and personalized follow-up care reminders.',
      icon: HeartHandshake,
      actionText: 'Patient Care',
      tip: '24/7 post-discharge nursing helpline'
    }
  ];

  return (
    <section className="patient-journey-section" id="patient-journey">
      <div className="section-container">
        <div className="section-header-center">
          <span className="section-eyebrow">PATIENT EXPERIENCE</span>
          <h2 className="section-title-dark">YOUR JOURNEY. GUIDED AT EVERY STEP.</h2>
          <p className="section-subtitle-center">
            From your first consultation to complete recovery, we ensure a seamless, transparent, and compassionate experience.
          </p>
        </div>

        {/* Step Progress Line */}
        <div className="journey-progress-track">
          <div 
            className="journey-progress-bar"
            style={{ width: `${(activeStep / (STEPS.length - 1)) * 100}%` }}
          />
          {STEPS.map((step, idx) => (
            <div
              key={step.num}
              className={`journey-step-node ${idx <= activeStep ? 'active' : ''} ${idx === activeStep ? 'current' : ''}`}
              onClick={() => setActiveStep(idx)}
              role="button"
              tabIndex={0}
            >
              <div className="node-circle">
                {idx < activeStep ? <Check size={14} /> : <span>{step.num}</span>}
              </div>
              <span className="node-label">{step.title}</span>
            </div>
          ))}
        </div>

        {/* Active Step Content Card */}
        <div className="journey-card-display">
          <div className="journey-card-inner">
            <div className="journey-card-left">
              <span className="step-big-num">STEP {STEPS[activeStep].num}</span>
              <h3 className="step-card-title">{STEPS[activeStep].title}</h3>
              <p className="step-card-desc">{STEPS[activeStep].desc}</p>

              <div className="step-tip-box">
                <span className="tip-badge">PATIENT BENEFIT</span>
                <span className="tip-text">{STEPS[activeStep].tip}</span>
              </div>
            </div>

            <div className="journey-card-right">
              {React.createElement(STEPS[activeStep].icon, { size: 64, className: 'step-hero-icon' })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
