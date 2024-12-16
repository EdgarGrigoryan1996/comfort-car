import React, { FC } from "react";
import s from "./Advantage.module.scss";
import deliveryIcon from "../../../img/delivery.png";
import installationIcon from "../../../img/Installation.png";
import returnIcon from "../../../img/return.png";

export const Advantage: FC = () => {
  return (
    <div className={s.advantageBlock}>
      <div className={s.advantageItem}>
        <div>
          <img src={deliveryIcon} alt="Free Delivery in Yerevan" />
        </div>
        <div>
          <b>Free Delivery</b>
        </div>
      </div>

      <div className={s.advantageItem}>
        <div>
          <img src={installationIcon} alt="Free Installation" />
        </div>
        <div>
          <b>Free Installation</b>
        </div>
      </div>

      <div className={s.advantageItem}>
        <div>
          <img src={returnIcon} alt="Possibility of Return" />
        </div>
        <div>
          <b>Possibility of return</b>
        </div>
      </div>
    </div>
  );
};
