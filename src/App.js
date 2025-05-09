import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbarz from './components/Navbarz';
import Homes from './components/page/Homes';
import Product from './components/page/Product';
import Abouts from './components/page/Abouts';
import Contacts from './components/page/Contacts';
import Carts from './components/page/Carts';
import Signups from './components/page/Signups';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <HashRouter>
    <Navbarz cartItemCount={cartItems.length} />
    <Routes>
      <Route path="/" element={<Homes />} />
      <Route path="/abouts" element={<Abouts />} />
      <Route path="/product" element={<Product addToCart={addToCart} />} />
      <Route path="/cart" element={<Carts cartItems={cartItems} removeFromCart={removeFromCart} />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/signup" element={<Signups />} />
    </Routes>
  </HashRouter>
  
  );
}

export default App;
