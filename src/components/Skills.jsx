import React, { Component } from "react";
import "../style/skills.css";

const Skills = () => {
  return (
    <div class="skills">
      <div class="personal">
        <img class="profileImg" src=""></img>
        <h4 class="name">Adam Johnson</h4>
        <p class="title">Front-end web developer</p>
      </div>
      <div class="about">
        <p class="aboutQ">Residence:</p>
        <p class="aboutA">Sweden</p>
        <p class="aboutQ">City:</p>
        <p class="aboutA">Malmö</p>
        <p class="aboutQ">Age:</p>
        <p class="aboutA">27</p>
      </div>
      <ul class="languages">
        <li>100%</li>
        <li>98%</li>
        <li>Swedish</li>
        <li>English</li>
      </ul>
      <ul class="skillBars">
        <li>
          <p class="skillTitle">HTML</p>
          <div class="progressBarProgress">85%</div>
        </li>
        <li></li>
      </ul>
    </div>
  );
};

export default Skills;
