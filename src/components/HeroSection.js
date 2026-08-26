import React from 'react';
import './HeroSection.css';
import profileImage from '../assets/profile.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="section hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="greeting">Hi, I'm</h2>
          <h1 className="name">Jayasurya K</h1>
          <h3 className="title">Aspiring AI & Full Stack Developer | Data Enthusiast</h3>
          
          <p className="objective">
            Motivated Computer Science undergraduate passionate about Artificial Intelligence and Full Stack Development. 
            Skilled in building innovative software solutions and solving real-world problems. Eager to learn new 
            technologies and contribute to impactful projects.
          </p>

          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-secondary">Resume</a>
            <a href="mailto:jayasurya272007@gmail.com" className="btn btn-secondary">Contact Me</a>
          </div>

          <div className="social-links">
            <a href="https://github.com/JAYASURYA-KK" target="_blank" rel="noreferrer" className="social-icon">
              <img src="/icons/github.svg" alt="GitHub" />
            </a>
            <a href="https://linkedin.com/in/jayasurya2707" target="_blank" rel="noreferrer" className="social-icon">
              <img src="/icons/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="https://leetcode.com/u/jaya_surya_2007" target="_blank" rel="noreferrer" className="social-icon">
              <img src="/icons/leetcode.svg" alt="LeetCode" />
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          <img src={profileImage} alt="Jayasurya K" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
