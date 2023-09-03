import React, { useEffect } from "react";

import "./shop.styles.scss";
import CategoriesPreview from "../categories-preview/categoriesPreview.component";
import { Route, Routes } from "react-router-dom";
import Category from "../category/category.component";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { setCategories } from "../../store/categories/categories.reducer";

const Shop = () => {
  const dispatch = useDispatch();

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
