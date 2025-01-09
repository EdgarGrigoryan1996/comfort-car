import React, { FC } from "react";
import s from "./Advantage.module.scss";
import deliveryIcon from "../../../img/delivery.png";
import installationIcon from "../../../img/Installation.png";
import returnIcon from "../../../img/return.png";
import { useTranslation } from "react-i18next";

export const Advantage: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={s.advantageBlock}>
      <div className={s.advantageItem}>
        <div>
          <img src={deliveryIcon} alt="Free Delivery in Yerevan" />
        </div>
        <div className={s.advantageText + " " + s.smallAdvantageText}>
          <b>{t("advantage.delivery")}</b>
        </div>
      </div>

      <div className={s.advantageItem}>
        <div>
          <img src={installationIcon} alt="Free Installation" />
        </div>
        <div className={s.advantageText}>
          <b>{t("advantage.installation")}</b>
        </div>
      </div>

      <div className={s.advantageItem}>
        <div>
          <img src={returnIcon} alt="Possibility of Return" />
        </div>
        <div className={s.advantageText}>
          <b>{t("advantage.return")}</b>
        </div>
      </div>
    </div>
  );
};
