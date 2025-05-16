import React from 'react';
import { motion } from 'framer-motion';
import './Homes.css';

function Homes() {
  return (
    <div className="home">
      <div className="overlay" />

      <motion.div
        className="content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Step Up Your Style with <span className="highlight">Gidi'z Collection</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          From the boardroom to the boulevard — we’ve got your soles covered.<br />
          Explore our premium range of corporate shoes, casual shoes, slides, sneakers, and Crocs.<br />
          <em>Because every great journey begins with the right pair.</em>
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Homes;
