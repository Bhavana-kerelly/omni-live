import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import DoctorsPage from './pages/DoctorsPage';
import AboutPage from './pages/AboutPage';
import HospitalsPage from './pages/HospitalsPage';
import LocationsPage from './pages/LocationsPage';
import HospitalDetailPage from './pages/HospitalDetailPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import InsurancePage from './pages/InsurancePage';
import HomeHeader from './components/HomePage/HomeHeader';
import HomeFooter from './components/HomePage/HomeFooter';
import CinematicSpecialtyHero from './components/CinematicSpecialtyHero';
import SpecialtyDetailsSection from './components/SpecialtyDetailsSection';
import SpecialtyDetailPage from './components/specialties/SpecialtyDetailPage';
import BlogsPage from './pages/BlogsPage';
import BlogDetailPage from './pages/BlogDetailPage';
import WhatsAppFloatingBtn from './components/WhatsAppFloatingBtn';
import AppointmentModal from './components/AppointmentModal';
import PreloaderAnnouncement from './components/PreloaderAnnouncement';
import FloatingAnnouncementBtn from './components/FloatingAnnouncementBtn';

export default function App() {
  const getInitialState = () => {
    const hash = window.location.pathname || '/';
    const hospMatch = hash.match(/#?\/?hospitals\/([a-zA-Z0-9-]+)/);
    if (hospMatch && hospMatch[1]) {
      return { view: 'hospital-detail', slug: hospMatch[1] };
    }
    const specMatch = hash.match(/#?\/?specialities\/([a-zA-Z0-9-]+)/);
    if (specMatch && specMatch[1]) {
      return { view: 'specialty-detail', slug: specMatch[1] };
    }
    const careerMatch = hash.match(/#?\/?careers\/([a-zA-Z0-9-]+)/);
    if (careerMatch && careerMatch[1]) {
      return { view: 'careers', slug: careerMatch[1] };
    }
    const blogMatch = hash.match(/#?\/?blogs?\/([a-zA-Z0-9-]+)/);
    if (blogMatch && blogMatch[1]) {
      return { view: 'blog-detail', slug: blogMatch[1] };
    }
    if (hash.includes('about')) return { view: 'about', slug: '' };
    if (hash.includes('doctors') || hash.includes('doctor')) return { view: 'doctors', slug: '' };
    if (hash.includes('specialities') || hash.includes('explore')) return { view: 'specialities', slug: '' };
    if (hash.includes('locations') || hash.includes('location')) return { view: 'locations', slug: '' };
    if (hash.includes('hospitals') || hash.includes('hospital')) return { view: 'hospitals', slug: '' };
    if (hash.includes('careers') || hash.includes('career') || hash.includes('jobs')) return { view: 'careers', slug: '' };
    if (hash.includes('contact')) return { view: 'contact', slug: '' };
    if (hash.includes('insurance') || hash.includes('tpa') || hash.includes('empanelment')) return { view: 'insurance', slug: '' };
    if (hash.includes('blogs') || hash.includes('blog')) return { view: 'blogs', slug: '' };
    return { view: 'home', slug: '' };
  };

  const initialState = getInitialState();
  const [currentView, setCurrentView] = useState(initialState.view);
  const [currentHospitalSlug, setCurrentHospitalSlug] = useState(initialState.slug || 'kothapet');
  const [currentSpecialtySlug, setCurrentSpecialtySlug] = useState(initialState.slug || 'cardiology');
  const [currentJobSlug, setCurrentJobSlug] = useState(initialState.slug || null);
  const [currentBlogSlug, setCurrentBlogSlug] = useState(initialState.slug || '');
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    let timer;
    if (showPreloader) {
      timer = setTimeout(() => {
        setShowPreloader(false);
      }, 8500);
    }
    return () => clearTimeout(timer);
  }, [showPreloader]);

  const openAppointmentModal = () => setIsAppointmentModalOpen(true);
  const closeAppointmentModal = () => setIsAppointmentModalOpen(false);

  useEffect(() => {
    const handleOpenAppointmentModal = () => setIsAppointmentModalOpen(true);
    window.addEventListener('open-appointment-modal', handleOpenAppointmentModal);
    return () => window.removeEventListener('open-appointment-modal', handleOpenAppointmentModal);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.pathname || '/';
      const hospMatch = hash.match(/#?\/?hospitals\/([a-zA-Z0-9-]+)/);
      const specMatch = hash.match(/#?\/?specialities\/([a-zA-Z0-9-]+)/);
      const careerMatch = hash.match(/#?\/?careers\/([a-zA-Z0-9-]+)/);
      const blogMatch = hash.match(/#?\/?blogs?\/([a-zA-Z0-9-]+)/);

      if (hospMatch && hospMatch[1]) {
        setCurrentView('hospital-detail');
        setCurrentHospitalSlug(hospMatch[1]);
      } else if (specMatch && specMatch[1]) {
        setCurrentView('specialty-detail');
        setCurrentSpecialtySlug(specMatch[1]);
      } else if (careerMatch && careerMatch[1]) {
        setCurrentView('careers');
        setCurrentJobSlug(careerMatch[1]);
      } else if (blogMatch && blogMatch[1]) {
        setCurrentView('blog-detail');
        setCurrentBlogSlug(blogMatch[1]);
      } else if (hash.includes('about')) {
        setCurrentView('about');
      } else if (hash.includes('doctors') || hash.includes('doctor')) {
        setCurrentView('doctors');
      } else if (hash.includes('specialities') || hash.includes('explore')) {
        setCurrentView('specialities');
      } else if (hash.includes('locations') || hash.includes('location')) {
        setCurrentView('locations');
      } else if (hash.includes('hospitals') || hash.includes('hospital')) {
        setCurrentView('hospitals');
      } else if (hash.includes('careers') || hash.includes('career') || hash.includes('jobs')) {
        setCurrentView('careers');
        setCurrentJobSlug(null);
      } else if (hash.includes('blogs') || hash.includes('blog')) {
        setCurrentView('blogs');
        setCurrentBlogSlug('');
      } else if (hash.includes('contact')) {
        setCurrentView('contact');
      } else if (hash.includes('insurance') || hash.includes('tpa') || hash.includes('empanelment')) {
        setCurrentView('insurance');
      } else if (!hash || hash === '/home' || hash === '/') {
        setCurrentView('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (view, slug) => {
    if (view && view.startsWith('hospitals/')) {
      const parts = view.split('/');
      const hospitalSlug = parts[1] || slug || 'kothapet';
      setCurrentHospitalSlug(hospitalSlug);
      setCurrentView('hospital-detail');
      window.history.pushState({}, '', `/hospitals/${hospitalSlug}`);
    } else if (view && view.startsWith('specialities/')) {
      const parts = view.split('/');
      const specSlug = parts[1] || slug || 'cardiology';
      setCurrentSpecialtySlug(specSlug);
      setCurrentView('specialty-detail');
      window.history.pushState({}, '', `/specialities/${specSlug}`);
    } else if (view && view.startsWith('careers/')) {
      const parts = view.split('/');
      const jobSlug = parts[1] || slug || null;
      setCurrentJobSlug(jobSlug);
      setCurrentView('careers');
      window.history.pushState({}, '', `/careers/${jobSlug}`);
    } else if (view && (view.startsWith('blogs/') || view.startsWith('blog/'))) {
      const parts = view.split('/');
      const blogSlug = parts[1] || slug || '';
      setCurrentBlogSlug(blogSlug);
      setCurrentView('blog-detail');
      window.history.pushState({}, '', `/blog/${blogSlug}`);
    } else if (view === 'hospital-detail') {
      const hospitalSlug = slug || 'kothapet';
      setCurrentHospitalSlug(hospitalSlug);
      setCurrentView('hospital-detail');
      window.history.pushState({}, '', `/hospitals/${hospitalSlug}`);
    } else if (view === 'specialty-detail') {
      const specSlug = slug || 'cardiology';
      setCurrentSpecialtySlug(specSlug);
      setCurrentView('specialty-detail');
      window.history.pushState({}, '', `/specialities/${specSlug}`);
    } else if (view === 'blog-detail') {
      const bSlug = slug || '';
      setCurrentBlogSlug(bSlug);
      setCurrentView('blog-detail');
      window.history.pushState({}, '', `/blog/${bSlug}`);
    } else {
      setCurrentView(view);
      if (view === 'about') {
        window.history.pushState({}, '', '/about');
      } else if (view === 'doctors') {
        window.history.pushState({}, '', '/doctors');
      } else if (view === 'specialities') {
        window.history.pushState({}, '', '/specialities');
      } else if (view === 'locations') {
        window.history.pushState({}, '', '/locations');
      } else if (view === 'hospitals') {
        window.history.pushState({}, '', '/hospitals');
      } else if (view === 'careers') {
        window.history.pushState({}, '', '/careers');
      } else if (view === 'blogs') {
        window.history.pushState({}, '', '/blogs');
      } else if (view === 'contact') {
        window.history.pushState({}, '', '/contact');
      } else if (view === 'insurance') {
        window.history.pushState({}, '', '/insurance');
      } else {
        window.history.pushState({}, '', '/');
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="omni-app">
      {showPreloader && <PreloaderAnnouncement onClose={() => setShowPreloader(false)} />}
      <AppointmentModal isOpen={isAppointmentModalOpen} onClose={closeAppointmentModal} />
      {currentView === 'about' ? (
        <AboutPage onNavigate={handleNavigate} onBookAppointment={openAppointmentModal} />
      ) : currentView === 'doctors' ? (
        <DoctorsPage onNavigate={handleNavigate} onBookAppointment={openAppointmentModal} />
      ) : currentView === 'specialities' ? (
        <div className="specialities-page-wrapper">
          <HomeHeader currentView="specialities" onNavigate={handleNavigate} onBookAppointment={openAppointmentModal} />
          <main>
            <CinematicSpecialtyHero />
            <SpecialtyDetailsSection onNavigate={handleNavigate} />
          </main>
          <HomeFooter onNavigate={handleNavigate} onBookAppointment={openAppointmentModal} />
        </div>
      ) : currentView === 'specialty-detail' ? (
        <div className="specialty-detail-page-wrapper">
          <HomeHeader currentView="specialities" onNavigate={handleNavigate} onBookAppointment={openAppointmentModal} />
          <main>
            <SpecialtyDetailPage specialtySlug={currentSpecialtySlug} onNavigate={handleNavigate} onBookAppointment={openAppointmentModal} />
          </main>
          <HomeFooter onNavigate={handleNavigate} onBookAppointment={openAppointmentModal} />
        </div>
      ) : currentView === 'locations' ? (
        <LocationsPage onNavigate={handleNavigate} onBookAppointment={openAppointmentModal} />
      ) : currentView === 'hospitals' ? (
        <HospitalsPage onNavigate={handleNavigate} onBookAppointment={openAppointmentModal} />
      ) : currentView === 'hospital-detail' ? (
        <HospitalDetailPage locationSlug={currentHospitalSlug} onNavigate={handleNavigate} onBookAppointment={openAppointmentModal} />
      ) : currentView === 'careers' ? (
        <CareersPage jobSlug={currentJobSlug} onNavigate={handleNavigate} onBookAppointment={openAppointmentModal} />
      ) : currentView === 'blogs' ? (
        <div className="blogs-view-wrapper">
          <HomeHeader currentView="blogs" onNavigate={handleNavigate} onBookAppointment={openAppointmentModal} />
          <main>
            <BlogsPage onNavigate={handleNavigate} onSelectBlog={(blog) => handleNavigate('blog-detail', blog.slug)} />
          </main>
          <HomeFooter onNavigate={handleNavigate} onBookAppointment={openAppointmentModal} />
        </div>
      ) : currentView === 'blog-detail' ? (
        <div className="blog-detail-view-wrapper">
          <HomeHeader currentView="blogs" onNavigate={handleNavigate} onBookAppointment={openAppointmentModal} />
          <main>
            <BlogDetailPage blogSlug={currentBlogSlug} onNavigate={handleNavigate} onSelectBlog={(blog) => handleNavigate('blog-detail', blog.slug)} onBookAppointment={openAppointmentModal} />
          </main>
          <HomeFooter onNavigate={handleNavigate} onBookAppointment={openAppointmentModal} />
        </div>
      ) : currentView === 'contact' ? (
        <ContactPage onNavigate={handleNavigate} onBookAppointment={openAppointmentModal} />
      ) : currentView === 'insurance' ? (
        <InsurancePage onNavigate={handleNavigate} onBookAppointment={openAppointmentModal} />
      ) : (
        <HomePage onNavigate={handleNavigate} onBookAppointment={openAppointmentModal} />
      )}
      {!showPreloader && <WhatsAppFloatingBtn />}
      <FloatingAnnouncementBtn onClick={() => setShowPreloader(true)} />
    </div>
  );
}
