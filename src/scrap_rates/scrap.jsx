import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { FaRecycle, FaRegFileAlt, FaCog, FaGlassCheers } from 'react-icons/fa';
import bottleImage from '../all_image/bottel.jpg';
import mixPlasticImage from '../all_image/mix plastic.jpg';
import High from '../all_image/high-density.webp';
import "./scrap.css";

export default class Scrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCard: null,
    };
  }

  handleButtonClick = (type) => {
    this.setState({ selectedCard: type });
  };

  renderCardContent() {
    const { selectedCard } = this.state;
    let cards = [];

    switch (selectedCard) {
      case 'Paper':
        cards = [
          { title: 'Office paper', image: 'holder.js/100px180' , price: '₹ 10 /kg' },
          { title: 'Newspapers', image: 'holder.js/100px180' , price: '₹ 14 /kg'},
          {title: 'Mixpapper', image: 'holder.js/100px180', price: '₹ 13 /kg'}
        ];
        break;
      case 'Metal':
        cards = [
          { title: 'Metal Aluminum', image: 'holder.js/100px180' , price: '₹ 20 /kg'},
          { title: 'Copper', image: 'holder.js/100px180',price: '₹ 30 /kg' },
          {title: 'Seetl', image: 'holder.js/100px180',price: '₹ 40 /kg'}
        ];
        break;
      case 'Glass':
        cards = [
          { title: 'Beer Bottle Glass ', image: 'holder.js/100px180',price: '₹ 20 /kg' },
          { title: 'Mix Glass', image: 'holder.js/100px180',price: '₹ 20 /kg' }
        ];
        break;
      default:
        cards = [
          { title: 'Plastic Bottle', image: bottleImage, price: '₹ 10 /kg' },
          { title: 'Mix Plastic', image: mixPlasticImage, price: '₹ 12 /kg' },
          { title: 'High-density Pool', image: High, price: '₹ 10 /kg' }
        ];
    }

    return (
      <div className="row g-4"> 
        {cards.map((card, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4"> 
            <Card className="h-100">
              <Card.Img variant="top" src={card.image} alt={card.title} style={{ height: '150px' }} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                {card.price && <Card.Text><strong style={{ color: '#2e7d32' }}>{card.price}</strong></Card.Text>}
                <div className="d-flex">
                <button className="btn  btn-success w-40" >Sell Your Items</button>  {/* Add to Cart button */}
                <button className="btn ms-4  btn-danger w-40" >Add to Cart</button>  {/* Add to Cart button */}

                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="container py-4">
        <h1 className="text-center mb-4">Rates</h1>
        <div className='row'>
          <div className="col-12 col-md-3">
            <Form.Select className='mb-3' aria-label="Select Location">
              <option>Patna</option>
              <option value="1">Siwan</option>
              <option value="2">Chhapra</option>
              <option value="3">Muzaffarpur</option>
            </Form.Select>
            <p className="plastic" onClick={() => this.handleButtonClick('Plastic')}> <FaRecycle /> Plastic</p>
            <p className="plastic" onClick={() => this.handleButtonClick('Paper')}> <FaRegFileAlt /> Paper</p>
            <p className="plastic" onClick={() => this.handleButtonClick('Metal')}> <FaCog /> Metal</p>
            <p className="plastic" onClick={() => this.handleButtonClick('Glass')}> <FaGlassCheers /> Glass</p>
          </div>

          <div className="col-12 col-md-9">
            <p className=' text-center value'>Minimum Pickup Value Must Be Rs:300/-</p>
            {this.renderCardContent()}
          </div>
        </div>
      </div>
    );
  }
}
