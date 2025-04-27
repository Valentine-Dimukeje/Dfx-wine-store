import React from 'react';
import { motion } from 'framer-motion';  // Importing motion for animation
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Background Video */}
      <video autoPlay muted loop className="background-video">
        <source src="/mmaya.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Animated Heading */}
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
      >
        Welcome to DFX Wine Store
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        Wine makes every meal an occasion, every table more elegant, every day more civilized!
      </motion.p>
    </div>
  );
}

export default Home;
