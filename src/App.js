import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

function App() {
  return (
    <div class="App">
      <BrowserRouter>
        <div class="appMain">
          <div class="appSkills">
            <Skills />
          </div>
          <div class="appHome">
            <Home />
          </div>
          <div class="appExp">
            <Experience />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
