import React from 'react';
import './ResumeModal.css';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Resume</h2>
          <div className="modal-actions">
            <a href="/resume.pdf" download="Jayasurya_Resume.pdf" className="btn btn-primary download-btn">
              Download PDF
            </a>
            <button className="close-btn" onClick={onClose}>×</button>
          </div>
        </div>
        <div className="modal-body">
          <object 
            data="/resume.pdf#view=FitH" 
            type="application/pdf" 
            className="resume-iframe"
          >
            <div className="pdf-fallback">
              <p>Your browser doesn't support embedded PDFs.</p>
              <a href="/resume.pdf" download="Jayasurya_Resume.pdf" className="btn btn-primary">
                Download Resume
              </a>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
