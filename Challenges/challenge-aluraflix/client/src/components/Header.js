import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/LogoMain.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo"><img src={logo} alt="Logo" /></div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/new-video">Add Video</Link>
      </nav>
    </header>
  );
};

export default Header;
