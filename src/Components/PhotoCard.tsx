import React from "react";
import "./PhotoCard.scss";

type photoCardProps = {
  data: {
    shootID: number;
    title: string;
    desc: string;
    photoArr: string[];
  };
  index: number;
};

const PhotoCard = ({ data, index }: photoCardProps) => {
  return (
    <div className="card-container">
      {data.photoArr.map((image) => {
        return <img alt={data.title} src={image} className="card-image" />;
      })}
    </div>
  );
};

export default PhotoCard;
