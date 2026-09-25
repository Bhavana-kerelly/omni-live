import React from 'react';
import CircularTestimonials from '../ui/circular-testimonials';

const patientVideoTestimonials = [
  {
    id: 'story-1',
    name: "Rajeshwar Rao",
    designation: "Robotic Knee Replacement • Kothapet",
    quote:
      "The robotic joint replacement at OMNI Hospitals was a total life-changer. I was walking without pain within two days post-surgery! The orthopedics team and nurses provided outstanding, compassionate care.",
    videoSrc: "/videos/specialties-cinematic.mp4",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 'story-2',
    name: "Priyanka Reddy",
    designation: "Cardiology STEMI Recovery • Kukatpally",
    quote:
      "When my father suffered an acute cardiac episode, OMNI’s 24/7 STEMI team reacted instantaneously. Their swift primary angioplasty saved his life. We are forever grateful to the cardiology specialists.",
    videoSrc: "/videos/my-new-hero-video-clean.mp4",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 'story-3',
    name: "Venkat Raman",
    designation: "Neurosciences & ICU Recovery • Vizag",
    quote:
      "From emergency admission to post-operative recovery in the neuro ICU, every single staff member exhibited deep clinical excellence and warmth. OMNI truly stands for trust and world-class healthcare.",
    videoSrc: "/videos/omni-about-hero.mp4",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 'story-4',
    name: "Sunitha & Karthik",
    designation: "Maternity & NICU Care • Giggles Vizag",
    quote:
      "The maternity and pediatric care at Giggles by OMNI was phenomenal. The doctors listened patiently, made us comfortable, and guided us seamlessly through a healthy delivery.",
    videoSrc: "/videos/my-new-hero-video.mp4",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
  }
];

export default function TestimonialsSection() {
  return (
    <section className="omni-testimonials-brand-section" id="testimonials">
      {/* Background Soft Aura Glows (OMNI Blue & OMNI Green) */}
      <div className="ambient-brand-glow glow-blue" aria-hidden="true" />
      <div className="ambient-brand-glow glow-green" aria-hidden="true" />

      <div className="testimonials-section-container">
        
        {/* SECTION HEADER IN OMNI BRAND LOGO COLOR COMBINATION */}
        <div className="section-header-brand">
          {/* Main Title Split in OMNI Blue (#0190DE) and OMNI Green (#70BE44) */}
          <h2 className="brand-section-title">
            <span className="text-omni-blue">Real Stories of </span>
            <span className="text-omni-green">Healing &amp; Hope</span>
          </h2>

          <p className="brand-section-lead">
            Hear directly from our patients how tertiary clinical care, robotic surgical innovations, and compassionate healing at OMNI Hospitals transformed their lives.
          </p>
        </div>

        {/* CIRCULAR VIDEO TESTIMONIALS CAROUSEL */}
        <div className="testimonials-carousel-wrapper">
          <CircularTestimonials
            testimonials={patientVideoTestimonials}
            autoplay={true}
            colors={{
              name: "#0B1F41",            // OMNI Navy
              designation: "#0190DE",     // OMNI Primary Blue
              testimony: "#334155",       // Slate Text
              arrowBackground: "#0190DE", // OMNI Primary Blue
              arrowForeground: "#FFFFFF", // Pure White Arrow
              arrowHoverBackground: "#70BE44", // OMNI Brand Green Hover
            }}
            fontSizes={{
              name: "1.7rem",
              designation: "0.95rem",
              quote: "1.1rem",
            }}
          />
        </div>

      </div>

      {/* Styled Component CSS maintaining OMNI Brand Identity */}
      <style>{`
        .omni-testimonials-brand-section {
          position: relative;
          padding: 5.5rem 0 6rem;
          background: linear-gradient(180deg, #F8FAFC 0%, #F0F7FF 50%, #E8F4FE 100%);
          border-top: 1px solid #E2E8F0;
          border-bottom: 1px solid #E2E8F0;
          overflow: hidden;
        }

        .ambient-brand-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
          z-index: 1;
        }

        .glow-blue {
          width: 450px;
          height: 450px;
          top: -50px;
          left: -100px;
          background: rgba(1, 144, 222, 0.14);
        }

        .glow-green {
          width: 450px;
          height: 450px;
          bottom: -50px;
          right: -100px;
          background: rgba(112, 190, 68, 0.14);
        }

        .testimonials-section-container {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .section-header-brand {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 3rem;
        }

        .brand-section-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.2rem, 3.8vw, 3rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 1rem;
        }

        .text-omni-blue {
          color: #0B1F41;
        }

        .text-omni-green {
          color: #70BE44;
          position: relative;
          display: inline-block;
        }

        .text-omni-green::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0;
          width: 100%;
          height: 3px;
          background: #70BE44;
          border-radius: 2px;
          opacity: 0.4;
        }

        .brand-section-lead {
          color: #536B88;
          font-size: 1.05rem;
          line-height: 1.65;
          max-width: 640px;
          margin: 0 auto;
        }

        .testimonials-carousel-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </section>
  );
}
