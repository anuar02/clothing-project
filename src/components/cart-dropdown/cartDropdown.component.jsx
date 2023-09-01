import { Link } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cart-item/cartItem.component";
import "./cart-dropdown.styles.scss";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  console.log(cartItems, " drop");
  const totalSum = cartItems.reduce(
    (accum, current) => accum + current.price * current.quantity,
    0
  );

  return (
    <div className="cart-dropdown-container">
      <header>
        <FaShoppingCart style={{ width: "25px", height: "25px" }} />
        <span className="total-sum">
          <span style={{ color: "#ABB0BE" }}>Total:</span>
          {totalSum}&#8376;
        </span>
      </header>
      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>
      ) : (
        <div className="cart-empty">
          <h3>Cart is empty!</h3>
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="btn-container">
          <Link to="/checkout">
            <Button>Go to Checkout </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
