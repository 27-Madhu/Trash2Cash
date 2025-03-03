import React from 'react';
import { Card, Row, Col, Table } from 'react-bootstrap';
import UserImage from '../all_image/bottel.jpg';

// UserCard Component
const UserCard = ({ scrapData }) => {
  return (
    <div className="container" style={{ marginTop: '3%' }}>
      <Card className="my-3">
        <Row className="g-0">
          {/* Left Section - User Profile */}
          <Col md={3} className="text-center">
            <Card.Img 
              src={UserImage} 
              alt="User" 
              className="img-fluid rounded-circle mt-4"
              style={{ width: '100px', height: '100px', borderRadius: '50%' }} 
            />
            <div className="mt-3">
              <h4>Madhuri Kumari</h4>  
              <p>mkuamri345@gmail.com</p>   
              <a href="#" className="btn btn-success">LogOut</a>
            </div>
          </Col>

          {/* Right Section - Scrap Sales History */}
          <Col md={9}>
            <Card.Body>
              <h3 className="text-center">📜 Scrap Sales History</h3>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Item Name</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Sub Category</th>
                    <th>Weight (KG)</th>
                    <th>Price/KG</th>
                    <th>Total Earned</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {scrapData.map((item, index) => (
                    <tr key={index}>
                      <td><img src={item.image} alt={item.name} width="50" /></td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{item.category}</td>
                      <td>{item.subcategory}</td>
                      <td>{item.weight} KG</td>
                      <td>₹{item.pricePerKG}</td>
                      <td>₹{item.totalAmount}</td>
                      <td>{item.date}</td>
                      <td>
                        <span className={`badge ${item.status === 'Completed' ? 'bg-success' : 'bg-warning'}`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

// Dummy Scrap Data
const dummyScrapData = [
  {
    image: 'https://example.com/scrap-metal.jpg',
    name: 'Old Pappers ,Glass',
    description: 'Pappers Glasss',
    category: 'Papper Glass',
    subcategory:'mix Pappers',
    weight: 5,
    pricePerKG: 100,
    totalAmount: 200,
    date: '2025-02-26',
    status: 'Completed',
  },
  {
    image: 'https://example.com/scrap-plastic.jpg',
    name: 'Plastic Bottles',
    description: 'Used PET bottles',
    category: 'Plastic',
    subcategory:'mix Plastic',
    weight: 10,
    pricePerKG: 200,
    totalAmount: 500,
    date: '2025-02-25',
    status: 'Pending',
  },
];

// User Profile Page
const UserProfile = () => {
  return (
    <div className="container mt-4">
      <h1 style={{marginTop:'8%' , textAlign:'center' }}> User Profile</h1>
      
      <UserCard scrapData={dummyScrapData} />
    </div>
  );
};

export default UserProfile;
