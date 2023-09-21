import React, { useState, useEffect } from "react";

const ImageComponent = () => {
  const [imageData, setImageData] = useState(null);
  const username = "Mario5312";
  const githubToken = "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";
  // const topic = "thumbnails";
  // const perPage = 2;

  const fetchImage = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/Mario5312/repos`,
        {
          headers: {
            Authorization: `Bearer ${githubToken}`,
          },
        }
      );
      console.log(response);

      if (response.status === 200) {
        const repositories = response.url;
        // console.log(repositories);

        if (repositories.length > 0) {
          const randomRepository =
            repositories[Math.floor(Math.random() * repositories.length)];

          const contentResponse = await fetch(
            `https://api.github.com/repos/Mario5312/${randomRepository.name}/Contents`,
            {
              headers: {
                Authorization: `Bearer ${githubToken}`,
              },
            }
          );
          if (contentResponse.status === 200) {
            const imageFiles = contentResponse.data.filter((item) =>
              /\.(jpg|jpeg|png|gif)$/i.test(item.name)
            );

            const imageResponse = await fetch(imageFiles.download_url, {
              responseType: "blob",
            });

            if (imageResponse.status === 200) {
              const url = URL.createObjectURL(new Blob([imageResponse.data]));
              console.log(url);
              setImageData(url);
            } else {
              console.error("Failed to fetch image");
            }
          } else {
            console.error("No image files found in the repository");
          }
        } else {
          console.error("Failed to fetch public repositories");
        }
      }
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  // Figure out where to put it

  // Raw images

  // URL_TO_IMAGE_3

  // const App = () => {
  //   const imageUrls = [
  //     'URL_TO_IMAGE_1',
  //     'URL_TO_IMAGE_2',
  //     'URL_TO_IMAGE_3'
  //   ];
  return (
    <div>
      <h1>GitHub Image Fetching</h1>
      <button onClick={fetchImage}>Fetch Random Image</button>
      {imageData && <img src={imageData} alt="GitHub Repository Image" />}
    </div>
  );
};

export default ImageComponent;
