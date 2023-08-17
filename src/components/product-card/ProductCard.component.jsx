import React, { useContext } from "react";
import "./product-card.styles.scss";
import Button from "../button/button.component";
import { CartContext } from "../../context/cart.context";

const ProductCard = ({ products }) => {
  const { addItemToCart } = useContext(CartContext);
  const { imageUrl, name, price } = products;

  const addProductToCart = () => addItemToCart(products);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="Image1"></img>
      <footer className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}&#8376;</span>
      </footer>

      <Button buttonType={"inverted"} onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
