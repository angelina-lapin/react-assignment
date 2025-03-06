import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, cart }) => {
  return (
    <>
      <Header cart={cart} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
