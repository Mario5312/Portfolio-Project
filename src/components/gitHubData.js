// import React from "react";

// import { useEffect, useState } from "react";
// import ProjectItem from "./ProjectItem";

// function GitHubData() {
//   const [randomRepo, setRandomRepo] = useState([]);

//   const results = [];

//   useEffect(() => {
//     fetch("https://api.github.com/users/Mario5312/repos")
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data);
//         // console.log(data);

//         const arrayClone = data.slice();

//         for (let i = 1; i <= 1; i++) {
//           const arr = arrayClone[Math.floor(Math.random() * arrayClone.length)];

//           let index = arrayClone.indexOf(arr);

//           arrayClone.splice(index, 1);

//           results.push(arr);
//         }
//         setRandomRepo(results);

//         // this isn't fully random
//         // it actually works dont touch!!!!!!!!!!!!
//       });
//   }, []);
//   // fetch(
//   //   "https://raw.githubusercontent.com/Mario5312/Portfolio-Project/main/Portfolio Thumbnail.jpg"
//   // ).then((data) => {
//   //   <img>{data.url}</img>;
//   //   console.log(data.url);
//   // });

//   return (
//     <div className="content">
//       <ProjectItem randomRepo={randomRepo}></ProjectItem>
//     </div>
//   );
// }

// export default GitHubData;

// if (response.ok) {
//   const repositories = await response.json();
//   if (repositories.length >= 2) {

//     const randomRepository =
//       repositories[Math.floor(Math.random() * repositories.length)];
//     const contentResponse = `https://Mario5312.github.io/${randomRepository.name}/Contents/Thumbnail.JPG`;
//     results.push(randomRepository);
//     setImageData(contentResponse);
//     setRandomRepo(randomRepository.name);
//     setRepoProp(results);
//     if (contentResponse.ok) {
//       const contentData = await contentResponse.json();
//     }
//   }
// }
