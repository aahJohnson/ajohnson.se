import React from "react";
import "../style/experience.css";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  return (
    <div class="experience">
      <h1>{t("experience")}</h1>
      <ul class="expList">
        <li>
          <h4 class="tileTitle">{t("pixagontitle")}</h4>
          <p class="tileInfo">Malmö, 2023</p>
          <p class="tileDescription">{t("pixagontext")}</p>
          <a class="tileLink" href="https://www.pixagon.se/" target="blank_">
            {t("pixagonlink")}
          </a>
        </li>
        <li>
          <h4 class="tileTitle">{t("knologramtitle")}</h4>
          <p class="tileInfo">Malmö, 2022</p>
          <p class="tileDescription">{t("knologramtext")}</p>
        </li>
        <li>
          <h4 class="tileTitle">{t("bishopsarmstitle")}</h4>
          <p class="tileInfo">Eskilstuna, 2020</p>
          <p class="tileDescription">{t("bishopsarmstext")}</p>
        </li>
        <li>
          <h4 class="tileTitle">{t("elitehotelstitle")}</h4>
          <p class="tileInfo">Eskilstuna, 2016 - 2019</p>
          <p class="tileDescription">{t("elitehotelstext")}</p>
        </li>
        <li>
          <h4 class="tileTitle">{t("papastapastitle")}</h4>
          <p class="tileInfo">Eskilstuna, 2016</p>
          <p class="tileDescription">{t("papastapastext")}</p>
        </li>
        <li>
          <h4 class="tileTitle">{t("pitcherstitle")}</h4>
          <p class="tileInfo">Eskilstuna, 2013 - 2015</p>
          <p class="tileDescription">{t("pitcherstext")}</p>
        </li>
        <li>
          <h4 class="tileTitle">{t("expressentitle")}</h4>
          <p class="tileInfo">Eskilstuna, 2006 - 2010</p>
          <p class="tileDescription">{t("expressentext")}</p>
        </li>
      </ul>
      <h1>{t("education")}</h1>
      <ul class="expList">
        <li>
          <h4 class="tileTitle">{t("ecutbildningtitle")}</h4>
          <p class="tileInfo">Malmö, 2020 - 2022</p>
          <p class="tileDescription">{t("ecutbildningtext")}</p>
        </li>
        <li>
          <h4 class="tileTitle">{t("driverslicencetitle")}</h4>
          <p class="tileInfo">Eskilstuna, 2016</p>
          <p class="tileDescription">{t("driverslicencetext")}</p>
        </li>
        <li>
          <h4 class="tileTitle">{t("teknikcollegetitle")}</h4>
          <p class="tileInfo">Eskilstuna, 2010 - 2013</p>
          <p class="tileDescription">{t("teknikcollegetext")}</p>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
