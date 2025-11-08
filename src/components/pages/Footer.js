import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="footer-container">
        {/* Brand Section */}
        <motion.div
          className="footer-column"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="footer-logo">DFX Wine Store</h3>
          <p className="footer-description">
            Experience the finest wines curated with heritage, passion, and sophistication.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="footer-column"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/products">Shop Wines</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
          </ul>
        </motion.div>

        {/* Social & Contact */}
        <motion.div
          className="footer-column"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/ValentineDimukeje"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/Dimukeje"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/VDimukeje"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </div>

          <p className="footer-contact">
            📍 Lagos, Nigeria <br />
            📞 +234 8166 488 127 <br />
            ✉️ support@dfxwinestore.com
          </p>
        </motion.div>
      </div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <p>© {new Date().getFullYear()} DFX Wine Store. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
