import React from "react";
import { useState, useEffect } from "react";
import ImageComponent from "./testing";

const ProjectItem = (props) => {
  // const [imageData, setImageData] = useState("");

  const { repoProp, imageData } = props;
  // console.log(repoProp);
  // const fetchImage = (itemName) => {
  //   try {
  //     const response = fetch(
  //       `https://raw.githubusercontent.com/Mario5312/${itemName}/main/Thumbnail.jpg`
  //     );
  //     if (response.ok) {
  //       const blob = response.blob();
  //       const url = URL.createObjectURL(blob);
  //       setImageData(url);
  //     } else {
  //       console.error("Failed to fetch image");
  //       // console.log(itemName);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching image:", error);
  //   }
  // };

  const listRepos =
    repoProp.length !== 0 ? (
      repoProp.map((item) => (
        <div key={item.id} className="project">
          <h3>{item.name}</h3>
          <img
            src={`https://Mario5312.github.io/${item.name}/Contents/Thumbnail.JPG`}
            className="RepoImage"
            alt="GitHub Repository Image"
          />
          {/* <ImageComponent></ImageComponent> */}
          {/* {fetchImage(item.name)} */}
          {/* <img>{imageData}</img> */}
          {/* <p>{item.description}</p> */}
        </div>
      ))
    ) : (
      <div className="project">No Repos found</div>
    );
  // this makes it contiune forever untill all of them are logged
  return <div className="Projects">{listRepos}</div>;
};

export default ProjectItem;
