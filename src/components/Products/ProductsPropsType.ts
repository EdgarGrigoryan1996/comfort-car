import { FilterDataType } from "../../types/FilterDataType";
import { ProductCardType } from "../ProductCard/types/productCard";

export interface ProductsPropsType {
  products: ProductCardType[] | FilterDataType[];
  withFilter?: boolean;
}
