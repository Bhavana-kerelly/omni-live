import React, { useState } from 'react';
import { Users, MapPin } from 'lucide-react';
import { getAssetUrl } from '../../utils/getAssetUrl';
import { DOCTORS_DATA } from '../../data/doctorsData';
import { getDoctorImage, getDoctorAvatarFallback } from '../../utils/getDoctorImage';
import DoctorProfileModal from '../DoctorProfileModal';

const FEATURED_DOCTOR_IDS = [
  'doc-ranjith-nellore-mahesh',
  'doc-tagore-mohan-grandhi',
  'doc-padmaja-subrahmanyam',
  'doc-praneeth-reddy-cv',
  'doc-dr-k-sagar-babu',
  'doc-dr-pss-subramanyam',
  'doc-neehar-potluri',
  'doc-dr-g-vikram',
  'doc-pranay-kumar-mehta',
  'doc-seetha-katta',
  'doc-lokesh-kumar-k',
  'doc-abhinandan-badam',
  'doc-ragi-prasad',
  'doc-payal-chitransi',
  'doc-sandeep-pemira',
  'doc-dr-m-vijaykanth'
];

const FEATURED_DOCTORS = FEATURED_DOCTOR_IDS.map((id) => DOCTORS_DATA.find((d) => d.id === id)).filter(Boolean);

// Duplicate array 2 times for a seamless 100% non-stop infinite marquee loop
const INFINITE_DOCTORS = [...FEATURED_DOCTORS, ...FEATURED_DOCTORS];


export default function DoctorSearchSection({ onBookDoctor, onNavigate, onBookAppointment }) {
  const [selectedDoctorModal, setSelectedDoctorModal] = useState(null);

  const handleDoctorClick = (doc) => {
    setSelectedDoctorModal(doc);
    if (onBookDoctor) {
      onBookDoctor(doc);
    }
  };

  return (
    <section className="specialists-editorial-section" id="doctors">
      <div className="specialists-section-container">
        
        {/* =========================================================================
            1. TOP HEADER AREA (SERIF TITLE + ACTION BUTTON)
           ========================================================================= */}
        <div className="specialists-top-header">
          <div className="top-header-left">
            <div className="specialists-eyebrow">
              <span className="eyebrow-dash" />
              <span>Our Specialists</span>
            </div>
            <h2 className="specialists-main-heading">
              <span className="text-blue-highlight-brand">Specialists who</span> <br />
              <span className="text-leaf-highlight">care deeply.</span>
            </h2>
            <p className="specialists-header-desc">
              Meet the specialists across OMNI Hospitals. Experienced, compassionate and dedicated to delivering the best outcomes for every patient.
            </p>
            <button 
              type="button" 
              className="view-all-doctors-pill-btn"
              onClick={() => {
                if (onNavigate) onNavigate('doctors');
              }}
            >
              <span>View All Doctors →</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            2. FIXED FEATURE CARD + CONTINUOUS INFINITE DOCTOR CARDS MARQUEE TRACK
           ========================================================================= */}
        <div className="specialists-carousel-row-container">
          
          {/* FIXED Left Feature Card: "Specialists Who Care." */}
          <div className="specialist-intro-feature-card">
            <div className="intro-card-icon-bubble">
              <Users size={22} className="icon-blue" />
            </div>
            <h3 className="intro-card-heading">
              <span className="text-blue-highlight-brand">Specialists</span> <br />
              <span className="text-leaf-highlight">Who Care.</span>
            </h3>
            <span className="intro-card-divider" />
            <p className="intro-card-text">
              Advanced expertise. <br />
              Personalised care.
            </p>
          </div>

          {/* CONTINUOUS INFINITE SCROLLING TRACK FOR DOCTORS */}
          <div className="specialists-infinite-wrapper">
            <div className="specialists-infinite-track">
              {INFINITE_DOCTORS.map((doc, idx) => {
                // Convert specialty to Title Case for display
                const displaySpecialty = doc.specialty
                  .toLowerCase()
                  .split(' ')
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ');

                return (
                  <div 
                    key={`${doc.id}-${idx}`} 
                    className="specialist-grid-card"
                    onClick={() => handleDoctorClick(doc)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleDoctorClick(doc);
                      }
                    }}
                  >
                    
                    {/* Top Image Frame */}
                    <div className="card-image-wrapper">
                      <img 
                        src={getDoctorImage(doc)} 
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = getDoctorAvatarFallback(doc.name);
                        }}
                        alt={doc.name} 
                        className="card-doctor-img"
                      />
                    </div>

                    {/* Card Meta Details */}
                    <div className="card-content-body">
                      <span className="card-specialty-pill">{displaySpecialty}</span>
                      <h3 className="card-doctor-name">{doc.name}</h3>
                      <p className="card-doctor-desig">{doc.designation}</p>

                      <div className="card-branch-location">
                        <MapPin size={13} className="pin-icon-blue" />
                        <span>{doc.branch}</span>
                      </div>

                      <button 
                        type="button" 
                        className="card-view-profile-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDoctorClick(doc);
                        }}
                      >
                        <span>View Profile →</span>
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      {/* Doctor Profile Modal Popup */}
      {selectedDoctorModal && (
        <DoctorProfileModal
          doctor={selectedDoctorModal}
          onClose={() => setSelectedDoctorModal(null)}
          onBookAppointment={onBookAppointment}
        />
      )}
    </section>
  );
}
