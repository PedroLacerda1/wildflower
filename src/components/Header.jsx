import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartCount, onCartClick }) => {
  return (
    <header className="header">
      <Link to="/" className="logo">WILDFLOWER</Link>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Início</Link></li>
          <li><Link to="/products">Flores</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/contact">Contato</Link></li>
        </ul>
      </nav>
      <button className="cart-button" onClick={onCartClick}>
        <span>🛒</span> ({cartCount})
      </button>
    </header>
  );
};

export default Header;