import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // '' | 'submitting' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' }); // clear the form
      setTimeout(() => setStatus(''), 5000); // hide success message after 5 seconds
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
              placeholder="Your Name" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
              placeholder="Your Email" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              required 
              placeholder="Your Message"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
          
          {status === 'success' && (
            <div className="success-message">
              Message sent successfully!
            </div>
          )}
          {status === 'error' && (
            <div className="error-message">
              Oops! There was a problem submitting your form.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
