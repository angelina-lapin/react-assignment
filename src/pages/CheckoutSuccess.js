import React, { useEffect, useCallback } from 'react';

const CheckoutSuccess = ({ clearCart }) => {
  const memoizedClearCart = useCallback(() => {
    clearCart();
  }, [clearCart]);

  useEffect(() => {
    memoizedClearCart();
  }, [memoizedClearCart]);

  return (
    <div className="checkout-success">
      <h1>
        Thank you for your purchase!{' '}
        <span role="img" aria-label="party popper">
          🎉
        </span>
      </h1>{' '}
      <p>Your order has been successfully processed.</p>
      <button
        className="btn btn-primary"
        onClick={() => (window.location.href = '/')}
      >
        Return to Shop
      </button>
    </div>
  );
};

export default CheckoutSuccess;
