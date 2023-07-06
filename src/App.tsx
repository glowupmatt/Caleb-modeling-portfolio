import React, { useState } from "react";
import "./App.scss";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import PhotoGrid from "./Components/PhotoGrid";
import SelectedPhotoGrid from "./Components/SelectedPhotoGrid";
import VideoPage from "./Components/VideoPage";
import { About } from "./Components/About";
import InputForm from "./Components/InputForm";
import SelectedProfilePhoto from "./Components/SelectedProfilePhoto";
import PortraitsPage from "./Components/PortraitsPage";

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
          <Route path="profilePhotos/:id" element={<SelectedProfilePhoto />} />
          <Route path="portraitPhotos/:id" element={<PortraitsPage />} />
          <Route path="videos/" element={<VideoPage />} />
          <Route path="about/" element={<About />} />
          <Route path="contact/" element={<InputForm />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
