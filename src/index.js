import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllProjects from "./AllProjects";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <App></App>
        </Route>
        <Route exact path="/AllProjects">
          <AllProjects />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
