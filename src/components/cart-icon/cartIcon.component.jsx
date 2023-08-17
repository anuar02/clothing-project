import React, { useContext } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const { cartItems } = useContext(CartContext);
  const itemsNum = cartItems.reduce((accum, item) => accum + item.quantity, 0);

  const toogleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toogleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsNum}</span>
    </div>
  );
};

export default CartIcon;
