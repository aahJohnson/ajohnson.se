import React, { Component } from "react";
import "../style/experience.css";

const Experience = () => {
  return (
    <div class="experience">
      <h1>Experience</h1>
      <ul class="expList">
        <li>
          <h4 class="tileTitle">Internship - Knologram</h4>
          <p class="tileInfo">Malmö, 2022</p>
          <p class="tileDescription">
            6 weeks of internship at Knologram in the spring of 2022, mainly
            working with HTML, CSS and .NET.
          </p>
        </li>
        <li>
          <h4 class="tileTitle">Bartender - Bishops Arms</h4>
          <p class="tileInfo">Eskilstuna, 2020</p>
          <p class="tileDescription">
            I worked as a bartender and waiter during the spring and summer of
            2020, mainly serving food and drinks or chatting with customers.
          </p>
        </li>
        <li>
          <h4 class="tileTitle">Receptionist - Elite Hotels of Sweden</h4>
          <p class="tileInfo">Eskilstuna, 2016 - 2019</p>
          <p class="tileDescription">
            During this period i worked mostly nights, being the only employee
            on site responsible for the entire 132 room hotel. This included
            administrative tasks, cleaning and service.
          </p>
        </li>
        <li>
          <h4 class="tileTitle">Waiter/Bartender - Papas Tapas</h4>
          <p class="tileInfo">Eskilstuna, 2016</p>
          <p class="tileDescription"></p>
        </li>
        <li>
          <h4 class="tileTitle">Waiter/Bartender - Pitcher's</h4>
          <p class="tileInfo">Eskilstuna, 2013 - 2015</p>
          <p class="tileDescription"></p>
        </li>
        <li>
          <h4 class="tileTitle">Newspaper Salesman - Expressen</h4>
          <p class="tileInfo">Eskilstuna, 2006 - 2010</p>
          <p class="tileDescription"></p>
        </li>
      </ul>
      <h1>Education</h1>
      <ul class="expList">
        <li>
          <h4 class="tileTitle">Javadeveloper - EC Utbildning</h4>
          <p class="tileInfo">Malmö, 2020 - 2022</p>
          <p class="tileDescription">
            Two years of 'yrkeshögskola' in Malmö, Sweden. While our main
            subject was Java I learned a range of other skills including
            Javascript, React, Scrum, Git, SQL and Kotlin.
          </p>
        </li>
        <li>
          <h4 class="tileTitle">
            Technical High School - Teknikcollege Mälardalen
          </h4>
          <p class="tileInfo">Eskilstuna, 2010 - 2013</p>
          <p class="tileDescription">
            Swedish high school with a focus on technical subjects, including
            math and physics.
          </p>
        </li>
        <li>
          <h4 class="tileTitle">Swedish Drivers Licence</h4>
          <p class="tileInfo">Eskilstuna, 2016</p>
          <p class="tileDescription">Type B swedish drivers licence.</p>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
