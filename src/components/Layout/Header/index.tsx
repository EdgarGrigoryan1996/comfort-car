import React, { FC, useEffect, useState } from "react";
import s from "./Header.module.scss";
import { useTranslation } from "react-i18next";
import logo from "../../../img/logo.png";
import phoneIcon from "../../../img/phone.png";
import { Language } from "../../../types/Language";

const langOptions: Language[] = [
  { value: "am", label: "ARM" },
  { value: "en", label: "ENG" },
  { value: "ru", label: "RUS" },
];

export const Header: FC = () => {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState<Language>(langOptions[0]);
  const changeLang = (lang: Language) => {
    i18n.changeLanguage(lang.value);
    localStorage.setItem("lang", JSON.stringify(lang));
  };
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
        <div className={s.language}>
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
