import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Feel free to reach out through the following contact details:</p>

        <div className="contact-item">
          <h2>Email</h2>
          <p>
            <a href="mailto:support@dfxstore.com">support@dfxwinestore.com</a>
          </p>
        </div>

        <div className="contact-item">
          <h2>Phone</h2>
          <p>
            <a href="tel:+1234567890">+234-816-648-8127</a>
          </p>
        </div>

        <footer>Or visit us at our store for personalized support!</footer>
      </div>
    </div>
  );
}

export default Contact;
