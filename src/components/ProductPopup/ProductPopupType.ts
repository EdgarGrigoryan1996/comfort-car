import { PopupProductType } from "../../types/PopupProductType";
import { Dispatch, SetStateAction } from "react";

export interface ProductPopupType {
  popup: PopupProductType;
  setPopup: Dispatch<SetStateAction<PopupProductType>>;
}
