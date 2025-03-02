import React from "react";
import { Navbar, Nav, NavDropdown, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoImage from "../all_image/logo.png";
import UserImage from "../all_image/user.jpg";
import "./navbar.css";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="navbarFixed fixed-top">
      <Container fluid>
        {/* ✅ Logo on the Left */}
        <Navbar.Brand className="align-items-center">
          <img src={LogoImage} alt="logo" className="logo-img" style={{marginLeft:'30px'}} />
          <Nav.Link as={Link} to="/" className="brand-text">
            <span className="green">Trash</span>
            <span className="orange">2</span>
            <span className="green">Cash</span>
          </Nav.Link>
        </Navbar.Brand>

        {/* Toggle Button for Mobile View */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          {/* ✅ Centered Navigation Links */}
          <Nav className="nav-links mx-auto">
            <Nav.Link as={Link} to="/scrap" className="nav-item">
              Scrap Rates
            </Nav.Link>

            <NavDropdown title="Services" className="nav-item">
              <NavDropdown.Item as={Link} to="/waste-coll">
                Waste Collection Services
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/waste-cate">
                Waste Categorization & Valuation
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#action5">
                Second-Hand Market
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/contact" className="nav-item">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-item">
              About
            </Nav.Link>
          </Nav>

          {/* ✅ Right-Side Login & Language Dropdown */}
          <div className="d-flex align-items-center">
          <Nav.Link as={Link} to="/usercard" className="brand-text">
            <img src={UserImage} alt="logo" className="logo-img me-5" style={{marginRight:'0px',borderRadius:'50%'}} />
          </Nav.Link>
           
          <Navbar.Brand className="align-items-center">
            <NavDropdown title="Language" id="languageDropdown" style={{fontSize:'15px'}}>
              <NavDropdown.Item as={Link} to="#hindi">Hindi</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#english">English</NavDropdown.Item>
            </NavDropdown>
            <Button as={Link} to="/login" className="login-btn" variant="outline-success">
              Login
            </Button>
          </Navbar.Brand>

          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
