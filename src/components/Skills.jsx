import React from "react";
import "../style/skills.css";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  function changeLanguage(e) {
    console.log(e);
    i18n.changeLanguage(e);
  }

  return (
    <div class="skills">
      <div class="skillsHeader">
        <img
          src={require("../media/profilePic.png")}
          alt="Profile"
          class="profilePic hexagon"
          title="Ada Johnson"
          loading="lazy"
        ></img>

        <img
          src={require("../media/swedishIcon.png")}
          alt="Swedish"
          class="swedishIcon hexagon"
          title="Swedish"
          onClick={() => changeLanguage("sv")}
          loading="lazy"
        ></img>

        <img
          src={require("../media/englishIcon.png")}
          alt="English"
          class="englishIcon hexagon"
          title="English"
          onClick={() => changeLanguage("en")}
          loading="lazy"
        ></img>

        <img
          src={require("../media/dutchIcon.png")}
          alt="Dutch"
          class="dutchIcon hexagon"
          title="Dutch"
          onClick={() => changeLanguage("nl")}
          loading="lazy"
        ></img>
      </div>
      <div class="about">
        <p class="aboutQ">{t("residence")}</p>
        <p class="aboutA">{t("country")}</p>
        <p class="aboutQ">{t("city")}</p>
        <p class="aboutA">Malmö</p>
        <p class="aboutQ">{t("age")}</p>
        <p class="aboutA">29</p>
      </div>
      <ul class="languages">
        <li class="swedishProgress">
          <p>100%</p>
        </li>
        <li class="englishProgress">
          <p>95%</p>
        </li>
        <li class="dutchProgress">
          <p>5%</p>
        </li>
        <li>{t("swedish")}</li>
        <li>{t("english")}</li>
        <li>{t("dutch")}</li>
      </ul>
      <ul class="skillBars">
        <li>
          <p class="skillTitle">HTML & CSS</p>
          <div class="progressBar">
            <div class="progressBarProgress" style={{ width: "95%" }}>
              95%
            </div>
          </div>
        </li>
        <li>
          <p class="skillTitle">Javascript</p>
          <div class="progressBar">
            <div class="progressBarProgress" style={{ width: "90%" }}>
              90%
            </div>
          </div>
        </li>
        <li>
          <p class="skillTitle">React</p>
          <div class="progressBar">
            <div class="progressBarProgress" style={{ width: "80%" }}>
              80%
            </div>
          </div>
        </li>
        <li>
          <p class="skillTitle">Git</p>
          <div class="progressBar">
            <div class="progressBarProgress" style={{ width: "70%" }}>
              70%
            </div>
          </div>
        </li>
        <li>
          <p class="skillTitle">Typescript</p>
          <div class="progressBar">
            <div class="progressBarProgress" style={{ width: "70%" }}>
              70%
            </div>
          </div>
        </li>
        <li>
          <p class="skillTitle">Java</p>
          <div class="progressBar">
            <div class="progressBarProgress" style={{ width: "70%" }}>
              70%
            </div>
          </div>
        </li>
        <li>
          <p class="skillTitle">Angular</p>
          <div class="progressBar">
            <div class="progressBarProgress" style={{ width: "60%" }}>
              60%
            </div>
          </div>
        </li>
        <li>
          <p class="skillTitle">SQL</p>
          <div class="progressBar">
            <div class="progressBarProgress" style={{ width: "60%" }}>
              60%
            </div>
          </div>
        </li>
        <li>
          <p class="skillTitle">C#</p>
          <div class="progressBar">
            <div class="progressBarProgress" style={{ width: "25%" }}>
              25%
            </div>
          </div>
        </li>
        <li>
          <p class="skillTitle">.NET</p>
          <div class="progressBar">
            <div class="progressBarProgress" style={{ width: "15%" }}>
              15%
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
        <p>{t("phone")}: (+46) 70 343 12 99</p>
        <p>Email: johnson@pixagon.se</p>
      </div>
    </div>
  );
};

export default Skills;
