import { Container, Row, Col, Stack, Image, Nav, NavLink } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Footer.module.css"; 

function Footer() {
    return (
        <footer className={styles.customFooter}>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col md={4} xs={12} className="d-flex flex-column align-items-center text-center">
                        <Stack className="align-items-center">
                            <Image
                                src="/src/all_image/girl.png"
                                alt="logo"
                                rounded
                                className={styles.footerLogo}
                            />
                            <h3 className={`${styles.footerLogoText} mt-2`}>Trash2Cash</h3>
                            <p className="text-muted">Your one-stop solution for waste recycling!</p>
                        </Stack>
                    </Col>

                    <Col md={3} xs={12} className="text-center text-md-start">
                        <Nav className={`flex-column ${styles.footerNav}`}>
                            <h5 className={styles.footerHeading}>Useful Links</h5>
                            <NavLink href="#" className={styles.footerLink}>Home</NavLink>
                            <NavLink href="#" className={styles.footerLink}>Scrap Rates</NavLink>
                            <NavLink href="#" className={styles.footerLink}>Services</NavLink>
                        </Nav>
                    </Col>

                    <Col md={3} xs={12} className="text-center text-md-start">
                        <h5 className={styles.footerHeading}>Contact Us!</h5>
                        <p className={styles.footerContact}>
                            <FaEnvelope className={styles.contactIcon} /> 
                            Email: <a href="mailto:trash2cash@gmail.com">trash2cash@gmail.com</a>
                        </p>
                        <p className={styles.footerContact}>
                            <FaPhone className={styles.contactIcon} /> 
                            Phone: +91 (900) 678-3210
                        </p>
                        <p className={styles.footerContact}>
                            <FaMapMarkerAlt className={styles.contactIcon} /> 
                            Address: Bhavnagar Highway, Rajkot <br/> Tramba, Gujarat 360020
                        </p>
                    </Col>
                </Row>

                <Row className={styles.footerBottom}>
                    <Col className="text-center py-3">
                        <small>© 2025 Trash2Cash. All rights reserved.</small>
                        <div className={styles.socialIconsContainer}>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                <FaInstagram />
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                <FaFacebook />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                <FaTwitter />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
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
