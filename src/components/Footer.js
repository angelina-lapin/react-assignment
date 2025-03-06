import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p>
          &copy; {new Date().getFullYear()} eCom Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
