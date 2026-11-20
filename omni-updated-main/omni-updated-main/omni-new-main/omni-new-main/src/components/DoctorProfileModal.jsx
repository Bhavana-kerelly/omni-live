import React, { useEffect, useState } from 'react';
import { X, Calendar, ArrowRight, Check } from 'lucide-react';
import { getAssetUrl } from '../utils/getAssetUrl';
import { getDoctorImage, getDoctorAvatarFallback } from '../utils/getDoctorImage';
import { openWhatsAppAppointment } from '../utils/whatsappHelper';
import './DoctorProfileModal.css';

export default function DoctorProfileModal({ doctor, onClose, onBookAppointment }) {
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!doctor) return null;

  // Specialty dept tag uppercase
  const specialtyTag = (doctor.deptTag || doctor.specialty || 'MEDICAL SPECIALIST').toUpperCase();

  // Experience text formatting (supports numbers, strings, and null)
  const rawExp = doctor.experience != null ? String(doctor.experience).trim() : '';
  const expText = rawExp && rawExp !== '-'
    ? (rawExp.toLowerCase().includes('year') ? rawExp : `${rawExp}+ Years Experience`)
    : (rawExp === '-' ? '-' : '15+ Years Experience');

  // Format About paragraphs
  const bioParagraphs = doctor.bio && typeof doctor.bio === 'string'
    ? doctor.bio.split('\n\n').filter(Boolean)
    : [
        `${doctor.name} is a distinguished ${doctor.designation || 'Consultant'} at OMNI Hospitals with extensive clinical mastery.`,
        `Specializing in ${doctor.specialty || 'advanced medical care'}, ${doctor.name?.split(' ')[1] || 'the doctor'} is committed to providing evidence-based, compassionate care for all patients.`
      ];


  const handleBookClick = () => {
    if (onBookAppointment) {
      onBookAppointment(doctor);
    } else {
      openWhatsAppAppointment(doctor);
    }
  };

  return (
    <div 
      className="doctor-modal-backdrop" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-doctor-name"
    >
      <div 
        className="doctor-modal-panel" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top-Right Close Button */}
        <button 
          type="button" 
          className="doctor-modal-close-btn"
          onClick={onClose}
          aria-label="Close Doctor Profile"
        >
          <X size={22} />
        </button>

        <div className="doctor-modal-grid">
            
            {/* LEFT COLUMN: LARGE PORTRAIT WITH SPECIALTY PATTERN */}
            <div className="doctor-modal-left-col">
              <div className="doctor-portrait-stage">
                
                {/* Subtle Background Geometry & Linework */}
                <div className="portrait-bg-circle" />
                <div className="specialty-linework-pattern" />

                {/* Main Doctor Image */}
                <img 
                  src={getDoctorImage(doctor)} 
                  alt={doctor.name}
                  className="doctor-portrait-large-img"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = getDoctorAvatarFallback(doctor.name);
                  }}
                />
              </div>
            </div>

            {/* RIGHT COLUMN: DOCTOR INFO & ABOUT SECTION */}
            <div className="doctor-modal-right-col">
              
              {/* Specialty Eyebrow */}
              <span className="doctor-eyebrow-tag">{specialtyTag}</span>

              {/* Doctor Name */}
              <h2 className="doctor-profile-name" id="modal-doctor-name">{doctor.name}</h2>

              {/* Qualifications */}
              <p className="doctor-qualifications-text">{doctor.qualifications || 'MBBS, MD / MS'}</p>

              {/* Designation */}
              <p className="doctor-designation-text">{doctor.designation || 'Consultant Specialist'}</p>

              {/* Experience */}
              <div className="doctor-experience-pill">
                <span>{expText}</span>
              </div>


              {/* Primary Action Button */}
              <div className="doctor-modal-action-bar">
                <button 
                  type="button" 
                  className="btn-book-appointment-pill"
                  onClick={handleBookClick}
                >
                  <span>Book an Appointment</span>
                  <ArrowRight size={18} />
                </button>
              </div>

            </div>
          </div>

      </div>
    </div>
  );
}
