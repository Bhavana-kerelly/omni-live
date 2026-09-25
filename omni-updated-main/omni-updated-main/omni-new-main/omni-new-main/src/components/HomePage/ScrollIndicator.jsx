import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function ScrollIndicator({ onClickScroll }) {
  return (
    <button 
      type="button" 
      className="hero-scroll-indicator-btn"
      onClick={onClickScroll}
      aria-label="Scroll down to explore homepage sections"
    >
      <span className="scroll-lbl-text">SCROLL TO EXPLORE</span>
      <ChevronDown size={18} className="bounce-chevron-icon" aria-hidden="true" />
    </button>
  );
}
