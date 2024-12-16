import { Dispatch } from "react";
import { PopupProductType } from "../../../types/PopupProductType";

export interface ProductCardPropsType {
  name: string;
  pic: string;
  price: number;
  brand: string;
  setPopup: Dispatch<PopupProductType>;
}
