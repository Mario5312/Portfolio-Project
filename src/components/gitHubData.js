import React from "react";

import { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";

function GitHubData() {
  const [randomRepo, setRandomRepo] = useState([]);

  const results = [];

  useEffect(() => {
    fetch("https://api.github.com/users/Mario5312/repos")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        for (let i = 0; i < 1; i++) {
          const test = data[Math.floor(Math.random() * data.length)];
          results.push(test);
          // console.log(results);
        }
        setRandomRepo(results);

        // it actually works dont touch!!!!!!!!!!!!
      });
  }, []);

  return (
    <div className="content">
      <ProjectItem randomRepo={randomRepo}></ProjectItem>
    </div>
  );
}

export default GitHubData;
