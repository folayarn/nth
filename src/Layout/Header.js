import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import nth from "../../src/images/nth-logo.png";
import coat from "../../src/images/nigeria-coat-of-arms.png";
import { Outlet } from "react-router";

function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <Image src={coat} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ms-auto">
              <Nav.Link href="#home">L</Nav.Link>
              <Nav.Link href="#link">F</Nav.Link>
              <Nav.Link href="#link">X</Nav.Link>
              <Nav.Link href="#link">0813846758438</Nav.Link>
              <Nav.Link href="#link">support@nigeriatradehub.gov.ng</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar
        expand="lg"
        sticky="top"
        style={{ backgroundColor: "#3AC05E" }}
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <Image src={nth} height={80} />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            style={{ backgroundColor: "white" }}
          />
          <Navbar.Collapse id="navbarScroll ">
            <Nav className="ms-auto" navbarScroll>
              <Nav.Link href="/" className="text-white link-green-hover">
                Home
              </Nav.Link>
              <Nav.Link href="/About" className="text-white link-green-hover">
                About Us
              </Nav.Link>
              <Nav.Link
                href="/Organisations"
                className="text-white link-green-hover"
              >
                Organizations
              </Nav.Link>
              <NavDropdown
                className="nav-dropdown-title link-green-hover"
                title="Useful Tools"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Duty Calculator Tool
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Import Classification Tool
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Customs Procedure Codes
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Trade Visualization Tool
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Currency Converter
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Frieght Rates Tool
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/News" className="text-white link-green-hover">
                News
              </Nav.Link>
              <Nav.Link href="/Help" className="text-white link-green-hover">
                Help
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Header;
