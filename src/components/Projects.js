import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: "Sentinel AI",
      tech: ["Flutter", "React", "AI"],
      desc: "A privacy-first, offline Endpoint Detection & Response (EDR) system. Features a local AI-powered Flutter desktop app for real-time threat neutralization and a modern React landing page.",
      link: "",
      github: "https://github.com/JAYASURYA-KK/sentinel_ai",
      image: "/screenshots/sentinel_ai.png"
    },
    {
      title: "Decentralized Edge AI for Urban Mobility",
      tech: ["Browser-native Edge AI", "ONNX", "React"],
      desc: "DRACO 2.0 — Browser-native Edge AI for real-time urban traffic prediction. ML inference runs entirely in-browser via ONNX without a backend. Features a React dashboard with 13 modules, reporting, and offline support.",
      link: "https://decentralized-edge-ai-for-urban-mob.vercel.app",
      github: "https://github.com/JAYASURYA-KK/Decentralized_Edge_AI_for_Urban_Mobility1",
      image: "/screenshots/Decentralized_Edge_AI_for_Urban_Mobility.png"
    },
    {
      title: "Respiratory Sound Classification",
      tech: ["Machine Learning", "KNN", "SVM", "Python"],
      desc: "Machine Learning–based classification of respiratory sounds using the ICBHI 2017 dataset. Achieved 99% accuracy with KNN & SVM utilizing MFCC feature extraction, optimized for edge deployment.",
      link: "https://respiratory-sound-classification.vercel.app",
      github: "https://github.com/JAYASURYA-KK/Respiratory_sound_classification",
      image: "/screenshots/Respiratory_Sound_Classification.png"
    },
    {
      title: "Emotion Detection Extension",
      tech: ["HTML", "CSS", "JS", "TensorFlow.js"],
      desc: "Chrome extension using face-api.js and TensorFlow.js that detects and displays real-time facial emotions of Google Meet participants via client-side AI inference.",
      link: "",
      github: "https://github.com/JAYASURYA-KK/emotion-detect-extension",
      image: "/screenshots/Emotion_Detection_Extension.png"
    },
    {
      title: "SandGuard AI",
      tech: ["Python", "Machine Learning"],
      desc: "Developed an AI-based system that analyzes satellite imagery to identify unauthorized mining activities. Assists environmental agencies by detecting suspicious land-use changes.",
      link: "https://sandguard-ai-gkh6.vercel.app/",
      github: "https://github.com/JAYASURYA-KK/sandguard-ai",
      image: "/screenshots/SandGuard_AI.png"
    },
    {
      title: "Railway Reservation System",
      tech: ["HTML", "PHP", "MySQL"],
      desc: "Railway reservation management system featuring normalized database design, ER diagrams, and SQL-based booking operations to ensure efficient passenger management.",
      link: "https://railway-reservation-system-rho7.onrender.com/",
      github: "https://github.com/JAYASURYA-KK/Railway_Reservation_System",
      image: "/screenshots/Railway Reservation System.png"
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="glass-panel project-card">
            {project.image && (
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
            )}
            <h3 className="project-title">{project.title}</h3>
            <div className="project-tech">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-tag">{t}</span>
              ))}
            </div>
            <p className="project-desc">{project.desc}</p>
            <div className="project-links">
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                  Live Demo <span>↗</span>
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                  GitHub <span>↗</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
