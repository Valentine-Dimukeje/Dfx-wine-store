import React from 'react';
import { motion } from 'framer-motion';
import './Homes.css';

function Homes() {
  return (
    <div className="home">

      {/* Animated Heading - Scale & Rotate */}
      <motion.h1
        initial={{ scale: 0.5, rotate: -15, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Step Up Your Style with Gidi'z Collection.
      </motion.h1>

      {/* Animated Paragraph - Slide from Right */}
      <motion.p
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1, type: "tween" }}
      >
        From the boardroom to the boulevard — we’ve got your soles covered.<br />
        Explore our premium range of corporate shoes, casual Shoes, slides, sneakers, and Crocs!<br />
        <em>Because every great journey begins with the right pair.</em>
      </motion.p>

    </div>
  );
}

export default Homes;
