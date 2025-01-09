import React, { FC } from "react";
import s from "./Advertising.module.scss";
import advertisingImg from "../../../img/rectangle.png";
import { CallButton } from "../../CallButton/CallButton";
import { useTranslation } from "react-i18next";

export const Adveresting: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={s.advertisingBlock}>
      <div className={s.infoBlock}>
        <h2>
          {t("advertising.text")} <br />
          <span> {t("advertising.colorText")}</span>
        </h2>
        <CallButton type={"small"} />
      </div>
      <div className={s.imageBlock}>
        <img src={advertisingImg} alt="Index" />
      </div>
    </div>
  );
};
