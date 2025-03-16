import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Table, Form, Button, Modal } from 'react-bootstrap';
import UserImage from '../all_image/bottel.jpg';

const UserCard = ({ scrapData }) => {
  const [paymentStatus, setPaymentStatus] = useState(scrapData.map(item => item.status));
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [bankDetails, setBankDetails] = useState({ accountNumber: '', ifsc: '', upiId: '' });

  useEffect(() => {
    if (paymentStatus.includes("Payment Completed")) {
      setShowFeedbackForm(true);
    }
  }, [paymentStatus]);

  const handleBankDetailsChange = (e) => {
    setBankDetails({ ...bankDetails, [e.target.name]: e.target.value });
  };

  const handlePaymentComplete = (index) => {
    const updatedStatus = [...paymentStatus];
    updatedStatus[index] = 'Payment Completed';
    setPaymentStatus(updatedStatus);
  };

  const handleFeedbackSubmit = () => {
    alert("Feedback Submitted Successfully!");
    setShowFeedbackForm(false);
  };

  return (
    <div className="container" style={{ marginTop: '3%' }}>
      <Card className="my-3">
        <Row className="g-0">
          <Col md={3} className="text-center">
            <Card.Img 
              src={UserImage} 
              alt="User" 
              className="img-fluid rounded-circle mt-4"
              style={{ width: '100px', height: '100px' }} 
            />
            <div className="mt-3">
              <h4>Madhuri Kumari</h4>  
              <p>mkuamri345@gmail.com</p>   
              <a href="#" className="btn btn-success mb-5">LogOut</a>
            </div>
          </Col>
          <Col md={9}>
            <Card.Body>
              <h3 className="text-center">📜 Scrap Sales History</h3>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Item Name</th>
                    <th>Category</th>
                    <th>Weight (KG)</th>
                    <th>Total Earned</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {scrapData.map((item, index) => (
                    <tr key={index}>
                      <td><img src={item.image} alt={item.name} width="50" /></td>
                      <td>{item.name}</td>
                      <td>{item.category}</td>
                      <td>{item.weight} KG</td>
                      <td>₹{item.totalAmount}</td>
                      <td>
                        <span className={`badge ${paymentStatus[index] === 'Payment Completed' ? 'bg-success' : 'bg-warning'}`}>
                          {paymentStatus[index]}
                        </span>
                      </td>
                      <td>
                        {paymentStatus[index] !== 'Payment Completed' && (
                          <Button variant="success" size="sm" onClick={() => handlePaymentComplete(index)}>
                            Mark as Paid
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      {/* Bank Details Form */}
      <Card className="p-4 mt-3 mb-5">
        <h4>💳 Payment Details</h4>
        <Form>
          <Row className="mb-3">
            <Col md={4}>
              <Form.Group>
                <Form.Label>Bank Account Number</Form.Label>
                <Form.Control
                  type="text"
                  name="accountNumber"
                  value={bankDetails.accountNumber}
                  onChange={handleBankDetailsChange}
                  placeholder="Enter Account Number"
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>IFSC Code</Form.Label>
                <Form.Control
                  type="text"
                  name="ifsc"
                  value={bankDetails.ifsc}
                  onChange={handleBankDetailsChange}
                  placeholder="Enter IFSC Code"
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>UPI ID</Form.Label>
                <Form.Control
                  type="text"
                  name="upiId"
                  value={bankDetails.upiId}
                  onChange={handleBankDetailsChange}
                  placeholder="Enter UPI ID"
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="d-flex justify-content-center">
            <Button variant="success">Save Payment Details</Button>
          </div>
        </Form>
      </Card>

      {/* Feedback Modal */}
      <Modal show={showFeedbackForm} onHide={() => setShowFeedbackForm(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Give Your Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>How was your experience?</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                value={feedback} 
                onChange={(e) => setFeedback(e.target.value)} 
                placeholder="Write your feedback..."
              />
            </Form.Group>
            <Button variant="primary" onClick={handleFeedbackSubmit}>Submit Feedback</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

// Dummy Scrap Data
const dummyScrapData = [
  {
    image: 'https://example.com/scrap-metal.jpg',
    name: 'Old Papers, Glass',
    category: 'Paper Glass',
    weight: 5,
    totalAmount: 500,
    status: 'Pending',
  },
  {
    image: 'https://example.com/scrap-plastic.jpg',
    name: 'Plastic Bottles',
    category: 'Plastic',
    weight: 10,
    totalAmount: 1000,
    status: 'Pending',
  },
];

const UserProfile = () => {
  return (
    <div className="container mt-4">
      <h1 style={{ marginTop: '8%', textAlign: 'center' }}>User Profile</h1>
      <UserCard scrapData={dummyScrapData} />
    </div>
  );
};

export default UserProfile;
