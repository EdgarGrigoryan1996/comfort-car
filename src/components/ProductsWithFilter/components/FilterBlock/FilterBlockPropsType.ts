import { FilterDataType } from "../../../../types/FilterDataType";
import { Dispatch } from "react";

export interface FilterBlockPropsType {
  currentFilterData: FilterDataType[];
  setCurrentFilterData: Dispatch<FilterDataType[]>;
  openFilterBlock: boolean;
  setOpenFilterBlock: Dispatch<boolean>;
}
