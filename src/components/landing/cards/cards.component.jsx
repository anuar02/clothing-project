import React, { useContext, Fragment } from "react";
import "./cards.styles.scss";
import ProductCard from "../../product-card/ProductCard.component";
import { CategoriesContext } from "../../../context/categoriesMap.context";

const Cards = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="card-main">
      <span className="arrivals">New Arrivals</span>
      <div className="cards-container">
        {Object.keys(categoriesMap).map((title) => (
          <Fragment key={title}>
            <div className="preview">
              {categoriesMap[title].slice(0, 1).map((product) => (
                <ProductCard
                  key={product.id}
                  products={product}
                  titles={title}
                />
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Cards;
