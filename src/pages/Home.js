import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api/product.js';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Products</h1>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search for a product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={product.image.url}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                </div>

                {/* Блок с ценой и кнопкой */}
                <div className="card-footer">
                  {product.price !== product.discountedPrice ? (
                    <p className="card-price">
                      <span className="old-price">kr {product.price}</span>

                      <br />
                      <span className="discounted-price">
                        kr {product.discountedPrice}
                      </span>
                    </p>
                  ) : (
                    <p className="card-price">kr {product.price}</p>
                  )}

                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-primary"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
