import React from "react";
import { profilePhotos } from "../calebData/portfolioData";

const ProfilePhotosPage = () => {
  return (
    <div className="main-ad-work-container">
      <div className="text-container">
        <h2>Portfolio</h2>
        <p>PROFILE</p>
      </div>

      <div className="ad-work-image-grid">
        {profilePhotos.photoArr.map((data, index) => {
          return (
            <div className="ad-work-card-container">
              <img
                alt={profilePhotos.title}
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

export default ProfilePhotosPage;
