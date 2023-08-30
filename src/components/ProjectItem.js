import React from "react";
import { useState, useEffect } from "react";
import ImageComponent from "./testing";

const ProjectItem = (props) => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchImage = () => {
      try {
        const response = fetch(
          `https://raw.githubusercontent.com/Mario5312/${randomRepo}/main/`
        );
        if (response.ok) {
          const blob = response.blob();
          const url = URL.createObjectURL(blob);
          setImageData(url);
        } else {
          console.error("Failed to fetch image");
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, []);

  const { randomRepo } = props;
  console.log(randomRepo);

  const listRepos =
    randomRepo.length !== 0 ? (
      randomRepo.map((item) => (
        <div key={item.id} className="project">
          <h3>{item.name}</h3>

          <p>{item.description}</p>
        </div>
      ))
    ) : (
      <div className="project">No Repos found</div>
    );
  // this makes it contiune forever untill all of them are logged
  return <div className="Projects">{listRepos}</div>;
};

export default ProjectItem;
