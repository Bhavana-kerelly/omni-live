import React from 'react';

export default function Footer() {
  return (
    <footer className="omni-footer" role="contentinfo">
      <div className="footer-top">
        <div>
          <h3 className="footer-brand-title">OMNI HOSPITALS</h3>
          <p className="footer-brand-desc">
            Defining the future of clinical excellence, medical innovation, and compassionate patient care.
          </p>
        </div>

        <div>
          <h4 className="footer-col-title">Specialities</h4>
          <ul className="footer-links">
            <li><a href="#specialities" className="footer-link">Cardiology</a></li>
            <li><span className="footer-link">Neurology</span></li>
            <li><span className="footer-link">Orthopedics</span></li>
            <li><span className="footer-link">Gastroenterology</span></li>
            <li><span className="footer-link">Pulmonology</span></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#doctors" className="footer-link">Find a Doctor</a></li>
            <li><a href="#technology" className="footer-link">Technology</a></li>
            <li><a href="#centers" className="footer-link">Centers of Excellence</a></li>
            <li><a href="#emergency" className="footer-link">Emergency Services</a></li>
          </ul>
        </div>

        <div>
          <h4 className="footer-col-title">Emergency Contact</h4>
          <p style={{ color: 'var(--color-accent-cyan)', fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.5rem' }}>
            24/7 Helpline: 1066
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
            Omni Hospitals Headquarters,<br />
            International Medical Corridor.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Omni Hospitals. All rights reserved.</p>
        <p style={{ letterSpacing: '0.05em' }}>Luxury Healthcare &amp; Medical Visualization Experience</p>
      </div>
    </footer>
  );
}
