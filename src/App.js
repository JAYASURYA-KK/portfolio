import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="App">
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      
      <footer className="footer">
        <p>© 2026 Jayasurya K. All rights reserved.</p>
        <p>jayasurya272007@gmail.com | +91 9080418085</p>
      </footer>
    </div>
  );
}

export default App;
