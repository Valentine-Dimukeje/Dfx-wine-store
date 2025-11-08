import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaShoppingBag, 
  FaInfoCircle, 
  FaEnvelope, 
  FaShoppingCart, 
  FaSignInAlt, 
  FaSignOutAlt, 
  FaBars, 
  FaTimes 
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbars.css';

function Navbarz({ isLoggedIn, handleLogout, cartItemCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo as home link */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <FaShoppingBag /> DFX Wine Store
        </Link>

        {/* Menu Button (Hamburger) */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Links */}
        <ul className="nav-links desktop-only">
          <li><Link to="/products"><FaShoppingBag /> Products</Link></li>
          <li><Link to="/about"><FaInfoCircle /> About</Link></li>
          <li><Link to="/contact"><FaEnvelope /> Contact</Link></li>
          <li className="cart-link">
            <Link to="/cart">
              <FaShoppingCart />
              {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
            </Link>
          </li>
          {isLoggedIn ? (
            <li onClick={handleLogout}><FaSignOutAlt /> Sign Out</li>
          ) : (
            <li><Link to="/signup"><FaSignInAlt /> Sign Up</Link></li>
          )}
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="nav-links mobile-dropdown"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <li><Link to="/products" onClick={closeMenu}><FaShoppingBag /> Products</Link></li>
            <li><Link to="/about" onClick={closeMenu}><FaInfoCircle /> About</Link></li>
            <li><Link to="/contact" onClick={closeMenu}><FaEnvelope /> Contact</Link></li>

            <li className="cart-link">
              <Link to="/cart" onClick={closeMenu}>
                <FaShoppingCart /> 
                {cartItemCount > 0 && (
                  <span className="cart-count">{cartItemCount}</span>
                )}
              </Link>
            </li>

            {isLoggedIn ? (
              <li onClick={() => { handleLogout(); closeMenu(); }}>
                <FaSignOutAlt /> Sign Out
              </li>
            ) : (
              <li onClick={closeMenu}>
                <Link to="/signup"><FaSignInAlt /> Sign Up</Link>
              </li>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbarz;
