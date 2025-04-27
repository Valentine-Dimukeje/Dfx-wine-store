import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingBag, FaInfoCircle, FaEnvelope, FaShoppingCart, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import './Navbars.css';

function Navbarz({ isLoggedIn, handleLogout, cartItemCount }) {
  return (
    <nav className="navbar">
      <h2><FaShoppingBag /> DFX Store</h2>
      <ul className="nav-links">
        <li><Link to="/"><FaHome /> Home</Link></li>
        <li><Link to="/products"><FaShoppingBag /> Products</Link></li>
        <li><Link to="/about"><FaInfoCircle /> About</Link></li>
        <li><Link to="/contact"><FaEnvelope /> Contact</Link></li>
        
        <li className="cart-link">
          <Link to="/cart">
            <FaShoppingCart /> 
            {cartItemCount > 0 && (
              <span className="cart-count">{cartItemCount}</span>
            )}
          </Link>
        </li>
        

        {isLoggedIn ? (
          <li onClick={handleLogout}>
            <FaSignOutAlt /> Sign Out
          </li>
        ) : (
          <li onClick={() => console.log("Signup link clicked")}>
          <Link to="/signup"><FaSignInAlt /> Sign Up</Link>
        </li>
        
        )}
      </ul>
    </nav>
  );
}

export default Navbarz;
