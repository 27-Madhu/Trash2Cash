import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoImage from "../all_image/logo.png";
import "./navbar.css";

const Navigation = () => {
  const [dropdownShow, setDropdownShow] = useState(false);
  const [langDropdownShow, setLangDropdownShow] = useState(false);

  return (
    <Navbar expand="lg" className="fixed-top" style={{ background: "#c8e6c9" }}>
  <Container fluid>

        {/* Logo */}
        <div className="logo me-5 d-flex" style={{ marginLeft: "60px" }}>
          <Navbar.Brand>
            <img
              src={LogoImage}
              alt="logo"
              width="40"
              height="40"
              className="d-inline-block align-top"
              style={{ marginLeft: "30px" }}
            />
            <Nav.Link as={Link} to="/" className="me-4" style={{ fontWeight: "bold" }}>
              <span style={{ color: "green" }}>Trash</span>
              <span style={{ color: "orange" }}>2</span>
              <span style={{ color: "green" }}>Cash</span>
            </Nav.Link>
          </Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0 justify-content-center" style={{ maxHeight: "80px" }} navbarScroll>
            <Nav.Link as={Link} to="/scrap" className="me-4">
              Scrap Rates
            </Nav.Link>

            {/* Services Dropdown with Hover Effect */}
            <NavDropdown
              title="Services"
              className="me-4"
              id="navbarScrollingDropdown"
              show={dropdownShow}
              onMouseEnter={() => setDropdownShow(true)}
              onMouseLeave={() => setDropdownShow(false)}
            >
              <NavDropdown.Item as={Link} to="#action3">Waste Collection Services</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action4">Waste Categorization & Valuation</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#action5">Second-Hand Market</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/contact" className="me-4">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="me-4">
              About
            </Nav.Link>
          </Nav>

          {/* Right Section - Login and Language Dropdown */}
          <div className="d-flex">
            <Button as={Link} to="/login" className="me-4" variant="outline-success">
              Login
            </Button>

            {/* Language Dropdown with Hover Effect */}
            <NavDropdown
              title="Language"
              id="languageDropdown"
              show={langDropdownShow}
              onMouseEnter={() => setLangDropdownShow(true)}
              onMouseLeave={() => setLangDropdownShow(false)}
            >
              <NavDropdown.Item as={Link} to="#hindi">Hindi</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#english">English</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
