import React from "react";
import styles from "./Waste.module.css";
import { Card, Container, Row, Col } from "react-bootstrap";

import leftWeast from '../all_image/left-weast.png';
import weast from '../all_image/weast.png';
import collation from '../all_image/colleaction.webp';
import separation from '../all_image/our_impact.webp';
import treatment from '../all_image/termitaed.webp';
import enviroment  from '../all_image/our_impact.webp';
import ourImpact from '../all_image/our_impact.webp';

const WasteCollection = () => {
  return (
    <>


      {/* Center Heading */}
      <div className={styles.centerHeading}>
        <img src={leftWeast} className={styles.leftImg} alt="Recycle Left" />
        <p className={styles.westHead}>Waste Collection Services</p>
        <img src={weast} className={styles.rightImg} alt="Recycle Right" />
      </div>
      {/* cards for step by step recycyle */}
    <Container className="mt-5 mb-5">
      <Row className="gy-4"> {/* Responsive row with gap */}
        <Col xs={12} sm={6} md={4} lg={3}> {/* Auto-adjusts on different screens */}
          <Card className="h-100 shadow">
            <Card.Img variant="top" src={collation} alt="Waste Collection" />
            <Card.Body>
              <Card.Title>Collection</Card.Title>
              <Card.Text>
                We collect waste from your location. Just place a request.
                Consumers dispose of newspapers, milk packets, plastic bottles, or other scraps.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="h-100 shadow">
            <Card.Img variant="top" src={separation} alt="Separation Process" />
            <Card.Body>
              <Card.Title>Separation</Card.Title>
              <Card.Text>
                Collected waste is sorted into different recyclable categories (Plastic, Paper, Metal, and Glass)
                to ensure efficient recycling and environmental sustainability.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="h-100 shadow">
            <Card.Img variant="top" src={treatment} alt="Waste Treatment" />
            <Card.Body>
              <Card.Title>Treatment</Card.Title>
              <Card.Text>
                Sorted recyclable waste is cleaned, processed, and sent for recycling to ensure sustainability
                and reduce environmental impact.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card className="h-100 shadow">
            <Card.Img variant="top" src={enviroment} alt="Environmental Impact" />
            <Card.Body>
              <Card.Title>Environmental Impact</Card.Title>
              <Card.Text>
                By recycling plastic, paper, metal, and glass, we help reduce landfill waste, conserve natural resources,
                and minimize pollution, contributing to a cleaner and greener environment.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>


    <div className="container mt-5">
      <h2 className="card-title text-success text-center mt-5">
        🌍Our Impact / Sustainability Goals
      </h2>

      <div className="row align-items-center mt-4">
        {/* Left Side: Description */}
        <div className="col-lg-7 col-12 order-lg-1 order-2">
          <div className="card-body">
            <p className="mt-4 text-justify-custom">
              At our core, we are committed to making a significant impact on the environment through sustainable waste management. To date, we have successfully recycled thousands of kilograms of plastic, paper, metal, and glass, diverting waste away from landfills and reducing harmful carbon emissions. Our efforts not only help conserve natural resources but also promote a circular economy where materials are reused and repurposed efficiently.
            </p>
            <p className="text-justify-custom">
              Through continuous awareness campaigns and responsible waste collection, we ensure that recyclable waste is properly sorted and processed. By collaborating with individuals, businesses, and local authorities, we aim to create a culture of sustainability that benefits both present and future generations.
            </p>
            <p className="text-justify-custom text-dark">
              <strong>Future Plans:</strong> Looking ahead, we plan to expand our recycling services to reach more households, businesses, and industries. Our goal is to introduce cutting-edge waste management solutions, including AI-powered sorting systems and eco-friendly packaging alternatives. Additionally, we aim to collaborate with schools and organizations to educate communities about sustainable practices. By forming new partnerships and investing in green technology, we envision a future where waste is minimized, and the environment thrives.
            </p>
            <p className="fw-bold text-dark">
              Together, we can build a cleaner, greener world—one step at a time. 🌱♻️
            </p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="col-lg-5 col-12 text-center order-lg-2 order-1 mb-4">
          <img
            src={ourImpact}
            alt="Sustainability Goals"
            className="img-fluid rounded w-100"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>

      {/* Accepted & Non-Accepted Items Table */}
      <div className="container mt-5">

        <div className="card shadow-lg">
          <div className="card-body">
            <h2 className="text-center text-success mb-3">Accepted & Non-Accepted Items 📦</h2>
            <div className="table-responsive">
              <table className="table table-bordered text-center">
                <thead className="table">
                  <tr>
                    <th>Accepted Items</th>
                    <th>Not Accepted Items</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Plastic Bottles</td>
                    <td>Medical Waste</td>
                  </tr>
                  <tr className="table-light">
                    <td>Newspapers & Magazines</td>
                    <td>E-Waste (Batteries, Electronics)</td>
                  </tr>
                  <tr>
                    <td>Glass Bottles</td>
                    <td>Hazardous Chemicals</td>
                  </tr>
                  <tr className="table-light">
                    <td>Metal Scraps</td>
                    <td>Food Waste</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    

    </>
  );
};

export default WasteCollection;



