import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingBag, FaInfoCircle, FaEnvelope, FaShoppingCart, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import './Navbarz.css';

function Navbarz({ isLoggedIn, handleLogout, cartItemCount }) {
  return (
    <nav className="navbar">
      <h2><FaShoppingBag /> Gidi'z Collection</h2>
      <ul className="nav-links">
        <li><Link to="/"><FaHome /> Home</Link></li>
        <li><Link to="/product"><FaShoppingBag /> Products</Link></li>
        <li><Link to="/abouts"><FaInfoCircle /> About</Link></li>
        <li><Link to="/contacts"><FaEnvelope /> Contact</Link></li>
        

        <div className="cart-link"></div>
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
