import { useTranslation } from "react-i18next";
import s from "../ProductPage.module.css";
import { Products } from "../../components/Products";
import { trunkBagsData } from "./constants/trunkBagsData";
import { ProductsWithFilter } from "../../components/ProductsWithFilter";
import { FC, useEffect, useState } from "react";
import { FilterDataType } from "../../types/FilterDataType";
import { trunkBagsFilterData } from "./constants/TrunkBagsFilterData";
import { filterProducts } from "../../utils/filterProducts";
import { Layout } from "../../components/Layout";

export const TrunkBags: FC = () => {
  const { t } = useTranslation();
  const [currentFilterData, setCurrentFilterData] =
    useState<FilterDataType[]>(trunkBagsFilterData);
  const products = trunkBagsData;
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
          <h2>{t("menu.trunkBags")}</h2>
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
