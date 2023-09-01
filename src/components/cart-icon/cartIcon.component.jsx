import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.reducer";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);

  const cartItems = useSelector(selectCartItems);

  const itemsNum = cartItems.reduce((accum, item) => accum + item.quantity, 0);

  const toogleCart = () => {
    console.log(isCartOpen);
    dispatch(setIsCartOpen(!isCartOpen));
    console.log(isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toogleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsNum}</span>
    </div>
  );
};

export default CartIcon;
