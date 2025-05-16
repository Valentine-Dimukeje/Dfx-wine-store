import React, { useState } from 'react';
import './Signups.css';
import { motion } from 'framer-motion';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';

function Signups() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      console.log('User Signed Up:', { email, password });
      alert(`Account created successfully! Welcome, ${email}`);
    }
  };

  return (
    <motion.div 
      className="signup-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Sign Up</h1>

     
      <form onSubmit={handleSignup}>
        <label>Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />

        <label>Password</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />

        <label>Confirm Password</label>
        <input 
          type="password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          required 
        />

        <button type="submit">Sign Up</button>
      </form>

      <div className="social-signup">
        <button className="google-btn"><FaGoogle className="google-icon" />Sign up with Google</button>
        <button className="facebook-btn"><FaFacebookF /> Sign up with Facebook</button>
      </div>

      <div className="divider"><span>or</span></div>

      <p>Already have an account? <a href="/login">Login here</a></p>
    </motion.div>
  );
}

export default Signups;
