import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { profilePhotos } from "../calebData/portfolioData";
import "./SelectedProfilePhoto.scss";
import PhotoCard from "./PhotoCard";

const SelectedProfilePhoto = () => {
  const id = useParams();
  const newId = id.id;
  const [selected, setSelected] = useState(newId);

  const filteredImage = profilePhotos.photoArr.filter(
    (data) => data.photoId === selected
  );

  return (
    <div>
      <h2 className="profile-photos-title">Profile Photos</h2>
      <div className="profile-photo-container">
        <div className="profile-side-menu">
          {profilePhotos.photoArr.map((data) => {
            return (
              <Link to={`/profilePhotos/${data.photoId}`} key={data.photoId}>
                <img
                  src={data.img}
                  alt={data.photoId}
                  onClick={() => setSelected(data.photoId)}
                  className={
                    selected === data.photoId
                      ? "selected-photo-side-guide"
                      : "photo-side-guide"
                  }
                />
              </Link>
            );
          })}
        </div>
        <div className="profile-collection-container">
          {filteredImage.map((data) => (
            <img
              src={data.img}
              alt={profilePhotos.title}
              className="profile-collection-picture"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedProfilePhoto;
