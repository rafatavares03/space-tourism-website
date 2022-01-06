import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/shared/logo.svg';
import menu from '../assets/images/shared/icon-hamburger.svg';

function Header() {
  return (
    <header className="header py-4 py-md-0">
      <div className="align-items-center d-flex h-100 justify-content-between">
        <img src={logo} alt="Logo" className="logo ms-4"/>
        <nav className="d-none d-md-block navbar">
          <ul className="d-flex list-unstyled">
            <li className="nav-item text-center">
              <NavLink to="/" className="nav-link">
              <em className="d-none d-lg-inline-block">00</em> HOME
              </NavLink>
            </li>
            <li className="nav-item text-center">
              <NavLink to="/destination" className="nav-link">
              <em className="d-none d-lg-inline-block">01</em> DESTINATION
              </NavLink>
            </li>
            <li className="nav-item text-center">
              <NavLink to="/crew" className="nav-link">
              <em className="d-none d-lg-inline-block">02</em> CREW
              </NavLink>
            </li>
            <li className="nav-item text-center">
              <NavLink to="/technology" className="nav-link">
              <em className="d-none d-lg-inline-block">03</em> TECHNOLOGY
              </NavLink>
            </li>
          </ul>
        </nav>
        <img src={menu} alt="Menu" className="d-md-none me-4"/>
      </div>
    </header>
  )
}

export default Header;