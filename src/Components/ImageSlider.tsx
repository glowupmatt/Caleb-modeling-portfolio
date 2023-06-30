import React from "react";
import "./ImageSlider.scss";
import { HeroImageSlider } from "../calebData/HomePageSlider";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/scrollbar";

const ImageSlider = () => {
  return (
    <div className="image-slider">
      {HeroImageSlider.map((img, index) => {
        return (
          <div className="image-container">
            <img alt="" src={img.image} className="image" />
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
