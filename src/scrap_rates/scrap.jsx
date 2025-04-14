import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { FaRecycle, FaRegFileAlt, FaCog, FaGlassCheers } from 'react-icons/fa';
import bottleImage from '../all_image/bottel.jpg';
import mixPlasticImage from '../all_image/mix plastic.jpg';
import Carousel from 'react-bootstrap/Carousel';
import "./scrap.css";

const Scrap = () => {
  const [selectedCard, setSelectedCard] = useState("Plastic");
  const [rates, setRates] = useState([]);

  useEffect(() => {
    const savedRates = localStorage.getItem("scrapRates");
    if (savedRates) {
      setRates(JSON.parse(savedRates));
    }
  }, []);

  const categoryIcons = {
    Plastic: <FaRecycle />,
    Paper: <FaRegFileAlt />,
    Metal: <FaCog />,
    Glass: <FaGlassCheers />,
  };

  const getFilteredRates = () => {
    return rates.filter((rate) => rate.category === selectedCard);
  };

  return (
    <div className="container py-4">
      <h1 className="text-center head mb-4">Rates</h1>
      <div className="row">
        {/* Left Sidebar: Location & Category */}
        <div className="col-12 col-md-3">
          <select className='form-select mb-3'>
            <option>Patna</option>
            <option>Siwan</option>
            <option>Chhapra</option>
            <option>Muzaffarpur</option>
          </select>

          {["Plastic", "Paper", "Metal", "Glass"].map((cat) => (
            <p
              className={`plastic ${selectedCard === cat ? 'selected' : ''}`}
              key={cat}
              onClick={() => setSelectedCard(cat)}
              style={{ cursor: "pointer" }}
            >
              {categoryIcons[cat]} {cat}
            </p>
          ))}
        </div>

        {/* Right Content: Cards */}
        <div className="col-12 col-md-9">
          <p className="text-center value">Minimum Pickup Value Must Be Rs: 300/-</p>
          <div className="row g-4">
            {getFilteredRates().map((card, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4">
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={mixPlasticImage} // Change based on type if you want
                    style={{ height: '150px', width: '100%' }}
                  />
                  <Card.Body>
                    <Card.Title>{card.type}</Card.Title>
                    <Card.Text>
                      <strong style={{ color: '#2e7d32' }}>₹ {card.price} /kg</strong>
                    </Card.Text>
                    <Link to="/sell" className="btn sell-btn btn-success">
                      Sell Your Items
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Carousel issue fixed */}
      <div className="testomonial">
        <p className="cust-say">What Our Customers Say</p>
        <Carousel slide={false}>
          <Carousel.Item>
            <Card className="text-center mx-auto" style={{ width: "90%", padding: "20px" }}>
              <Card.Img variant="top" src={bottleImage} style={{ width: "100px", height: "60px", margin: "0 auto", borderRadius: "50%" }} />
              <Card.Body>
                <Card.Title>First Slide</Card.Title>
                <Card.Text>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>

          <Carousel.Item>
            <Card className="text-center mx-auto" style={{ width: "90%", padding: "20px" }}>
              <Card.Img variant="top" src={bottleImage} style={{ width: "100px", height: "60px", margin: "0 auto", borderRadius: "50%" }} />
              <Card.Body>
                <Card.Title>Second Slide</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>

          <Carousel.Item>
            <Card className="text-center mx-auto" style={{ width: "90%", padding: "20px" }}>
              <Card.Img variant="top" src={mixPlasticImage} style={{ width: "100px", height: "60px", margin: "0 auto", borderRadius: "50%" }} />
              <Card.Body>
                <Card.Title>Third Slide</Card.Title>
                <Card.Text>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Scrap;

