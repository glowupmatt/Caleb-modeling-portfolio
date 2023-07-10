import React from "react";
import { portfolioData } from "../calebData/portfolioData";
import PhotoCard from "./PhotoCard";
import "./AdWorkPage.scss";
import { Link } from "react-router-dom";

const AdWorkPage = () => {
  return (
    <div className="main-ad-work-container">
      <div className="text-container">
        <h2>Portfolio</h2>
        <p>Ad Work</p>
      </div>

      <div className="ad-work-image-grid">
        {portfolioData[0].map((data, index) => {
          const extractedImgLink = data.photoArr.map((image) => image);
          return (
            <Link
              to={`/adWork/${data.title}`}
              className="ad-work-card-container link-styles "
            >
              <img
                alt={data.title}
                key={index}
                src={extractedImgLink[0]}
                className="ad-image-container"
              />
              <p>{data.title.replaceAll("-", " ")}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AdWorkPage;
