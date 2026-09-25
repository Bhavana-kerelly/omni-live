import React, { useState } from 'react';
import { X } from 'lucide-react';
import { openWhatsAppAppointment } from '../utils/whatsappHelper';

export default function WhatsAppFloatingBtn() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsDismissed(false); // Reset dismissal on new hover event
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleChatClick = (e) => {
    e.preventDefault();
    openWhatsAppAppointment('general inquiry');
  };

  const handleDismiss = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsDismissed(true);
  };

  // Show white message bubble when hovered and not dismissed in current hover session
  const showBubble = isHovered && !isDismissed;

  return (
    <div 
      className="whatsapp-floating-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* WHITE MESSAGE CARD ABOVE THE BUTTON (SHOWS ON HOVER, CLOSES ON 'X' CLICK, RE-APPEARS ON RE-HOVER) */}
      {showBubble && (
        <div className="whatsapp-message-bubble" onClick={handleChatClick}>
          <button 
            type="button"
            className="whatsapp-close-btn"
            onClick={handleDismiss}
            aria-label="Close WhatsApp notification"
          >
            <X size={14} />
          </button>

          <div className="whatsapp-bubble-content">
            <div className="whatsapp-bubble-header">
              <span className="whatsapp-online-dot" />
              <span className="whatsapp-bubble-title">Chat with OMNI Hospitals</span>
            </div>
            <p className="whatsapp-bubble-text">
              Need assistance? Connect with us on WhatsApp for 24/7 support.
            </p>
          </div>

          {/* Bottom Pointer Triangle */}
          <div className="whatsapp-bubble-pointer" />
        </div>
      )}

      {/* PURE OFFICIAL WHATSAPP GREEN BUTTON (#25D366) */}
      <a 
        href="https://wa.me/918880101000" 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={handleChatClick}
        className="whatsapp-floating-btn"
        aria-label="Contact OMNI Hospitals on WhatsApp"
      >
        <span className="whatsapp-pulse-ring" />
        
        {/* Official Pure WhatsApp SVG Icon */}
        <svg 
          viewBox="0 0 24 24" 
          className="whatsapp-svg-icon"
          fill="currentColor"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.16 4.234 4.303-1.129z" />
          <path d="M9.167 6.452c-.247-.549-.508-.56-.743-.569-.193-.008-.415-.008-.636-.008-.221 0-.58.083-.884.415-.304.331-1.162 1.136-1.162 2.77 0 1.634 1.19 3.212 1.356 3.433.166.221 2.302 3.514 5.577 4.928.779.336 1.387.537 1.86.688.783.249 1.496.214 2.06.13.629-.094 1.933-.79 2.209-1.554.276-.764.276-1.417.193-1.554-.083-.137-.304-.221-.636-.387-.331-.166-1.933-.954-2.232-1.063-.298-.109-.516-.164-.737.166-.221.331-.856 1.063-1.049 1.284-.193.221-.387.248-.718.083-.331-.166-1.4-.516-2.667-1.646-.986-.879-1.652-1.964-1.845-2.295-.193-.331-.02-.51.145-.675.148-.147.331-.387.497-.58.166-.193.221-.331.331-.553.11-.221.055-.415-.028-.58-.083-.166-.737-1.776-.994-2.394z" />
        </svg>
      </a>
    </div>
  );
}
