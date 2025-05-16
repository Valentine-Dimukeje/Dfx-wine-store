import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Contacts.css';

function Contacts() {
  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Contact</h1>
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
            <a href="tel:+2349015618214">+234-901-561-8214</a>
          </p>
        </div>

        <div className="social-links">
  <h2>Follow Us</h2>
  <div className="icons">
    <a href="https://www.facebook.com/" className="facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
    <a href="https://twitter.com/" className="twitter" target="_blank" rel="noopener noreferrer">< FaTwitter /></a>
    <a href="https://www.instagram.com/" className="instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    <a href="https://www.youtube.com/" className="youtube" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
  </div>
</div>


        <footer>Or visit us at our store for personalized support!</footer>
      </div>
    </div>
  );
}

export default Contacts;
