import React, { useState } from 'react';
import './Signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('❌ Passwords do not match.');
      return;
    }

    if (password.length < 6) {
      setMessage('❌ Password must be at least 6 characters long.');
      return;
    }

    // Simulate signup success
    setMessage(`✅ Account created successfully! Welcome, ${email}`);
    console.log('New User:', { email, password });

    // Clear fields
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <h1>Create Your Account</h1>
        <p className="subtitle">Join the DFX Wine Club for exclusive offers and experiences 🍷</p>

        <form onSubmit={handleSignup} className="signup-form">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Create a strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {message && <div className="form-message">{message}</div>}

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <p className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
