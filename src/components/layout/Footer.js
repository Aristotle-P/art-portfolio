import React from 'react';
import '../../styles/layout/Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <a href="https://twitter.com" className="social-links">
        <span className="fab fa-twitter" />
      </a>
      <a href="https://tumblr.com" className="social-links">
        <span className="fab fa-tumblr" />
      </a>
      <a href="https://instagram.com" className="social-links">
        <span className="fab fa-instagram" />
      </a>
    </div>
  );
};

export default Footer;
