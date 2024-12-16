import { NavbarMenuTypes } from "../Navbar/NavbarMenuTypes";
import { Dispatch } from "react";

export interface FooterPropsType {
  menu: NavbarMenuTypes[];
  setActiveMenu: Dispatch<number>;
}
