import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/shared/logo.svg';
import menu from '../assets/images/shared/icon-hamburger.svg';

function Header() {
  return (
    <header className="header py-4 py-md-0">
      <div className="align-items-center d-flex h-100 justify-content-between">
        <img src={logo} alt="Logo" className="logo"/>
        <div className="d-none d-xxl-block header-line"></div>
        <nav className="d-none d-md-block navbar header-nav p-0">
          <ul className="d-flex list-unstyled m-0 nav-container p-0">
            <li className="nav-item text-center">
              <NavLink to="/" className="header-link link mx-lg-4 nav-link p-0 text-uppercase text-white">
              <em className="d-none d-lg-inline-block fst-normal fw-bold">00</em>Home
              </NavLink>
            </li>
            <li className="nav-item text-center">
              <NavLink to="/destination" className="header-link link mx-lg-4 nav-link p-0 text-uppercase text-white">
              <em className="d-none d-lg-inline-block fst-normal fw-bold">01</em>Destination
              </NavLink>
            </li>
            <li className="nav-item text-center">
              <NavLink to="/crew" className="header-link link mx-lg-4 nav-link p-0 text-uppercase text-white">
              <em className="d-none d-lg-inline-block fst-normal fw-bold">02</em>Crew
              </NavLink>
            </li>
            <li className="nav-item text-center">
              <NavLink to="/technology" className="header-link link mx-lg-4 nav-link p-0 text-uppercase text-white">
              <em className="d-none d-lg-inline-block fst-normal fw-bold">03</em>Technology
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