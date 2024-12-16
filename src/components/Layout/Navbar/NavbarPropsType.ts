import { NavbarMenuTypes } from "./NavbarMenuTypes";

export interface NavbarProps {
  menu: NavbarMenuTypes[];
  activeMenu: number;
  // setActiveMenu: Dispatch<number>;
}
