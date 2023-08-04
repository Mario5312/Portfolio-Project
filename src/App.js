// import logo from "./logo.svg";
import "./App.css";
import Summary from "./Summary";
import ProgramLang from "./ProgramLang";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div className="content">
      <Summary />
      <ProgramLang />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
