import "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./forgotpassword.module.css";

const ForgotPassword = () => {
  return (
    <Container fluid className={`d-flex justify-content-center align-items-center vh-100 ${styles.forgotPasswordContainer}`}>
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <div className={styles.formSection}>
            <h2 className={`text-center ${styles.heading}`}>Forgot Password</h2>
            <p className={`text-center ${styles.description}`}>
              Enter your email address to reset your password.
            </p>

            <Form>
              {/* Email Input */}
              <Form.Group className={styles.inputContainer}>
                <label className={styles.label}>Email address</label>
                <div className={styles.inputWrapper}>
                  <FaEnvelope className={styles.formIcon} />
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className={styles.input}
                  />
                </div>
              </Form.Group>

              {/* Submit Button */}
              <Button type="submit" className={`w-100 ${styles.submitBtn}`}>
                Send Reset Link
              </Button>

              {/* Back to Login */}
              <div className="text-center mt-3">
                <Link to="/login" className={styles.backToLogin}>
                  Back to login
                </Link>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
