import React, { useState, useEffect, useRef } from 'react';
import { MapPin, ArrowRight, Calendar, Navigation, PhoneCall, Clock, Compass } from 'lucide-react';
import HomeHeader from '../components/HomePage/HomeHeader';
import HomeFooter from '../components/HomePage/HomeFooter';
import { getAssetUrl } from '../utils/getAssetUrl';
import { openWhatsAppAppointment } from '../utils/whatsappHelper';
import './LocationsPage.css';

const LOCATIONS_LIST = [
  {
    id: 'kukatpally',
    eyebrow: 'Kukatpally, Hyderabad',
    heading: 'OMNI Hospitals — Kukatpally',
    city: 'Hyderabad',
    copy: 'Advanced healthcare and specialist services, conveniently located near KPBH Metro Station in Kukatpally.',
    address: 'Near KPBH Metro Station, Kukatpally, Hyderabad, Telangana 500072',
    phone: '040-68252568 / 7799960073',
    mapLink: 'https://maps.google.com/?q=OMNI+Hospitals+Kukatpally+Hyderabad',
    image: '/images/hospitals/kukatpally-card.jpg',
    beds: '200+ Beds',
    specialists: '80+ Doctors'
  },
  {
    id: 'kothapet',
    eyebrow: 'Kothapet, Hyderabad',
    heading: 'OMNI Hospitals — Kothapet',
    city: 'Hyderabad',
    copy: 'Comprehensive multi-specialty healthcare and 24/7 emergency services for patients across East Hyderabad.',
    address: 'Opp. PVR & Victoria Memorial Metro Station, Kothapet, Hyderabad, Telangana 500035',
    phone: '040-67369999 / 8096369999',
    mapLink: 'https://maps.google.com/?q=OMNI+Hospitals+Kothapet+Hyderabad',
    image: '/images/hospitals/kothapet-card.jpg',
    beds: '180+ Beds',
    specialists: '75+ Doctors'
  },
  {
    id: 'udai-nampally',
    eyebrow: 'Nampally, Hyderabad',
    heading: 'UDAI OMNI Hospitals — Nampally',
    city: 'Hyderabad',
    copy: 'Pioneering center for Advanced Orthopedics, Joint Replacements, and Spine Surgery with 40+ years legacy.',
    address: 'Near Assembly Metro Station, Chapel Road, Nampally, Hyderabad, Telangana 500001',
    phone: '040-23232226 / 040-66292228',
    mapLink: 'https://maps.google.com/?q=UDAI+OMNI+Hospitals+Nampally+Hyderabad',
    image: '/images/hospitals/nampally-card.jpg',
    beds: '150+ Beds',
    specialists: '50+ Doctors'
  },
  {
    id: 'vizag',
    eyebrow: 'Ram Nagar, Visakhapatnam',
    heading: 'OMNI Hospitals — Vizag',
    city: 'Visakhapatnam',
    copy: 'Flagship super-specialty hospital offering comprehensive cardiac sciences, neurosurgery, and organ care.',
    address: 'Waltair Main Road, Ram Nagar, Visakhapatnam, Andhra Pradesh 530002',
    phone: '8008904323',
    mapLink: 'https://maps.google.com/?q=OMNI+Hospitals+Ram+Nagar+Vizag',
    image: '/images/hospitals/vizag-card.jpg',
    beds: '220+ Beds',
    specialists: '90+ Doctors'
  },
  {
    id: 'giggles-vizag',
    eyebrow: 'Arilova, Visakhapatnam',
    heading: 'Giggles by OMNI — Vizag',
    city: 'Visakhapatnam',
    copy: 'Dedicated Women & Children’s Hospital delivering compassionate maternity, Level-3 NICU care, and pediatrics.',
    address: 'Health City, Arilova, Visakhapatnam, Andhra Pradesh 530040',
    phone: '7330788815',
    mapLink: 'https://maps.google.com/?q=Giggles+by+OMNI+Vizag',
    image: '/images/hospitals/giggles-vizag-card.jpg',
    beds: '100+ Beds',
    specialists: '45+ Doctors'
  },
  {
    id: 'kurnool',
    eyebrow: 'Sampath Nagar, Kurnool',
    heading: 'OMNI Hospitals — Kurnool',
    city: 'Kurnool',
    copy: 'Rayalaseema’s premier healthcare destination featuring high-precision diagnostics, cardiac, and trauma care.',
    address: 'Sampath Nagar, Near New Bus Stand, Kurnool, Andhra Pradesh 518003',
    phone: '7569443737 / 08518-277188',
    mapLink: 'https://maps.google.com/?q=OMNI+Hospitals+Kurnool',
    image: '/images/hospitals/kurnool-card.jpg',
    beds: '150+ Beds',
    specialists: '55+ Doctors'
  }
];

export default function LocationsPage({ onNavigate, onBookAppointment }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 150) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLocationClick = (id) => {
    if (onNavigate) {
      onNavigate(`hospitals/${id}`);
    }
  };

  const handleAppointmentClick = (e) => {
    if (e) e.preventDefault();
    if (onBookAppointment) onBookAppointment();
    else openWhatsAppAppointment();
  };

  const handleScrollToCard = (index) => {
    const targetRef = cardRefs.current[index];
    if (targetRef) {
      targetRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="omni-locations-page-wrapper">
      {/* Website Header Navigation */}
      <HomeHeader currentView="locations" onNavigate={onNavigate} onBookAppointment={onBookAppointment} />

      <main className="locations-main-content">
        {/* =========================================================================
            1. SECTION INTRO (BRIGHT, MINIMAL & PREMIUM)
           ========================================================================= */}
        <section className="locations-hero-section">
          <div className="locations-hero-container">
            <div className="locations-eyebrow-pill">
              <Compass size={14} className="eyebrow-icon" />
              <span>Our Locations</span>
            </div>
            
            <h1 className="locations-hero-heading">
              <span className="text-blue-primary">Find an Omni Hospital </span>
              <span className="text-green-accent">Near You.</span>
            </h1>

            <p className="locations-hero-subtext">
              Expert care, advanced technology and trusted specialists across our locations.
            </p>
          </div>
        </section>

        {/* =========================================================================
            2. SCROLL-DRIVEN STACKED SEQUENTIAL LOCATION CARDS
           ========================================================================= */}
        <section className="locations-feed-section">
          <div className="locations-stack-wrapper">
            
            {/* Sequential Card Stack Container */}
            <div className="locations-cards-stack">
              {LOCATIONS_LIST.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <article
                    key={item.id}
                    id={`location-${item.id}`}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className={`sticky-hospital-card ${isActive ? 'active-card' : ''}`}
                    style={{
                      zIndex: index + 1
                    }}
                  >
                    <div className="card-uniform-grid">
                      
                      {/* LEFT SIDE (45%): Hospital Photograph */}
                      <div className="card-visual-column">
                        <div className="hospital-img-box">
                          <img
                            src={getAssetUrl(item.image)}
                            alt={item.heading}
                            className="hospital-cover-img"
                            onError={(e) => {
                              e.currentTarget.src = 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop';
                            }}
                          />
                          <div className="city-pill-tag">
                            <MapPin size={13} />
                            <span>{item.city}</span>
                          </div>
                        </div>
                      </div>

                      {/* RIGHT SIDE (55%): Hospital Info & CTAs */}
                      <div className="card-content-column">
                        <div className="card-content-inner">
                          
                          <span className="location-eyebrow-tag">{item.eyebrow}</span>
                          
                          <h2 
                            className="location-hospital-name"
                            onClick={() => handleLocationClick(item.id)}
                          >
                            {item.heading}
                          </h2>

                          <p className="location-address-line">
                            <MapPin size={14} className="address-icon" />
                            <span>{item.address}</span>
                          </p>

                          {/* Phone Number & Working Hours */}
                          <div className="location-meta-details">
                            <p className="meta-info-item">
                              <PhoneCall size={14} className="meta-icon" />
                              <span><strong>Phone:</strong> {item.phone}</span>
                            </p>
                            <p className="meta-info-item">
                              <Clock size={14} className="meta-icon" />
                              <span><strong>Timings:</strong> 24/7 Emergency &amp; OPD Services</span>
                            </p>
                          </div>

                          {/* CTAs Row */}
                          <div className="location-ctas-row">
                            <button
                              type="button"
                              className="btn-appointment-green"
                              onClick={handleAppointmentClick}
                            >
                              <Calendar size={15} />
                              <span>Book an Appointment</span>
                            </button>

                            <a
                              href={item.mapLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-directions-blue"
                            >
                              <Navigation size={15} />
                              <span>Get Directions</span>
                            </a>
                          </div>

                        </div>
                      </div>

                    </div>
                  </article>
                );
              })}
            </div>

          </div>
        </section>
      </main>

      {/* Website Footer */}
      <HomeFooter onNavigate={onNavigate} onBookAppointment={onBookAppointment} />
    </div>
  );
}
