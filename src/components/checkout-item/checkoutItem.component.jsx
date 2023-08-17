import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price, id } = cartItem;
  const { removeItemFromCart, addItemToCart, decrementItem } =
    useContext(CartContext);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name}></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decrementItem(id)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}&#8376;</span>
      <div
        className="remove-button"
        onClick={() => {
          removeItemFromCart(id);
        }}
      >
        {" "}
        &#x2716;{" "}
      </div>

      {/* <span onClick={() => addItemToCart(item)}> Increment</span>
          <br></br>
          <span onClick={() => decrementItem(item.id)}> Decrement</span>
          <br></br>
          <span onClick={() => removeItemFromCart(item.id)}> Remove</span> */}
    </div>
  );
};

export default CheckoutItem;
