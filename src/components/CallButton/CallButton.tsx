import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import s from "./CallButton.module.scss";
import { CallButtonPropsType } from "./CallButtonPropsType";

export const CallButton: FC<CallButtonPropsType> = (
  props: CallButtonPropsType,
) => {
  const { t } = useTranslation();
  return (
    <div
      className={
        props.type === "small"
          ? s.smallCallButtonBlock + " " + s.callButtonBlock
          : s.callButtonBlock
      }
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <button>
        <a href="tel:+37455439311">{t("product.call")}</a>
      </button>
    </div>
  );
};
