// src/components/Footer.jsx
import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} <strong>Ticket Prime</strong>. All rights reserved.
    </footer>
  );
};

export default Footer;
