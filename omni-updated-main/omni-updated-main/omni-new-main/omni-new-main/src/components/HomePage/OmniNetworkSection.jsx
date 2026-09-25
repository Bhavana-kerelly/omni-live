import React, { useState } from 'react';
import { MapPin, Phone, ArrowRight, Building, CheckCircle2 } from 'lucide-react';

export default function OmniNetworkSection() {
  const [selectedLoc, setSelectedLoc] = useState('kothapet');

  const LOCATIONS = [
    {
      id: 'udai-nampally',
      name: 'UDAI OMNI NAMPALLY',
      city: 'Hyderabad',
      type: 'Orthopedic & Surgical Center of Excellence',
      beds: '150+ Beds',
      specialties: ['Joint Replacement', 'Spine Care', 'Arthroscopy', 'Trauma'],
      address: 'Chapel Road, Nampally, Hyderabad',
      phone: '040-23232226',
      coords: { x: '35%', y: '48%' }
    },
    {
      id: 'kukatpally',
      name: 'OMNI KUKATPALLY',
      city: 'Hyderabad',
      type: 'Robotic Surgery & Advanced Trauma Center',
      beds: '200+ Beds',
      specialties: ['Robotic Urology', 'Oncology', 'Joint Replacement', 'Gastroenterology'],
      address: 'Near KPBH Metro Station, Kukatpally, Hyderabad',
      phone: '7799960073',
      coords: { x: '28%', y: '42%' }
    },
    {
      id: 'kothapet',
      name: 'OMNI KOTHAPET',
      city: 'Hyderabad',
      type: 'Multispeciality & Emergency Center',
      beds: '180+ Beds',
      specialties: ['Emergency Medicine', 'Pulmonology', 'Nephrology', 'General Surgery'],
      address: 'Opp. Telephone Exchange, Kothapet, Dilsukhnagar, Hyderabad',
      phone: '8096369999',
      coords: { x: '42%', y: '54%' }
    },
    {
      id: 'kurnool',
      name: 'OMNI KURNOOL',
      city: 'Kurnool',
      type: 'Regional Center of Excellence',
      beds: '150+ Beds',
      specialties: ['Cardiology', 'Orthopedics', 'Critical Care', 'Neurology'],
      address: 'Sampath Nagar, Near New Bus Stand, Kurnool',
      phone: '7569443737',
      coords: { x: '38%', y: '72%' }
    },
    {
      id: 'vizag',
      name: 'OMNI VIZAG',
      city: 'Visakhapatnam',
      type: 'Coastal Super Speciality Hospital',
      beds: '220+ Beds',
      specialties: ['Cardiac Sciences', 'Neuro Sciences', 'Advanced Surgical Oncology', 'Trauma'],
      address: 'Waltair Main Road, Ram Nagar, Visakhapatnam',
      phone: '8008904323',
      coords: { x: '78%', y: '35%' }
    },
    {
      id: 'giggles-vizag',
      name: 'GIGGLES BY OMNI',
      city: 'Visakhapatnam',
      type: 'Dedicated Women & Children Hospital',
      beds: '100+ Beds',
      specialties: ['Pediatrics & NICU', 'Obstetrics & High-Risk Pregnancy', 'Gynecology'],
      address: 'Health City, Arilova, Visakhapatnam',
      phone: '7330788815',
      coords: { x: '84%', y: '30%' }
    }
  ];

  const activeData = LOCATIONS.find((loc) => loc.id === selectedLoc) || LOCATIONS[0];

  return (
    <section className="network-section" id="hospitals">
      <div className="section-container">
        <div className="section-header-left">
          <span className="section-eyebrow">HOSPITAL NETWORK</span>
          <h2 className="section-title-dark">CARE ACROSS TELANGANA & ANDHRA PRADESH</h2>
          <p className="section-lead">
            Strategically located super speciality centers delivering world-class clinical care, 24/7 emergency response, 
            and advanced surgical robotics.
          </p>
        </div>

        <div className="network-grid">
          {/* Left Column: Interactive Geographic Map Visualization */}
          <div className="map-visualization-wrapper">
            <div className="map-canvas">
              {/* Stylized Regional Map Graphics */}
              <svg className="region-svg-map" viewBox="0 0 800 500" fill="none">
                <path 
                  d="M150 120 Q 300 80 500 110 T 750 200 Q 780 320 650 420 T 350 450 Q 200 400 120 280 Z" 
                  fill="#F4FAF7" 
                  stroke="rgba(0, 137, 123, 0.2)" 
                  strokeWidth="2" 
                />
                <path 
                  d="M200 180 Q 380 150 550 180 T 700 280" 
                  stroke="rgba(0, 137, 123, 0.12)" 
                  strokeWidth="1.5" 
                  strokeDasharray="4 4" 
                />
              </svg>

              {/* Glowing Location Pins */}
              {LOCATIONS.map((loc) => (
                <div 
                  key={loc.id}
                  className={`map-pin-wrapper ${loc.id === selectedLoc ? 'active' : ''}`}
                  style={{ left: loc.coords.x, top: loc.coords.y }}
                  onClick={() => setSelectedLoc(loc.id)}
                  onMouseEnter={() => setSelectedLoc(loc.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${loc.name} details`}
                >
                  <div className="pin-pulse" />
                  <div className="pin-dot">
                    <MapPin size={14} className="pin-icon" aria-hidden="true" />
                  </div>
                  <span className="pin-label">{loc.city}</span>
                </div>
              ))}
            </div>

            {/* Quick Location Pills selector */}
            <div className="location-pills">
              {LOCATIONS.map((loc) => (
                <button
                  key={loc.id}
                  type="button"
                  className={`location-pill ${loc.id === selectedLoc ? 'active' : ''}`}
                  onClick={() => setSelectedLoc(loc.id)}
                >
                  <Building size={13} aria-hidden="true" />
                  <span>{loc.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Floating Information Card Panel */}
          <div className="location-details-panel">
            <div className="panel-badge">
              <Building size={14} className="badge-icon" />
              <span>{activeData.city.toUpperCase()} LOCATION</span>
            </div>

            <h3 className="panel-title">{activeData.name}</h3>
            <p className="panel-type">{activeData.type}</p>
            <span className="panel-beds">{activeData.beds}</span>

            <div className="panel-divider" />

            <h4 className="specialty-label">KEY CENTERS OF EXCELLENCE:</h4>
            <ul className="specialties-list">
              {activeData.specialties.map((spec, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={15} className="check-icon" aria-hidden="true" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>

            <div className="panel-divider" />

            <div className="contact-info-block">
              <div className="info-row">
                <MapPin size={16} className="info-icon" />
                <span>{activeData.address}</span>
              </div>
              <div className="info-row">
                <Phone size={16} className="info-icon" />
                <span>Helpline: {activeData.phone}</span>
              </div>
            </div>

            <button type="button" className="view-hospital-btn">
              <span>VIEW HOSPITAL DETAILS</span>
              <ArrowRight size={15} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
