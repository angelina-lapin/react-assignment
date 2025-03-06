import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import CheckoutSuccess from './pages/CheckoutSuccess';
import Contact from './pages/Contact';
import Layout from './components/Layout';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <Layout cart={cart}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/product/:id"
            element={<Product addToCart={addToCart} />}
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route
            path="/checkout-success"
            element={<CheckoutSuccess clearCart={clearCart} />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
