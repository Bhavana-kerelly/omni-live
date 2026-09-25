import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X } from 'lucide-react';
import { getAssetUrl } from '../../utils/getAssetUrl';
import { openWhatsAppAppointment } from '../../utils/whatsappHelper';

export default function HeroNavbar({ onNavigate, onBookAppointment }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetView, anchorId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (targetView && onNavigate) {
      onNavigate(targetView);
    }
    
    if (anchorId) {
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleBookClick = (e) => {
    openWhatsAppAppointment();
    if (onBookAppointment) onBookAppointment(e);
  };

  return (
    <header className={`cinematic-hero-navbar ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="hero-nav-container">
        {/* OMNI Brand Logo */}
        <a 
          href="/" 
          className="hero-nav-logo"
          onClick={(e) => handleNavClick(e, 'home')}
          aria-label="OMNI Hospitals Home"
        >
          <img 
            src={getAssetUrl('/omni-logo.png')} 
            onError={(e) => { e.currentTarget.src = getAssetUrl('/omni-logo.svg'); }}
            alt="OMNI Hospitals" 
            className="hero-nav-logo-img"
          />
        </a>

        {/* Desktop Links */}
        <nav className="hero-nav-links" aria-label="Main Navigation">
          <ul className="hero-nav-list">
            <li>
              <a 
                href="#home" 
                className="hero-nav-link"
                onClick={(e) => handleNavClick(e, 'home')}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#hospitals" 
                className="hero-nav-link"
                onClick={(e) => handleNavClick(e, 'home', 'hospitals')}
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="#specialities" 
                className="hero-nav-link"
                onClick={(e) => handleNavClick(e, 'specialities')}
              >
                Specialties
              </a>
            </li>
            <li>
              <a 
                href="#patient-journey" 
                className="hero-nav-link"
                onClick={(e) => handleNavClick(e, 'home', 'patient-journey')}
              >
                Patient Care
              </a>
            </li>
            <li>
              <a 
                href="#packages" 
                className="hero-nav-link"
                onClick={(e) => handleNavClick(e, 'home', 'packages')}
              >
                Health Checkups
              </a>
            </li>
            <li>
              <a 
                href="#hospitals" 
                className="hero-nav-link"
                onClick={(e) => handleNavClick(e, 'hospitals')}
              >
                Hospitals
              </a>
            </li>
            <li>
              <a 
                href="#locations" 
                className="hero-nav-link"
                onClick={(e) => handleNavClick(e, 'locations')}
              >
                Locations
              </a>
            </li>
            <li>
              <a 
                href="#careers" 
                className="hero-nav-link"
                onClick={(e) => handleNavClick(e, 'careers')}
              >
                Careers
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="hero-nav-link"
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Right CTA Button */}
        <div className="hero-nav-actions">
          <button 
            type="button" 
            className="hero-book-btn"
            onClick={handleBookClick}
          >
            <Calendar size={15} aria-hidden="true" />
            <span>BOOK APPOINTMENT</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button 
            type="button" 
            className="hero-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="hero-mobile-drawer">
          <ul className="mobile-drawer-links">
            <li>
              <a href="#hospitals" onClick={(e) => handleNavClick(e, 'home', 'hospitals')}>
                About Us
              </a>
            </li>
            <li>
              <a href="#specialities" onClick={(e) => handleNavClick(e, 'specialities')}>
                Specialties
              </a>
            </li>
            <li>
              <a href="#patient-journey" onClick={(e) => handleNavClick(e, 'home', 'patient-journey')}>
                Patient Care
              </a>
            </li>
            <li>
              <a href="#packages" onClick={(e) => handleNavClick(e, 'home', 'packages')}>
                Health Checkups
              </a>
            </li>
            <li>
              <a href="#hospitals" onClick={(e) => handleNavClick(e, 'hospitals')}>
                Hospitals Network
              </a>
            </li>
            <li>
              <a href="#locations" onClick={(e) => handleNavClick(e, 'locations')}>
                Locations
              </a>
            </li>
            <li>
              <a href="#careers" onClick={(e) => handleNavClick(e, 'careers')}>
                Careers
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
