import React, { FC, useState } from "react";
import s from "./ProductsWithFilter.module.scss";
import { FilterBlock } from "./components/FilterBlock";
import { MdFilterAltOff } from "react-icons/md";
import { ProductsWithFilterPropsType } from "./ProductsWithFilterPropsType";

export const ProductsWithFilter: FC<ProductsWithFilterPropsType> = (
  props: ProductsWithFilterPropsType,
) => {
  const [openFilterBlock, setOpenFilterBlock] = useState<boolean>(false);
  return (
    <>
      <div
        className={s.filterIconBlock}
        onClick={() => {
          setOpenFilterBlock(true);
        }}
      >
        <MdFilterAltOff size={28} color={"var(--main-color)"} />
      </div>
      <div className={s.productsWithFilterWrapper}>
        <FilterBlock
          currentFilterData={props.currentFilterData}
          setCurrentFilterData={props.setCurrentFilterData}
          openFilterBlock={openFilterBlock}
          setOpenFilterBlock={setOpenFilterBlock}
        />
        <div className={s.productsWithFilterBlock}>{props.children}</div>
      </div>
    </>
  );
};
