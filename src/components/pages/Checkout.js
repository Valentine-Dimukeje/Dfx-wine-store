import React from 'react';
import './Checkout.css';

function Checkout({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('✅ Thank you for your purchase! Your order has been placed.');
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <div className="checkout-container">
        {/* Left: Form */}
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Billing Information</h2>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Shipping Address</label>
            <input type="text" placeholder="Enter your address" required />
          </div>

          <div className="form-group">
            <label>Payment Method</label>
            <select required>
              <option value="">Select Payment Method</option>
              <option value="credit">Credit / Debit Card</option>
              <option value="paypal">PayPal</option>
              <option value="cod">Cash on Delivery</option>
            </select>
          </div>

          <button type="submit" className="place-order-btn">Place Order</button>
        </form>

        {/* Right: Order Summary */}
        <div className="order-summary">
          <h2>Your Order</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="summary-item">
                  <span>{item.name} × {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="summary-total">
            <h3>Total:</h3>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
