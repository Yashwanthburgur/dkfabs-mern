// src/components/Footer.jsx - USE THIS VERSION (no Tailwind)
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">D.K. FABS</div>
            <p>Precision Metalwork. Engineered to Perform.</p>
            <p>Delivering quality metal fabrication solutions since 2000</p>
          </div>
          <div className="footer-right">
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-social">
              <a href="#" className="social-link"><i className="fab fa-linkedin"></i> LinkedIn</a>
              <a href="mailto:info@dkfabs.com" className="social-link"><i className="fas fa-envelope"></i> Email</a>
              <a href="https://wa.me/919876543210" className="social-link"><i className="fab fa-whatsapp"></i> WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 D.K. Fabs. All rights reserved. | Crafted with precision for precision craftsmen</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
