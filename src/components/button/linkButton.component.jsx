import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./linkButton.styles.scss";
const LinkButton = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const location = useLocation();

  const addressLoc = String(location.pathname).split("/");

  return (
    <div className="container-back">
      <span className="goBack" onClick={goBack}>
        &#129044; Go Back
      </span>
      {addressLoc.map((addressPart, index) =>
        addressPart.length === 0 ? (
          <Link to="/" key={index} className="address">
            /home
          </Link>
        ) : (
          <Link to={`/${addressPart}`} className="address" key={index}>
            /{addressPart}
          </Link>
        )
      )}
    </div>
  );
};

export default LinkButton;
