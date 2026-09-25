import React, { useState, useMemo } from 'react';
import { 
  ShieldCheck, 
  Headset, 
  Users, 
  Heart, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  MessageSquare, 
  Building2, 
  FileText, 
  Stethoscope, 
  CreditCard,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import HomeHeader from '../components/HomePage/HomeHeader';
import HomeFooter from '../components/HomePage/HomeFooter';
import { getAssetUrl } from '../utils/getAssetUrl';
import { 
  FEATURED_PARTNERS, 
  HEALTH_INSURANCE_COMPANIES, 
  TPA_PARTNERS, 
  PUBLIC_COMPANIES, 
  PRIVATE_COMPANIES 
} from '../data/insuranceData';
import './InsurancePage.css';

export default function InsurancePage({ onNavigate, onBookAppointment }) {
  // Directory Tab State: 'insurance' | 'tpa'
  const [activeTab, setActiveTab] = useState('insurance');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Custom Image load states
  const [heroImgFailed, setHeroImgFailed] = useState(false);
  const [umbrellaImgFailed, setUmbrellaImgFailed] = useState(false);

  // Featured Partners Show All Toggle State
  const [showAllPartners, setShowAllPartners] = useState(false);

  // Filtered Directory Data based on Active Tab & Search Query
  const filteredList = useMemo(() => {
    const sourceList = activeTab === 'insurance' ? HEALTH_INSURANCE_COMPANIES : TPA_PARTNERS;
    if (!searchQuery.trim()) return sourceList;
    return sourceList.filter(item => 
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeTab, searchQuery]);

  // Displayed Partners (Initial 18 or All)
  const displayedPartners = useMemo(() => {
    return showAllPartners ? FEATURED_PARTNERS : FEATURED_PARTNERS.slice(0, 18);
  }, [showAllPartners]);

  // Scroll to section handler
  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="insurance-page-root">
      {/* Website Header Navigation */}
      <HomeHeader currentView="insurance" onNavigate={onNavigate} onBookAppointment={onBookAppointment} />

      <main className="insurance-main-content">
        {/* =========================================================================
            SECTION 01 — HERO (SPLIT HERO WITH 3D MEDICAL INSURACE VISUAL)
           ========================================================================= */}
        <section className="insurance-hero-section">
          <div className="insurance-hero-container">
            {/* Left Content Column */}
            <div className="insurance-hero-left">
              {/* Breadcrumb */}
              <nav className="insurance-breadcrumb" aria-label="Breadcrumb">
                <a href="#home" onClick={(e) => { e.preventDefault(); if (onNavigate) onNavigate('home'); }}>Home</a>
                <span className="breadcrumb-separator">›</span>
                <span className="breadcrumb-current">Insurance Partners</span>
              </nav>

              {/* Eyebrow */}
              <div className="insurance-eyebrow-pill">
                <ShieldCheck size={14} className="eyebrow-icon" />
                <span>Insurance &amp; Empanelment</span>
              </div>

              {/* Main Headline */}
              <h1 className="insurance-hero-title">
                <span className="title-blue">Your Health.</span><br />
                <span className="title-blue">Your Coverage.</span><br />
                <span className="title-accent-green">Our Support.</span>
              </h1>

              {/* Supporting Text */}
              <p className="insurance-hero-lead">
                OMNI Hospitals partners with leading insurance providers, TPAs, ESIC, CGHS, and government health schemes to make cashless healthcare simple, seamless, and stress-free.
              </p>

              {/* CTA Action Buttons */}
              <div className="insurance-hero-ctas">
                <button 
                  type="button" 
                  className="btn-primary-blue"
                  onClick={() => handleScrollToSection('insurance-directory')}
                >
                  <span>Check Insurance Eligibility</span>
                  <ArrowRight size={16} />
                </button>
                <button 
                  type="button" 
                  className="btn-secondary-outline"
                  onClick={() => handleScrollToSection('insurance-contact')}
                >
                  <PhoneCall size={15} />
                  <span>Contact Insurance Desk</span>
                </button>
              </div>
            </div>

            {/* Right 3D Medical Insurance Visual Column */}
            <div className="insurance-hero-right">
              <div className="visual-composition-wrapper">
                {/* Ambient Soft Blue Glows */}
                <div className="visual-ambient-glow" aria-hidden="true" />
                <div className="visual-orbit-ring ring-1" aria-hidden="true" />
                <div className="visual-orbit-ring ring-2" aria-hidden="true" />

                {/* Floating Micro Icons */}
                <div className="floating-micro-badge badge-doc">
                  <FileText size={18} />
                </div>
                <div className="floating-micro-badge badge-heart">
                  <Heart size={18} />
                </div>
                <div className="floating-micro-badge badge-shield">
                  <ShieldCheck size={18} />
                </div>
                <div className="floating-micro-badge badge-steth">
                  <Stethoscope size={18} />
                </div>

                {/* Custom Image / 3D Hospital Building Graphic Composition */}
                {!heroImgFailed ? (
                  <img 
                    src={getAssetUrl('/images/insurance/hero-illustration.png')} 
                    onError={() => setHeroImgFailed(true)}
                    alt="OMNI Insurance Partners" 
                    className="hero-custom-illustration-img"
                  />
                ) : (
                  <div className="hero-3d-graphic-card">
                    {/* Hospital Building Facade Illustration */}
                    <div className="graphic-building-block">
                      <div className="building-header-logo">
                        <span className="building-omni-tag">OMNI</span>
                        <span className="building-hosp-tag">HOSPITALS</span>
                      </div>
                      <div className="building-windows-grid">
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div key={i} className="window-cell" />
                        ))}
                      </div>
                    </div>

                    {/* Shield Badge Illustration Overlay */}
                    <div className="graphic-shield-badge">
                      <div className="shield-inner-glow" />
                      <svg className="shield-svg-shape" viewBox="0 0 100 120" fill="none">
                        <path d="M50 5L10 25V60C10 90 50 115 50 115C50 115 90 90 90 60V25L50 5Z" fill="url(#shield-grad)" stroke="#FFFFFF" strokeWidth="3" />
                        <path d="M50 35V75M30 55H70" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
                        <defs>
                          <linearGradient id="shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#0878E8" />
                            <stop offset="100%" stopColor="#0046B8" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    {/* Glassmorphism Insurance Card Overlay */}
                    <div className="graphic-insurance-card">
                      <div className="card-top-row">
                        <span className="card-chip-symbol" />
                        <span className="card-type-label">HEALTH INSURANCE</span>
                      </div>
                      <div className="card-number-dots">1234 5678 9012 3456</div>
                      <div className="card-bottom-row">
                        <span className="card-valid">VALID THRU: 12/28</span>
                        <CheckCircle2 size={18} className="card-check-icon" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>



        {/* =========================================================================
            SECTION 03 — INSURANCE PARTNERS (FEATURED LOGO GRID)
           ========================================================================= */}
        <section className="featured-partners-section" id="partners-grid">
          <div className="section-container">
            {/* Section Header */}
            <div className="section-header-flex">
              <div>
                <span className="section-eyebrow-tag">OUR PARTNERS</span>
                <h2 className="section-title-dark">Insurance Partners &amp; TPAs</h2>
              </div>
            </div>

            {/* Logo Grid */}
            <div className="partners-logo-grid">
              {displayedPartners.map((partner) => (
                <div key={partner.id} className="partner-card-item">
                  <div className="partner-logo-box">
                    {partner.logoImg ? (
                      <img 
                        src={getAssetUrl(partner.logoImg)} 
                        alt={partner.name} 
                        className="partner-logo-img"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          const textFallback = e.target.nextElementSibling;
                          if (textFallback) textFallback.style.display = 'block';
                        }}
                      />
                    ) : null}
                    <span 
                      className="partner-brand-text"
                      style={{ 
                        color: partner.brandColor || '#0B1F41',
                        display: partner.logoImg ? 'none' : 'block'
                      }}
                    >
                      {partner.logoText}
                    </span>
                  </div>
                </div>
              ))}

              {/* Show All / Show Less Action Card */}
              <button 
                type="button" 
                className="view-all-partners-card"
                onClick={() => setShowAllPartners(!showAllPartners)}
              >
                <span>{showAllPartners ? 'Show Less Partners' : 'View All Partners'}</span>
                {showAllPartners ? <ChevronUp size={18} /> : <ArrowRight size={18} />}
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 04 — INSURANCE & TPAs (INTERACTIVE SEARCH & DIRECTORY)
           ========================================================================= */}
        <section className="directory-search-section" id="insurance-directory">
          <div className="section-container">
            <div className="directory-outer-card">
              {/* Header & Segmented Tabs */}
              <div className="directory-card-header">
                <div>
                  <span className="section-eyebrow-tag">INSURANCE &amp; TPAS WE WORK WITH</span>
                  <h2 className="section-title-dark">Find Your Insurance Partner</h2>
                </div>

                {/* Segmented Control Tabs */}
                <div className="directory-segmented-tabs" role="tablist">
                  <button 
                    type="button" 
                    role="tab"
                    aria-selected={activeTab === 'insurance'}
                    className={`segmented-tab-btn ${activeTab === 'insurance' ? 'active' : ''}`}
                    onClick={() => { setActiveTab('insurance'); setSearchQuery(''); }}
                  >
                    <ShieldCheck size={16} />
                    <span>Health Insurance Companies</span>
                  </button>
                  <button 
                    type="button" 
                    role="tab"
                    aria-selected={activeTab === 'tpa'}
                    className={`segmented-tab-btn ${activeTab === 'tpa' ? 'active' : ''}`}
                    onClick={() => { setActiveTab('tpa'); setSearchQuery(''); }}
                  >
                    <Users size={16} />
                    <span>TPAs</span>
                  </button>
                </div>
              </div>

              {/* Search Bar Input */}
              <div className="directory-search-bar-row">
                <div className="search-field-wrapper">
                  <Search size={18} className="search-field-icon" />
                  <input 
                    type="text" 
                    placeholder={`Search ${activeTab === 'insurance' ? 'health insurance companies' : 'TPAs'}...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-field-input"
                    aria-label="Search insurance provider"
                  />
                  {searchQuery && (
                    <button 
                      type="button" 
                      className="search-clear-btn" 
                      onClick={() => setSearchQuery('')}
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {/* Grid Content Layout: Filtered List Left | Support Box Right */}
              <div className="directory-content-grid">
                {/* Left: Scrollable/Filterable List */}
                <div className="directory-list-wrapper">
                  {filteredList.length > 0 ? (
                    <ul className="directory-two-col-list">
                      {filteredList.map((company, idx) => (
                        <li key={idx} className="directory-list-item">
                          <span className="item-bullet-dot" />
                          <span className="item-company-name">{company}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="no-search-results-box">
                      <p>No insurance provider found matching "{searchQuery}".</p>
                      <button 
                        type="button" 
                        className="text-btn-blue"
                        onClick={() => setSearchQuery('')}
                      >
                        Reset Search Filter
                      </button>
                    </div>
                  )}
                </div>

                {/* Right: Supportive Help Card */}
                <div className="directory-support-card-container">
                  <div className="umbrella-top-graphic-wrapper">
                    {!umbrellaImgFailed ? (
                      <img 
                        src={getAssetUrl('/images/insurance/umbrella-support.png')} 
                        onError={() => setUmbrellaImgFailed(true)}
                        alt="Insurance Umbrella Support" 
                        className="umbrella-custom-img"
                      />
                    ) : (
                      <svg className="umbrella-svg-3d" viewBox="0 0 160 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M80 12C42 12 18 45 18 45H142C142 45 118 12 80 12Z" fill="url(#umb-grad-3d)" />
                        <path d="M80 45V102M80 102C72 102 68 95 68 89" stroke="#0878E8" strokeWidth="4.5" strokeLinecap="round" />
                        <circle cx="76" cy="62" r="10" fill="#35A9E8" />
                        <path d="M60 88C60 76 68 73 76 73C84 73 92 76 92 88V95H60V88Z" fill="#35A9E8" />
                        <circle cx="58" cy="70" r="7" fill="#50B4F8" />
                        <path d="M46 90C46 81 52 78 58 78C64 78 70 81 70 90V95H46V90Z" fill="#50B4F8" />
                        <path d="M118 58L102 66V78C102 91 118 100 118 100C118 100 134 91 134 78V66L118 58Z" fill="url(#shd-grad-3d)" stroke="#FFFFFF" strokeWidth="2" />
                        <path d="M110 78L115 83L126 72" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                          <linearGradient id="umb-grad-3d" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#70C0FB" />
                            <stop offset="100%" stopColor="#0878E8" />
                          </linearGradient>
                          <linearGradient id="shd-grad-3d" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#35A9E8" />
                            <stop offset="100%" stopColor="#0046B8" />
                          </linearGradient>
                        </defs>
                      </svg>
                    )}
                  </div>

                  <div className="directory-support-card-box">
                    <h3 className="support-card-heading">Can't find your insurer?</h3>
                    <p className="support-card-desc">
                      Our team can help you verify your coverage and guide you through the process.
                    </p>
                    
                    <button 
                      type="button" 
                      className="btn-support-rect"
                      onClick={() => handleScrollToSection('insurance-contact')}
                    >
                      <span>Contact Insurance Desk</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 05 — PUBLIC VS PRIVATE COMPANIES (TWO-CARD COMPARISON)
           ========================================================================= */}
        {/* =========================================================================
            SECTION 05 — PUBLIC VS PRIVATE COMPANIES (EXACT MATCH TO IMAGE 2)
           ========================================================================= */}
        <section className="company-comparison-section">
          <div className="section-container">
            {/* Left Eyebrow Header (No H2 Title) */}
            <div className="section-header-left">
              <span className="section-eyebrow-tag">COMPANIES WE ARE EMPANELLED WITH</span>
            </div>

            {/* Two Cards Comparison Grid */}
            <div className="comparison-cards-grid">
              {/* CARD 01 — PUBLIC COMPANIES */}
              <div className="comparison-card public-card">
                <div className="card-top-badge">
                  <div className="sphere-badge-icon green-sphere-theme">
                    <Building2 size={22} />
                  </div>
                  <h3 className="comparison-card-title">Public Companies</h3>
                </div>

                <ul className="comparison-list-grid">
                  {PUBLIC_COMPANIES.map((company, idx) => (
                    <li key={idx} className="comparison-list-item">
                      <CheckCircle2 size={16} className="check-icon-green" />
                      <span>{company}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CARD 02 — PRIVATE COMPANIES */}
              <div className="comparison-card private-card">
                <div className="card-top-badge">
                  <div className="sphere-badge-icon blue-sphere-theme">
                    <Building2 size={22} />
                  </div>
                  <h3 className="comparison-card-title">Private Companies</h3>
                </div>

                <ul className="comparison-list-grid two-columns">
                  {PRIVATE_COMPANIES.map((company, idx) => {
                    const isFadedItem = company === 'and many more...';
                    return (
                      <li key={idx} className={`comparison-list-item ${isFadedItem ? 'item-faded' : ''}`}>
                        {!isFadedItem && <CheckCircle2 size={16} className="check-icon-blue" />}
                        <span>{company}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>



        {/* =========================================================================
            SECTION 07 — INSURANCE SUPPORT CTA (SOFT BLUE CONTACT PANEL)
           ========================================================================= */}
        <section className="insurance-support-cta-section" id="insurance-contact">
          <div className="section-container">
            <div className="support-glass-panel">
              {/* Left Column: Heading & Description */}
              <div className="support-panel-left">
                <div className="support-headset-avatar">
                  <Headset size={28} />
                </div>
                <div>
                  <h2 className="support-panel-title">
                    Need Help With Your<br />
                    Insurance &amp; Cashless Process?
                  </h2>
                  <p className="support-panel-desc">
                    Our insurance team is here to assist you with verification, authorization and all your insurance queries.
                  </p>
                </div>
              </div>

              {/* Right Column: 3 Contact Action Cards */}
              <div className="support-panel-right">
                {/* Action Card 1: Call */}
                <a href="tel:8880101000" className="support-action-card">
                  <div className="action-icon-wrapper">
                    <PhoneCall size={20} />
                  </div>
                  <div>
                    <span className="action-label">CALL INSURANCE DESK</span>
                    <span className="action-value">888 0101 000</span>
                  </div>
                </a>

                {/* Action Card 2: Chat */}
                <div className="support-action-card">
                  <div className="action-icon-wrapper">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <span className="action-label">CHAT WITH US</span>
                    <span className="action-value-sub">We're online to help</span>
                  </div>
                </div>

                {/* Action Card 3: Contact Form Button */}
                <button 
                  type="button" 
                  className="support-action-btn"
                  onClick={() => { if (onNavigate) onNavigate('contact'); }}
                >
                  <span>CONTACT INSURANCE DESK</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Website Footer */}
      <HomeFooter onNavigate={onNavigate} onBookAppointment={onBookAppointment} />
    </div>
  );
}
