import React from "react";
import Navbar from "react-bootstrap/Navbar";

import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="head">
      <div>
        <Navbar bg="grey" variant="blue" expand="lg" fixed="top" sticky="top">
          <Navbar.Brand href="#home">PSD</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <NavLink
              exact
              className="nav-link"
              activeClassName="text-danger"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="nav-link"
              
              to="/UserComponent"
            >
              UserComponent
            </NavLink>
            <NavLink
              className="nav-link"
              
              to="/CaseStatus"
            >
              CaseStatus
            </NavLink>
            <NavLink
              className="nav-link"
              // activeClassName="text-danger"
              to="/Domain"
            >
              Domain
            </NavLink>
            <NavLink
              className="nav-link"
              // activeClassName="text-danger"
              to="/AddUser"
            >
              ADD USER
            </NavLink>
            <NavLink
              className="nav-link"
              // activeClassName="text-danger"
              to="/contact"
            >
              Contact Us
            </NavLink>
           
            

            {/* <NavLink
              className="nav-link"
              activeClassName="text-danger"
              to="/Scn"
            >
              SCN 
              
            </NavLink> */}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default NavBar;
