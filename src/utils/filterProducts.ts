import { FilterDataType } from "../types/FilterDataType";
import { Dispatch } from "react";

export const filterProducts = (
  currentFilterData: FilterDataType[],
  setFilteredProducts: Dispatch<FilterDataType[]>,
  products: any,
): void => {
  if (currentFilterData[0].checked) {
    setFilteredProducts(products);
  } else {
    const checkedFilters = currentFilterData
      .filter((data: FilterDataType) => {
        return data.checked;
      })
      .map((data: FilterDataType) => {
        return data.name;
      });

    const filtered: any = {};
    Object.keys(products).filter((type: any) => {
      if (checkedFilters.includes(type)) {
        filtered[type] = products[type];
      }
    });
    setFilteredProducts(filtered);
  }
};
