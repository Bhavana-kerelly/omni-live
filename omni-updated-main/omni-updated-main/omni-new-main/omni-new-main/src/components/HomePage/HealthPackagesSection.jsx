import React from 'react';
import { Shield, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function HealthPackagesSection({ onBookPackage }) {
  const PACKAGES = [
    {
      id: 'pkg-1',
      title: 'MASTER HEALTH CHECK',
      badge: 'MOST POPULAR',
      testsCount: '65+ Tests',
      includes: ['Comprehensive Blood Profile', '3T MRI & ECG', 'Liver & Kidney Panel', 'Senior Physician Consultation'],
      popularFor: 'Ideal for adults aged 30+'
    },
    {
      id: 'pkg-2',
      title: 'CARDIAC WELLNESS PACKAGE',
      badge: 'HEART CARE',
      testsCount: '45+ Tests',
      includes: ['2D Echo & Treadmill TMT', 'Lipid Fractionation', 'Cardiac Calcium Score', 'Senior Cardiologist Review'],
      popularFor: 'Heart disease prevention'
    },
    {
      id: 'pkg-3',
      title: "WOMEN'S EXECUTIVE HEALTH",
      badge: 'WOMEN CARE',
      testsCount: '55+ Tests',
      includes: ['Mammography & Pap Smear', 'Bone Mineral Density (DEXA)', 'Thyroid & Hormone Panel', 'Senior Gynecologist Review'],
      popularFor: 'Comprehensive women wellness'
    },
    {
      id: 'pkg-4',
      title: 'DIABETES & VASCULAR CARE',
      badge: 'METABOLIC CARE',
      testsCount: '40+ Tests',
      includes: ['HbA1c & Microalbumin', 'Vascular Doppler Study', 'Diabetic Retinopathy Screening', 'Diabetologist Consultation'],
      popularFor: 'Managing sugar levels & organ health'
    }
  ];

  return (
    <section className="packages-section" id="packages">
      <div className="section-container">
        <div className="section-header-split">
          <div>
            <span className="section-eyebrow">PREVENTIVE HEALTHCARE</span>
            <h2 className="section-title-dark">DON'T WAIT FOR SYMPTOMS.</h2>
            <p className="section-lead-muted">
              Preventive health checks designed for every stage of life to detect health risks early.
            </p>
          </div>

          <button 
            type="button" 
            className="btn-omni-primary"
            onClick={onBookPackage}
          >
            <span>VIEW ALL PACKAGES</span>
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>

        {/* Packages Cards Grid */}
        <div className="packages-grid">
          {PACKAGES.map((pkg) => (
            <div key={pkg.id} className="pkg-card">
              <div className="pkg-header">
                <div className="pkg-badge-row">
                  <span className="pkg-badge">
                    <Sparkles size={12} className="sparkle-icon" />
                    {pkg.badge}
                  </span>
                  <span className="pkg-count">{pkg.testsCount}</span>
                </div>
                <h3 className="pkg-title">{pkg.title}</h3>
                <span className="pkg-sub">{pkg.popularFor}</span>
              </div>

              <div className="pkg-body">
                <h4 className="pkg-includes-label">KEY INCLUSIONS:</h4>
                <ul className="pkg-list">
                  {pkg.includes.map((inc, i) => (
                    <li key={i}>
                      <CheckCircle2 size={15} className="check-icon" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  type="button" 
                  className="pkg-book-btn"
                  onClick={() => onBookPackage && onBookPackage(pkg)}
                >
                  <Shield size={15} />
                  <span>BOOK HEALTH CHECK</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
