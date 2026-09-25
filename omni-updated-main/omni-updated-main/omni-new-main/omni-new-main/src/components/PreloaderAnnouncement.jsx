import React from 'react';
import { ArrowRight } from 'lucide-react';
import './PreloaderAnnouncement.css';
import { getAssetUrl } from '../utils/getAssetUrl';

// Using a fallback mechanism for logo just in case
export default function PreloaderAnnouncement({ onClose }) {
  return (
    <div className="preloader-overlay">
      <div className="preloader-header">
        <img 
          src={getAssetUrl('/omni-logo.png')} 
          alt="OMNI Hospitals" 
          className="preloader-logo" 
          onError={(e) => { e.currentTarget.src = getAssetUrl('/omni-logo.svg'); }} 
        />
        <button className="preloader-skip-btn" onClick={onClose}>
          SKIP <ArrowRight size={16} />
        </button>
      </div>
      <div className="preloader-content">
        <a 
          href="https://wa.me/918880101000?text=Hi%20OMNI%20Hospitals,%20I%20am%20interested%20in%20the%20Cardiology%20Health%20Checkup%20Package."
          target="_blank"
          rel="noopener noreferrer"
          className="preloader-img-link"
        >
          <img 
            src="/images/cardiology-package-announcement.jpg" 
            alt="Announcement" 
            className="preloader-image"
            onError={(e) => {
              // Fallback image if the user hasn't placed the correct image in public/images yet
              e.currentTarget.onerror = null;
              e.currentTarget.src = 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop';
            }}
          />
        </a>
      </div>
    </div>
  );
}
