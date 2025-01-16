import React from 'react';
import '../styles/Navbar.css';
import Logo from '../assets/images/logo.png'
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo" />
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;