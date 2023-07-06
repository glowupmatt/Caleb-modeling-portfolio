import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { portfolioPortraits } from "../calebData/portfolioData";

const PortraitsPage = () => {
  const id = useParams();
  const newId = id.id;
  const [selected, setSelected] = useState(newId);

  const filteredImage = portfolioPortraits.photoArr.filter(
    (data) => data.photoId === selected
  );

  return (
    <div>
      <h2 className="profile-photos-title">{portfolioPortraits.title}</h2>
      <div className="profile-photo-container">
        <div className="profile-side-menu">
          {portfolioPortraits.photoArr.map((data) => {
            return (
              <Link to={`/portraitPhotos/${data.photoId}`} key={data.photoId}>
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
              alt={portfolioPortraits.title}
              className="profile-collection-picture"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortraitsPage;
