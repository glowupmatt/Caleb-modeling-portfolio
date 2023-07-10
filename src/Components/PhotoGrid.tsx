import React from "react";
import { portfolioData } from "../calebData/portfolioData";
import { Link, useParams } from "react-router-dom";
import { profilePhotos, portfolioPortraits } from "../calebData/portfolioData";
import "./PhotoCard.scss";

const PhotoGrid = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-title-one">
        <h2>Ad Work</h2>
      </div>
      <div className="portfolio-container-scroll">
        {portfolioData[0].map((data, index) => {
          return (
            <Link
              className="link-styles"
              to={`/adWork/${data.title}`}
              key={index}
            >
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
      <div className="portfolio-title-two">
        <h2>Profile Photos</h2>
      </div>
      <div className="portfolio-container-scroll">
        {profilePhotos.photoArr.map((data, index) => {
          return (
            <Link
              className="link-styles"
              to={`/profilePhotos/${data.photoId}`}
              key={index}
            >
              <img
                alt={profilePhotos.title}
                src={data.img}
                className="portfolio-grid-image"
              />
            </Link>
          );
        })}
      </div>
      <div className="portfolio-title-three">
        <h2>Portraits</h2>
      </div>
      <div className="portfolio-container-scroll">
        {portfolioPortraits.photoArr.map((data, index) => {
          return (
            <Link
              className="link-styles"
              to={`/portraitPhotos/${data.photoId}`}
              key={index}
            >
              <img
                alt={profilePhotos.title}
                src={data.img}
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
