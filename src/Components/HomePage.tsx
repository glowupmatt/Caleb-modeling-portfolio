import React from "react";
import ImageSlider from "./ImageSlider";
import { About } from "./About";
import ImageCarousel from "./ImageCarousel";
import Videos from "./Videos";
import InputForm from "./InputForm";
import { EmblaOptionsType } from "embla-carousel-react";

const HomePage = () => {
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div>
      <ImageSlider />
      <div className="mobile-home">
        <About />
        <ImageCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};

export default HomePage;
