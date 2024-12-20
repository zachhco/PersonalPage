import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={`${process.env.PUBLIC_URL}/zclogo.png`} alt="Site Icon" className="header-icon" />
        <h1 className="header-title">
          <span className="header-name">Zach Cohen</span>
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
