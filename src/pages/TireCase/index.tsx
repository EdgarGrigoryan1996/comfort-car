import React, { FC } from "react";
import { Layout } from "../../components/Layout";
import s from "../ProductPage.module.css";
import { tireCaseData } from "./tireCaseData";
import { Products } from "../../components/Products";
import { useTranslation } from "react-i18next";

export const TireCase: FC = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div>
        <div className={s.pageTitle}>
          <h2>{t("menu.tireCase")}</h2>
        </div>

        <Products products={tireCaseData} withFilter={false} />
      </div>
    </Layout>
  );
};
