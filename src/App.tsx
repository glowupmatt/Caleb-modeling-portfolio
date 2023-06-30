import React, { useState } from "react";
import "./App.scss";
import NavBar from "./Components/NavBar";
import ImageSlider from "./Components/ImageSlider";
import { About } from "./Components/About";
import ImageCarousel from "./Components/ImageCarousel";

const App = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  return (
    <div className={navBarOpen === true ? "navBarOpened" : "App"}>
      <NavBar navBarOpen={navBarOpen} setNavBarOpen={setNavBarOpen} />
      <ImageSlider />
      <About />
      <ImageCarousel />
    </div>
  );
};

export default App;
