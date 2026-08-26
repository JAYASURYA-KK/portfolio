import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <a href="#home" className="logo">J.K</a>
        
        <div className="hamburger" onClick={toggleMobileMenu}>
          <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        </div>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a></li>
          <li><a href="#education" onClick={() => setIsMobileMenuOpen(false)}>Education</a></li>
          <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
          <li><button className="nav-resume-btn" onClick={() => { setIsMobileMenuOpen(false); onOpenResume(); }}>Resume</button></li>
          <li>
            <div className="theme-toggle-container">
              <span className="theme-label">Dark</span>
              <div className={`theme-switch ${!isDarkMode ? 'light' : ''}`} onClick={toggleTheme}>
                <div className="switch-handle"></div>
              </div>
              <span className="theme-label">Light</span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
