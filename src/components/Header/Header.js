import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const isFloatedZeus = location.pathname === '/floatedzeus';

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
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/floatedzeus">FloatedZeus</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
