import React from "react"
import {Navbar, Container,Nav} from 'react-bootstrap'


export default function NavComponent () {
return (
    <Navbar expand="lg" className="bg-body-tertiary nav-bar ">
    <Container className="variant-dark">
      <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>



)
}