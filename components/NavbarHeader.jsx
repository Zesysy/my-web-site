import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import Link from "next/link";

const NavBarHeader = () => {
  const [isOpen, setIsOpen] = useState(false); // The state of the Toggle for the burger menu in responsive mode

  const toggle = () => setIsOpen(!isOpen); // The function that allows you to control the opening of the Toggle

  return (
    <div>
      <Navbar color="primary" dark expand="md">
        <Link href="/">
          <a className="navbar-brand">Ma petite création</a>
        </Link>
        <NavbarToggler onClick={toggle} />{" "}
        {/* On Click the Toggle opens or closes */}
        <Collapse className="justify-content-end" isOpen={isOpen} navbar>
          {/* isOpen is a props wainting a boolean, and the target of the state change of the function onClick */}
          <Nav navbar>
            <NavItem>
              <Link href="/">
                <a className="mr-lg-3 float-right nav-link">
                  <strong>Accueil</strong>
                </a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/portfolio">
                <a className="mr-lg-3 ml-lg-3 float-right nav-link">
                  <strong>Portfolio</strong>
                </a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/cv">
                <a className="mr-lg-3 ml-lg-3 float-right nav-link">
                  <strong>CV</strong>
                </a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/contact">
                <a className="ml-lg-3 float-right nav-link">
                  <strong>Contact</strong>
                </a>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBarHeader;
