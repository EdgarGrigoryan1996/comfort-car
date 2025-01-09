import React, { FC, useEffect, useState } from "react";
import s from "./Header.module.scss";
import { useTranslation } from "react-i18next";
import logo from "../../../img/logo.png";
import phoneIcon from "../../../img/phone.png";
import { Language } from "../../../types/Language";
import { MdLanguage } from "react-icons/md";

const langOptions: Language[] = [
  { value: "am", label: "ARM" },
  { value: "en", label: "ENG" },
  { value: "ru", label: "RUS" },
];

export const Header: FC = () => {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState<Language>(langOptions[0]);
  const [langPopup, setLangPopup] = useState(false);
  const changeLang = (lang: Language) => {
    i18n.changeLanguage(lang.value);
    localStorage.setItem("lang", JSON.stringify(lang));
  };
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);
    if (windowSize.width > 755) {
      setLangPopup(false);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);
  useEffect(() => {
    if (localStorage.getItem("lang")) {
      const storageLang = localStorage.getItem("lang");
      if (storageLang !== null) {
        const lang: Language = JSON.parse(storageLang);
        setSelectedLang(lang);
        changeLang(lang);
      }
    } else {
      changeLang(selectedLang);
    }
  }, [i18n.language]);
  return (
    <header>
      <div className={s.logo}>
        <img src={logo} alt="ProBox" />
      </div>
      <div className={s.phoneLangBlock}>
        <div className={s.phone}>
          <img src={phoneIcon} alt="Phone Number" />
          <span>+374 00 00 00 00</span>
        </div>
        <div className={s.mobileLangButton}>
          <MdLanguage onClick={() => setLangPopup(!langPopup)} />
        </div>
        <div
          className={
            langPopup ? s.language + " " + s.mobileLangActive : s.language
          }
        >
          <ul>
            {langOptions.map((lang) => {
              return (
                <li
                  key={lang.value}
                  className={
                    selectedLang.value === lang.value ? s.activeLang : ""
                  }
                  onClick={() => {
                    changeLang(lang);
                    setSelectedLang(lang);
                    setLangPopup(false);
                  }}
                >
                  {lang.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};
