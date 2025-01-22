import { Container, Row, Col, Stack, Image, Nav, NavLink } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css"; 

function Footer() {
    return (
        <footer className="custom-footer">
            <Container fluid>
                <Row>
                    <Col md={4} className="mx-5 d-flex align-items-center">
                        <Stack>
                            <Image
                                src="/src/all_image/girl.png"
                                alt="logo"
                                rounded
                                width={90}
                                height={90}
                            />
                            <h3 className="footer-logo-text">Trash2Cash</h3>
                            <p>Your one-stop solution for waste recycling!</p>
                        </Stack>
                    </Col>
                    <Col md={3}>
                      <Nav className="flex-column footer-nav">
                         <h5 className="footer-heading">Useful Links</h5>
                        <NavLink href="#" className="footer-link text-success">Home</NavLink>
                         <NavLink href="#" className="footer-link text-success">Scrap Rates</NavLink>
                             <NavLink href="#" className="footer-link text-success">Services</NavLink>
                       
                        
                      </Nav>
                     </Col>

                    <Col md={3}>
                        <h5 className="footer-heading">Contact Us!</h5>
                        <p className="footer-contact">
                        <FaEnvelope className="contact-icon" /> 
                            Email: <a href="mailto:trash2cash@gmail.com">trash2cash@gmail.com</a>
                        </p>
                        <p className="footer-contact">
                        <FaPhone className="contact-icon" /> 
                            Phone: +91 (900) 678-3210
                        </p>
                        <p className="footer-contact">
                        <FaMapMarkerAlt className="contact-icon" /> 
                            Address:Bhavnager Highway,Rajkot <br/>Tramba,Gujarat 360020
                          
                        </p>
                    </Col>
                </Row>
                <Row className="footer-bottom">
                    <Col className="text-center py-3">
                        <small>© 2025 Trash2Cash. All rights reserved.</small>
                        <div className="social-icons-container">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaInstagram />
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaFacebook />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaTwitter />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaLinkedin />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
