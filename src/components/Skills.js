import React from 'react';
import './Skills.css';

const Skills = () => {
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
      skills: ["MongoDB", "MySQL", "PostgreSQL"]
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
      "PostgreSQL": "postgresql-logo.svg"
    };
    return icons[skillName] ? `/icons/${icons[skillName]}` : null;
  };

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="glass-panel skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skill-chips">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-chip">
                  {getIcon(skill) && <img src={getIcon(skill)} alt={skill} className="skill-icon" />}
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
