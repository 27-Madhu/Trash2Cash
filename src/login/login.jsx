import { useState, useContext } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (event) => {
    event.preventDefault();

    const adminEmail = "madhu@gmail.com";
    const adminPassword = "madhu123";

    if (email === adminEmail && password === adminPassword) {
      navigate("/adminapp/*");
    } else {
      try {
        const result = await axios.post("http://localhost:3001/login", { email, password });

        if (result.data.success) {
          const { token, user } = result.data;

          // ✅ Store token in localStorage
          localStorage.setItem("token", token);

          // ✅ Update AuthContext with user data
          login(user);

          // ✅ Redirect to user home page
          navigate("/");
        } else {
          alert("❌ Login failed! " + (result.data.message || ""));
        }
      } catch (error) {
        console.error("❌ Login Error:", error);
        alert("❌ Login Failed! Please check your credentials.");
      }
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
                      required
                    />
                  </div>
                </Form.Group>

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
                      required
                    />
                  </div>
                </Form.Group>

                <Button type="submit" className={`w-100 ${styles.button}`}>
                  Login
                </Button>
              </Form>

              <div className="text-center mt-3">
                <Link to="/forgotpassword" className={styles.link}>
                  Forgot Password?
                </Link>
              </div>

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
