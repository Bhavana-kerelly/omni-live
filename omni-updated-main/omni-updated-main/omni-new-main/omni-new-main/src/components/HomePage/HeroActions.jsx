import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { openWhatsAppAppointment } from '../../utils/whatsappHelper';

export default function HeroActions({ onFindDoctor, onBookAppointment }) {
  const handleBook = (e) => {
    openWhatsAppAppointment();
    if (onBookAppointment) onBookAppointment(e);
  };

  return (
    <div className="hero-cta-buttons-container">
      <button 
        type="button" 
        className="hero-btn-primary"
        onClick={onFindDoctor}
        aria-label="Find a Doctor"
      >
        <span>FIND A DOCTOR</span>
        <ArrowRight size={18} className="btn-arrow-icon" aria-hidden="true" />
      </button>

      <button 
        type="button" 
        className="hero-btn-secondary"
        onClick={handleBook}
        aria-label="Book an Appointment"
      >
        <Calendar size={18} className="btn-calendar-icon" aria-hidden="true" />
        <span>BOOK AN APPOINTMENT</span>
      </button>
    </div>
  );
}
