import React from 'react';
import { UserCheck, Stethoscope, CalendarCheck2, Building2, Shield, FileText, ArrowUpRight } from 'lucide-react';

export default function QuickCareSection({ onSelectAction }) {
  const quickActions = [
    {
      id: 'doctor',
      title: 'FIND A DOCTOR',
      desc: 'Connect with over 500+ internationally accredited medical specialists.',
      icon: UserCheck,
      badge: '500+ Doctors',
      target: 'doctors'
    },
    {
      id: 'speciality',
      title: 'FIND A SPECIALITY',
      desc: 'Explore 30+ advanced multi-disciplinary centers of excellence.',
      icon: Stethoscope,
      badge: '30+ Specialties',
      target: 'specialities'
    },
    {
      id: 'appointment',
      title: 'BOOK AN APPOINTMENT',
      desc: 'Schedule in-person or video consultations with minimal waiting.',
      icon: CalendarCheck2,
      badge: 'Instant Slots',
      target: 'appointment'
    },
    {
      id: 'hospital',
      title: 'FIND A HOSPITAL',
      desc: 'Modern facilities across Hyderabad, Vizag, Kurnool and Andhra Pradesh.',
      icon: Building2,
      badge: '6 Locations',
      target: 'hospitals'
    },
    {
      id: 'packages',
      title: 'HEALTH PACKAGES',
      desc: 'Comprehensive preventive screening curated for every stage of life.',
      icon: Shield,
      badge: 'Preventive Care',
      target: 'packages'
    },
    {
      id: 'second-opinion',
      title: 'SECOND OPINION',
      desc: 'Get expert multi-disciplinary review for complex diagnoses.',
      icon: FileText,
      badge: 'Expert Board',
      target: 'opinion'
    }
  ];

  return (
    <section className="quick-care-section" id="quick-care">
      <div className="section-container">
        <div className="section-header-center">
          <span className="section-eyebrow">PATIENT SERVICES</span>
          <h2 className="section-title-dark">HOW CAN WE HELP YOU TODAY?</h2>
          <div className="title-underline" />
        </div>

        <div className="quick-care-grid">
          {quickActions.map((item) => {
            const IconComp = item.icon;
            return (
              <div 
                key={item.id} 
                className="quick-care-card"
                onClick={() => onSelectAction && onSelectAction(item.target)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onSelectAction && onSelectAction(item.target)}
              >
                <div className="card-top-row">
                  <div className="card-icon-box">
                    <IconComp size={24} className="quick-icon" aria-hidden="true" />
                  </div>
                  <span className="quick-badge">{item.badge}</span>
                </div>

                <h3 className="quick-title">{item.title}</h3>
                <p className="quick-desc">{item.desc}</p>

                <div className="card-footer-row">
                  <span className="quick-action-text">EXPLORE DESTINATION</span>
                  <div className="arrow-circle">
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </div>
                </div>

                <div className="hover-accent-line" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
