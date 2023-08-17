import React, { Fragment, useContext } from "react";

import "./shop.styles.scss";
import { CategoriesContext } from "../../context/categoriesMap.context";
import CategoriesPreview from "../categories-preview/categoriesPreview.component";
import { Route, Routes } from "react-router-dom";
import Category from "../category/category.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
