import { ProductCardType } from "./types/productCard";
import s from "./ProductCard.module.css";
import { FC } from "react";
import { ProductCardPropsType } from "./types/ProductCardPropsType";
import { useTranslation } from "react-i18next";
import CallButton from "../CallButton/CallButton";

export const ProductCard: FC<ProductCardPropsType> = (
  props: ProductCardType,
) => {
  const { t } = useTranslation();
  return (
    <div
      className={s.productCard}
      onClick={() => {
        props.setPopup({
          status: true,
          product: {
            name: props.name,
            pic: props.pic,
            price: props.price,
          },
        });
      }}
    >
      <div className={s.productImage}>
        <img src={props.pic} alt="" />
      </div>
      <div className={s.productInfo}>
        <span className={s.productName}>{props.name}</span>
        <span className={s.productPrice}>
          <b>${props.price}</b>
        </span>
      </div>
      <div className={s.productBtn}>
        <CallButton />
      </div>
    </div>
  );
};
