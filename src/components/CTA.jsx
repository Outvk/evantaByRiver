import React from 'react'

export default function CTA({ handleContactClick }) {
  return (
    <button className="contact-btn" onClick={handleContactClick}>
      <span className="glow"></span>
      <span className="contact-btn-content">Contact Us</span>
    </button>
  );
}
