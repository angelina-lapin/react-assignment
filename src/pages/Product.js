import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api/product.js';

const Product = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const discount = product.price - product.discountedPrice;
  const discountPercentage = ((discount / product.price) * 100).toFixed(0);

  return (
    <div className="product-container">
      <div className="product-card">
        <img
          src={product.image.url}
          className="product-image"
          alt={product.title}
        />
        <div className="product-info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>

          {/* Цена и скидка */}
          <div className="price-section">
            {discount > 0 ? (
              <>
                <div className="old-price-container">
                  <p className="old-price">kr {product.price}</p>
                  <p className="discount-badge">-{discountPercentage}%</p>
                </div>
                <p className="discounted-price">kr {product.discountedPrice}</p>
              </>
            ) : (
              <p className="price">kr {product.discountedPrice}</p>
            )}
          </div>

          {/* Кнопка "Add to Cart" справа */}
          <div className="add-to-cart-container">
            <button
              className="btn btn-primary"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>

          {/* Отзывы внизу */}
          <div className="reviews">
            <h3>Reviews:</h3>
            {product.reviews && product.reviews.length > 0 ? (
              product.reviews.map((review, index) => (
                <div key={index} className="review">
                  <p>
                    <strong>Rating:</strong> {review.rating}/5
                  </p>
                  <p>{review.description}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
