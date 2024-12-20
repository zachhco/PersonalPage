import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const isFloatedZeus = location.pathname === '/floatedzeus';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <img 
          src={`${process.env.PUBLIC_URL}${isFloatedZeus ? '/floatedzeus-favicon.png' : '/zclogo.png'}`} 
          alt="Site Icon" 
          className="header-icon" 
        />
        <h1 className="header-title">
          <span className="header-name">{isFloatedZeus ? 'FloatedZeus' : 'Zach Cohen'}</span>
        </h1>
        <button className="menu-button" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/floatedzeus" onClick={() => setIsMenuOpen(false)}>FloatedZeus</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
