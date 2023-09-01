import React from "react";
import "./product-card.styles.scss";
import Button from "../button/button.component";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.reducer";

const ProductCard = ({ products }) => {
  const { imageUrl, name, price } = products;

  const dispatch = useDispatch();

  const addProductToCart = (productToAdd) => {
    dispatch(addItemToCart(productToAdd));
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="Image1"></img>
      <footer className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}&#8376;</span>
      </footer>

      <Button
        buttonType={"inverted"}
        onClick={() => addProductToCart(products)}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
