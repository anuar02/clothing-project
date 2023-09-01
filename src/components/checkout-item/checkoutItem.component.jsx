import React from "react";
import "./checkout-item.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  decrementItem,
  removeItemFromCart,
} from "../../store/cart/cart.reducer";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { imageUrl, name, quantity, price, id } = cartItem;

  const decrementItemHandler = (id) => dispatch(decrementItem(id));
  const addItemHandler = () => dispatch(addItemToCart(cartItem));
  const removeItemHandler = (id) => dispatch(removeItemFromCart(id));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name}></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decrementItemHandler(id)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemHandler(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}&#8376;</span>
      <div
        className="remove-button"
        onClick={() => {
          removeItemHandler(id);
        }}
      >
        {" "}
        &#x2716;{" "}
      </div>
    </div>
  );
};

export default CheckoutItem;
