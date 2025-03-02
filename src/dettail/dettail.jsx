import React from "react";
import styles from "./dettail.module.css";

const steps = [
  
  {
    id: 1,
    title: "Step 1: Collection",
    description: "We collect waste from your location. Just place a request. Consumers dispose of newspapers, milk packets, plastic bottles, or other scraps.",
    image: "/src/all_image/Collection.png",
  },
  {
    id: 2,
    title: "Step 2: Separation",
    description: "Collected waste is sorted into organic, recyclable, and non-recyclable categories to ensure proper disposal, recycling, and environmental safety.",
    image: "/src/all_image/Separation.png",
  },
  {
    id: 3,
    title: "Step 3: Treatment",
    description:  "Sorted waste undergoes processing, where organic waste is composted, recyclables are cleaned and processed, and hazardous waste is safely disposed of.",
    image: "/src/all_image/Treatment.png",
  },
  {
    id: 4,
    title: "Step 4: Recycle",
    description: "Recyclable materials like plastic, paper, and metal are processed and transformed into new products, reducing waste and conserving resources.",
    image: "/src/all_image/Recycle1.png",
  },
  {
    id: 5,
    title: "Step 5: Reintroduce to Economy",
    description: "Recycled materials are used to create new products, reducing raw material consumption and promoting a sustainable economy.",
    image: "/src/all_image/Economy.png"
  }
];

const Dettail = () => {
  return (
   
    <div className={styles.container}>
        <div className={styles.mainHeader}>
        <h1>Waste Collection</h1>
      </div>
      <div className={styles.header}>
        <h3>Our Development Process</h3>
      </div>

      <div className={styles.process}>
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`${styles.sectionContainer} ${index % 2 === 0 ? styles.normal : styles.reverse}`}
          >
            <div className={styles.text}>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </div>
            <img
              src={step.image}
              alt={step.title}
              className={styles.image}
              srcSet={`${step.image} 480w, ${step.image} 768w, ${step.image} 1024w`}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 80vw, 50vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dettail;
