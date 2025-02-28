import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa"; 
import "./Header.css"; 

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            {/* Логотип */}
            <Link className="navbar-brand" to="/">
              eCom store
            </Link>
  
            {/* Бургер-кнопка */}
            <button className="navbar-toggler" type="button" onClick={toggleMenu}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
  
            {/* Основное меню */}
            <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={toggleMenu}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact" onClick={toggleMenu}>
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link cart-icon" to="/cart" onClick={toggleMenu}>
                    <FaShoppingCart /> Cart <span className="cart-count">0</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  };

export default Header;

