import React, { useEffect, useState } from "react";
import "./category.styles.scss";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard.component";
import LinkButton from "../../components/button/linkButton.component";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

const Category = () => {
  const { category } = useParams();

  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="categories-cont">
      <LinkButton />
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="contain-all">
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} products={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
