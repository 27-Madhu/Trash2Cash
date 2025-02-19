import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './contact.module.css'; // Import CSS Module
import contactImg from '../all_image/contact.png'; // Import your image
import {  FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <div>
      {/* Contact Us Header */}
      <h2 className={`text-center ${styles.head}`} style={{ marginTop: '8%' }}>
        Drop Us a Message – We’ll Get Back to You!
      </h2>
      <hr />

      {/* Form Section */}
      <div className={`container d-flex mt-4 ${styles.container}`}>
        {/* Image Container */}
        <div className={styles.imageContainer}>
          <img src={contactImg} alt="Location" className="img-fluid"  style={{marginTop:'2%'}}/>
        </div>

        {/* Contact Form */}
        <div className={`card ${styles.card}`}>
          <Form className="form">
            <div className="card-body">
              <h1 className={`text-center ${styles.head}`}>𝓒𝓞𝓝𝓣𝓐𝓒𝓣 𝓤𝓢</h1>

              <Form.Group className="mb-4" controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" required className={styles.inputField} />
              </Form.Group>

              <Form.Group className="mb-4" controlId="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Your Email" required className={styles.inputField} />
              </Form.Group>

              <Form.Group className="mb-4" controlId="ContactNumber">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control type="number" placeholder="Contact Number" required className={styles.inputField} />
              </Form.Group>

              <Form.Group className="mb-4" controlId="Message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} required className={styles.inputField} />
              </Form.Group>

              <Button type="submit" className="btn-success  " style={{ width: '150px',marginLeft:'35%', fontSize: '20px' }}>
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>

      {/* Address Section */}
      <div className="container mt-5">
        <div className={`d-flex justify-content-between p-4 mx-4 ${styles.addressCard}`}>
          <div className="ms-5">
            <h3 className={styles.head}>
            <FaMapMarkerAlt className="contact-icon" />  Address
            </h3>
            <p>123, Green Street, New City, Country 45678</p>
          </div>

          <hr className={styles.verticalDivider} />

          <div className="mx-auto">
            <h3 className={styles.head}>
            <FaEnvelope className="contact-icon" />Email Us
            </h3>
            <p>trashtwocash1234@example.com</p>
            <p>cont1234@gmail.com</p>
          </div>

          <div className="me-5">
            <h3 className={styles.head}>
            <FaPhone className="contact-icon" />  Phone
            </h3>
            <p>+123 456 7890</p>
            <p>+987 654 3210</p>
          </div>
        </div>
      </div>

      {/* Google Map Location Section */}
      <div style={{ textAlign: 'center', width: '100%', marginTop: '30px' }}>
        <h1 className={styles.head}>Our Location <hr /></h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52019.21602499656!2d84.7048247688121!3d25.780667088477852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992bb17fdf6ea1f%3A0xe3bbfac01f4ab27a!2sChapra%2C%20Bihar!5e1!3m2!1sen!2sin!4v1738778398126!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
