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
import Education from "./components/Education";
import Skills from "./components/Skills";

function App() {
  return (
    <div class="App">
      <BrowserRouter>
        <Navbar />
        <Home />
        <Experience />
        <Education />
        <Skills />
      </BrowserRouter>
    </div>
  );
}

export default App;
