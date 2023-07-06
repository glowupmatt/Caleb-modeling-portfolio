import React from "react";
import { videoInfoArr } from "../calebData/videoPortfolio";
import "./VideoPage.scss";
import Videos from "./Videos";

const VideoPage = () => {
  const videoType = ["Ad Work", "Music Videos"];
  return (
    <div className="video-page-container">
      <ul className="video-side-menu">
        {videoType.map((data, index) => {
          return (
            <div>
              <li className="title-list-name-container">{data}</li>
              <div className="collection-container">
                {videoInfoArr.map((data, index) => {
                  return <Videos data={data} index={index} />;
                })}
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default VideoPage;
