import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CheckoutSuccess = ({ clearCart }) => {
  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="checkout-success">
      <h1>
        <span role="img" aria-label="celebration">
          🎉
        </span>{' '}
        Thank you for your purchase!
      </h1>
      <p>Your order has been successfully placed.</p>
      <Link to="/" className="btn-secondary">
        Return to Store
      </Link>
    </div>
  );
};

export default CheckoutSuccess;
