import React from 'react';
import styles from "./wasteCategories.module.css";
import leftWeast from '../all_image/left-weast.png';
import weast from '../all_image/weast.png';
import papper from '../all_image/papper.webp';
import plastic from '../all_image/plastic.webp';
import metal from '../all_image/metal.webp';
import glass from '../all_image/plastic.webp';
export default function WasteCategories() {
  return (
    <div className='containe '>
      
      <div className={styles.centerHeading}>
              <img src={leftWeast} className={styles.leftImg} alt="Recycle Left" />
              <h1 className='text-center text-success'>♻️ Waste Categorization</h1>
              <img src={weast} className={styles.rightImg} alt="Recycle Right" />
      </div>
      <div className="container">
         {/* Waste Categories */}
      <div className='row mt-4'>
        {wasteData.map((waste, index) => (
          <div key={index} className='col-lg-6 col-md-6 col-sm-12 mb-4'>
            <div className='card shadow-lg p-3'>
              <div className='row align-items-center'>
                <div className='col-4 text-center'>
                  <img src={waste.image} alt={waste.title} className='img-fluid' style={{ maxHeight: '100px' }} />
                </div>
                <div className='col-8'>
                  <h4 className='text-success'>{waste.title}</h4>
                  <p>{waste.description}</p>
                  <strong className='text-success'>Impact: {waste.impact}</strong>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* User Contribution Tracker */}
      <div className='text-center bg-light p-4 rounded shadow-sm my-4'>
        <h3 className='text-dark'>🌍 Your Contribution</h3>
        <p className='text-muted'>You've helped recycle <strong>500kg</strong> of waste! Keep going for a greener future! 🌱</p>
      </div>
      
      {/* Call to Action */}
      <div className='text-center mt-4'>
        <h4>Join Us in Recycling!</h4>
        <p>Schedule a waste pickup and contribute to a cleaner planet.</p>
        <button className='btn btn-success'>Book a Waste Pickup</button>
      </div>
      
      {/* Fun Facts & Quiz */}
      <div className='mt-5 mb-5'>
        <h3 className='text-info text-center'>🤔 Did You Know?</h3>
        <ul className='list-group mt-3'>
          <li className='list-group-item'>Recycling 1 ton of paper saves 17 trees! 🌳</li>
          <li className='list-group-item'>Glass is 100% recyclable and can be reused endlessly! 🏺</li>
          <li className='list-group-item'>Metal recycling saves 75% of energy compared to new production! ⚙️</li>
          <li className='list-group-item'>Plastic can take up to 500 years to decompose in landfills! 🛍️</li>
        </ul>
      </div>

      </div>


     
    </div>
  );
}

// Waste Data Array
const wasteData = [
  {
    title: 'Paper',
    image: papper,  // No need for src or quotes
    description: 'Recycling paper reduces deforestation and saves energy.',
    impact: 'Saves 17 trees per ton',
  },
  {
    title: 'Plastic',
    image: plastic,
    description: 'Recycling plastic reduces pollution and saves marine life.',
    impact: 'Reduces 90% energy consumption',
  },
  {
    title: 'Metal',
    image: metal,
    description: 'Metal recycling conserves natural resources and reduces CO2.',
    impact: 'Lowers carbon emissions by 75%',
  },
  {
    title: 'Glass',
    image: glass,
    description: 'Recycling glass saves energy and reduces landfill waste.',
    impact: 'Uses 30% less energy',
  },
];
