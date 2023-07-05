import React from "react";
import { portfolioData } from "../calebData/portfolioData";
import { Link, useParams } from "react-router-dom";
import "./PhotoCard.scss";

const PhotoGrid = () => {
  return (
    <div className="portfolio-container">
      <h2 className="portfolio-title">Ad Work</h2>
      <div className="portfolio-container-scroll">
        {portfolioData[0].map((data, index) => {
          return (
            <Link to={`${data.title}`} key={index}>
              <img
                alt={data.title}
                src={data.photoArr[0]}
                className="portfolio-grid-image"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PhotoGrid;

//.filter((data) => (data.photoArr.length > 1 ? data.photoArr[0] : null))
