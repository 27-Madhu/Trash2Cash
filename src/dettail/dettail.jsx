import React from 'react';
import './dettail.css';

const Dettail = () => {
  return (
    <>
      <header>
        <h3>WASTE PROCESSED</h3>
      </header>

      <section className="process">
        <div className="section-container">
          <div className="text">
            <h2>01. Collection</h2>
            <p>We collect waste from your location. Just place a request. Consumers dispose of newspapers, milk packets, plastic bottles, or other scraps.</p>
          </div>
          <img src="/src/all_image/Collection.png" alt="Collection" />
        </div>

        <div className="section-container">
          <div className="text">
            <h2>02. Separation</h2>
            <p>Collected waste is sorted into organic, recyclable, and non-recyclable categories to ensure proper disposal, recycling, and environmental safety.</p>
          </div>
          <img src="/src/all_image/Separation.png" alt="Separation" />
        </div>

        <div className="section-container">
          <div className="text">
            <h2>03. Treatment</h2>
            <p>Sorted waste undergoes processing, where organic waste is composted, recyclables are cleaned and processed, and hazardous waste is safely disposed of.</p>
          </div>
          <img src="/src/all_image/Treatment.png" alt="Treatment" />
        </div>

        <div className="section-container">
          <div className="text">
            <h2>04. Recycle</h2>
            <p>Recyclable materials like plastic, paper, and metal are processed and transformed into new products, reducing waste and conserving resources.</p>
          </div>
          <img src="/src/all_image/Recycle1.png" alt="Recycle" />
        </div>

        <div className="section-container">
          <div className="text">
            <h2>05. Reintroduce to Economy</h2>
            <p>Recycled materials are used to create new products, reducing raw material consumption and promoting a sustainable economy.</p>
          </div>
          <img src="/src/all_image/Economy.png" alt="Economy" />
        </div>
      </section>
    </>
  );
};

export default Dettail;
