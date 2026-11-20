import React, { useEffect } from 'react';
import HomeHeader from '../components/HomePage/HomeHeader';
import HomeHero from '../components/HomePage/HomeHero';
import OurStorySection from '../components/HomePage/OurStorySection';
import SpecialtiesPreviewSection from '../components/HomePage/SpecialtiesPreviewSection';
import TechnologySection from '../components/HomePage/TechnologySection';
import DoctorSearchSection from '../components/HomePage/DoctorSearchSection';
import MedicalInsightsSection from '../components/HomePage/MedicalInsightsSection';
import FinalCTASection from '../components/HomePage/FinalCTASection';
import HomeFooter from '../components/HomePage/HomeFooter';
import ScrollProgress from '../components/ScrollProgress';
import RankedHospitalSection from '../components/HomePage/RankedHospitalSection';

export default function HomePage({ onNavigate, onBookAppointment }) {
  // Intersection Observer for unique multi-style scroll reveals
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: '50px 0px 50px 0px' }
    );

    // Apply distinct reveal classes to sections for visual variety
    const sectionConfigs = [
      { id: 'ranked-hospital-section', revealClass: 'reveal-fade-up' },
      { id: 'our-story', revealClass: 'reveal-slide-left' },
      { id: 'specialities', revealClass: 'reveal-scale-in' },
      { id: 'technology', revealClass: 'reveal-blur-in' },
      { id: 'doctors', revealClass: 'reveal-fade-up' },
      { id: 'blogs', revealClass: 'reveal-slide-right' },
      { id: 'locations', revealClass: 'reveal-scale-in' }
    ];

    sectionConfigs.forEach(({ id, revealClass }) => {
      const el = document.getElementById(id);
      if (el) {
        el.classList.add('reveal-on-scroll', revealClass);
        observer.observe(el);
      }
    });

    // Fallback observe all remaining sections (excluding hero and testimonials)
    const allSections = document.querySelectorAll('main > section:not(.hero):not(.omni-testimonials-brand-section)');
    allSections.forEach((sec) => {
      if (!sec.classList.contains('reveal-on-scroll')) {
        sec.classList.add('reveal-on-scroll', 'reveal-fade-up');
        observer.observe(sec);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Mouse position spotlight tracker on cards
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.story-card, .specialty-visual-card, .tech-feature-card, .apollo-doctor-card, .insight-article-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="omni-homepage-wrapper">
      {/* Top Scroll Progress Indicator Bar */}
      <ScrollProgress />

      {/* Main Luxury Header */}
      <HomeHeader
        currentView="home"
        onNavigate={onNavigate}
        onBookAppointment={onBookAppointment}
      />

      {/* Main Content Flow */}
      <main className="homepage-main">
        {/* 1. Cinematic Hero Section */}
        <HomeHero
          onFindDoctor={() => scrollToSection('doctors')}
          onBookAppointment={onBookAppointment || (() => scrollToSection('doctors'))}
          onExploreSpecialties={() => onNavigate && onNavigate('specialities')}
        />

        {/* NEW: Ranked Hospital Promotional Section */}
        <RankedHospitalSection 
          onBookAppointment={onBookAppointment || (() => scrollToSection('doctors'))}
          onNavigate={onNavigate}
        />

        {/* 2. Our Story / Why OMNI Editorial Section */}
        <OurStorySection
          onExploreStory={() => onNavigate('about')}
        />

        {/* 3. Specialties Preview Category Explorer */}
        <SpecialtiesPreviewSection
          onExploreCinematic={() => onNavigate && onNavigate('specialities')}
        />

        {/* 4. Precision Technology Explorer */}
        <TechnologySection />

        {/* 5. Doctor Search & Faculty Suite */}
        <DoctorSearchSection
          onNavigate={onNavigate}
          onBookAppointment={onBookAppointment}
        />

        {/* 6. Medical Knowledge Insights Platform */}
        <MedicalInsightsSection onNavigate={onNavigate} />

        {/* 12. Final Bright Conversion Section (Your Health. Your OMNI.) */}
        <FinalCTASection
          onFindDoctor={() => scrollToSection('doctors')}
          onBookAppointment={onBookAppointment}
        />
      </main>

      {/* Light Multi-Column Footer */}
      <HomeFooter onNavigate={onNavigate} onBookAppointment={onBookAppointment} />
    </div>
  );
}
