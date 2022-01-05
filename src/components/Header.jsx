import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/shared/logo.svg';
import menu from '../assets/images/shared/icon-hamburger.svg';

function Header() {
  return (
    <header className="header">
      <div className="align-items-center d-flex h-100 justify-content-between">
        <img src={logo} alt="Logo" />
        <img src={menu} alt="Menu" />
      </div>
    </header>
  )
}

export default Header;