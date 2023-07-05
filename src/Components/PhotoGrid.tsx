import React from "react";
import { portfolioData } from "../calebData/portfolioData";
import { Link, useParams } from "react-router-dom";
import "./PhotoCard.scss";

const PhotoGrid = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-title">
        <h2>Ad Work</h2>
      </div>
      <div className="portfolio-container-scroll">
        {portfolioData[0].map((data, index) => {
          return (
            <Link className="link-styles" to={`${data.title}`} key={index}>
              <img
                alt={data.title}
                src={data.photoArr[0]}
                className="portfolio-grid-image"
              />
              <p className="collection-title">
                {data.title.replaceAll("-", " ")}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PhotoGrid;

//.filter((data) => (data.photoArr.length > 1 ? data.photoArr[0] : null))
