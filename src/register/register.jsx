import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {FaUser,FaEnvelope,FaPhone,FaLock,FaMapMarkerAlt,FaCalendar,} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styles from "./register.module.css";
import axios from 'axios';

const RegistrationForm = () => {

  const [fname,setFname] =useState("");
  const [lname,setLname] =useState("");
  const [email,setEmail] =useState("");
  const [phone,setPhone] =useState("");
  const [address,setAddress] =useState("");
  const [pincode,setPincode] =useState("");
  const [city,setCity] =useState("");
  const [password,setPassword] =useState("");
  const [Cpassword,setCpassword] =useState("");

  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
        const response = await axios.post('http://localhost:3001/register', { 
            fname, lname, email, phone, address, pincode, city, 
            password, Cpassword 
        });

        
        navigate('/login');
    } catch (error) {
      if (error.response) {
          alert(`❌ Error: ${error.response.data.error}`);
      } else {
          alert("❌ Registration Failed!");
      }
  }
};





  return (
    <Container fluid className={styles.registrationContainer}>
      <div className={styles.formSection}>
        <h2 className={styles.registrationHeading}>User Registration</h2>
        {/* registrarion */}
        <Form  onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className={styles.inputContainer}>
                <label>First Name</label>
                <div className={styles.inputWrapper}>
                  <FaUser className={styles.formIcon} />
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    required
                    onChange={(e) => setFname(e.target.value)}
                  />
                </div>
               
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className={styles.inputContainer}>
                <label>Last Name</label>
                <div className={styles.inputWrapper}>
                  <FaUser className={styles.formIcon} />
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    required
                    onChange={(e) => setLname(e.target.value)}
                    
                  />
                </div>
               
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className={styles.inputContainer}>
                <label>Email</label>
                <div className={styles.inputWrapper}>
                  <FaEnvelope className={styles.formIcon} />
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    
                  />
                </div>
               
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className={styles.inputContainer}>
                <label>Phone Number</label>
                <div className={styles.inputWrapper}>
                  <FaPhone className={styles.formIcon} />
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                    required
                    onChange={(e) => setPhone(e.target.value)}
                    
                  />
                </div>
                
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Form.Group className={styles.inputContainer}>
                <label>Address</label>
                <div className={styles.inputWrapper}>
                  <FaMapMarkerAlt className={styles.formIcon} />
                  <Form.Control
                    type="text"
                    placeholder="Address"
                    name="address"
                    required
                    onChange={(e) => setAddress(e.target.value)}
                    
                  />
                </div>
                
                
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className={styles.inputContainer}>
                <label>Pin Code</label>
                <div className={styles.inputWrapper}>
                  <FaMapMarkerAlt className={styles.formIcon} />
                  <Form.Control
                    type="number"
                    placeholder="Pin Code"
                    name="pinCode" 
                    required
                    onChange={(e) => setPincode(e.target.value)}
                  />
                </div>
               
              </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group className={styles.inputContainer}>
              <label>Select City</label>
              <div className={styles.inputWrapper}>
                <FaCalendar className={styles.formIcon} />
                <Form.Select 
                  name="city"  
                  className="ms-2"  
                  required 
                  onChange={(e) => setCity(e.target.value)} 
                >
                  <option value="">Select City</option>
                  <option value="Patna">Patna</option>
                  <option value="Muzaffarpur">Muzaffarpur</option>
                  <option value="Chhapra">Chhapra</option>
                  <option value="Siwan">Siwan</option>
                </Form.Select>
              </div>
            </Form.Group>

            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className={styles.inputContainer}>
                <label>Password</label>
                <div className={styles.inputWrapper}>
                  <FaLock className={styles.formIcon} />
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password" required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
               
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className={styles.inputContainer}>
                <label>Confirm Password</label>
                <div className={styles.inputWrapper}>
                  <FaLock className={styles.formIcon} />
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"  required
                    onChange={(e) => setCpassword(e.target.value)}
                   
                  />
                </div>
                
              </Form.Group>
            </Col>
          </Row>

          <Button type="submit" className={styles.registerBtn}>
            Register
          </Button>
          <p className="text-center mt-3">
            Already have an account?{" "}
            <Link to="/login" className={styles.textLink}>
              Login
            </Link>
          </p>
        </Form>
      </div>
    </Container>
  );
};

export default RegistrationForm;