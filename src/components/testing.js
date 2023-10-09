import React, { useState, useEffect } from "react";
import ProjectItem from "./ProjectItem";
const githubToken = process.env.REACT_APP_APIKEY;

const ImageComponent = () => {
  // const [randomRepo, setRandomRepo] = useState([]);
  const [imageData, setImageData] = useState(null);
  // const [imageUrl, setImageUrl] = useState([]);
  const [repoProp, setRepoProp] = useState([]);

  const randomRepositories = [];
  useEffect(() => {
    fetchImage();
  }, []);
  const results = [];

  const fetchImage = async () => {
    try {
      // const fetchedImages = [];
      // let attempts = 0;

      // while (fetchedImages.length < count && attempts < maxAttempts) {
      const response = await fetch(
        `https://api.github.com/users/Mario5312/repos`,
        {
          headers: {
            Authorization: `Bearer ${githubToken}`,
          },
        }
      );

      if (response.ok) {
        const repositories = await response.json();
        if (repositories.length >= 2) {
          const randomRepoIndices = [];

          // Generate two distinct random indices
          while (randomRepoIndices.length < 2) {
            const randomIndex = Math.floor(Math.random() * repositories.length);
            // const contentResponse = `https://Mario5312.github.io/${randomIndex.name}/Contents/Thumbnail.JPG`;
            // setImageData(contentResponse);
            if (!randomRepoIndices.includes(randomIndex)) {
              randomRepoIndices.push(randomIndex);
            }
          }

          // Extract the random repositories based on the random indices
          const randomReposData = randomRepoIndices.map(
            (index) => repositories[index]
          );

          // Update the state with the random repositories
          setRepoProp(randomReposData);
        }
      }

      // attempts += 1;
      // }
      // setImageUrls(fetchedImages);
      // console.log(imageUrls);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };
  return (
    <div>
      {/* <h2>{randomRepo}</h2>
      {imageData && (
        <img
          src={imageData}
          className="RepoImage"
          alt="GitHub Repository Image"
        />
      )} */}
      <ProjectItem repoProp={repoProp} imageData={imageData}></ProjectItem>
    </div>
  );
};

export default ImageComponent;
