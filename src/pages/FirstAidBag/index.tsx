import React, { FC } from "react";
import { Layout } from "../../components/Layout";
import { useTranslation } from "react-i18next";
import s from "../ProductPage.module.css";
import { Products } from "../../components/Products";
import { firstAidBagData } from "./firstAidBagData";

export const FirstAidBag: FC = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div>
        <div className={s.pageTitle}>
          <h2>{t("menu.firstAirBag")}</h2>
        </div>

        <Products products={firstAidBagData} withFilter={false} />
      </div>
    </Layout>
  );
};
