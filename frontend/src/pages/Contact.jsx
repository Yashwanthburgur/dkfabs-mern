import React from "react";
import QuoteForm from "../components/QuoteForm";

const address =
  "56/1/21, 1st C Main Rd, Kottigepalya, Bengaluru, Karnataka, India";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Request a Quote</h2>
        <p className="contact-subtitle">
          Send us your requirements and we'll get back to you within 24 hours
        </p>

        <div className="contact-content">
          <div className="contact-side">
            <div className="contact-info">
              <div className="contact-item">
                <h4>
                  <i className="fas fa-map-marker-alt"></i> Location
                </h4>
                <a
                  className="contact-action"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {address}
                </a>
              </div>
              <div className="contact-item">
                <h4>
                  <i className="fas fa-phone"></i> Phone
                </h4>
                <a className="contact-action" href="tel:+919740443999">
                  +91 9740443999
                </a>
                <a className="contact-action" href="tel:+918431584648">
                  +91 8431584648
                </a>
              </div>
              <div className="contact-item">
                <h4>
                  <i className="fas fa-envelope"></i> Email
                </h4>
                <a className="contact-action" href="mailto:dkfabs@gmail.com">
                  dkfabs@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <h4>
                  <i className="fas fa-clock"></i> Working Hours
                </h4>
                <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
              </div>
            </div>

            <div className="contact-map" aria-label="D.K. Fabs location map">
              <iframe
                title="D.K. Fabs location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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
