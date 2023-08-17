import React, { Fragment, useContext } from "react";

import { CategoriesContext } from "../../context/categoriesMap.context";
import CategoryPreview from "../../components/category-preview/categoryPreview.component";
import { Link, useNavigate } from "react-router-dom";
import LinkButton from "../../components/button/linkButton.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <LinkButton />
      <CategoryPreview products={categoriesMap} />
    </div>
  );
};

export default CategoriesPreview;
