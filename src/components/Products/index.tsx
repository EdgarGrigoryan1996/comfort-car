import React, { FC, useState } from "react";
import s from "./Products.module.scss";
import { ProductCard } from "../ProductCard/";
import closeIcon from "../../img/close.png";
import { PopupProductType } from "../../types/PopupProductType";
import { ProductsPropsType } from "./ProductsPropsType";
import { useTranslation } from "react-i18next";
import { ProductCardPropsType } from "../ProductCard/types/ProductCardPropsType";
import CallButton from "../CallButton/CallButton";

export const Products: FC<ProductsPropsType> = (props: ProductsPropsType) => {
  const { t } = useTranslation();
  const [popup, setPopup] = useState<PopupProductType>({
    status: false,
    product: null,
  });
  return (
    <>
      {popup.status && popup.product && (
        <div className={s.popupWrapper}>
          <div className={s.popupBlock}>
            <img
              className={s.closeIcon}
              src={closeIcon}
              alt="Close"
              onClick={() => {
                setPopup({ status: false, product: null });
              }}
            />

            <div className={s.productImg}>
              <img src={popup.product.pic} alt={popup.product.name} />
            </div>
            <div className={s.productInfo}>
              <div className={s.infoHead}>
                <div className={s.infoTitle}>
                  <h2>{popup.product.name}</h2>
                  <p>Lorem Ipsum</p>
                </div>
                <div className={s.infoPrice}>
                  <h3>${popup.product.price}</h3>
                </div>
              </div>
              <div className={s.productDescription}>
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

      <div
        className={
          props.withFilter
            ? s.productsBlock + " " + s.withFilterProductsBlock
            : s.productsBlock
        }
      >
        {Array.isArray(props.products)
          ? props.products.map((product: any) => {
              return (
                <ProductCard
                  name={product.name}
                  pic={product.pic}
                  price={product.price}
                  brand={product.brand}
                  setPopup={setPopup}
                />
              );
            })
          : Object.values(props.products).map((type: any) => {
              return type.map((product: any) => {
                return (
                  <ProductCard
                    name={product.name}
                    pic={product.pic}
                    price={product.price}
                    brand={product.brand}
                    setPopup={setPopup}
                  />
                );
              });
            })}
      </div>
    </>
  );
};
