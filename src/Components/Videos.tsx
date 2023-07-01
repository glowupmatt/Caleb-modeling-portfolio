import React from "react";
import "./Videos.scss";

const Videos = () => {
  return (
    <div>
      <div className="iframe-container">
        <iframe
          src="https://www.youtube.com/embed/RclT8vcrZ3s"
          width={300}
          height={200}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
          title="SS23 My Name Is"
        />
      </div>
    </div>
  );
};

export default Videos;
