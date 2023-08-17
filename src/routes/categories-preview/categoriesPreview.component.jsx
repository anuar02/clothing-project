import React, { useContext } from "react";

import { CategoriesContext } from "../../context/categoriesMap.context";
import CategoryPreview from "../../components/category-preview/categoryPreview.component";

import LinkButton from "../../components/button/linkButton.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div>
      <LinkButton />
      <CategoryPreview products={categoriesMap} />
    </div>
  );
};

export default CategoriesPreview;
