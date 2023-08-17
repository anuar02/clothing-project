import "./cart-item.styles.scss";
import React from "react";

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl}></img>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {price} &#8376; x <b>{quantity}</b>
        </span>
      </div>
    </div>
  );
};

export default CartItem;
