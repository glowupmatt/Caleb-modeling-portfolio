import React from "react";
import { videoInfoArr } from "../calebData/videoPortfolio";
import "./VideoPage.scss";
import Videos from "./Videos";

const VideoPage = () => {
  const videoType = ["Ad Work", "Music Videos"];
  return (
    <div className="video-page-container">
      <ul className="video-side-menu">
        <div className="video-scroll">
          <div className="video-title-img-one">
            <h2 className="video-title-list-name-container video-title-img-one">
              {videoType[0]}
            </h2>
          </div>
          <div className="collection-container">
            {videoInfoArr
              .filter((data) => data.type === videoType[0])
              .map((data, index) => {
                return <Videos data={data} index={index} />;
              })}
          </div>
        </div>
        <div className="video-scroll">
          <h2 className="video-title-list-name-container video-title-img-two">
            {videoType[1]}
          </h2>
          <div className="collection-container">
            {videoInfoArr
              .filter((data) => data.type === videoType[1])
              .map((data, index) => {
                return <Videos data={data} index={index} />;
              })}
          </div>
        </div>
      </ul>
    </div>
  );
};

export default VideoPage;
