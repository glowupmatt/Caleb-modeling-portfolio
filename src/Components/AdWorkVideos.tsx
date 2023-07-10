import React from "react";
import { videoInfoArr } from "../calebData/videoPortfolio";
import Videos from "./Videos";
import "./AdWorkVideos.scss";

const AdWorkVideos = () => {
  const videoType = ["Ad Work", "Music Videos"];
  return (
    <div>
      <div>
        <h2>Ad Work</h2>
        <div className="collection-grid">
          {videoInfoArr
            .filter((data) => data.type === videoType[0])
            .map((data, index) => {
              return <Videos data={data} index={index} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default AdWorkVideos;
