import React from "react";
import CategoryPreview from "../../components/category-preview/categoryPreview.component";
import "./categoriesPreview.styles.scss";
import LinkButton from "../../components/button/linkButton.component";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <div>
      <LinkButton />
      <CategoryPreview products={categoriesMap} />
    </div>
  );
};

export default CategoriesPreview;
