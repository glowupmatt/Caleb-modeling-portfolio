import React from "react";
import { portfolioPortraits } from "../calebData/portfolioData";
import { Link } from "react-router-dom";

const PortraitPhotosPage = () => {
  return (
    <div className="main-ad-work-container">
      <div className="text-container">
        <h2>Portfolio</h2>
        <p>PORTRAITS</p>
      </div>

      <div className="ad-work-image-grid">
        {portfolioPortraits.photoArr.map((data, index) => {
          return (
            <div className="ad-work-card-container">
              <img
                alt={portfolioPortraits.title}
                key={index}
                src={data.img}
                className="ad-image-container"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortraitPhotosPage;
