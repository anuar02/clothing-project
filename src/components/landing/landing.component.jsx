import React from "react";
import "./landing.styles.scss";
import Advert from "./advert/advert.component";
import Cards from "./cards/cards.component";
import Explore from "./explore/explore.component";
import Payday from "./paydaySale/payday.component";
const Landing = () => {
  return (
    <div className="container">
      <Explore />
      <Advert />
      <Cards />
      <Payday />
    </div>
  );
};

export default Landing;
