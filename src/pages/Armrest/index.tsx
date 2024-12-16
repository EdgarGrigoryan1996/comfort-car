import React, { FC, useEffect, useState } from "react";
import s from "../ProductPage.module.css";
import { useTranslation } from "react-i18next";
import { Products } from "../../components/Products";
import { ProductsWithFilter } from "../../components/ProductsWithFilter";
import { FilterDataType } from "../../types/FilterDataType";
import filterData from "../../components/ProductsWithFilter/FilterData";
import { armrestData } from "./armrestData";
import { filterProducts } from "../../utils/filterProducts";
import { Layout } from "../../components/Layout";

export const Armrest: FC = () => {
  const { t } = useTranslation();
  const [currentFilterData, setCurrentFilterData] =
    useState<FilterDataType[]>(filterData);
  const products = armrestData;
  const [filteredProducts, setFilteredProducts] = useState<
    [] | FilterDataType[]
  >([]);

  useEffect(() => {
    filterProducts(currentFilterData, setFilteredProducts, products);
  }, currentFilterData);

  return (
    <Layout>
      <div>
        <div className={s.pageTitle}>
          <h2>{t("menu.armrest")}</h2>
        </div>
        <ProductsWithFilter
          currentFilterData={currentFilterData}
          setCurrentFilterData={setCurrentFilterData}
        >
          <Products products={filteredProducts} withFilter={true} />
        </ProductsWithFilter>
      </div>
    </Layout>
  );
};
