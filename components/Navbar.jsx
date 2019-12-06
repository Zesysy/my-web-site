import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav } from "reactstrap";
import Link from "next/link";

import NavItem from "./NavItem";

const NavBarHeader = () => {
  const [isOpen, setIsOpen] = useState(false); // The state of the Toggle for the burger menu in responsive mode

  const toggle = () => setIsOpen(!isOpen); // The function that allows you to control the opening of the Toggle

  const [items, setItems] = useState([
    { link: "/", label: "Acceuil" },
    { link: "/portfolio", label: "Portfolio" },
    { link: "/cv", label: "CV" },
    { link: "/contact", label: "Contact" }
  ]);

  return (
    <div>
      <Navbar color="info" light expand="md">
        <Link href="/">
          <a className="navbar-brand">
            <strong>Ma petite création</strong>
          </a>
        </Link>
        <NavbarToggler onClick={toggle} />
        {/* On Click the Toggle opens or closes */}
        <Collapse className="justify-content-end" isOpen={isOpen} navbar>
          {/* isOpen is a props wainting a boolean, and the target of the state change of the function onClick */}
          <Nav navbar>
            {items.map((item, key) => (
              <NavItem {...item} key={key} />
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBarHeader;
