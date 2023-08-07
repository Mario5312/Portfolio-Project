import { Link } from "react-router-dom";

const Projects = ({ name, description }) => {
  return (
    <div className="Top">
      <h2>No projects yet</h2>
      <Link to="/AllProjects">All Projects</Link>
      <p>
        as you can see there are no projects only placeholders. This is on
        purpose after I finish my portfolio page this part of the portfolio will
        fetch data from projects on github and display them. That way this will
        make me motivated and keep me going as the more projects there are the
        better this page is
      </p>
      <div className="MainProjects">
        <div className="project-1">
          <h3>{name}</h3>
          <h4>Date</h4>
          <p>{description}</p>
          {/* Image */}
        </div>

        <div className="project-2">
          <h3>PlacerHolderTitle</h3>
          <h4>Date</h4>
          <p>Short Description</p>
          {/* Image */}
        </div>

        <div className="project-3">
          <h3>PlacerHolderTitle</h3>
          <h4>Date</h4>
          <p>Short Description</p>
          {/* Image */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
