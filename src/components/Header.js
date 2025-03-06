import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Header = ({ cart }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            eCom store
          </Link>

          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>

            {/* Иконка корзины с бейджем */}
            <Link className="nav-link cart-icon" to="/cart">
              <FaShoppingCart />
              <span className="cart-count">{cart.length}</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
