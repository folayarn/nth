import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import nth from "../../src/images/nth-logo.png";
import coat from "../../src/images/nigeria-coat-of-arms.png";

function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container >
          <Navbar.Brand href="#home">
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
      <Navbar bg="dark" expand="lg" sticky="top" style={{ margin: '0', padding: '0px' }}>
        <Container >
          <Navbar.Brand href="#home">
            <Image src={nth}  height={60}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: 'white' }}/>
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ms-auto">
              <Nav.Link href="/" className="text-white link-green-hover">Home</Nav.Link>
              <Nav.Link href="/About" className="text-white link-green-hover">About Us</Nav.Link>
              <Nav.Link href="/Organisations" className="text-white link-green-hover">Organizations</Nav.Link>
               <NavDropdown className="nav-dropdown-title" title="Useful Tools" id="basic-nav-dropdown" >
               <NavDropdown.Header style={{ backgroundColor: '#3AC05E', color: 'white',marginTop: '-10px' }}>Useful Tools</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.1">Duty Calculator Tool</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Import Classification Tool</NavDropdown.Item>
             <NavDropdown.Item href="#action/3.2">Customs Procedure Codes</NavDropdown.Item>
             <NavDropdown.Item href="#action/3.2">Trade Visualization Tool</NavDropdown.Item>
             <NavDropdown.Item href="#action/3.2">Currency Converter</NavDropdown.Item>
             <NavDropdown.Item href="#action/3.2">Frieght Rates Tool</NavDropdown.Item>
            </NavDropdown>
              <Nav.Link href="/News" className="text-white link-green-hover">News</Nav.Link>
              <Nav.Link href="/Help" className="text-white link-green-hover">Help</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
