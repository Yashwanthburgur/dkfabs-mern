// src/components/Footer.jsx - USE THIS VERSION (no Tailwind)
import React from "react";
import { Link } from "react-router-dom";

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
              <Link to="/#home">Home</Link>
              <Link to="/#services">Services</Link>
              <Link to="/#about">About</Link>
              <Link to="/#contact">Contact</Link>
            </div>
            <div className="footer-social">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="mailto:dkfabs@gmail.com" className="social-link">
                <i className="fas fa-envelope"></i> Email
              </a>
              <a
                href="https://wa.me/919740443999"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2025 D.K. Fabs. All rights reserved. | Crafted with precision
            for precision craftsmen
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
