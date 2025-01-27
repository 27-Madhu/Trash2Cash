import "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import "./login.css"; 

const LoginPage = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log("Login submitted");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <Card className="shadow">
            <Card.Body>
              <h3 className="text-center mb-4">Login</h3>
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    required 
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Enter password" 
                    required 
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
              </Form>
              <div className="text-center mt-3">
                <a href="#forgot-password" className="text-decoration-none">
                  Forgot Password?
                </a>
              </div>
              <div className="text-center mt-2">
                <span>Dont have an account? </span>
                <a href="#register" className="text-decoration-none">  
                  Register
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
