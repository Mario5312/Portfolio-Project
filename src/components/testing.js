// import React, { useState, useEffect } from "react";

// const ImageComponent = ({ imageUrl }) => {
//   const [imageData, setImageData] = useState(null);

//   useEffect(() => {
//     const fetchImage = () => {
//       try {
//         const response = fetch(
//           "https://raw.githubusercontent.com/Mario5312/Portfolio-Project/main/Portfolio Thumbnail.jpg"
//         );
//         if (response.ok) {
//           const blob = response.blob();
//           const url = URL.createObjectURL(blob);
//           setImageData(url);
//         } else {
//           console.error("Failed to fetch image");
//         }
//       } catch (error) {
//         console.error("Error fetching image:", error);
//       }
//     };

//     fetchImage();
//   }, [imageUrl]);

//   return (
//     <div>
//       {/* <h1>GitHub Image Fetching</h1>
//       {imageData && <img src={imageData} alt="GitHub Repository Image" />} */}
//     </div>
//   );
// };

// export default ImageComponent;
