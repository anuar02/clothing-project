import React from "react";
import "./payday.styles.scss";
import girl_2 from "../../../assets/girl_2.png";
import { Link } from "react-router-dom";

const Payday = () => {
  return (
    <div className="payday-container">
      <div className="img">
        <img src={girl_2} alt="girl" />
      </div>
      <div className="sale">
        <div className="text-sale">
          <span id="big-text">PAYDAY SALE NOW</span>
        </div>
        <h2>
          Spend minimal $100 get 30% off voucher code for your next purchase
        </h2>
        <div>
          <h2>1 June - 10 June 2021</h2>
          <h2>*Terms & Conditions apply</h2>
        </div>
        <Link to="/shop">
          <span id="btn">SHOP NOW</span>
        </Link>
      </div>
    </div>
  );
};

export default Payday;
