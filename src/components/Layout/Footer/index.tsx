import React, { FC } from "react";
import s from "./Footer.module.scss";
import { Link } from "react-router-dom";
import fbIcon from "../../../img/social/fb.png";
import instagramIcon from "../../../img/social/instagram.png";
import whatsappIcon from "../../../img/social/whatsapp.png";
import viberIcon from "../../../img/social/viber.png";
import tiktokIcon from "../../../img/social/tiktok.png";
import { FooterPropsType } from "./FooterPropsType";
import { NavbarMenuTypes } from "../Navbar/NavbarMenuTypes";

export const Footer: FC<FooterPropsType> = (props: FooterPropsType) => {
  const handleScroll = () => {
    const elem = document.getElementById("products");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer>
      <div className={s.footerContent}>
        <div className={s.footerNavbar}>
          <ul>
            {props.menu.map((menuItem: NavbarMenuTypes) => {
              return (
                <li key={menuItem.id + menuItem.title}>
                  <Link
                    to={menuItem.link}
                    onClick={(e) => {
                      props.setActiveMenu(menuItem.id);
                      handleScroll();
                    }}
                  >
                    {menuItem.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={s.social}>
          <img src={fbIcon} alt="Facebook" />
          <img src={viberIcon} alt="Viber" />
          <img src={whatsappIcon} alt="WhatsApp" />
          <img src={instagramIcon} alt="Instagram" />
          <img src={tiktokIcon} alt="TikTok" />
        </div>
      </div>
    </footer>
  );
};
