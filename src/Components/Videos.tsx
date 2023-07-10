import React from "react";
import "./Videos.scss";
import { videoInfoArr } from "../calebData/videoPortfolio";
import "./VideoPage.scss";

type videoProps = {
  data: {
    videoSource: string;
    title: string;
    width: number;
    height: number;
    type: string;
  };
  index: number;
};

const Videos = ({ data, index }: videoProps) => {
  return (
    <div className="videos-container">
      <div className="video-card-container">
        <iframe
          src={data.videoSource}
          width={data.width}
          height={data.height}
          title={data.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="video-card-image"
        ></iframe>
      </div>
    </div>
  );
};

export default Videos;
