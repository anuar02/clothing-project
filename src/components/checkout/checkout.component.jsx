import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout.styles.scss";
import CheckoutItem from "../checkout-item/checkoutItem.component";
import LinkButton from "../button/linkButton.component";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const result = cartItems.reduce(
    (accum, curr) => accum + curr.price * curr.quantity,
    0
  );
  return (
    <div className="contain">
      <LinkButton />
      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CheckoutItem cartItem={item} key={item.id} />
          ))
        ) : (
          <h2>Your cart is empty!</h2>
        )}
        <div className="total">
          <h2 className="tod">Total: </h2>
          <h2 className="tod">&#8376;{result}</h2>
        </div>
        {/* {cartItems.length ? (
        <span className="total">Total: &#8376;{result}</span>
      ) : null} */}
      </div>
    </div>
  );
};

export default Checkout;
