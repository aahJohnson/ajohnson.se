import React, { Component } from "react";
import "../style/skills.css";

const Skills = () => {
  return (
    <div class="skills">
      {/* <div class="personal">
        <h4 class="name">Adam Johnson</h4>
        <p class="title">Front-end web developer</p>
      </div> */}
      <div class="about">
        <p class="aboutQ">Residence:</p>
        <p class="aboutA">Sweden</p>
        <p class="aboutQ">City:</p>
        <p class="aboutA">Malmö</p>
        <p class="aboutQ">Age:</p>
        <p class="aboutA">27</p>
      </div>
      <ul class="languages">
        <li class="swedishProgress">
          <p>100%</p>
        </li>
        <li class="englishProgress">
          <p>95%</p>
        </li>
        <li>Swedish</li>
        <li>English</li>
      </ul>
      <ul class="skillBars">
        <li>
          <p class="skillTitle">HTML & CSS</p>
          <div class="progressBar">
            <div class="progressBarProgress" style={{ width: "85%" }}>
              85%
            </div>
          </div>
        </li>
        <li>
          <p class="skillTitle">Java</p>
          <div class="progressBar">
            <div class="progressBarProgress" style={{ width: "65%" }}>
              65%
            </div>
          </div>
        </li>
        <li>
          <p class="skillTitle">Javascript</p>
          <div class="progressBar">
            <div class="progressBarProgress" style={{ width: "50%" }}>
              50%
            </div>
          </div>
        </li>
        <li>
          <p class="skillTitle">Typescript</p>
          <div class="progressBar">
            <div class="progressBarProgress" style={{ width: "20%" }}>
              20%
            </div>
          </div>
        </li>
        <li>
          <p class="skillTitle">C#</p>
          <div class="progressBar">
            <div class="progressBarProgress" style={{ width: "35%" }}>
              35%
            </div>
          </div>
        </li>
        <li>
          <p class="skillTitle">SQL</p>
          <div class="progressBar">
            <div class="progressBarProgress" style={{ width: "50%" }}>
              50%
            </div>
          </div>
        </li>
      </ul>
      <ul class="contact">
        <li>
          <a
            href="https://github.com/aahJohnson"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../media/githubIcon.png")}
              alt="Github"
              class="contactIcon"
              title="Github"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/adam-johnson-513877145/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../media/linkedinIcon.png")}
              alt="LinkedIn"
              class="contactIcon"
              title="LinkedIn"
            />
          </a>
        </li>
        <li>
          <a
            href="mailto:aahjohnson@proton.me"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../media/emailIcon.png")}
              alt="Email"
              class="contactIcon"
              title="Email me!"
            />
          </a>
        </li>
      </ul>
      <div class="contactInfo">
        <p>Phone: +46 70 343 12 99</p>
        <p>Email: aahjohnson@proton.me</p>
      </div>
    </div>
  );
};

export default Skills;
