import React from "react";
import "./Videos.scss";

const Videos = () => {
  return (
    <div className="videos-container">
      <h2 className="video-title-container">Video Work</h2>
      <div className="iframe-container">
        <iframe
          src="https://www.youtube.com/embed/RclT8vcrZ3s"
          width={300}
          height={200}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
          title="SS23 My Name Is"
        />
        <iframe
          width={300}
          height={200}
          src="https://www.youtube.com/embed/Lvu2B5BAOqQ"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          title="Napapijri Spring/Summer '20 Choose Future - The Tribe"
        />
        <iframe
          width={300}
          height={200}
          src="https://www.youtube.com/embed/5fA9EmDl8nY"
          title="iyla - 2LATE (Official Video)"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
    </div>
  );
};

export default Videos;
