import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Background Video (mobile-friendly) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="background-video"
        poster="/fallback.jpg"
      >
        <source src="/mmaya.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay"></div>

      {/* Hero Section */}
      <div className="hero-content">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Discover the Art of Fine Wine
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Taste elegance, heritage, and craftsmanship — one sip at a time 🍷
        </motion.p>

        <motion.div
          className="cta-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <Link to="/products" className="btn-primary">
            Explore Wines
          </Link>
          <Link to="/about" className="btn-secondary">
            Our Story
          </Link>
        </motion.div>
      </div>

      {/* Feature Highlights */}
      <section className="features" id="features">
        {[
          {
            img: "/image/barrel.png",
            title: "Tradition & Craft",
            text: "Each bottle embodies generations of expertise and a passion for perfection.",
          },
          {
            img: "/image/glass.png",
            title: "Exceptional Taste",
            text: "Experience smooth textures, rich aromas, and sophisticated flavors.",
          },
          {
            img: "/image/wine-bottle.png",
            title: "Global Selection",
            text: "We curate wines from the world’s most prestigious vineyards and regions.",
          },
        ].map((f, i) => (
          <motion.div
            className="feature"
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <img src={f.img} alt={f.title} />
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </motion.div>
        ))}
      </section>

      {/* About Teaser */}
      <motion.section
        className="about-section"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2>Our Legacy in Every Pour</h2>
        <p>
          At <strong>DFX Wine Store</strong>, we don’t just sell wine — we celebrate moments.
          From rare vintages to beloved classics, our collection captures the heart of fine winemaking.
        </p>
        <Link to="/about" className="btn-primary">
          Discover More
        </Link>
      </motion.section>

    </div>
  );
}

export default Home;
