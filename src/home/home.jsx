import React, { useState } from "react";
import './home.css'; // Ensure the correct path for the CSS file

function HomePage() {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <div className="homepage-container">
      {/* First Video Section */}
      <div className="custom-container">
        <video className="background-video" autoPlay muted loop>
          <source src="public/videos/video2.mp4" type="video/mp4" />
        </video>
        <div className="content-overlay">
          <p className="styled-paragraph">
            SELL YOUR JUNK HERE!
            <p className="subtext">
              Newpaper-Plastic-Metal
            </p>
          </p>
          <button className="custom-button" onClick={handleClick}>
           View Dettail
          </button>
          {showText && <p className="additional-text">Recycling turns trash into useful products, generates income, and reduces pollution!</p>}
        </div>
      </div>

    
    </div>
  );
}

export default HomePage;
