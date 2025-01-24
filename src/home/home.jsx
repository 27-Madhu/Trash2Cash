import React from "react";
import './home.css'; // Ensure the correct path for the CSS file

function HomePage() {
  return (
    <div className="homepage-container">
      {/* First Video Section */}
      <div className="custom-container">
        <video className="background-video" autoPlay muted loop>
          <source src="public/videos/video2.mp4" type="video/mp4" />
        </video>
        <div className="content-overlay">
          <p className="styled-paragraph">
            SELL YOUR <span className="highlight">JUNK</span> HERE!
            <p className="subtext">
              Newpaper-Plastic-Metal

            </p>
            
          </p>
        </div>
      </div>

      {/* Second Image Section */}
      <div className="custom-container second-image">
        <img
          className="background-image"
          src="/src/all_image/background.jpg"
          alt="Background"
        />
        <div className="content-overlay">
          {/* Add more content here if needed */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
