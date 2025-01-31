import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoImage from "../all_image/logo.png";

class Navigation extends React.Component {
  render() {
    return (
      <Navbar expand="lg" className="bg-body-light">
        <Container fluid>
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
              <Nav.Link as={Link} to="/" className="me-4" style={{ color: "green", fontWeight: "bold" }}>
                Trash2Cash
              </Nav.Link>
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0 justify-content-center" style={{ maxHeight: "80px" }} navbarScroll>
              <Nav.Link as={Link} to="/scrap" className="me-4">
                Scrap Rates
              </Nav.Link>
              <NavDropdown title="Services" className="me-4" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="#action5">Something else here</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/contact" className="me-4">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="me-4">
                About
              </Nav.Link>
            </Nav>
            <div className="d-flex">
              <Button as={Link} to="/login" className="me-4" variant="outline-success">
                Login
              </Button>
              <NavDropdown title="Language" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="#hindi">Hindi</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#english">English</NavDropdown.Item>
              </NavDropdown>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
