import React, { useState } from 'react';
import { Send } from 'lucide-react';
import HomeHeader from '../components/HomePage/HomeHeader';
import HomeFooter from '../components/HomePage/HomeFooter';
import LifeAtOmni from '../components/LifeAtOmni';
import './CareersPage.css';

export default function CareersPage({ onNavigate, onBookAppointment }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    message: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, role, message } = formData;
    
    // Replace with your actual WhatsApp number, including country code (e.g., 91 for India)
    const whatsappNumber = "918880101000"; 
    
    const text = `Hello, I want to join your team!
Name: ${name}
Email: ${email}
Phone: ${phone}
Role of Interest: ${role}
Message: ${message}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="careers-page-wrapper">
      <HomeHeader currentView="careers" onNavigate={onNavigate} onBookAppointment={onBookAppointment} />

      <main className="careers-main-content">
        
        {/* =========================================================================
            1. HERO SECTION
           ========================================================================= */}
        <section className="careers-hero-section">
          <div className="hero-backdrop-glow" aria-hidden="true" />
          <div className="hero-content-container">
            <h1 className="careers-hero-title">
              <span className="text-blue-primary">Build the </span><br />
              <span className="hero-accent-text">Future of Healthcare.</span>
            </h1>

            <p className="careers-hero-lead">
              Great healthcare begins with great people. Join a team committed to clinical excellence, innovation and compassionate care.
            </p>

            <div className="hero-stats-row">
              <div className="hero-stat-box">
                <span className="stat-num">1,200+</span>
                <span className="stat-text">Clinical Professionals</span>
              </div>
              <div className="hero-stat-box">
                <span className="stat-num">6</span>
                <span className="stat-text">Centers of Excellence</span>
              </div>
              <div className="hero-stat-box">
                <span className="stat-num">30+</span>
                <span className="stat-text">Specialty Disciplines</span>
              </div>
            </div>
          </div>

          <div className="hero-visual-banner">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80" 
              alt="OMNI Medical Team" 
              className="hero-team-image"
            />
            <div className="banner-overlay-gradient" />
          </div>
        </section>

        {/* =========================================================================
            2. LIFE AT OMNI
           ========================================================================= */}
        <LifeAtOmni />

        {/* =========================================================================
            3. APPLY FORM (REDIRECTS TO WHATSAPP)
           ========================================================================= */}
        <section className="open-positions-section" id="join-team">
          <div className="section-container">
            <div className="section-header-center">
              <span className="section-eyebrow-tag">Join Our Team</span>
              <h2 className="section-title-light">Apply Now</h2>
              <p className="section-subtitle">Fill out the form below and we will connect with you via WhatsApp.</p>
            </div>

            <div className="apply-form-container" style={{ maxWidth: '600px', margin: '0 auto', padding: '2.5rem', background: '#fff', borderRadius: '1rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <form onSubmit={handleFormSubmit} className="apply-form-body">
                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#1a1a1a' }}>Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Dr. / Mr. / Ms. Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                    style={{ width: '100%', padding: '0.85rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb', outline: 'none', transition: 'border-color 0.2s', fontSize: '1rem' }}
                  />
                </div>

                <div className="form-row-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div className="form-group">
                    <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#1a1a1a' }}>Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="email@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                      style={{ width: '100%', padding: '0.85rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb', outline: 'none', transition: 'border-color 0.2s', fontSize: '1rem' }}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#1a1a1a' }}>Phone Number *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                      style={{ width: '100%', padding: '0.85rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb', outline: 'none', transition: 'border-color 0.2s', fontSize: '1rem' }}
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#1a1a1a' }}>Role of Interest *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Senior Consultant, Head Nurse"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="form-input"
                    style={{ width: '100%', padding: '0.85rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb', outline: 'none', transition: 'border-color 0.2s', fontSize: '1rem' }}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '2rem' }}>
                  <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#1a1a1a' }}>Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Briefly introduce your clinical background, medical achievements, and motivation to join OMNI Hospitals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                    style={{ width: '100%', padding: '0.85rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb', outline: 'none', resize: 'vertical', transition: 'border-color 0.2s', fontSize: '1rem' }}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-submit-application" 
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', padding: '1rem', background: '#075E54', color: '#fff', border: 'none', borderRadius: '0.5rem', fontSize: '1.1rem', fontWeight: '600', cursor: 'pointer', transition: 'background 0.2s ease, transform 0.1s ease' }}
                  onMouseOver={(e) => e.currentTarget.style.background = '#128C7E'}
                  onMouseOut={(e) => e.currentTarget.style.background = '#075E54'}
                  onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
                  onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <Send size={20} />
                  <span>Submit</span>
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

