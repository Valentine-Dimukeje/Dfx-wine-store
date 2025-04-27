import React from 'react';
import './About.css'; // Optional CSS file to style the page

function About() {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>DFX Wine Store</strong>, where every bottle tells a story,  
        and every sip creates a moment worth savoring.
      </p>

      <section>
        <h2>Our Mission</h2>
        <p>
          Our mission is to curate a collection of exquisite wines that reflect quality,  
          craftsmanship, and tradition. We aim to provide wine lovers with an unforgettable  
          journey through flavor, aroma, and history with each bottle we offer.
        </p>
      </section>

      <section>
        <h2>Our Story</h2>
        <p>
          Founded out of a deep appreciation for fine wines, our journey began with a desire  
          to make exceptional wines accessible to everyone. Over the years, we’ve carefully  
          selected wines from renowned vineyards, as well as hidden gems, to bring you a diverse  
          and exciting collection.
        </p>
      </section>

      <section>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>🍇 <strong>Quality Selection</strong>: Our wines are hand-picked from top vineyards, ensuring every bottle meets the highest standards.</li>
          <li>🍷 <strong>Expert Recommendations</strong>: Whether you're a wine connoisseur or just starting your wine journey, we’re here to guide you with personalized suggestions.</li>
          <li>🍾 <strong>Exceptional Service</strong>: We pride ourselves on creating a seamless and enjoyable shopping experience, from browsing to delivery.</li>
        </ul>
      </section>

      <section>
        <h2>Let’s Raise a Glass!</h2>
        <p>
          We believe wine is more than a drink – it’s a connection, a celebration, and a way  
          to savor life’s beautiful moments.
        </p>
        <p>
          Join us as we explore the world of fine wines together. Whether you’re toasting  
          a special occasion, gifting a loved one, or simply unwinding after a long day,  
          <strong>DFX Wine Store</strong> is here to make every glass a little more special.
        </p>
      </section>

      <section>
        <h2>Stay Connected</h2>
        <p>
          📞 <strong>Contact Us</strong>: Have questions or need recommendations? Reach out to us anytime – we’re here to help.
        </p>
        <p>
          📱 <strong>Follow Us</strong>: Stay updated with the latest wine collections, exclusive offers, and wine tips by following us on social media.
        </p>
      </section>

      <footer>
        <p>Cheers,</p>
        <p>The <strong>DFX WINE STORE</strong> Team 🍷</p>
      </footer>
    </div>
  );
}

export default About;
