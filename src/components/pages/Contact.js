import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Get in Touch</h1>
        <p className="intro">
          We're here to help with any inquiries, suggestions, or support you need. Reach out and we'll get back to you as soon as possible.
        </p>

        <div className="contact-details">
          <div className="contact-item">
            <h2>Email</h2>
            <p>
              <a href="mailto:support@dfxwinestore.com">support@dfxwinestore.com</a>
            </p>
          </div>

          <div className="contact-item">
            <h2>Phone</h2>
            <p>
              <a href="tel:+2348166488127">+234 816 648 8127</a>
            </p>
          </div>

          <div className="contact-item">
            <h2>Store Location</h2>
            <p>DFX Wine Store Headquarters, Lagos, Nigeria</p>
          </div>
        </div>

        <div className="additional-info">
          <p>
            You can also visit us in-store for personalized recommendations, exclusive offers, or just to share a glass with fellow wine lovers.
          </p>
        </div>

        <footer>
          <p>We look forward to connecting with you 🍷</p>
        </footer>
      </div>
    </div>
  );
}

export default Contact;
