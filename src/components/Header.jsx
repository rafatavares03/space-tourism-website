import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Modal,
  ModalHeader,
  ModalBody,
  Navbar,
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
          <Navbar container={false} className="d-none d-md-block p-0">
            <ul className="d-flex list-unstyled m-0 nav-container p-0">
              <NavItem className="text-center">
                <NavLink to="/" className="header-link mx-lg-4 nav-link navbar-items p-0 text-uppercase text-white">
                  <em className="d-none d-lg-inline-block fst-normal fw-bold">00</em>Home
                </NavLink>
              </NavItem>
              <NavItem className="text-center">
                <NavLink to="/destination" className="header-link mx-lg-4 nav-link navbar-items p-0 text-uppercase text-white">
                  <em className="d-none d-lg-inline-block fst-normal fw-bold">01</em>Destination
                </NavLink>
              </NavItem>
              <NavItem className="text-center">
                <NavLink to="/crew" className="header-link mx-lg-4 nav-link navbar-items p-0 text-uppercase text-white">
                  <em className="d-none d-lg-inline-block fst-normal fw-bold">02</em>Crew
                </NavLink>
              </NavItem>
              <NavItem className="text-center">
                <NavLink to="/technology" className="header-link mx-lg-4 nav-link navbar-items p-0 text-uppercase text-white">
                  <em className="d-none d-lg-inline-block fst-normal fw-bold">03</em>Technology
                </NavLink>
              </NavItem>
            </ul>
          </Navbar>
          <img src={toggle} alt="Menu" className="d-md-none me-4" onClick={togglePopup} />
        </div>
      </header>
      <Modal isOpen={modal} toggle={togglePopup}>
        <ModalHeader
          className="border-0 modal-header"
          close={<img src={close} alt="close" onClick={togglePopup}></img>}
          toggle={togglePopup}
        />
        <ModalBody className="ms-3 pe-0 ps-3 pt-0">
          <Navbar container={false} className="p-0">
            <ul className="d-flex flex-column list-unstyled m-0 nav-container p-0 w-100">
              <NavItem>
                <NavLink to="/" className="mx-lg-4 nav-link navbar-items p-0 text-uppercase text-white">
                  <em className="d-inline-block fst-normal fw-bold">00</em>Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/destination" className="mx-lg-4 nav-link navbar-items p-0 text-uppercase text-white">
                  <em className="d-inline-block fst-normal fw-bold">01</em>Destination
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/crew" className="mx-lg-4 nav-link navbar-items p-0 text-uppercase text-white">
                  <em className="d-inline-block fst-normal fw-bold">02</em>Crew
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/technology" className="mx-lg-4 nav-link navbar-items p-0 text-uppercase text-white">
                  <em className="d-inline-block fst-normal fw-bold">03</em>Technology
                </NavLink>
              </NavItem>
            </ul>
          </Navbar>
        </ModalBody>
      </Modal>
    </>
  )
}