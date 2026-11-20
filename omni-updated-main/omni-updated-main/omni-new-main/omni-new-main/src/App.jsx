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
import { initAnalytics, trackPageView } from './utils/analytics';
import { SEO_METADATA, updatePageSEO } from './utils/seoData';

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
  const [appointmentModalData, setAppointmentModalData] = useState({
    location: null,
    specialty: null,
    doctor: null,
    fromNavbar: false
  });

  // Initialize Google Analytics on mount
  useEffect(() => {
    initAnalytics();
  }, []);

  // Set page titles and meta descriptions dynamically for browser tabs, SEO and Google Analytics
  useEffect(() => {
    let title = SEO_METADATA.home.title;
    let description = SEO_METADATA.home.description;
    let canonical = window.location.pathname || '/';

    if (currentView === 'specialty-detail') {
      const slugKey = (currentSpecialtySlug || 'cardiology').toLowerCase();
      const seo = SEO_METADATA[slugKey];
      if (seo) {
        title = seo.title;
        description = seo.description;
      } else {
        const formatted = currentSpecialtySlug ? currentSpecialtySlug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()) : 'Speciality';
        title = `${formatted} | OMNI Hospitals`;
        description = `Get advanced ${formatted} care and treatment from experienced specialists at OMNI Hospitals in Hyderabad and Andhra Pradesh. Book your consultation today.`;
      }
      canonical = `/specialities/${slugKey}`;
    } else if (currentView === 'home') {
      title = SEO_METADATA.home.title;
      description = SEO_METADATA.home.description;
      canonical = '/';
    } else if (currentView === 'about') {
      title = 'About Us | OMNI Hospitals - Excellence in Healthcare';
      description = 'Learn about OMNI Hospitals, our mission, vision, clinical leadership, and world-class multi-speciality healthcare across Hyderabad and Andhra Pradesh.';
      canonical = '/about';
    } else if (currentView === 'doctors') {
      title = 'Find a Doctor | Specialist Consultants at OMNI Hospitals';
      description = 'Find top specialist doctors, surgeons and consultants across OMNI Hospitals network. Search by specialty, branch, or doctor name and book an appointment.';
      canonical = '/doctors';
    } else if (currentView === 'specialities') {
      title = 'Centres of Clinical Excellence & Specialities | OMNI Hospitals';
      description = 'Explore our centres of clinical excellence including Cardiology, Orthopedics, Neurology, Urology, Emergency Medicine, and more across Hyderabad and Andhra Pradesh.';
      canonical = '/specialities';
    } else if (currentView === 'hospitals') {
      title = 'Our Super Speciality Hospitals | OMNI Hospitals';
      description = 'Discover OMNI Super Speciality Hospitals located across Kothapet, Kukatpally, Nampally, Visakhapatnam, and Kurnool with state-of-the-art medical infrastructure.';
      canonical = '/hospitals';
    } else if (currentView === 'hospital-detail') {
      const formatted = currentHospitalSlug ? currentHospitalSlug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()) : 'Hospital';
      title = `OMNI Hospitals - ${formatted} Branch`;
      description = `OMNI Hospitals ${formatted} branch offers advanced super speciality healthcare, 24/7 emergency services, modern diagnostics, and experienced specialist doctors.`;
      canonical = `/hospitals/${currentHospitalSlug}`;
    } else if (currentView === 'locations') {
      title = 'Hospital Locations & Contact Centers | OMNI Hospitals';
      description = 'Locate OMNI Hospitals nearest to you in Hyderabad, Visakhapatnam, and Kurnool. View contact numbers, addresses, OPD timings, and directions.';
      canonical = '/locations';
    } else if (currentView === 'careers') {
      title = 'Careers & Medical Opportunities | OMNI Hospitals';
      description = 'Join our dedicated healthcare team at OMNI Hospitals. Explore job openings for doctors, nurses, medical staff, and administrative roles.';
      canonical = '/careers';
    } else if (currentView === 'blogs') {
      title = 'Health Blogs & Medical Insights | OMNI Hospitals';
      description = 'Read expert health advice, medical insights, wellness tips, and patient awareness articles written by leading doctors at OMNI Hospitals.';
      canonical = '/blogs';
    } else if (currentView === 'blog-detail') {
      title = 'Health Article & Clinical Insights | OMNI Hospitals';
      description = 'In-depth health guide and clinical insights from specialists at OMNI Hospitals.';
      canonical = `/blog/${currentBlogSlug}`;
    } else if (currentView === 'insurance') {
      title = 'Insurance Partners & Cashless TPA Empanelments | OMNI Hospitals';
      description = 'Cashless hospitalization and insurance TPA tie-ups at OMNI Hospitals. View empanelled health insurance companies and claim assistance services.';
      canonical = '/insurance';
    } else if (currentView === 'contact') {
      title = 'Contact Us & 24/7 Helpline | OMNI Hospitals';
      description = 'Contact OMNI Hospitals for emergency care, appointments, or general inquiries. Call our 24/7 central helpline 888 0101 000 or visit our hospital locations.';
      canonical = '/contact';
    }
    updatePageSEO(title, description, canonical);
    trackPageView(window.location.pathname, title);
  }, [currentView, currentHospitalSlug, currentSpecialtySlug, currentJobSlug, currentBlogSlug]);

  const openAppointmentModal = (param) => {
    // When opened from navbar Book Appointment button, location must be strictly empty
    if (param && param.fromNavbar) {
      setAppointmentModalData({
        location: '',
        specialty: null,
        doctor: null,
        fromNavbar: true
      });
      setIsAppointmentModalOpen(true);
      return;
    }

    if (param) {
      if (typeof param === 'string') {
        setAppointmentModalData({ location: param, specialty: null, doctor: null, fromNavbar: false });
        if (typeof window !== 'undefined') {
          localStorage.setItem('omni_preferred_location', param);
        }
      } else if (typeof param === 'object' && param !== null) {
        setAppointmentModalData({
          location: param.location || param.branch || null,
          specialty: param.specialty || null,
          doctor: param,
          fromNavbar: false
        });
        if (param.location && typeof window !== 'undefined') {
          localStorage.setItem('omni_preferred_location', param.location);
        }
      }
    } else if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('omni_preferred_location');
      setAppointmentModalData({
        location: saved || null,
        specialty: null,
        doctor: null,
        fromNavbar: false
      });
    }
    setIsAppointmentModalOpen(true);
  };
  const closeAppointmentModal = () => setIsAppointmentModalOpen(false);

  useEffect(() => {
    const handleOpenAppointmentModal = (e) => {
      if (e?.detail?.fromNavbar) {
        openAppointmentModal({ fromNavbar: true });
        return;
      }
      const loc = e?.detail?.location || e?.detail?.hospitalLocation;
      const doc = e?.detail?.doctor;
      if (doc) {
        openAppointmentModal(doc);
      } else if (loc) {
        openAppointmentModal(loc);
      } else {
        openAppointmentModal();
      }
    };
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
      <AppointmentModal 
        isOpen={isAppointmentModalOpen} 
        onClose={closeAppointmentModal}
        initialLocation={appointmentModalData.location}
        initialSpecialty={appointmentModalData.specialty}
        doctor={appointmentModalData.doctor}
        fromNavbar={appointmentModalData.fromNavbar}
      />
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
      <WhatsAppFloatingBtn />
    </div>
  );
}
