import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <h1>About DFX Wine Store</h1>
      <p className="intro">
        Welcome to <strong>DFX Wine Store</strong> — where tradition meets taste, and every bottle brings a story to life.
      </p>

      <section>
        <h2>Our Mission</h2>
        <p>
          At DFX, our mission is to bring you a curated selection of exceptional wines that embody quality, craftsmanship, and heritage. We strive to offer wine lovers an enriching experience — one that goes beyond the bottle.
        </p>
      </section>

      <section>
        <h2>Our Story</h2>
        <p>
          What began as a passion project has grown into a trusted destination for wine enthusiasts. Inspired by a love for flavor and discovery, we partner with acclaimed vineyards and boutique wineries to offer a diverse portfolio that suits every palate.
        </p>
      </section>

      <section>
        <h2>Why Choose DFX?</h2>
        <ul className="reasons">
          <li><strong>🍇 Premium Selection:</strong> Handpicked wines from top vineyards across the globe.</li>
          <li><strong>🍷 Expert Guidance:</strong> Whether novice or connoisseur, we offer tailored recommendations for your unique taste.</li>
          <li><strong>🚚 Seamless Experience:</strong> From browsing to doorstep delivery, enjoy a smooth and secure journey.</li>
        </ul>
      </section>

      <section>
        <h2>Raise a Glass With Us</h2>
        <p>
          Wine is more than a beverage — it’s a celebration of moments, connections, and culture. Whether you're toasting a milestone or simply unwinding, DFX is here to enhance the occasion.
        </p>
        <p>
          Discover, taste, and share in the joy of fine wine — one bottle at a time.
        </p>
      </section>

      <section>
        <h2>Let’s Stay in Touch</h2>
        <p>
          📞 <strong>Need Help?</strong> Reach out to our support team for recommendations or questions.
        </p>
        <p>
          📱 <strong>Follow Us:</strong> Connect with us on social media for wine tips, offers, and updates.
        </p>
      </section>

      <footer>
        <p>Cheers,</p>
        <p><strong>The DFX Wine Store Team 🍷</strong></p>
      </footer>
    </div>
  );
}

export default About;
