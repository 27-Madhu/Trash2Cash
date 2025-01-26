import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { FaRecycle, FaRegFileAlt, FaCog, FaGlassCheers } from 'react-icons/fa'; // Import icons

import "./scrap.css";

export default class Scrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCard: null, // Tracks which button was clicked
    };
  }

  handleButtonClick = (type) => {
    this.setState({ selectedCard: type }); // Update the selected card
  };

  renderCardContent() {
    const { selectedCard } = this.state;

    switch (selectedCard) {
      default :
        return <div className="d-flex">
          <div className="card"> <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Plastic Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              
            </Card.Body>
            </Card>
          </div>
          <div className="card"> <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Plastic Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              
            </Card.Body>
          </Card>
          </div>
        </div>
      case 'Paper':
        return <div className="d-flex">
        <div className="card"> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Papper Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            
          </Card.Body>
          </Card>
        </div>
        <div className="card"> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Papper Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            
          </Card.Body>
        </Card>
        </div>
      </div>
      case 'Metal':
        return <div className="d-flex">
        <div className="card"> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Metal Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            
          </Card.Body>
          </Card>
        </div>
        <div className="card"> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            
          </Card.Body>
        </Card>
        </div>
      </div>
      case 'Glass':
        return <div className="d-flex">
        <div className="card"> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Glass Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            
          </Card.Body>
          </Card>
        </div>
        <div className="card"> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            
          </Card.Body>
        </Card>
        </div>
      </div>
    }
  }

  render() {
    return (
      <div className="con">
        <h1>Rates</h1>
        <div className='d-flex'>
          <div className="select">
            <Form.Select className='select' aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>

            {/* Buttons with Icons */}
            <p className="plastic" onClick={() => this.handleButtonClick('Plastic')}> <FaRecycle style={{ marginRight: '8px' }} /> Plastic</p>
            <p className="plastic" onClick={() => this.handleButtonClick('Paper')}> <FaRegFileAlt style={{ marginRight: '8px' }} /> Paper</p>
            <p className="plastic" onClick={() => this.handleButtonClick('Metal')}>  <FaCog style={{ marginRight: '8px' }} /> Metal</p>
            <p className="plastic" onClick={() => this.handleButtonClick('Glass')}> <FaGlassCheers style={{ marginRight: '8px' }} /> Glass</p>
            
          </div>

          <div className="item">
            {this.renderCardContent()}
          </div>
        </div>
      </div>
    );
  }
}
