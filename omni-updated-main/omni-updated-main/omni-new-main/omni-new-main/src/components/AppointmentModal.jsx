import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, FileText } from 'lucide-react';

const LEADSQUARED_API = 'https://api.omnihospitals.in/api/leadsquared/submit';

const LOCATIONS_LIST = [
  { id: 'kothapet', name: 'Kothapet' },
  { id: 'kukatpally', name: 'Kukatpally' },
  { id: 'udai-nampally', name: 'UDAI OMNI - Nampally' },
  { id: 'vizag', name: 'Vizag' },
  { id: 'kurnool', name: 'Kurnool' },
  { id: 'giggles-vizag', name: 'Giggles Vizag' }
];

export default function AppointmentModal({ isOpen, onClose }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hospitalLocation: 'Kothapet',
    preferredDept: 'Cardiology',
    subject: '',
    message: ''
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError('');

    const leadPayload = [
      { Attribute: 'FirstName', Value: formData.name },
      { Attribute: 'Phone',     Value: formData.phone },
      { Attribute: 'EmailAddress', Value: formData.email },
      { Attribute: 'mx_Branch',    Value: formData.hospitalLocation },
      { Attribute: 'mx_Department', Value: formData.preferredDept },
      { Attribute: 'mx_Message',   Value: formData.message },
      { Attribute: 'Source',       Value: 'Website - Book Appointment' }
    ];

    try {
      const response = await fetch(LEADSQUARED_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(leadPayload)
      });

      const data = await response.json();

      if (!response.ok || data.success === false) {
        throw new Error(data.error || 'Submission failed. Please try again.');
      }

      setIsSubmitted(true);
    } catch (err) {
      setSubmitError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setIsLoading(false);
    setSubmitError('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      hospitalLocation: 'Kothapet',
      preferredDept: 'Cardiology',
      subject: '',
      message: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="appt-modal-overlay" onClick={handleClose} role="dialog" aria-modal="true" aria-label="Book Appointment">
      <div className="appt-modal-panel" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="appt-modal-header">
          <div className="appt-modal-title-group">
            <Calendar size={20} className="appt-modal-icon" />
            <div>
              <h2 className="appt-modal-title">Book an Appointment</h2>
              <p className="appt-modal-subtitle">Our care team will reach you shortly</p>
            </div>
          </div>
          <button type="button" className="appt-modal-close" onClick={handleClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="appt-modal-body">
          {!isSubmitted ? (
            <form onSubmit={handleFormSubmit} className="appt-modal-form">
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
                  <label className="field-label">Preferred OMNI Center *</label>
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

              <div className="form-field">
                <label className="field-label">Preferred Specialty / Department</label>
                <select
                  value={formData.preferredDept}
                  onChange={(e) => setFormData({ ...formData, preferredDept: e.target.value })}
                  className="field-select"
                >
                  <option value="Cardiology">Cardiology &amp; Vascular</option>
                  <option value="Orthopedics">Orthopedics &amp; Joint Replacement</option>
                  <option value="Neurology">Neurology &amp; Neurosurgery</option>
                  <option value="Robotic Surgery">Robotic Surgery</option>
                  <option value="Pulmonology">Pulmonology</option>
                  <option value="Gastroenterology">Gastroenterology</option>
                  <option value="Pediatrics">Pediatrics &amp; Neonatology</option>
                  <option value="Gynecology">Gynecology &amp; Women's Health</option>
                  <option value="Dermatology">Dermatology</option>
                  <option value="ENT">ENT Care</option>
                  <option value="General">General Medicine</option>
                </select>
              </div>

              <div className="form-field">
                <label className="field-label">Detailed Message *</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Please describe your symptoms or reason for visit..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="field-textarea"
                />
              </div>

              {submitError && (
                <p style={{ color: '#c0392b', fontSize: '0.85rem', marginTop: '-4px', marginBottom: '4px' }}>
                  ⚠ {submitError}
                </p>
              )}

              <button type="submit" className="btn-submit-contact" disabled={isLoading}>
                <Calendar size={16} />
                <span>{isLoading ? 'Submitting…' : 'Book an Appointment'}</span>
              </button>
            </form>
          ) : (
            <div className="form-success-card">
              <div className="success-icon-bg">
                <CheckCircle2 size={44} />
              </div>
              <h3 className="success-heading">Appointment Request Sent!</h3>
              <p className="success-text">
                Thank you, <strong>{formData.name}</strong>. Your appointment request for <strong>{formData.preferredDept}</strong> at <strong>{formData.hospitalLocation}</strong> has been submitted.
              </p>
              <p className="success-sub">Our patient care desk will get back to you shortly via phone/email.</p>
              <button
                type="button"
                className="btn-send-another"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', hospitalLocation: 'Kothapet', preferredDept: 'Cardiology', subject: '', message: '' });
                }}
              >
                Book Another Appointment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
