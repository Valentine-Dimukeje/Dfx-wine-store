import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Navbarz from './components/Navbarz';
import Home from './components/page/Home';
import About from './components/page/About';
import Products from './components/page/Product';
import Contact from './components/page/Contact';
import Cart from './components/page/Cart';
import Signup from './components/page/Signup';


function App(){
// function App() {
// // //    // ✅ Cart state
// const [cart, setCart] = useState([]);

// // //    // ✅ Add to cart (with duplicate check)
// const addToCart = (product) => {
//       if (!cart.some(item => item.id === product.id)) {
//         setCart(prev => [...prev, product]);
//       }
//     };
 
// // //    // ✅ Remove item from cart
//     const removeFromCart = (index) => {
//       const updatedCart = [...cart];
//       updatedCart.splice(index, 1);
//       setCart(updatedCart);
//     };
 
// // //    // ✅ Dummy logout
//     const handleLogout = () => {
//       console.log("Logging out...");
//     };
//    return (
//     <BrowserRouter>
//     <Navbars
//      isLoggedIn={true} 
//      handleLogout={handleLogout} 
//      cartItemCount={cart.length} 
//      />
//     <Routes>
     
//       <Route path='/' element={<Home/>}/> 
//       <Route path="/about" element={<About />} />
//       <Route path="/products" element={<Products addToCart={addToCart} />} />
//       <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/SignUp" element={<Signup/>} />
     
//     </Routes>
//     </BrowserRouter>
   

   
//    );
//  }
<BrowserRouter>
<Navbarz/>
<Routes>
    
   <Route path='/' element={<Home/>}/> 
   <Route path="/about" element={<About />} />
   <Route path="/products" element={<Products />} />
   <Route path="/cart" element={<Cart  />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/SignUp" element={<Signup/>} />
     
     </Routes>
</BrowserRouter>

}

export default App;

