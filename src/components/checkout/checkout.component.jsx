import React from "react";
import "./checkout.styles.scss";
import CheckoutItem from "../checkout-item/checkoutItem.component";
import LinkButton from "../button/linkButton.component";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import PaymentForm from "../payment-form/PaymentForm";
import PaymentDetails from "./payment-details/payment.component";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const result = cartItems.reduce(
    (accum, curr) => accum + curr.price * curr.quantity,
    0
  );
  return (
    <div className="contain">
      <LinkButton />
      <div className="check-container">
        <div className="checkout-container">
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
        <PaymentDetails />
      </div>
    </div>
  );
};

export default Checkout;
