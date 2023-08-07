import React from "react";
// import GitHubData from "../data/gitHubData";
import Projects from "./Projects";
import { useState } from "react";

const ProjectItem = () => {
  const [randomRepo, setRandomRepo] = useState();
  const finalResult = [];
  const fetchGithubData = fetch(
    "https://api.github.com/users/Mario5312/repos"
  ).then((res) =>
    res.json().then((data) => {
      const test = data[Math.floor(Math.random() * data.length)];
      const removed = data.splice(test, 1);
      finalResult.push(removed[0]);

      setRandomRepo(finalResult);
    })
  );
  console.log(randomRepo);

  return (
    <div className="test">
      {/* {randomRepo.map((project) => (
        <Projects name={project.name} description={project.description} />
      ))} */}
    </div>
  );
};

export default ProjectItem;
