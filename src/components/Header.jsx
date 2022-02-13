import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Modal,
  ModalHeader,
  ModalBody,
  NavItem
} from 'reactstrap';
import logo from '../assets/images/shared/logo.svg';
import toggle from '../assets/images/shared/icon-hamburger.svg';
import close from '../assets/images/shared/icon-close.svg';

export default function Header() {
  const [modal, setModal] = useState(false);
  const togglePopup = () => setModal(!modal);

  return (
    <>
      <header className="header py-4 py-md-0">
        <div className="align-items-center d-flex header-container h-100 justify-content-between position-relative">
          <img src={logo} alt="Logo" className="logo" />
          <div className="d-none d-xxl-block header-line"></div>
          <nav className="d-none d-md-block header-nav navbar p-0">
            <ul className="d-flex list-unstyled m-0 nav-container p-0">
              <NavItem className="text-center">
                <NavLink to="/" className="header-link link mx-lg-4 nav-link p-0 text-uppercase text-white">
                  <em className="d-none d-lg-inline-block fst-normal fw-bold">00</em>Home
                </NavLink>
              </NavItem>
              <NavItem className="text-center">
                <NavLink to="/destination" className="header-link link mx-lg-4 nav-link p-0 text-uppercase text-white">
                  <em className="d-none d-lg-inline-block fst-normal fw-bold">01</em>Destination
                </NavLink>
              </NavItem>
              <NavItem className="text-center">
                <NavLink to="/crew" className="header-link link mx-lg-4 nav-link p-0 text-uppercase text-white">
                  <em className="d-none d-lg-inline-block fst-normal fw-bold">02</em>Crew
                </NavLink>
              </NavItem>
              <NavItem className="text-center">
                <NavLink to="/technology" className="header-link link mx-lg-4 nav-link p-0 text-uppercase text-white">
                  <em className="d-none d-lg-inline-block fst-normal fw-bold">03</em>Technology
                </NavLink>
              </NavItem>
            </ul>
          </nav>
          <img src={toggle} alt="Menu" className="d-md-none me-4" onClick={togglePopup}/>
        </div>
      </header>
      <Modal isOpen={modal} toggle={togglePopup}>
        <ModalHeader 
        className="border-0 p-4"
        close={<img src={close} alt="close" onClick={togglePopup}></img>}
        toggle={togglePopup}
        />
        <ModalBody>
          
        </ModalBody>
      </Modal>
    </>
  )
}