import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (targetId) => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${targetId}`);
      return;
    }

    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    goToSection("contact");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    goToSection(targetId);
  };

  return (
    <header className="header" id="header">
      <nav className="navbar">
        <div className="nav-brand">
          <img src="/DKF_logo.png" alt="D.K. Fabs" className="logo-img" />
        </div>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`} id="navLinks">
          <li>
            <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={(e) => handleNavClick(e, "services")}>
              Services
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
              Contact
            </a>
          </li>
        </ul>
        <button className="cta-btn" onClick={scrollToContact}>
          Request a Quote
        </button>
        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          id="hamburger"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
