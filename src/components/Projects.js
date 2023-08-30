import ProjectItem from "./ProjectItem";

const Projects = ({ name, description }) => {
  return (
    <div className="Top">
      <h2>Projects</h2>=
      <p>
        as you can see there are no projects only placeholders. This is on
        purpose after I finish my portfolio page this part of the portfolio will
        fetch data from projects on github and display them. That way this will
        make me motivated and keep me going as the more projects there are the
        better this page is
      </p>
      <div className="MainProjects">{/* <ProjectItem></ProjectItem> */}</div>
    </div>
  );
};

export default Projects;
