import React, { useState } from "react";
import "./App.scss";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import PhotoGrid from "./Components/PhotoGrid";
import SelectedPhotoGrid from "./Components/SelectedPhotoGrid";
import VideoPage from "./Components/VideoPage";
import { About } from "./Components/About";

const App = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <div className="App">
      <div>
        <NavBar navBarOpen={navBarOpen} setNavBarOpen={setNavBarOpen} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="portfolio/" element={<PhotoGrid />} />
          <Route path="portfolio/:title" element={<SelectedPhotoGrid />} />
          <Route path="videos/" element={<VideoPage />} />
          <Route path="about/" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
