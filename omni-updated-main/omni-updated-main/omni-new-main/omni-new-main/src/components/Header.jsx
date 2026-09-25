import React from 'react';
import { Activity, PhoneCall } from 'lucide-react';
import { getAssetUrl } from '../utils/getAssetUrl';

export default function Header({ onNavigate }) {
  const handleNav = (e, view, anchor) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(view);
    }
    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="omni-header" role="banner">
      <div 
        className="omni-header-logo" 
        onClick={(e) => handleNav(e, 'home')}
        style={{ cursor: 'pointer' }}
      >
        <img 
          src={getAssetUrl('/omni-logo.png')} 
          onError={(e) => { e.currentTarget.src = getAssetUrl('/omni-logo.svg'); }}
          alt="OMNI Hospitals" 
          className="header-brand-img"
        />
      </div>

      <nav aria-label="Main Navigation">
        <ul className="omni-nav-links">
          <li>
            <a href="#home" className="omni-nav-link" onClick={(e) => handleNav(e, 'home')}>
              Home
            </a>
          </li>
          <li>
            <a href="#specialities" className="omni-nav-link active" aria-current="page" onClick={(e) => handleNav(e, 'specialities')}>
              Specialities
            </a>
          </li>
          <li>
            <a href="#doctors" className="omni-nav-link" onClick={(e) => handleNav(e, 'home', 'doctors')}>
              Doctors
            </a>
          </li>
          <li>
            <a href="#hospitals" className="omni-nav-link" onClick={(e) => handleNav(e, 'hospitals')}>
              Hospitals
            </a>
          </li>
          <li>
            <a href="#careers" className="omni-nav-link" onClick={(e) => handleNav(e, 'careers')}>
              Careers
            </a>
          </li>
          <li>
            <a href="#contact" className="omni-nav-link" onClick={(e) => handleNav(e, 'contact')}>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      <button className="omni-emergency-btn" aria-label="Emergency 24/7 Helpline">
        <PhoneCall size={14} aria-hidden="true" />
        <span>Emergency 24/7</span>
      </button>
    </header>
  );
}

