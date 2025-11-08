import React, { useState } from 'react';
import './Products.css';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Red Wine', price: '50', image: '/image/Chando.jpg',  description: 'A smooth and sweet red wine with rich berry flavors.' },
  { id: 2, name: 'Floral Wine', price: '65', image: '/image/ddd.jpg' },
  { id: 3, name: 'Classic Red', price: '75', image: '/image/Bacardi.jpg' },
  { id: 4, name: 'Red Wine', price: '50', image: '/image/Declan sweet.jpg' },
  { id: 5, name: 'Floral Wine', price: '65', image: '/image/Martini sparkling rose.jpg' },
  { id: 6, name: 'Classic Red', price: '75', image: '/image/wolf blass merlot.jpg' },
  { id: 1, name: 'Red Wine', price: '50', image: '/image/Chando.jpg' },
  { id: 2, name: 'Floral Wine', price: '65', image: '/image/ddd.jpg' },
  { id: 3, name: 'Classic Red', price: '75', image: '/image/Bacardi.jpg' },
  { id: 4, name: 'Red Wine', price: '50', image: '/image/Declan sweet.jpg' },
  { id: 5, name: 'Floral Wine', price: '65', image: '/image/Martini sparkling rose.jpg' },
  { id: 6, name: 'Classic Red', price: '75', image: '/image/wolf blass merlot.jpg' },
  { id: 1, name: 'Red Wine', price: '50', image: '/image/Chando.jpg' },
  { id: 2, name: 'Floral Wine', price: '65', image: '/image/ddd.jpg' },
  { id: 3, name: 'Classic Red', price: '75', image: '/image/Bacardi.jpg' },
  { id: 4, name: 'Red Wine', price: '50', image: '/image/Declan sweet.jpg' },
  { id: 5, name: 'Floral Wine', price: '65', image: '/image/Martini sparkling rose.jpg' },
  { id: 6, name: 'Classic Red', price: '75', image: '/image/wolf blass merlot.jpg' },
];


function Products({ addToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="products-page">
      <div className="products">
        <h1>Our Products</h1>
        <div className="product-grid">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProduct(product)}
            >
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="product-modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedProduct(null)}>&times;</span>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
            <h3>${selectedProduct.price}</h3>
            <button onClick={() => {
              addToCart(selectedProduct);
              setSelectedProduct(null);
            }}>
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;