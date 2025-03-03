import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaUser, FaEnvelope, FaPhone, FaLock, FaMapMarkerAlt, FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./register.module.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    pinCode: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;
    
    if (!formData.firstName) {
      newErrors.firstName = "First Name is required";
      isValid = false;
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last Name is required";
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      isValid = false;
    }
    if (!formData.address) {
      newErrors.address = "Address is required";
      isValid = false;
    }
    if (!formData.pinCode) {
      newErrors.pinCode = "Pincode is required";
      isValid = false;
    } else if (!/^\d{6}$/.test(formData.pinCode)) {
      newErrors.pinCode = "Pincode must be 6 digits";
      isValid = false;
    }
    if (!formData.dob) {
      newErrors.dob = "Date of Birth is required";
      isValid = false;
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Registration Successful");
    }
  };

  return (
    <Container fluid className={styles.registrationContainer}>
      <div className={styles.formSection}>
        <h2 className={styles.registrationHeading}>User Registration</h2>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className={styles.inputContainer}>
                <label>First Name</label>
                <div className={styles.inputWrapper}>
                  <FaUser className={styles.formIcon} />
                  <Form.Control type="text" placeholder="First Name" name="firstName" onChange={handleChange} />
                </div>
                {errors.firstName && <p className="text-danger">{errors.firstName}</p>}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className={styles.inputContainer}>
                <label>Last Name</label>
                <div className={styles.inputWrapper}>
                  <FaUser className={styles.formIcon} />
                  <Form.Control type="text" placeholder="Last Name" name="lastName" onChange={handleChange} />
                </div>
                {errors.lastName && <p className="text-danger">{errors.lastName}</p>}
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className={styles.inputContainer}>
                <label>Email</label>
                <div className={styles.inputWrapper}>
                  <FaEnvelope className={styles.formIcon} />
                  <Form.Control type="email" placeholder="Email" name="email" onChange={handleChange} />
                </div>
                {errors.email && <p className="text-danger">{errors.email}</p>}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className={styles.inputContainer}>
                <label>Phone Number</label>
                <div className={styles.inputWrapper}>
                  <FaPhone className={styles.formIcon} />
                  <Form.Control type="text" placeholder="Phone Number" name="phone" onChange={handleChange} />
                </div>
                {errors.phone && <p className="text-danger">{errors.phone}</p>}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Form.Group className={styles.inputContainer}>
                <label>Address</label>
                <div className={styles.inputWrapper}>
                  <FaMapMarkerAlt className={styles.formIcon} />
                  <Form.Control type="text" placeholder="Address" name="address" onChange={handleChange} />
                </div>
                {errors.address && <p className="text-danger">{errors.address}</p>}
              </Form.Group>
            </Col>
          </Row>
           <Row>
           <Col md={6}>
              <Form.Group className={styles.inputContainer}>
                <label>Pin Code</label>
                <div className={styles.inputWrapper}>
                  <FaMapMarkerAlt className={styles.formIcon} />
                  <Form.Control type="text" placeholder="Pin Code" name="pinCode" onChange={handleChange} />
                </div>
                {errors.pinCode && <p className="text-danger">{errors.pinCode}</p>}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className={styles.inputContainer}>
                <label>Date of Birth</label>
                <div className={styles.inputWrapper}>
                  <FaCalendar className={styles.formIcon} />
                  <Form.Control type="date" name="dob" onChange={handleChange} />
                </div>
                {errors.dob && <p className="text-danger">{errors.dob}</p>}
              </Form.Group>
            </Col>
           </Row>
          <Row>
            <Col md={6}>
              <Form.Group className={styles.inputContainer}>
                <label>Password</label>
                <div className={styles.inputWrapper}>
                  <FaLock className={styles.formIcon} />
                  <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
                </div>
                {errors.password && <p className="text-danger">{errors.password}</p>}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className={styles.inputContainer}>
                <label>Confirm Password</label>
                <div className={styles.inputWrapper}>
                  <FaLock className={styles.formIcon} />
                  <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" onChange={handleChange} />
                </div>
                {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword}</p>}
              </Form.Group>
            </Col>
          </Row>

          <Button type="submit" className={styles.registerBtn}>Register</Button>
          <p className="text-center mt-3">
            Already have an account? <Link to="/login" className={styles.textLink}>Login</Link>
          </p>
        </Form>
      </div>
    </Container>
  );
};

export default RegistrationForm;
