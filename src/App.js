import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Product from "./pages/Product.js";
import Cart from "./pages/Cart.js";
import Checkout from "./pages/Checkout.js";
import CheckoutSuccess from "./pages/CheckoutSuccess.js";
import Contact from "./pages/Contact.js";
import Layout from "./components/Layout.js";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
