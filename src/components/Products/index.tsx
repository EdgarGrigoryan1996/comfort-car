import React, { FC, useState } from "react";
import s from "./Products.module.scss";
import { ProductCard } from "../ProductCard/";
import { PopupProductType } from "../../types/PopupProductType";
import { ProductsPropsType } from "./ProductsPropsType";
import { ProductPopup } from "../ProductPopup/ProductPopup";
import { useTranslation } from "react-i18next";

export const Products: FC<ProductsPropsType> = (props: ProductsPropsType) => {
  const { t } = useTranslation();
  const [popup, setPopup] = useState<PopupProductType>({
    status: false,
    product: null,
  });
  return (
    <>
      <ProductPopup popup={popup} setPopup={setPopup} />

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
                  key={Math.random() + product.name}
                  name={t(product.name)}
                  pic={product.pic}
                  price={product.price}
                  brand={t(product.brand)}
                  info={t(product.info)}
                  setPopup={setPopup}
                />
              );
            })
          : Object.values(props.products).map((type: any) => {
              return type.map((product: any) => {
                return (
                  <ProductCard
                    key={Math.random() + product.name}
                    name={t(product.name)}
                    pic={product.pic}
                    price={product.price}
                    brand={t(product.brand)}
                    info={t(product.info)}
                    setPopup={setPopup}
                  />
                );
              });
            })}
      </div>
    </>
  );
};
