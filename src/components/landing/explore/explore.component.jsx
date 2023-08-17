import React from "react";
import girl from "../../../assets/girl.png";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className="landing-container">
      <div className="explore">
        <div className="land-items">
          <h1>
            LET’S EXPLORE <span style={{ color: "#eb0e0e" }}>UNIQUE</span>{" "}
            CLOTHES.
          </h1>
          <h2>Live for Influential and Innovative fashion!</h2>
          <Link to="/shop">
            <span id="btn">SHOP NOW</span>
          </Link>
        </div>
      </div>

      <div className="land-image">
        <img src={girl} alt="Logo"></img>
      </div>
    </div>
  );
};

export default Explore;
