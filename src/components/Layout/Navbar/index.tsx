import { FC, useState } from "react";
import s from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { NavbarProps } from "./NavbarPropsType";
import { NavbarMenuTypes } from "./NavbarMenuTypes";

export const Navbar: FC<NavbarProps> = (props: NavbarProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <div className={s.burgerBlock}>
        <div
          className={openMenu ? s.burgerOpened : s.burgerClosed}
          onClick={() => {
            toggleMenu();
          }}
        >
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </div>
      </div>

      <nav
        className={
          openMenu ? s.openMenuNavbarBlock + " " + s.navbarBlock : s.navbarBlock
        }
      >
        {openMenu && (
          <span
            className={s.close}
            onClick={() => {
              toggleMenu();
            }}
          >
            X
          </span>
        )}
        <ul>
          {props.menu.map((menuItem: NavbarMenuTypes) => {
            return (
              <li
                key={menuItem.id}
                className={menuItem.id === props.activeMenu ? s.activeMenu : ""}
              >
                <Link
                  // onClick={() => {
                  //   props.setActiveMenu(menuItem.id);
                  //   setOpenMenu(false);
                  // }}
                  to={menuItem.link}
                >
                  {menuItem.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
