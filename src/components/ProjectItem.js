import React from "react";

const ProjectItem = (props) => {
  const { randomRepo } = props;
  console.log(randomRepo);

  const listRepos =
    randomRepo.length !== 0 ? (
      randomRepo.map((item) => (
        <div key={item.id} className="project">
          <h3>{item.name}</h3>
          <h4>Date</h4>
          <p>{item.description}</p>
        </div>
      ))
    ) : (
      <div className="project">No Repos found</div>
    );

  return <>{listRepos}</>;
};

export default ProjectItem;
