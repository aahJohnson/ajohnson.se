import React, { Component } from "react";
import "../style/home.css";

const Home = () => {
  return (
    <div class="homeBackground">
      <div class="home">
        <div class="person">
          <h1 class="name">Adam Johnson</h1>
          <p class="title">Web Developer</p>
        </div>
        <p class="introduction">
          A 27 year old recent developer-graduate looking to transition from a
          history in service-oriented jobs to web development. My interests
          include running, watching football aswell as anything to do with
          computers, from building them to programming and playing games with
          friends.
        </p>
      </div>
    </div>
  );
};

export default Home;
