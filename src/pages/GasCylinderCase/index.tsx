import React, { FC } from "react";
import { Layout } from "../../components/Layout";
import { useTranslation } from "react-i18next";
import s from "../ProductPage.module.css";
import { Products } from "../../components/Products";
import { gasCylinderCaseData } from "./gasCylinderCaseData";

export const GasCylinderCase: FC = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div>
        <div className={s.pageTitle}>
          <h2>{t("menu.gasCylinderCase")}</h2>
        </div>

        <Products products={gasCylinderCaseData} withFilter={false} />
      </div>
    </Layout>
  );
};
