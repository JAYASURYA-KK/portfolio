import React from 'react';
import './Projects.css';

const Projects = ({ selectedSkill, onSelectSkill }) => {
  const projectList = [
    {
      title: "Smart Safety Monitor",
      tech: ["IoT", "ESP32", "Firebase", "React", "YOLOv10", "Python"],
      desc: "An AI and IoT-powered construction safety monitoring platform combining wearable smart helmet telemetry (ESP32, MPU6050 fall detection, MQ-7 gas sensor, DHT22) with Firebase Realtime Database and a React dashboard featuring YOLOv10 PPE compliance monitoring.",
      link: "https://youtu.be/RTOscc7tufk?si=jptCOicq7uuNGm7N",
      github: "https://github.com/JAYASURYA-KK/Smart-Safety-Monitor",
      image: "/screenshots/Smart_Construction_Safety.png"
    },
    {
      title: "EdgePredict AI",
      tech: ["React", "ONNX", "Blender", "3D Modeling"],
      desc: "An AI-powered web application utilizing ONNX for edge inference and React for the frontend interface. Features an integrated 3D model that was adapted and optimized using Blender to enhance data visualization.",
      link: "https://edge-predict-ai-flax.vercel.app/",
      github: "https://github.com/JAYASURYA-KK/EdgePredict-AI",
      image: "/screenshots/EdgePredict AI.png"
    },
    {
      title: "Sentinel AI",
      tech: ["Flutter", "React", "AI"],
      desc: "A privacy-first, offline Endpoint Detection & Response (EDR) system. Features a local AI-powered Flutter desktop app for real-time threat neutralization and a modern React landing page.",
      link: "https://sentinel-ai-lemon-five.vercel.app/",
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
      tech: ["HTML", "PHP", "MySQL", "Java"],
      desc: "Railway reservation management system featuring normalized database design, ER diagrams, and SQL-based booking operations to ensure efficient passenger management.",
      link: "https://railway-reservation-system-rho7.onrender.com/",
      github: "https://github.com/JAYASURYA-KK/Railway_Reservation_System",
      image: "/screenshots/Railway Reservation System.png"
    }
  ];

  const isProjectMatchingSkill = (project, skill) => {
    if (!skill) return false;
    const s = skill.trim().toLowerCase();

    // Specific matching logic
    if (s.includes('firebase')) {
      return project.tech.some(t => t.toLowerCase().includes('firebase')) || project.desc.toLowerCase().includes('firebase');
    }
    if (s === 'js' || s === 'javascript') {
      return project.tech.some(t => t.toLowerCase() === 'js' || t.toLowerCase() === 'javascript');
    }
    if (s === 'node.js' || s === 'node') {
      return project.tech.some(t => t.toLowerCase().includes('node')) || project.desc.toLowerCase().includes('node');
    }
    if (s === 'html') {
      return project.tech.some(t => t.toLowerCase() === 'html');
    }
    if (s === 'css') {
      return project.tech.some(t => t.toLowerCase() === 'css');
    }
    if (s === 'c++') {
      return project.tech.some(t => t.toLowerCase() === 'c++');
    }
    if (s === 'c') {
      return project.tech.some(t => t.toLowerCase() === 'c');
    }
    if (s === 'java') {
      return project.tech.some(t => t.toLowerCase() === 'java');
    }
    if (s === 'react') {
      return project.tech.some(t => t.toLowerCase().includes('react'));
    }
    if (s === 'python') {
      return project.tech.some(t => t.toLowerCase().includes('python'));
    }
    if (s === 'mysql') {
      return project.tech.some(t => t.toLowerCase().includes('mysql'));
    }
    if (s === 'mongodb') {
      return project.tech.some(t => t.toLowerCase().includes('mongodb'));
    }
    if (s === 'postgresql') {
      return project.tech.some(t => t.toLowerCase().includes('postgres'));
    }
    if (s === 'power bi') {
      return project.tech.some(t => t.toLowerCase().includes('power bi'));
    }
    if (s === 'numpy' || s === 'pandas' || s === 'matplotlib') {
      return project.tech.some(t => t.toLowerCase().includes(s)) || project.desc.toLowerCase().includes(s) || project.tech.some(t => t.toLowerCase().includes('machine learning') || t.toLowerCase().includes('python'));
    }

    return project.tech.some(t => t.toLowerCase().includes(s)) || project.desc.toLowerCase().includes(s);
  };

  const isTagMatchingSkill = (tag, skill) => {
    if (!skill) return false;
    const s = skill.trim().toLowerCase();
    const t = tag.trim().toLowerCase();
    if (s.includes('firebase') && t.includes('firebase')) return true;
    if ((s === 'javascript' || s === 'js') && (t === 'javascript' || t === 'js')) return true;
    if (s === t) return true;
    return t.includes(s) || s.includes(t);
  };

  const matchingCount = selectedSkill 
    ? projectList.filter(p => isProjectMatchingSkill(p, selectedSkill)).length 
    : 0;

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>

      {selectedSkill && (
        <div className="filter-status-banner glass-panel">
          <div className="filter-status-info">
            <span className="filter-sparkle">✨</span>
            <span>
              Highlighting projects using <strong>{selectedSkill}</strong> ({matchingCount} {matchingCount === 1 ? 'project' : 'projects'} found)
            </span>
          </div>
          <button 
            type="button" 
            className="clear-filter-btn" 
            onClick={() => onSelectSkill && onSelectSkill(null)}
          >
            ✕ Clear Highlight
          </button>
        </div>
      )}

      <div className="projects-grid">
        {projectList.map((project, index) => {
          const isHighlighted = selectedSkill && isProjectMatchingSkill(project, selectedSkill);
          const isDimmed = selectedSkill && !isHighlighted;

          return (
            <div 
              key={index} 
              className={`glass-panel project-card ${isHighlighted ? 'highlighted-project' : ''} ${isDimmed ? 'dimmed-project' : ''}`}
            >
              {isHighlighted && (
                <div className="match-badge">
                  <span>★</span> Uses {selectedSkill}
                </div>
              )}

              {project.image && (
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
              )}
              <h3 className="project-title">{project.title}</h3>
              <div className="project-tech">
                {project.tech.map((t, i) => {
                  const tagMatches = isTagMatchingSkill(t, selectedSkill);
                  return (
                    <span 
                      key={i} 
                      className={`tech-tag ${tagMatches ? 'active-tag' : ''}`}
                      onClick={() => onSelectSkill && onSelectSkill(selectedSkill === t ? null : t)}
                      title={`Filter by ${t}`}
                    >
                      {t}
                    </span>
                  );
                })}
              </div>
              <p className="project-desc">{project.desc}</p>
              <div className="project-links">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="project-link demo-link">
                    {project.link.includes('youtu') ? 'Live Demo (Video)' : 'Live Demo'} <span>↗</span>
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link github-link">
                    GitHub <span>↗</span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
