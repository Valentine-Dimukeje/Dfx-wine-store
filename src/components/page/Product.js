import React, { useState } from 'react';
import './Product.css';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Designers', price: '$50', image: '/image/cop.jpeg' },
  { id: 2, name: 'Designers', price: '$65', image: '/image/cop 2.jpeg' },
  { id: 3, name: 'Designers', price: '$75', image: '/image/cop3.jpeg' },
  { id: 4, name: 'Designers', price: '$50', image: '/image/cop4.jpeg' },
  { id: 5, name: 'Designers', price: '$65', image: '/image/cop5.jpeg' },
  { id: 6, name: 'Designers', price: '$75', image: '/image/cop6.jpeg' },
  { id: 7, name: 'Designers', price: '$50', image: '/image/cop7.jpeg' },
  { id: 8, name: 'Designers', price: '$65', image: '/image/cop8.jpeg' },
  { id: 9, name: 'Designers', price: '$75', image: '/image/cop9.jpeg' },
  { id: 10, name: 'Designers', price: '$50', image: '/image/cop10.jpeg' },
  { id: 11, name: 'Sneaker ', price: '$65', image: '/image/sneakers-.png' },
  { id: 12, name: 'Sneaker ', price: '$75', image: '/image/sneaker1.png' },
  { id: 13, name: 'Sneaker ', price: '$50', image: '/image/sneakers2.png' },
  { id: 14, name: 'Vector Shoe', price: '$65', image: '/image/vector shoe.png' },
  { id: 15, name: 'Sneakers', price: '$75', image: '/image/Green Sneakers.jpg' },
  { id: 16, name: 'Fashion Solid', price: '$50', image: '/image/can.jpeg' },
  { id: 17, name: 'Canvas', price: '$65', image: '/image/can1.jpeg' },
  { id: 18, name: 'Canvas', price: '$75', image: '/image/can2.jpeg' },
  { id: 19, name: 'Canvas', price: '$75', image: '/image/can3.jpeg' },
  { id: 20, name: 'Elevator casual', price: '$75', image: '/image/can4.jpeg' },
  { id: 21, name: 'Canvas', price: '$75', image: '/image/can5.jpeg'}, 
  { id: 22, name: 'Canvas', price: '$80', image: '/image/can6.jpeg'}, 
  { id: 23, name: 'Canvas', price: '$85', image: '/image/can7.jpeg'}, 
  { id: 24, name: 'Canvas', price: '$80', image: '/image/can8.jpeg'}, 
  { id: 25, name: 'Canvas', price: '$70', image: '/image/can9.jpeg'}, 
  { id: 26, name: 'Slide', price: '$20', image: '/image/slide.jpeg'},
  { id: 27, name: 'Slide', price: '$18', image: '/image/slide2.jpeg'},
  { id: 28, name: 'Slide', price: '$15', image: '/image/slide3.jpeg'},
  { id: 29, name: 'Slide', price: '$12', image: '/image/slide4.jpeg'},
  { id: 30, name: 'Slide', price: '$10', image: '/image/slide5.jpeg'},
  { id: 31, name: 'Crocs', price: '$15', image: '/image/crocs.jpeg'},
  { id: 32, name: 'Crocs', price: '$11', image: '/image/crocs2.jpeg'},
  { id: 33, name: 'Crocs', price: '$8', image: '/image/crocs3.jpeg'},
  { id: 34, name: 'Crocs', price: '$13', image: '/image/crocs4.jpeg'},
  { id: 35, name: 'Crocs', price: '$10', image: '/image/crocs5.jpeg'},
];

function Product({ addToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [addedMessage, setAddedMessage] = useState('');

  return (
    <div className="products-page">
      <div className="products">
        <h1>Our Products</h1>
        {addedMessage && <p className="added-message">{addedMessage}</p>}

        <div className="product-grid">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setSelectedProduct(product);
                setSelectedSize('');
                setSelectedColor('');
              }}
            >
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="product-modal">
          <div className="modal-content">
            <span
              className="close"
              onClick={() => {
                setSelectedProduct(null);
                setSelectedSize('');
                setSelectedColor('');
              }}
            >
              &times;
            </span>

            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <h2>{selectedProduct.name}</h2>
            <h3>{selectedProduct.price}</h3>

            {/* Size Selection */}
            <label>Size:</label>
            <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
              <option value="">Select size</option>
              <option value="42-43">42-43</option>
              <option value="45">45</option>
            </select>

            {/* Color Selection */}
            <label>Color:</label>
            <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
              <option value="">Select color</option>
              <option value="Black">Black</option>
              <option value="Brown">Brown</option>
            </select>

            <button
              disabled={!selectedSize || !selectedColor}
              onClick={() => {
                addToCart({
                  ...selectedProduct,
                  size: selectedSize,
                  color: selectedColor,
                });

                setAddedMessage(`${selectedProduct.name} added to cart!`);
                setTimeout(() => setAddedMessage(''), 2000);

                setSelectedProduct(null);
                setSelectedSize('');
                setSelectedColor('');
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
