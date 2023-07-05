import React, { useState } from "react";
import PhotoCard from "./PhotoCard";
import { portfolioData } from "../calebData/portfolioData";
import { useParams, Link } from "react-router-dom";

// type selectedPhotoGridProps = {
//   selected: string;
//   setSelected: React.Dispatch<React.SetStateAction<string>>;
// };

const SelectedPhotoGrid = () => {
  const title = useParams();
  console.log(title.title);
  const [selected, setSelected] = useState("");

  return (
    <div className="grid-container">
      <ul className="side-menu">
        {portfolioData[0].map((data) => {
          return (
            <Link
              to={`/portfolio/${data.title}`}
              className="link-styles"
              key={data.title}
            >
              <li
                onClick={() => setSelected(data.title)}
                className={
                  selected === data.title || data.title === title.title
                    ? "title-list-name-container-selected"
                    : "title-list-name-container"
                }
              >
                {data.title.replaceAll("-", " ")}
              </li>
            </Link>
          );
        })}
      </ul>
      <div className="collection-container">
        {portfolioData[0]
          .filter((data) => data.title === title.title)
          .map((data, index) => (
            <PhotoCard key={index} data={data} index={index} />
          ))}
      </div>
    </div>
  );
};

export default SelectedPhotoGrid;
