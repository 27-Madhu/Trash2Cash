import React from 'react';
import styles from './dettail.module.css';

const Dettail = () => {
  return (
    <>
      <header className={styles.header}style={{ marginTop: '8%' }}>
        <h3>Waste Processed</h3>
      </header>

      <section className={styles.process}>
        {processSteps.map((step, index) => (
          <div key={index} className={styles.sectionContainer}>
            <div className={styles.text}>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </div>
            <img src={step.image} alt={step.title} className={styles.image} />
          </div>
        ))}
      </section>
    </>
  );
};

const processSteps = [
  {
    title: "01. Collection",
    description: "We collect waste from your location. Just place a request. Consumers dispose of newspapers, milk packets, plastic bottles, or other scraps.",
    image: "/src/all_image/Collection.png"
  },
  {
    title: "02. Separation",
    description: "Collected waste is sorted into organic, recyclable, and non-recyclable categories to ensure proper disposal, recycling, and environmental safety.",
    image: "/src/all_image/Separation.png"
  },
  {
    title: "03. Treatment",
    description: "Sorted waste undergoes processing, where organic waste is composted, recyclables are cleaned and processed, and hazardous waste is safely disposed of.",
    image: "/src/all_image/Treatment.png"
  },
  {
    title: "04. Recycle",
    description: "Recyclable materials like plastic, paper, and metal are processed and transformed into new products, reducing waste and conserving resources.",
    image: "/src/all_image/Recycle1.png"
  },
  {
    title: "05. Reintroduce to Economy",
    description: "Recycled materials are used to create new products, reducing raw material consumption and promoting a sustainable economy.",
    image: "/src/all_image/Economy.png"
  }
];

export default Dettail;
