import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education & Achievements</h2>
      
      <div className="edu-achieve-container">
        <div className="edu-column">
          <h3 className="column-title">Education</h3>
          <div className="timeline">
            <div className="timeline-item glass-panel">
              <div className="timeline-dot"></div>
              <h4>B.E. Computer Science and Engineering</h4>
              <h5>Kongu Engineering College, Perundurai</h5>
              <p className="timeline-date">2024 - 2028 | CGPA: 8.78 / 10</p>
            </div>
            
            <div className="timeline-item glass-panel">
              <div className="timeline-dot"></div>
              <h4>Higher Secondary Certificate (HSC)</h4>
              <h5>Kongu Vellalar Matric Higher Secondary School</h5>
              <p className="timeline-date">2023 - 2024 | Score: 91%</p>
            </div>

            <div className="timeline-item glass-panel">
              <div className="timeline-dot"></div>
              <h4>Secondary School Leaving Certificate (SSLC)</h4>
              <h5>Govt High School Kamaraj Nagar, Chennimalai</h5>
              <p className="timeline-date">2021 - 2022 | Score: 91.6%</p>
            </div>
          </div>
        </div>

        <div className="edu-column">
          <h3 className="column-title">Achievements</h3>
          <div className="timeline">
            <div className="timeline-item glass-panel achievement-item">
              <div className="achievement-icon">🏆</div>
              <h4>2nd Prize in Ideathon</h4>
              <p>Secured 2nd prize for <strong>Sentinel AI</strong>, an innovative cybersecurity-related project.</p>
            </div>
            
            <div className="timeline-item glass-panel achievement-item">
              <div className="achievement-icon">🏆</div>
              <h4>2nd Prize in Hackathon</h4>
              <p>Tamil Club Hackathon conducted by Kongu Engineering College.</p>
            </div>
            
            <div className="timeline-item glass-panel achievement-item">
              <div className="achievement-icon">⭐</div>
              <h4>Merit Scholarship Award</h4>
              <p>Awarded by Kongu Vellalar Institute of Technology Trust for excellent academic performance during the 2024-25 academic year.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
