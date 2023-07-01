import React, { useState } from "react";
import "./App.scss";
import NavBar from "./Components/NavBar";
import ImageSlider from "./Components/ImageSlider";
import { About } from "./Components/About";
import ImageCarousel from "./Components/ImageCarousel";
import { EmblaOptionsType } from "embla-carousel-react";
import "./embla.scss";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const App = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  return (
    <div className="App">
      <NavBar navBarOpen={navBarOpen} setNavBarOpen={setNavBarOpen} />
      <ImageSlider />
      <About />
      <ImageCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default App;
