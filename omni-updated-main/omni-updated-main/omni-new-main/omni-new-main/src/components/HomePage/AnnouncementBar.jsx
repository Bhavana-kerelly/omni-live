import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function AnnouncementBar({ onExploreRobotic }) {
  const message = "A New Era of Robotic Surgery Begins — Advanced Robotic Care for Urology, General Surgery & Oncology at Lakdikapul and Miyapur, Hyderabad";

  return (
    <aside className="omni-announcement-bar" aria-label="Announcement">
      <div className="announcement-track">
        <div className="announcement-content">
          <span className="announcement-tag">
            <Sparkles size={13} className="sparkle-icon" aria-hidden="true" />
            ANNOUNCEMENT
          </span>
          <span className="announcement-text">{message}</span>
          <button 
            type="button" 
            className="announcement-link"
            onClick={onExploreRobotic}
            aria-label="Learn more about Robotic Surgery"
          >
            <span>Learn More</span>
            <ArrowRight size={12} aria-hidden="true" />
          </button>
        </div>
        <div className="announcement-content" aria-hidden="true">
          <span className="announcement-tag">
            <Sparkles size={13} className="sparkle-icon" />
            ANNOUNCEMENT
          </span>
          <span className="announcement-text">{message}</span>
          <span className="announcement-link">
            <span>Learn More</span>
            <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </aside>
  );
}
