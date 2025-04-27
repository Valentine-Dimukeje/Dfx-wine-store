import React from 'react';
import './Carts.css';

function Carts({ cartItems, removeFromCart }) {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', '')) || 0;
      return total + price;
    }, 0).toFixed(2);
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={`${item.id}-${index}`}>
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h2>{item.name}</h2>
                <p>Price: {item.price}</p>
                {item.size && <p>Size: {item.size}</p>}
                {item.color && <p>Color: {item.color}</p>}
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h2>Total: ${calculateTotal()}</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carts;
