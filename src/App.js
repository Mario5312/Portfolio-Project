// import logo from "./logo.svg";
// import "dotenv/config";

import React from "react";
import "./styles/App.css";
import Summary from "./components/Summary";
import ProgramLang from "./components/ProgramLang";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import ProjectItem from "./components/ProjectItem";

import GitHubData from "./components/gitHubData";
import ImageComponent from "./components/testing";
// require("dotenv").config();
// import ProjectItem from "./components/ProjectItem";

function App() {
  const results = [];

  return (
    <div className="content">
      <Summary />
      <ProgramLang />
      <Projects></Projects>
      <ImageComponent></ImageComponent>
      <Contact />
    </div>
  );
}

export default App;
