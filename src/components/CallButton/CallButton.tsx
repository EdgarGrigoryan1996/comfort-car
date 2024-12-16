import React from "react";
import { useTranslation } from "react-i18next";
import s from "./CallButton.module.scss";

function CallButton() {
  const { t } = useTranslation();
  return (
    <div
      className={s.callButtonBlock}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <button>
        <a href="tel:+37455439311">{t("product.call")}</a>
      </button>
    </div>
  );
}

export default CallButton;
