import { Container, Row, Col, Stack, Image, Nav, NavLink } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Footer.module.css"; 

function Footer() {
    return (
        <footer className={styles.customFooter}>
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
                            {/* img */}
                            <h3 className={styles.footerLogoText}>Trash2Cash</h3>
                            <p>Your one-stop solution for waste recycling!</p>
                        </Stack>
                    </Col>
                    <Col md={3}>
                        <Nav className={`flex-column ${styles.footerNav}`}>
                            <h5 className={styles.footerHeading}>Useful Links</h5>
                            <NavLink href="#" className={`${styles.footerLink} text-success`}>Home</NavLink>
                            <NavLink href="#" className={`${styles.footerLink} text-success`}>Scrap Rates</NavLink>
                            <NavLink href="#" className={`${styles.footerLink} text-success`}>Services</NavLink>
                        </Nav>
                    </Col>
                    <Col md={3}>
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
                            Address: Bhavnager Highway, Rajkot <br/> Tramba, Gujarat 360020
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
