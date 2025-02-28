import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [products, setProducts] = useState([]); 
    const [searchTerm, setSearchTerm] = useState(""); 
    const [filteredProducts, setFilteredProducts] = useState([]);
  
    useEffect(() => {
        fetch("https://v2.api.noroff.dev/online-shop")
          .then((response) => response.json())
          .then((data) => {
            setProducts(data.data);
            setFilteredProducts(data.data); 
          })
          .catch((error) => console.error("Error fetching products:", error));
      }, []);

      const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);
    
        if (value.trim() === "") {
          setFilteredProducts(products); 
        } else {
          const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(value)
          );
          setFilteredProducts(filtered);
        }
      };
  

      return (
        <div className="container mt-4">
          <h1 className="text-center mb-4">Products</h1>
    
          {/* Поле поиска */}
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Search for a product..."
            value={searchTerm}
            onChange={handleSearch}
          />
    
          {/* Сетка товаров */}
          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="col-md-4 mb-4">
                  <div className="card h-100 shadow">
                    <img
                      src={product.image.url}
                      className="card-img-top img-fluid"
                      alt={product.title}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text text-muted">${product.discountedPrice}</p>
                      <Link to={`/product/${product.id}`} className="btn btn-primary mt-auto">
                        View Product
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted">No products found.</p>
            )}
          </div>
        </div>
      );
    };

export default Home;
