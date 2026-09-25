import React from 'react';
import { Cpu, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function RoboticSurgerySection({ onExploreRobotic }) {
  const SURGERY_SPECIALTIES = [
    {
      domain: 'UROLOGY',
      procedures: 'Robotic Prostatectomy, Partial Nephrectomy, Pyeloplasty',
      benefit: 'Preserves critical nerves, minimal blood loss & faster recovery.'
    },
    {
      domain: 'GENERAL SURGERY',
      procedures: 'Robotic Hernia Repair, Bariatric Surgery, Colorectal Procedures',
      benefit: 'Tiny 8mm incisions with 99.4% anatomical accuracy.'
    },
    {
      domain: 'ONCOLOGY',
      procedures: 'Robotic Radical Resections, Gynecological Tumor Surgeries',
      benefit: 'High-precision tumor margin clearing with minimal trauma.'
    }
  ];

  return (
    <section className="robotic-surgery-section" id="robotic-surgery">
      <div className="section-container">
        <div className="robotic-card-wrapper">
          {/* Left Side: Editorial Typography & Domain Tabs */}
          <div className="robotic-text-col">
            <div className="robotic-badge">
              <Cpu size={14} className="badge-icon" />
              <span>ROBOTIC SURGERY PROGRAM</span>
            </div>

            <h2 className="robotic-heading">A NEW ERA OF SURGERY</h2>

            <p className="robotic-lead">
              "Advanced robotic care designed around precision, control and recovery."
            </p>

            <p className="robotic-body">
              Available at our Lakdikapul and Miyapur centers in Hyderabad, Omni Hospitals integrates the world-renowned 
              da Vinci surgical platform, empowering our master surgeons to perform complex procedures with unprecedented sub-millimeter dexterity.
            </p>

            {/* 3 Robotic Specialities */}
            <div className="robotic-domains-grid">
              {SURGERY_SPECIALTIES.map((item, idx) => (
                <div key={idx} className="robotic-domain-card">
                  <div className="domain-top-row">
                    <span className="domain-name">{item.domain}</span>
                    <ShieldCheck size={16} className="domain-check" />
                  </div>
                  <span className="domain-procs">{item.procedures}</span>
                  <p className="domain-benefit">{item.benefit}</p>
                </div>
              ))}
            </div>

            <div className="robotic-cta-row">
              <button 
                type="button" 
                className="btn-omni-primary"
                onClick={onExploreRobotic}
              >
                <span>EXPLORE ROBOTIC SURGERY</span>
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right Side: High-res Bright Clinical Surgical Visual */}
          <div className="robotic-visual-col">
            <div className="robotic-image-container">
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop" 
                alt="Omni Hospitals Advanced Robotic Surgery Suite" 
                className="robotic-img"
              />
              <div className="robotic-glass-overlay" />
              <div className="robotic-stat-badge">
                <div className="stat-num">99.8%</div>
                <div className="stat-lbl">Surgical Precision Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
