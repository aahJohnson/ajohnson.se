import React, { Component } from "react";
import "../style/home.css";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div class="homeBackground" loading="lazy">
      <div class="home">
        <div class="person">
          <h1 class="name">Ada Johnson</h1>
          <p class="title">{t("title")}</p>
          <p class="title">{t("title2")}</p>
        </div>
        <p class="introduction">
          {t("description1")}
          <br />
          {t("description2")}
          <br />
          {t("description3")}
          <br />
          {t("description4")}
        </p>
      </div>
    </div>
  );
};

export default Home;
