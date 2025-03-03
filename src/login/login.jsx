import { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./login.module.css"; // Importing CSS Module

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must have at least 6 characters, including a letter, a number, and a special character";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (validateForm()) {
      setErrors({});
      console.log("Login successful");
    }
  };

  return (
    <Container className={`d-flex justify-content-center align-items-center vh-100 ${styles.container}`}>
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <Card className={styles.card}>
            <Card.Body>
              <h3 className="text-center mb-4">Login</h3>
              <Form onSubmit={handleLogin}>
                {/* Email Field */}
                <Form.Group className="mb-3">
                  <Form.Label className={styles.label}>Email address</Form.Label>
                  <div className={styles.inputContainer}>
                    <FaEnvelope className={styles.inputIcon} />
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={styles.input}
                    />
                  </div>
                  {errors.email && <p className="text-danger">{errors.email}</p>}
                </Form.Group>

                {/* Password Field */}
                <Form.Group className="mb-3">
                  <Form.Label className={styles.label}>Password</Form.Label>
                  <div className={styles.inputContainer}>
                    <FaLock className={styles.inputIcon} />
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={styles.input}
                    />
                  </div>
                  {errors.password && <p className="text-danger">{errors.password}</p>}
                </Form.Group>

                {/* Submit Button */}
                <Button type="submit" className={`w-100 ${styles.button}`}>
                  Login
                </Button>
              </Form>

              {/* 🔹 Forgot Password Link Updated 🔹 */}
              <div className="text-center mt-3">
                <Link to="/forgotpassword" className={styles.link}>
                  Forgot Password?
                </Link>
              </div>

              {/* Register Link */}
              <div className="text-center mt-2">
                <span>Don't have an account? </span>
                <Link to="/register" className={styles.link}>
                  Register
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
