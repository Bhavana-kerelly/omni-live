import React, { useState, useMemo } from 'react';
import { 
  Phone, PhoneCall, MapPin, Clock, Mail, ExternalLink, Calendar, 
  UserCheck, Send, CheckCircle2, MessageSquare, ShieldCheck, 
  HelpCircle, CreditCard, Stethoscope, HeartHandshake, FileText, Compass, Navigation 
} from 'lucide-react';
import HomeHeader from '../components/HomePage/HomeHeader';
import HomeFooter from '../components/HomePage/HomeFooter';
import { HOSPITALS_DETAIL_DATA } from '../data/hospitalsDetailData';
import { getAssetUrl } from '../utils/getAssetUrl';
import { openWhatsAppAppointment } from '../utils/whatsappHelper';
import './ContactPage.css';

const LOCATIONS_LIST = [
  { id: 'kothapet', name: 'Kothapet' },
  { id: 'kukatpally', name: 'Kukatpally' },
  { id: 'udai-nampally', name: 'UDAI OMNI - Nampally' },
  { id: 'vizag', name: 'Vizag' },
  { id: 'kurnool', name: 'Kurnool' },
  { id: 'giggles-vizag', name: 'Giggles Vizag' }
];

const REASONS_LIST = [
  'General Enquiry',
  'Appointment',
  'Billing',
  'Feedback',
  'Second Opinion',
  'Other'
];

export default function ContactPage({ onNavigate, onBookAppointment }) {
  const [selectedHospitalId, setSelectedHospitalId] = useState('kothapet');
  const [selectedReason, setSelectedReason] = useState('General Enquiry');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hospitalLocation: 'OMNI Hospitals, Kothapet',
    preferredDept: 'Cardiology',
    patientId: '',
    rating: '5',
    subject: '',
    message: ''
  });

  const selectedHospital = useMemo(() => {
    return HOSPITALS_DETAIL_DATA[selectedHospitalId] || HOSPITALS_DETAIL_DATA['kothapet'];
  }, [selectedHospitalId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    openWhatsAppAppointment({
      isContactForm: true,
      patientName: formData.name,
      phone: formData.phone,
      location: formData.hospitalLocation,
      subject: formData.subject || selectedReason,
      enquiryMessage: formData.message
    });
    
    // Clear the form since the action was handed off to WhatsApp
    setFormData({
      name: '',
      email: '',
      phone: '',
      hospitalLocation: 'OMNI Hospitals, Kothapet',
      preferredDept: 'Cardiology',
      patientId: '',
      rating: '5',
      subject: '',
      message: ''
    });
  };

  const handleDoctorClick = () => {
    if (onNavigate) onNavigate('doctors');
  };

  const handleAppointmentClick = (e) => {
    if (e) e.preventDefault();
    openWhatsAppAppointment({ hospital: selectedHospital.name });
  };

  return (
    <div className="contact-page-wrapper">
      <HomeHeader currentView="contact" onNavigate={onNavigate} />

      <main className="contact-main-content">
        
        {/* =========================================================================
            1. HERO SECTION
           ========================================================================= */}
        <section className="contact-hero-section">
          <div className="hero-bg-image-layer" aria-hidden="true">
            <img 
              src={getAssetUrl('/images/contact/contact-hero.jpg')} 
              alt="" 
              className="hero-bg-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=80';
              }}
            />
            <div className="hero-bg-overlay" />
          </div>

          <div className="contact-hero-container">
            <div className="hero-title-pill">
              <h1 className="contact-hero-title">
                <span className="pill-text-white">We're Here When </span>
                <span className="pill-text-accent">You Need Us.</span>
              </h1>
            </div>

            <p className="contact-hero-lead">
              Connect with our medical helpdesk, book appointments, request second opinions, or reach any of our regional hospital centers.
            </p>
          </div>
        </section>

        {/* =========================================================================
            2. HOSPITAL LOCATIONS SELECTOR & DETAIL DISPLAY
           ========================================================================= */}
        <section className="contact-hospitals-section">
          <div className="section-container">
            <div className="section-header-center">
              <span className="section-eyebrow-tag">Direct Hospital Helpdesks</span>
              <h2 className="section-title-light">Select Your Nearest Omni Center</h2>
              <p className="section-subtitle">Select a hospital to view verified address, direct phone lines, emergency numbers, and working hours.</p>
            </div>

            {/* Location Selector Bar */}
            <div className="hospital-selector-tabs">
              {LOCATIONS_LIST.map((loc) => {
                const isActive = loc.id === selectedHospitalId;
                const heroImg = HOSPITALS_DETAIL_DATA[loc.id]?.heroImage;
                return (
                  <button
                    key={loc.id}
                    type="button"
                    className={`hosp-tab-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setSelectedHospitalId(loc.id)}
                  >
                    {heroImg && <img src={getAssetUrl(heroImg)} alt="" className="tab-thumb-img" />}
                    <span>{loc.name}</span>
                    {isActive && <CheckCircle2 size={15} className="tab-check-icon" />}
                  </button>
                );
              })}
            </div>

            {/* Active Hospital Display Card */}
            <div className="active-hospital-display-card">
              <div className="hosp-display-grid">
                
                {/* Left: Image Showcase */}
                <div className="hosp-img-wrapper">
                  <img src={getAssetUrl(selectedHospital.heroImage)} alt={selectedHospital.name} className="hosp-card-img" />
                  <div className="hosp-img-overlay" />
                  <div className="hosp-city-badge">
                    <MapPin size={14} />
                    <span>{selectedHospital.city}</span>
                  </div>
                </div>

                {/* Right: Hospital Details & CTAs */}
                <div className="hosp-details-body">
                  <span className="hosp-accreditation-tag">{selectedHospital.accreditation}</span>
                  <h3 className="hosp-card-name">{selectedHospital.name}</h3>

                  <div className="hosp-info-list">
                    <div className="hosp-info-row">
                      <MapPin size={18} className="info-icon" />
                      <div>
                        <strong>Address:</strong>
                        <p>{selectedHospital.address}</p>
                      </div>
                    </div>

                    <div className="hosp-info-row">
                      <Phone size={18} className="info-icon" />
                      <div>
                        <strong>Hospital Helpdesk:</strong>
                        <p>{selectedHospital.phone}</p>
                      </div>
                    </div>

                    <div className="hosp-info-row emergency">
                      <PhoneCall size={18} className="info-icon pulse" />
                      <div>
                        <strong>24/7 Emergency Helpline:</strong>
                        <p className="emergency-num">{selectedHospital.emergencyPhone}</p>
                      </div>
                    </div>

                    <div className="hosp-info-row">
                      <Clock size={18} className="info-icon" />
                      <div>
                        <strong>Working Hours:</strong>
                        <p>{selectedHospital.opdHours}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action CTAs */}
                  <div className="hosp-actions-group">
                    <a 
                      href={selectedHospital.mapUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-hosp-action primary"
                    >
                      <Navigation size={16} />
                      <span>Get Directions</span>
                    </a>

                    <a 
                      href={`tel:${selectedHospital.phone.replace(/\s+/g, '')}`}
                      className="btn-hosp-action secondary"
                    >
                      <Phone size={16} />
                      <span>Call Hospital</span>
                    </a>

                    <button 
                      type="button" 
                      className="btn-hosp-action outline"
                      onClick={handleAppointmentClick}
                    >
                      <Calendar size={16} />
                      <span>Book Appointment</span>
                    </button>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            3. DYNAMIC CONTACT FORM SECTION
           ========================================================================= */}
        <section className="contact-form-section" id="contact-form">
          <div className="section-container">
            <div className="form-card-wrapper">
              
              <div className="form-card-header">
                <span className="section-eyebrow-tag">Send a Message</span>
                <h2 className="form-title">How Can We Assist You Today?</h2>
              </div>

              <form onSubmit={handleFormSubmit} className="interactive-contact-form">
                  <div className="form-grid-2">
                    <div className="form-field">
                      <label className="field-label">Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="field-input"
                      />
                    </div>

                    <div className="form-field">
                      <label className="field-label">Email Address *</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="field-input"
                      />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-field">
                      <label className="field-label">Phone Number *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="field-input"
                      />
                    </div>

                    <div className="form-field">
                      <label className="field-label">Target OMNI Center *</label>
                      <select 
                        value={formData.hospitalLocation}
                        onChange={(e) => setFormData({ ...formData, hospitalLocation: e.target.value })}
                        className="field-select"
                      >
                        {LOCATIONS_LIST.map((l) => (
                          <option key={l.id} value={l.name}>{l.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* DYNAMIC FIELDS BASED ON REASON */}
                  {selectedReason === 'Appointment' && (
                    <div className="dynamic-field-block">
                      <div className="form-field">
                        <label className="field-label">Preferred Specialty / Department</label>
                        <select 
                          value={formData.preferredDept}
                          onChange={(e) => setFormData({ ...formData, preferredDept: e.target.value })}
                          className="field-select"
                        >
                          <option value="Cardiology">Cardiology & Vascular</option>
                          <option value="Orthopedics">Orthopedics & Joint Replacement</option>
                          <option value="Neurology">Neurology & Neurosurgery</option>
                          <option value="Robotic Surgery">Robotic Surgery</option>
                          <option value="Pulmonology">Pulmonology</option>
                          <option value="Gastroenterology">Gastroenterology</option>
                          <option value="Pediatrics">Pediatrics & Neonatology</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {selectedReason === 'Billing' && (
                    <div className="dynamic-field-block">
                      <div className="form-field">
                        <label className="field-label">Patient ID (MRN) / Bill Invoice Number</label>
                        <input 
                          type="text" 
                          placeholder="e.g. OMNI-MRN-98241"
                          value={formData.patientId}
                          onChange={(e) => setFormData({ ...formData, patientId: e.target.value })}
                          className="field-input"
                        />
                      </div>
                    </div>
                  )}

                  {selectedReason === 'Second Opinion' && (
                    <div className="dynamic-field-block note-box">
                      <FileText size={18} className="note-icon" />
                      <p>For Second Opinions, please mention diagnosis details below. Our senior medical board will reach out to review your existing scans and reports.</p>
                    </div>
                  )}

                  <div className="form-field">
                    <label className="field-label">Subject / Purpose</label>
                    <input 
                      type="text" 
                      placeholder={`Brief summary regarding your ${selectedReason.toLowerCase()}...`}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="field-input"
                    />
                  </div>

                  <div className="form-field">
                    <label className="field-label">Detailed Message *</label>
                    <textarea 
                      rows={5}
                      required
                      placeholder="Please write your detailed message or enquiry here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="field-textarea"
                    />
                  </div>

                  <button type="submit" className="btn-submit-contact">
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>
                </form>

            </div>
          </div>
        </section>

      </main>

      <HomeFooter onNavigate={onNavigate} onBookAppointment={onBookAppointment} />
    </div>
  );
}
