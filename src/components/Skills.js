import React from 'react';
import './Skills.css';

const Skills = ({ selectedSkill, onSelectSkill }) => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C", "C++"]
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
    },
    {
      title: "Frameworks & Tools",
      skills: ["React", "Power BI", "NumPy", "Pandas", "Matplotlib"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase Realtime DB"]
    }
  ];

  const getIcon = (skillName) => {
    const icons = {
      "Java": "java.svg",
      "Python": "python.svg",
      "C": "c.svg",
      "C++": "c++.svg",
      "HTML": "html.svg",
      "CSS": "css.svg",
      "JavaScript": "js.svg",
      "React": "react.svg",
      "Node.js": "node_js.svg",
      "Power BI": "power-bi-icon.svg",
      "NumPy": "numpy.svg",
      "Pandas": "pandas.svg",
      "Matplotlib": "matplotlib.svg",
      "MongoDB": "mongodb.svg",
      "MySQL": "mysql-logo.svg",
      "PostgreSQL": "postgresql-logo.svg",
      "Firebase Realtime DB": "firebase.svg",
      "Firebase": "firebase.svg"
    };
    return icons[skillName] ? `/icons/${icons[skillName]}` : null;
  };

  const handleSkillClick = (skill) => {
    if (onSelectSkill) {
      const nextSkill = selectedSkill === skill ? null : skill;
      onSelectSkill(nextSkill);
      if (nextSkill) {
        // Smoothly scroll to projects section to show matching highlighted projects
        setTimeout(() => {
          const projectsSection = document.getElementById('projects');
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  };

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Technical Skills</h2>
      <p className="skills-hint">
        <span>💡</span> Click any skill to highlight projects using that technology
      </p>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="glass-panel skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skill-chips">
              {category.skills.map((skill, i) => {
                const isActive = selectedSkill === skill;
                return (
                  <button
                    key={i}
                    type="button"
                    className={`skill-chip ${isActive ? 'active' : ''}`}
                    onClick={() => handleSkillClick(skill)}
                    title={isActive ? `Clear ${skill} highlight` : `Click to highlight projects using ${skill}`}
                  >
                    {getIcon(skill) && (
                      <img src={getIcon(skill)} alt={skill} className="skill-icon" />
                    )}
                    <span>{skill}</span>
                    {isActive && <span className="active-dot">●</span>}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
