import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import "./NavBar.css";
const NavBar = () => {
  return (
    <Navbar collapseOnSelect fixed="top" expand="sm" bg="light" variant="light">
      <Navbar.Brand href="#home">Benel Aharon</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="main-info" smooth={true} duration={1000}>
            Home
          </Link>
          <Link
            activeClass="mr-auto"
            to="about"
            smooth={true}
            duration={1000}
            offset={-115}>
            About
          </Link>
          <Link
            activeClass="mr-auto"
            to="experience"
            smooth={true}
            duration={1000}
            offset={-115}>
            Experiece
          </Link>
          <Link
            activeClass="mr-auto"
            to="portfolio"
            smooth={true}
            duration={1000}
            offset={-115}>
            Portfolio
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
