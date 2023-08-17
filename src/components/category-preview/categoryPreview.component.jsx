import React, { Fragment } from "react";
import "./category-preview.styles.scss";
import ProductCard from "../product-card/ProductCard.component";
import { Link } from "react-router-dom";

const CategoryPreview = ({ products }) => {
  return (
    <div className="category-preview-container">
      <div className="categories">
        <h2>Categories</h2>
      </div>
      {Object.keys(products).map((title) => (
        <Fragment key={title}>
          <div className="titles">
            <Link to={title} className="title">
              {title.toUpperCase()} <span>&rarr;</span>
            </Link>
          </div>
          <div className="preview">
            {products[title].slice(0, 6).map((product) => (
              <ProductCard
                key={product.id}
                products={product}
                titles={title}
              ></ProductCard>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default CategoryPreview;
