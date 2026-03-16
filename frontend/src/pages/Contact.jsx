import React from 'react';
import QuoteForm from '../components/QuoteForm';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Request a Quote</h2>
        <p className="contact-subtitle">Send us your requirements and we'll get back to you within 24 hours</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h4><i className="fas fa-map-marker-alt"></i> Location</h4>
              <p>56/1/21, 1st C Main Rd, Kottigepalya, Bengaluru, Karnataka, India</p>
            </div>
            <div className="contact-item">
              <h4><i className="fas fa-phone"></i> Phone</h4>
              <p>+91 9740443999</p>
              <p>+91 8431584648</p>
            </div>
            <div className="contact-item">
              <h4><i className="fas fa-envelope"></i> Email</h4>
              <p>dkfabs@gmail.com</p>
            </div>
            <div className="contact-item">
              <h4><i className="fas fa-clock"></i> Working Hours</h4>
              <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
            </div>
          </div>
          
          <div className="contact-form-container">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
