import React, { useState, useEffect, useRef } from 'react';
import { 
  Home, 
  Info, 
  Stethoscope, 
  Users, 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Briefcase, 
  BookOpen, 
  PhoneCall, 
  Siren, 
  Phone, 
  Calendar, 
  Menu, 
  X, 
  ChevronDown, 
  Navigation, 
  ArrowRight 
} from 'lucide-react';
import { getAssetUrl } from '../../utils/getAssetUrl';
import { openWhatsAppAppointment } from '../../utils/whatsappHelper';

const LOCATIONS_DROPDOWN_DATA = [
  {
    num: '01',
    id: 'kothapet',
    name: 'Kothapet',
    city: 'Hyderabad',
    heading: 'OMNI Hospitals — Kothapet',
    address: 'Opp. PVR & Victoria Memorial Metro Station, Kothapet, Hyderabad',
    phone: '040-67369999 / 8096369999',
    mapLink: 'https://maps.google.com/?q=OMNI+Hospitals+Kothapet+Hyderabad',
    image: '/images/hospitals/kothapet-card.jpg',
    targetView: 'locations'
  },
  {
    num: '02',
    id: 'kukatpally',
    name: 'Kukatpally',
    city: 'Hyderabad',
    heading: 'OMNI Hospitals — Kukatpally',
    address: 'Near KPBH Metro Station, Kukatpally, Hyderabad',
    phone: '040-68252568 / 7799960073',
    mapLink: 'https://maps.google.com/?q=OMNI+Hospitals+Kukatpally+Hyderabad',
    image: '/images/hospitals/kukatpally-card.jpg',
    targetView: 'locations'
  },
  {
    num: '03',
    id: 'udai-nampally',
    name: 'UDAI OMNI – Nampally',
    city: 'Hyderabad',
    heading: 'UDAI OMNI Hospitals — Nampally',
    address: 'Near Assembly Metro Station, Chapel Road, Nampally, Hyderabad',
    phone: '040-23232226 / 040-66292228',
    mapLink: 'https://maps.google.com/?q=UDAI+OMNI+Hospitals+Nampally+Hyderabad',
    image: '/images/hospitals/nampally-card.jpg',
    targetView: 'locations'
  },
  {
    num: '04',
    id: 'vizag',
    name: 'Vizag',
    city: 'Visakhapatnam',
    heading: 'OMNI Hospitals — Vizag',
    address: 'Waltair Main Road, Ram Nagar, Visakhapatnam',
    phone: '8008904323',
    mapLink: 'https://maps.google.com/?q=OMNI+Hospitals+Ram+Nagar+Vizag',
    image: '/images/hospitals/vizag-card.jpg',
    targetView: 'locations'
  },
  {
    num: '05',
    id: 'giggles-vizag',
    name: 'Giggles Vizag',
    city: 'Visakhapatnam',
    heading: 'Giggles by OMNI — Vizag',
    address: 'Health City, Arilova, Visakhapatnam',
    phone: '7330788815',
    mapLink: 'https://maps.google.com/?q=Giggles+by+OMNI+Vizag',
    image: '/images/hospitals/giggles-vizag-card.jpg',
    targetView: 'locations'
  },
  {
    num: '06',
    id: 'kurnool',
    name: 'Kurnool',
    city: 'Kurnool',
    heading: 'OMNI Hospitals — Kurnool',
    address: 'Sampath Nagar, Near New Bus Stand, Kurnool',
    phone: '7569443737 / 08518-277188',
    mapLink: 'https://maps.google.com/?q=OMNI+Hospitals+Kurnool',
    image: '/images/hospitals/kurnool-card.jpg',
    targetView: 'locations'
  }
];

export default function HomeHeader({ currentView = 'home', onNavigate, onBookAppointment }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileLocationsExpanded, setMobileLocationsExpanded] = useState(false);
  
  // Locations Dropdown State
  const [isLocationsDropdownOpen, setIsLocationsDropdownOpen] = useState(false);
  const [hoveredLocationIndex, setHoveredLocationIndex] = useState(0);
  const dropdownCloseTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, viewName) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setIsLocationsDropdownOpen(false);
    if (onNavigate) {
      onNavigate(viewName);
    } else {
      if (viewName === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleMouseEnterLocations = () => {
    if (dropdownCloseTimer.current) {
      clearTimeout(dropdownCloseTimer.current);
    }
    setIsLocationsDropdownOpen(true);
  };

  const handleMouseLeaveLocations = () => {
    dropdownCloseTimer.current = setTimeout(() => {
      setIsLocationsDropdownOpen(false);
    }, 200);
  };

  const handleLocationClick = (e, loc) => {
    e.preventDefault();
    setIsLocationsDropdownOpen(false);
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(loc.targetView || 'locations');
    }
  };

  return (
    <header 
      className={`home-header ${isScrolled ? 'scrolled' : 'transparent'}`}
      onMouseLeave={handleMouseLeaveLocations}
    >

      <div className="header-master-wrapper glass-pill-container">

        {/* ROW 1: BRAND LOGO (LEFT) & TOP ACTION CARDS (RIGHT) */}
        <div className="header-top-row">
          {/* Left Brand Logo Pod positioned within the glass pill */}
          <div className="header-logo-pod white-glass-bg">
            <a 
              href="/" 
              className="header-logo"
              onClick={(e) => handleLinkClick(e, 'home')}
              aria-label="Omni Hospitals Home"
            >
              <img 
                src={getAssetUrl('/omni-logo.png')} 
                onError={(e) => { e.currentTarget.src = getAssetUrl('/omni-logo.svg'); }}
                alt="OMNI Hospitals" 
                className="header-brand-img"
              />
            </a>
          </div>

          {/* Right Action Utility Badges */}
          <div className="header-top-actions">
            
            {/* Card 1: 24/7 Emergency Glowing Card */}
            <a 
              href="tel:8880101000" 
              className="header-emergency-glow-card"
              title="24/7 Emergency Helpline"
            >
              <div className="emergency-glow-orb">
                <img 
                  src={getAssetUrl('/images/icons/emergency-icon.png')} 
                  alt="24/7 Emergency" 
                  className="emergency-orb-img"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                <Siren size={20} className="emergency-orb-siren-fallback" style={{ display: 'none' }} />
              </div>
              <div className="emergency-info-lines">
                <div className="emergency-title-row">
                  <span className="emergency-num-highlight">24/7</span>
                  <span className="emergency-label-caps">EMERGENCY</span>
                </div>
              </div>
            </a>

            {/* Card 2: 888 0101 000 Call Us Now */}
            <a 
              href="tel:8880101000" 
              className="header-phone-action-card"
              title="Call OMNI Hospitals Helpline"
            >
              <div className="phone-action-green-orb">
                <Phone size={18} className="phone-icon-svg" />
              </div>
              <div className="phone-action-info">
                <span className="phone-number-bold-text">888 0101 000</span>
              </div>
            </a>

            {/* Vertical Divider Line */}
            <div className="header-action-vertical-divider" aria-hidden="true"></div>

            {/* Card 3: Book Appointment Pill Button */}
            <button 
              type="button" 
              className="header-appointment-cta-pill"
              onClick={() => onBookAppointment ? onBookAppointment() : openWhatsAppAppointment()}
              title="Book an Appointment"
            >
              <div className="appointment-calendar-circle">
                <Calendar size={18} className="calendar-icon-svg" />
              </div>
              <span className="appointment-cta-label">
                <span className="appt-label-full">Book Appointment</span>
                <span className="appt-label-short">Book</span>
              </span>
            </button>

            {/* NABH Accreditation Badge */}
            <div className="header-nabh-seal-wrapper" title="NABH Accredited Hospital">
              <img 
                src={getAssetUrl('/images/nabh-logo.png')} 
                alt="NABH Accredited" 
                className="nabh-seal-img" 
              />
            </div>

            {/* Mobile Menu Hamburger Toggle */}
            <button 
              type="button" 
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

          </div>
        </div>

        {/* ROW 2: FLOATING CAPSULE NAVIGATION BAR */}
        <div className="header-bottom-row">
          <div className="floating-nav-capsule">
            
            {/* Navigation Links List */}
            <nav className="capsule-nav-menu" aria-label="Main navigation">
              <div className="nav-glass-strip">
                <ul className="capsule-nav-list">
                  
                  <li>
                    <a 
                      href="/home" 
                      className={`capsule-nav-item ${currentView === 'home' || !currentView || currentView === '' ? 'active' : ''}`}
                      onClick={(e) => handleLinkClick(e, 'home')}
                    >
                      <Home size={19} strokeWidth={2.1} className="nav-btn-icon" />
                      <span>Home</span>
                    </a>
                  </li>

                <li>
                  <a 
                    href="/about" 
                    className={`capsule-nav-item ${currentView === 'about' ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(e, 'about')}
                  >
                    <Info size={19} strokeWidth={2.1} className="nav-btn-icon" />
                    <span>About Us</span>
                  </a>
                </li>

                <li>
                  <a 
                    href="/specialities" 
                    className={`capsule-nav-item ${currentView === 'specialities' ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(e, 'specialities')}
                  >
                    <Stethoscope size={19} strokeWidth={2.1} className="nav-btn-icon" />
                    <span>Specialities</span>
                  </a>
                </li>

                <li>
                  <a 
                    href="/doctors" 
                    className={`capsule-nav-item ${currentView === 'doctors' ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(e, 'doctors')}
                  >
                    <Users size={19} strokeWidth={2.1} className="nav-btn-icon" />
                    <span>Doctors</span>
                  </a>
                </li>

                <li>
                  <a 
                    href="/hospitals" 
                    className={`capsule-nav-item ${currentView === 'hospitals' || currentView === 'hospital-detail' ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(e, 'hospitals')}
                  >
                    <Building2 size={19} strokeWidth={2.1} className="nav-btn-icon" />
                    <span>Hospitals</span>
                  </a>
                </li>

                {/* LOCATIONS WITH INTERACTIVE DROPDOWN */}
                <li 
                  className="locations-nav-wrapper"
                  onMouseEnter={handleMouseEnterLocations}
                  onMouseLeave={handleMouseLeaveLocations}
                >
                  <a 
                    href="/locations" 
                    className={`capsule-nav-item ${currentView === 'locations' || isLocationsDropdownOpen ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(e, 'locations')}
                  >
                    <MapPin size={19} strokeWidth={2.1} className="nav-btn-icon" />
                    <span>Locations</span>
                    <ChevronDown size={13} className={`locations-chevron ${isLocationsDropdownOpen ? 'open' : ''}`} />
                  </a>

                  {/* DESKTOP LOCATION DISCOVERY PANEL DROPDOWN */}
                  {isLocationsDropdownOpen && (
                    <div 
                      className="locations-discovery-panel"
                      onMouseEnter={handleMouseEnterLocations}
                      onMouseLeave={handleMouseLeaveLocations}
                    >
                      <div className="panel-inner-grid">
                        
                        {/* LEFT COLUMN: Location Navigation List */}
                        <div className="panel-left-nav">
                          <div className="left-header-block">
                            <span className="panel-eyebrow">OUR LOCATIONS</span>
                            <h3 className="panel-heading">Find an Omni Hospital Near You</h3>
                            <p className="panel-subtext">Explore Omni Hospitals across our locations.</p>
                          </div>

                          <ul className="locations-list-rows">
                            {LOCATIONS_DROPDOWN_DATA.map((loc, idx) => {
                              const isActive = hoveredLocationIndex === idx;
                              return (
                                <li key={loc.id}>
                                  <button
                                    type="button"
                                    className={`location-list-row ${isActive ? 'active' : ''}`}
                                    onMouseEnter={() => setHoveredLocationIndex(idx)}
                                    onClick={(e) => handleLocationClick(e, loc)}
                                  >
                                    <span className="loc-num">{loc.num}</span>
                                    <div className="loc-text-col">
                                      <span className="loc-title">{loc.name}</span>
                                      <span className="loc-city">{loc.city}</span>
                                    </div>
                                    {isActive && <div className="active-route-indicator" />}
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        </div>

                        {/* RIGHT COLUMN: Live Preview Window */}
                        <div className="panel-right-preview">
                          {LOCATIONS_DROPDOWN_DATA.map((loc, idx) => {
                            const isSelected = hoveredLocationIndex === idx;
                            if (!isSelected) return null;
                            return (
                              <div key={loc.id} className="preview-card-active">
                                <div className="preview-image-wrapper">
                                  <img 
                                    src={getAssetUrl(loc.image)} 
                                    alt={loc.heading} 
                                    className="preview-hospital-img" 
                                  />
                                  <div className="preview-img-overlay" />
                                  <span className="preview-city-badge">
                                    <MapPin size={12} />
                                    {loc.city}
                                  </span>
                                </div>

                                <div className="preview-content-block">
                                  <h4 className="preview-hospital-heading">{loc.heading}</h4>
                                  <p className="preview-address-text">
                                    <MapPin size={13} className="pin-icon" />
                                    <span>{loc.address}</span>
                                  </p>
                                  <p className="preview-phone-text">
                                    <Phone size={13} className="phone-icon" />
                                    <span>Phone: {loc.phone}</span>
                                  </p>

                                  <a 
                                    href={loc.mapLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="preview-directions-btn"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <Navigation size={13} />
                                    <span>Get Directions</span>
                                  </a>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                      </div>
                    </div>
                  )}
                </li>

                <li>
                  <a 
                    href="/insurance" 
                    className={`capsule-nav-item ${currentView === 'insurance' ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(e, 'insurance')}
                  >
                    <ShieldCheck size={19} strokeWidth={2.1} className="nav-btn-icon" />
                    <span>Insurance</span>
                  </a>
                </li>

                <li>
                  <a 
                    href="/careers" 
                    className={`capsule-nav-item ${currentView === 'careers' ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(e, 'careers')}
                  >
                    <Briefcase size={19} strokeWidth={2.1} className="nav-btn-icon" />
                    <span>Careers</span>
                  </a>
                </li>

                <li>
                  <a 
                    href="/blogs" 
                    className={`capsule-nav-item ${currentView === 'blogs' || currentView === 'blog-detail' ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(e, 'blogs')}
                  >
                    <BookOpen size={19} strokeWidth={2.1} className="nav-btn-icon" />
                    <span>Blogs</span>
                  </a>
                </li>

                <li>
                  <a 
                    href="/contact" 
                    className={`capsule-nav-item ${currentView === 'contact' ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(e, 'contact')}
                  >
                    <PhoneCall size={19} strokeWidth={2.1} className="nav-btn-icon" />
                    <span>Contact Us</span>
                  </a>
                </li>

              </ul>
              </div>
            </nav>

          </div>
        </div>

      </div>

      {/* MOBILE DRAWER MENU */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-nav-list">
            <li>
              <a href="/home" onClick={(e) => handleLinkClick(e, 'home')}>
                Home
              </a>
            </li>
            <li>
              <a href="/about" onClick={(e) => handleLinkClick(e, 'about')}>
                About Us
              </a>
            </li>
            <li>
              <a href="/specialities" onClick={(e) => handleLinkClick(e, 'specialities')}>
                Specialities
              </a>
            </li>
            <li>
              <a href="/doctors" onClick={(e) => handleLinkClick(e, 'doctors')}>
                Doctors
              </a>
            </li>
            <li>
              <a href="/hospitals" onClick={(e) => handleLinkClick(e, 'hospitals')}>
                Hospitals
              </a>
            </li>
            
            {/* MOBILE EXPANDABLE LOCATIONS ACCORDION */}
            <li className="mobile-accordion-li">
              <button 
                type="button"
                className="mobile-accordion-toggle"
                onClick={() => setMobileLocationsExpanded(!mobileLocationsExpanded)}
              >
                <span>Locations</span>
                <ChevronDown size={16} className={`mobile-chevron ${mobileLocationsExpanded ? 'open' : ''}`} />
              </button>

              {mobileLocationsExpanded && (
                <ul className="mobile-sub-locations-list">
                  {LOCATIONS_DROPDOWN_DATA.map((loc) => (
                    <li key={loc.id}>
                      <a 
                        href="/locations"
                        onClick={(e) => handleLocationClick(e, loc)}
                        className="mobile-sub-location-link"
                      >
                        <span className="sub-num">{loc.num}</span>
                        <span className="sub-name">{loc.name} ({loc.city})</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <a href="/insurance" onClick={(e) => handleLinkClick(e, 'insurance')}>
                Insurance
              </a>
            </li>
            <li>
              <a href="/careers" onClick={(e) => handleLinkClick(e, 'careers')}>
                Careers
              </a>
            </li>
            <li>
              <a href="/blogs" onClick={(e) => handleLinkClick(e, 'blogs')}>
                Blogs
              </a>
            </li>
            <li>
              <a href="/contact" onClick={(e) => handleLinkClick(e, 'contact')}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
