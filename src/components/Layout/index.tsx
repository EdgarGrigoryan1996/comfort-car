import "../../App.css";
import { useTranslation } from "react-i18next";
import { Navbar } from "./Navbar";
import { Advantage } from "./Advantage";
import { Header } from "./Header";
import { HeaderImage } from "./HeaderImage";
import { Adveresting } from "./Adveresting";
import { Footer } from "./Footer";
import { useState, ReactNode } from "react";
import { NavbarMenuTypes } from "./Navbar/NavbarMenuTypes";
import { useLocation } from "react-router-dom";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { t } = useTranslation();
  const navbarMenu: NavbarMenuTypes[] = [
    {
      id: 1,
      link: "/armrest",
      title: t("menu.armrest"),
    },
    {
      id: 2,
      link: "/trunkbags",
      title: t("menu.trunkBags"),
    },
    {
      id: 3,
      link: "/gascylinder",
      title: t("menu.gasCylinderCase"),
    },
    {
      id: 4,
      link: "/tirecase",
      title: t("menu.tireCase"),
    },
    {
      id: 5,
      link: "/firstaidbag",
      title: t("menu.firstAirBag"),
    },
  ];
  const location = useLocation();
  const path = location.pathname;
  const activeMenuId =
    path === "/"
      ? navbarMenu[0]
      : navbarMenu.filter((menu) => {
          return menu.link === path;
        })[0];
  const [activeMenu, setActiveMenu] = useState<number>(activeMenuId.id);

  return (
    <div className="page-wrapper">
      <Header />
      <HeaderImage />
      <Advantage />
      <Navbar menu={navbarMenu} activeMenu={activeMenu} />
      {children}

      <Adveresting />
      <Footer menu={navbarMenu} setActiveMenu={setActiveMenu} />
    </div>
  );
};
