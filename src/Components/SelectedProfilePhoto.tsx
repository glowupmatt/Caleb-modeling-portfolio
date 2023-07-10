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
                      ? "selected-photo-side-guide link-styles "
                      : "photo-side-guide link-styles "
                  }
                />
              </Link>
            );
          })}
        </div>
        <div className="profile-collection-container">
          <h2>Fittings</h2>
          {filteredImage.map((data) => (
            <img
              src={data.img}
              alt={profilePhotos.title}
              className="profile-collection-picture"
            />
          ))}
          <ul className="size-list">
            <li>Height: 5'10</li>
            <li>Hair: Black</li>
            <li>Eyes: Brown</li>
            <li>JKT: 38</li>
            <li>Shirt: Medium</li>
            <li>Waist: 32</li>
            <li>Shoe: 10</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SelectedProfilePhoto;
