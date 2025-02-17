import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import './home.css';



function HomePage() {
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText((prev) => !prev);
  };

  return (
    <div className="homepage-container">
    {/* Video Section */}
    <div className="custom-container">
      <video className="background-video" autoPlay muted loop>
        <source src="/video/video2.mp4" type="video/mp4" />
      </video>
      <div className="overlay"></div> {/* Overlay */}
      <div className="content-overlay">
        <p className="styled-paragraph padding-top:80px">SELL YOUR JUNK HERE!</p>
        <p className="subtext">Newspaper - Plastic - Metal</p>
        <Button
          variant="success"
          className="custom-button"
          onClick={toggleText}
        >
          {showText ? 'Hide Detail' : 'View Detail'}
        </Button>
        {showText && (
          <p className="additional-text">
            Recycling turns trash into useful products, generates income, and
            reduces pollution!
          </p>
        )}
      </div>
    </div>

      {/* Info Section */}
      <Container fluid className="info-section">
        <Row>
          <Col md={6} sm={12} className="text-column">
          <h1 className="heading"  >Reduce,Reuse,Recycle Helps Make Our Environment Sustainable</h1>

 

            <p className="paragraph">
              The principle of "Reduce, Reuse, Recycle" is a cornerstone of environmental sustainability.
              It emphasizes the need to minimize waste, find creative ways to reuse items, and recycle
              materials to conserve resources.
            </p>
            <ul>
              <li className="list">Reduce waste by consuming only what is necessary and avoiding overuse.</li>
              <li className="list">Reuse materials creatively to give them a second life and minimize discards.</li>
              <li className="list">Recycle responsibly to transform waste into useful products, conserving natural resources.</li>
            </ul>
          </Col>
          <Col md={6} sm={12} className="image-column">
            <div className="image-section">
              <div className="image-container">
                <img
                  src="/src/all_image/earth.jpg"
                  alt="Main Recycling Image"
                  className="main-image"
                />
                <img
                  src="/src/all_image/k.jpg"
                  alt="Overlay 1"
                  className="overlay-image one"
                />
                <img
                  src="/src/all_image/r.jpeg"
                  alt="Overlay 2"
                  className="overlay-image two"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Testimonial Section */}
      
        <div className="testimonial-section">
            <div className="testimonial-image">
                <img src="../src/all_image/home garbag.png" alt="Junk Van" />
            </div>
            <div className="testimonial-content">
                <h1 className="testimonial-title">Trash2Cash Home </h1>
                <p className="testimonial-description">
                    With our new service, you can declutter your home or business while earning
                    money. With Trash2Cash, the process is simple and rewarding. You’ll receive
                    cash in exchange for recycling your waste. This helps keep your surroundings clean and supports the environment.
                </p>
            </div>
        </div>
 <h1 className="Step text-center">3 Step to Sell your Trash</h1>
{/* Card Section */}
<div className="card-section">
  {[
    {
      title: 'Choose Material',
      video: 'Material.mp4',
      text: 'Out of our 4 scrap categories choose the one you want to sell.'
    },
    {
  
           
      title: 'Schedule Pickup',
      video: 'schedule.mp4',
      text: 'Select your preferred date and add the necessary details for pickup.'
    },
    {
      title: 'Schedule Pickup',
      video: 'receive.mp4',
      text: 'Receive payment in any one of the three payment modes via cash or UPI.'}
  ].map((card, index) => (
    <Card key={index} className="custom-card">
      <div className="card-video-container">
      <video className="card-video" src={`/video/${card.video}`} autoPlay loop muted></video>

      </div>
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.text}</Card.Text>
      </Card.Body>
    </Card>
  ))}
</div>


      {/* Process Section */}
      <h1 className="head display-4 text-success text-center">Our Process</h1>
      <div className="process-section bg-green-500 p-8 rounded-2xl flex flex-wrap justify-between items-center gap-4">
       
        <div className="process-steps-left flex flex-col gap-6">
          <div className="process-card bg-green-300 text-white p-4 rounded-lg shadow-md">
            <p className="font-bold text-lg text-center">01. COLLECTION</p>
          </div>
          <div className="process-card bg-green-300 text-white p-4 rounded-lg shadow-md">
            <p className="font-bold text-lg text-center">02. SEPARATION</p>
          </div>
        </div>

        <div className="image-column">
          <img
            src="/src/all_image/recycls.png"
            alt="Recycling Process"
            className="main-image"
          />
        </div>

        {/* Right Process Steps */}
        <div className="process-steps-right flex flex-col gap-6">
          <div className="process-card bg-green-300 text-white p-4 rounded-lg shadow-md">
            <p className="font-bold text-lg text-center">03. TREATMENT</p>
          </div>
          <div className="process-card bg-green-300 text-white p-4 rounded-lg shadow-md">
            <p className="font-bold text-lg text-center">04. RECYCLE</p>
          </div>
          <div className="process-card bg-green-300 text-white p-4 rounded-lg shadow-md">
            <p className="font-bold text-lg text-center">05. REINTRODUCE TO ECONOMY</p>
          </div>
        </div>
      </div>

      {/* Know More Link */}
      <div className="text-center mt-6">
      <Link
  to="/detail"
  className="know-more text-green-700 font-semibold hover:underline"
>
  Know More &gt;&gt;
</Link>



      </div>
    </div>
  );
}

export default HomePage;
