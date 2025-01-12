import s from "./ProductPopup.module.scss";
import closeIcon from "../../img/close.png";
import { CallButton } from "../CallButton/CallButton";
import React from "react";
import { ProductPopupType } from "./ProductPopupType";
import { useTranslation } from "react-i18next";

export const ProductPopup = (props: ProductPopupType) => {
  const { t } = useTranslation();
  return (
    <>
      {props.popup.status && props.popup.product && (
        <div className={s.popupWrapper}>
          <div className={s.popupBlock}>
            <img
              className={s.closeIcon}
              src={closeIcon}
              alt="Close"
              onClick={() => {
                props.setPopup({ status: false, product: null });
              }}
            />

            <div className={s.productImg}>
              <img
                src={props.popup.product.pic}
                alt={props.popup.product.name}
              />
            </div>
            <div className={s.productInfo}>
              <div className={s.infoHead}>
                <div className={s.infoTitle}>
                  <h2>{props.popup.product.name}</h2>
                  <p>Lorem Ipsum</p>
                </div>
                <div className={s.infoPrice}>
                  <h3>
                    {props.popup.product.price + " " + t("product.currency")}
                  </h3>
                </div>
              </div>
              <div className={s.productDescription}>
                <div>{props.popup.product.info}</div>
                <ul>
                  <li>The frame is plywood</li>
                  <li>Sponge covered</li>
                  <li>
                    The outer cover is eco leather or textile (by prior order)
                  </li>
                  <li>nside covered with fabric</li>
                  <li>Color selection on pre-order</li>
                </ul>
              </div>
              <div className={s.callBtn}>
                <CallButton />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
