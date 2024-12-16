import { FilterDataType } from "../../types/FilterDataType";
import { Dispatch, ReactElement } from "react";

export interface ProductsWithFilterPropsType {
  currentFilterData: FilterDataType[];
  setCurrentFilterData: Dispatch<FilterDataType[]>;
  children: ReactElement;
}
