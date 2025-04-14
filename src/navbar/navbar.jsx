import React, { useContext, useState } from "react";
import { Navbar, Nav, NavDropdown, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // ✅ AuthContext Import करें
import LogoImage from "../all_image/logo.png";
import UserImage from "../all_image/user.jpg";
import "./navbar.css";

const Navigation = () => {
  const auth = useContext(AuthContext);  // पहले पूरा ऑब्जेक्ट लें

  if (!auth) {
    console.error("AuthContext is undefined!");
    return null;  // जब तक AuthProvider न मिले, कुछ न दिखाएं
  }

  const { user, login, logout } = auth;

  return (
    <Navbar expand="lg" className="navbarFixed fixed-top">
      <Container fluid>
        {/* ✅ Logo */}
        <Navbar.Brand>
          <img src={LogoImage} alt="logo" className="logo-img" style={{ marginLeft: "30px" }} />
          <Nav.Link as={Link} to="/" className="brand-text">
            <span className="green">Trash</span>
            <span className="orange">2</span>
            <span className="green">Cash</span>
          </Nav.Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* ✅ Navigation Links */}
          <Nav className="nav-links mx-auto">
            <Nav.Link as={Link} to="/scrap">Scrap Rates</Nav.Link>
            <NavDropdown title="Services">
                <NavDropdown.Item as={Link} to="/waste-coll">Waste Collection</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/waste-cate">Waste Categorization</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>


          {/* ✅ User Profile / Login Button */}
          <div className="d-flex align-items-center">
            {user ? (
              <>
                <NavDropdown
                  title={<img src={UserImage} alt="User" className="logo-img me-3" style={{ borderRadius: "50%", width: "40px", height: "40px" }} />}
                  id="user-dropdown"
                >
                  <NavDropdown.Item as={Link} to="/usercard">Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <Button as={Link} to="/login" className="login-btn" variant="outline-success">
                Login
              </Button>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
