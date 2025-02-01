import './home.css'; 
import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

function HomePage() {
  const [showText, setShowText] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);

  const toggleText = () => {
    setShowText((prev) => !prev);
  };

  const handleImageHover = (imageId) => {
    setHoveredImage(imageId);
  };

  return (
    <div className="homepage-container">
      {/* Video Section */}
      <div className="custom-container">
        <video className="background-video" autoPlay muted loop>
          <source src="/src/video/video2.mp4" type="video/mp4" />
        </video>
        <div className="content-overlay">
          <p className="styled-paragraph">SELL YOUR JUNK HERE!</p>
          <p className="subtext">Newspaper - Plastic - Metal</p>
          <button className="custom-button" onClick={toggleText}>
            {showText ? 'Hide Detail' : 'View Detail'}
          </button>
          {showText && (
            <p className="additional-text">
              Recycling turns trash into useful products, generates income, and reduces pollution!
            </p>
          )}
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        {/* Navbar content here */}
      </nav>

      {/* Text and Image Section */}
      <div className="info-section">
        <Row>
          <Col md={6} sm={12} className="text-column">
            <h1 className="heading">Reduce, Reuse, Recycle Helps Make Our Environment Sustainable</h1>
            <p className="paragraph" style={{ margin: '20px' }}>
              The principle of "Reduce, Reuse, Recycle" is a cornerstone of environmental sustainability.
              It emphasizes the need to minimize waste, find creative ways to reuse items, and recycle
              materials to conserve resources.
            </p>
            <ul>
              <li className="list"> Reduce waste by consuming only what is necessary and avoiding overuse.</li>
              <li className="list"> Reuse materials creatively to give them a second life and minimize discards.</li>
              <li className="list"> Recycle responsibly to transform waste into useful products, conserving natural resources.</li>
            </ul>
          </Col>

          <Col md={6} sm={12} className="image-column">
            <div className="image-section">
              <div className="image-container">
                <img
                  src="/src/all_image/earth.jpg"
                  alt="Main Recycling Image"
                  className={`main-image ${hoveredImage === 'people' ? 'hovered' : ''}`}
                  onClick={() => handleImageHover('people')}
                />
                <img
                  src="/src/all_image/k.jpg"
                  alt="Overlay 1"
                  className={`overlay-image one ${hoveredImage === 'city' ? 'hovered' : ''}`}
                  onClick={() => handleImageHover('city')}
                />
                <img
                  src="/src/all_image/r.jpeg"
                  alt="Overlay 2"
                  className={`overlay-image two ${hoveredImage === 'r' ? 'hovered' : ''}`}
                  onClick={() => handleImageHover('r')}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* Card Section */}
      <div className="card-section">
        {[{ title: 'Waste Management', img: 'trash.png', text: 'Learn about proper waste disposal and its impact on the environment.' },
          { title: 'Secure Recycling', img: 'security.png', text: 'Discover how secure recycling can benefit both businesses and individuals.' },
          { title: 'Earn from Recycling', img: 'cash.png', text: 'Find out how you can make money by recycling scrap and other materials.' }
        ].map((card, index) => (
          <Card key={index} className="custom-card">
            <div className="card-img-container">
              <Card.Img variant="top" src={`/src/all_image/${card.img}`} alt={card.title} className="card-img small-img" />
            </div>
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
