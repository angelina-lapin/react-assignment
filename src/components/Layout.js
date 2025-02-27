import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <h1>Header</h1>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
