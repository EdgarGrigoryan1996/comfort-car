import s from "./HeaderImage.module.scss";
import headerImage from "../../../img/headerImage.png";
import { FC } from "react";

export const HeaderImage: FC = () => {
  return (
    <div className={s.headerImage}>
      <img src={headerImage} alt="ProBox" />
    </div>
  );
};
