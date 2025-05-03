import React from 'react';
import './Contacts.css';

function Contacts() {
  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Contact </h1>
        <p>We'd love to hear from you! Feel free to reach out through the following contact details:</p>

        <div className="contact-item">
          <h2>Email</h2>
          <p>
            <a href="mailto:support@dfxstore.com">support@Gidi'zcollection.com</a>
          </p>
        </div>

        <div className="contact-item">
          <h2>Phone</h2>
          <p>
            <a href="tel:+1234567890">+234-901-561-8214</a>
          </p>
        </div>

        <footer>Or visit us at our store for personalized support!</footer>
      </div>
    </div>
  );
}

export default Contacts;
