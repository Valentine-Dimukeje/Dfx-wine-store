import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      {/* Background Video */}
      <video autoPlay muted loop className="background-video">
        <source src="/mmaya.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for contrast */}
      <div className="overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <motion.h1
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: 'spring' }}
        >
          Welcome to DFX Wine Store
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
        >
          Fine wines for the moments that matter most 🍷
        </motion.p>

        <motion.div
          className="cta-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link to="/products" className="btn-primary">Shop Now</Link>
          <Link to="/about" className="btn-secondary">Learn More</Link>
        </motion.div>
      </div>

      {/* About / Highlight Section */}
      <motion.section
        className="about-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Crafted with Passion</h2>
        <p>
          At <strong>DFX Wine Store</strong>, we believe every bottle tells a story.
          From the finest vineyards to your glass, experience wine as an art — curated with
          care, aged to perfection, and shared with love.
        </p>
      </motion.section>
    </div>
  );
}

export default Home;
