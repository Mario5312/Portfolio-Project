// import logo from "./logo.svg";
import "./styles/App.css";
import Summary from "./components/Summary";
import ProgramLang from "./components/ProgramLang";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import ProjectItem from "./components/ProjectItem";

import GitHubData from "./components/gitHubData";

// import ProjectItem from "./components/ProjectItem";

function App() {
  const results = [];

  return (
    <div className="content">
      <Summary />
      <ProgramLang />
      <Projects></Projects>
      <GitHubData></GitHubData>
      <Contact />
    </div>
  );
}

export default App;
