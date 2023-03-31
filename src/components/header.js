import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import '../App.css'
import { useCookies } from "react-cookie";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Profile from "./profile";

function Header(props) {
  const [token , settoken] = useCookies(['mytoken'])
  return (
    <Navbar bg="rgb(192,192,192)" expand="lg" className="header">
      <Container>
        <Navbar.Brand href="/" className="header-text">HELP-CONNECT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            {!token['mytoken'] && <Nav.Link href="/login" className="header-login">Login</Nav.Link>}
           
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;