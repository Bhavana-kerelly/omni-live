import React from 'react';
import { Megaphone } from 'lucide-react';
import './FloatingAnnouncementBtn.css';

export default function FloatingAnnouncementBtn({ onClick }) {
  return (
    <button className="floating-announcement-btn" onClick={onClick}>
      <span>Announcements</span>
    </button>
  );
}
