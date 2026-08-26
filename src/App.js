import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      
      <footer className="footer">
        <p>© 2026 Jayasurya K. All rights reserved.</p>
        <p>jayasurya272007@gmail.com | +91 9080418085</p>
      </footer>
    </div>
  );
}

export default App;
