import React, { FC } from "react";
import s from "./Advertising.module.scss";
import advertisingImg from "../../../img/rectangle.png";
import CallButton from "../../CallButton/CallButton";

export const Adveresting: FC = () => {
  return (
    <div className={s.advertisingBlock}>
      <div className={s.infoBlock}>
        <h2>
          Orders are accepted <br /> for
          <span> any cars</span>
        </h2>
        <CallButton />
      </div>
      <div className={s.imageBlock}>
        <img src={advertisingImg} alt="Index" />
      </div>
    </div>
  );
};
