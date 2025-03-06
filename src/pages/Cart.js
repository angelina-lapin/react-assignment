import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cart = ({ cart }) => {
  const navigate = useNavigate();

  const total = cart.reduce((sum, product) => sum + product.discountedPrice, 0);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((product, index) => (
              <li key={index} className="cart-item">
                <img
                  src={product.image.url}
                  alt={product.title}
                  className="cart-item-image"
                />
                <div className="cart-item-info">
                  <h3>{product.title}</h3>
                  <p>kr {product.discountedPrice}</p>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: kr {total.toFixed(2)}</h3>
          <div className="cart-buttons">
            <button
              className="btn-secondary"
              onClick={() => navigate('/checkout-success')}
            >
              Checkout
            </button>
            <Link to="/" className="btn btn-primary">
              Continue Shopping
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
