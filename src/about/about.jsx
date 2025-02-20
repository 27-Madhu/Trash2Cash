import React, { useEffect } from 'react';
import './about.css';

const About = () => {
  
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "your-unique-id";
    const script = document.createElement("script");
    script.src = "https://client.crisp.chat/l.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div>
      {/* Top Banner */}
      <div className="top-banner">
        <div className="banner-text">
          <h1>About Us</h1>
          <a href="#about" className="cta-btn">Learn More</a>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="ab-container">
        <p className="ab-subtitle">Turning waste into wealth by promoting recycling and sustainability.</p>
        <div className="about-content">
          {[
            { img: "/src/all_image/report.png", title: "Our Mission", desc: "To create a cleaner planet by encouraging waste recycling and rewarding users.", link: "#", btnText: "Contact" },
            { img: "/src/all_image/work.png", title: "How It Works", desc: "Users can collect recyclable waste, bring it to our centers, and earn rewards.", link: "/detail", btnText: "Learn More" },
            { img: "/src/all_image/time.png", title: "Impact", desc: "We have recycled 1000+ tons of waste and helped 5000+ users earn rewards!", link: "#", btnText: "Impact" }
          ].map((box, index) => (
            <div className="boxes" key={index}>
              <img src={box.img} alt={box.title} />
              <h3>{box.title}</h3>
              <p>{box.desc}</p>
              <a href={box.link} className="bn">{box.btnText}</a>
            </div>
          ))}
        </div>
      </div>

      {/* Belief Section */}
      <div className="row-container">
        <div className="text-content">
          <h2 className="to text-success">Our Belief</h2>
          <p>
            We believe that India can be a greener and cleaner country, as every household commits to getting their dry scrap recycled, not only resources can be saved from over-exploitation, but the landfills with mixed harmful garbage can be eradicated.
          </p>
          <h3 className="k text-success">Minimizing landfills</h3>
          <ul>
            <li>Landfills are spreading across India at a fast pace making it more complex each day to manage the waste management value chain.</li>
            <li>But, this can be tackled only when we start waste management from our homes in the way of waste segregation.</li>
            <li>We get the dry segregated waste recycled as you sell your scrap to us.</li>
          </ul>
        </div>
        <div className="image-content">
          <img src="/src/all_image/garbag.png" alt="Landfill" className="landfill-img" />
        </div>
      </div>
    </div>
  );
};

export default About;
