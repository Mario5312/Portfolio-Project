// import { useState } from "react";

// function GitHubData() {
//   const [randomRepo, setRandomRepo] = useState([]);
//   const finalResult = [];

//   fetch("https://api.github.com/users/Mario5312/repos").then((res) =>
//     res.json().then((data) => {
//       const test = data[Math.floor(Math.random() * data.length)];
//       const removed = data.splice(test, 1);
//       finalResult.push(removed);
//       // const repos *= data;
//       // const repoData = repos.map((repo) => {

//       // });
//       // setRandomRepo(j);
//     })
//   );

//   // put the fetch into a useEffect then put the data into a seprate file in data
//   setRandomRepo(finalResult);
//   // console.log(randomRepo);
//   // console.log(randomRepo);
//   // console.log(randomRepo);
//   // const setRepo = ({ name, description }) => {
//   //   setName(name);
//   //   setDescription(description);
//   // };
//   return <></>;
// }

// export default GitHubData;

// const ProjectItem = () => {
//   const [randomRepo, setRandomRepo] = useState();
//   const finalResult = [];
//   const fetchGithubData = fetch(
//     "https://api.github.com/users/Mario5312/repos"
//   ).then((res) =>
//     res.json().then((data) => {
//       const test = data[Math.floor(Math.random() * data.length)];
//       const removed = data.splice(test, 1);
//       finalResult.push(removed[0]);
//       setRandomRepo(finalResult);
//     })
//   );
//   console.log(randomRepo);
