import React, { useState } from "react";
import Card from "react-credit-cards";
import { FaUserAlt, FaRegCreditCard } from "react-icons/fa";
import { formatCreditCardNumber, formatCVC, formatFormData } from "./utils";

import "./payment.styles.scss";

import "react-credit-cards/es/styles-compiled.css";
import Button from "../../button/button.component";

const PaymentDetails = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCVC] = useState("");
  const [issuer, setIssuer] = useState("");
  const [focused, setFocused] = useState("");
  const [formData, setFormData] = useState(null);

  const handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      setIssuer(issuer);
    }
  };

  const handleInputFocus = ({ target }) => {
    setFocused(target.name);
  };

  const handleInputChange = ({ target }) => {
    let value = target.value;
    if (target.name === "number") {
      value = formatCreditCardNumber(value);
    } else if (target.name === "expiry") {
      value = formatExpirationDate(value);
    } else if (target.name === "cvc") {
      value = formatCVC(value);
    }

    switch (target.name) {
      case "number":
        setNumber(value);
        break;
      case "name":
        setName(value);
        break;
      case "expiry":
        if (value >= 3) {
          const formattedValue = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
          setExpiry(formattedValue);
        } else {
          setExpiry(value);
        }
      case "cvc":
        setCVC(value);
        break;
      default:
        break;
    }
  };

  function formatExpirationDate(value) {
    const clearValue = value;
    if (!clearValue.search("/") && clearValue.length === 4) {
      const formattedValue = `${clearValue}/`;
      return formattedValue;
    }

    return clearValue;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    setFormData(formData);
    e.target.reset();
  };

  return (
    <div key="Payment">
      <div className="App-payment" style={{ width: "100%" }}>
        <Card
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focused}
          callback={handleCallback}
        />
        <div onSubmit={handleSubmit} className="container">
          <div className="form-group">
            <span className="icon">
              <FaRegCreditCard />
            </span>
            <input
              type="number"
              name="number"
              inputmode="numeric"
              className="form-control"
              id="username"
              placeholder="Card Number"
              pattern="[\d| ]{16,22}"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="form-group">
            <span className="icon">
              <FaUserAlt />
            </span>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="row">
            <div className="cvc">
              <div className="col-6">
                <input
                  type="tel"
                  maxlength="5"
                  name="expiry"
                  className="form-control"
                  placeholder="MM/YY"
                  required
                  value={formatExpirationDate(expiry)} // Call the formatting function here
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
              <div className="col-6">
                <input
                  type="tel"
                  maxlength="3"
                  name="cvc"
                  className="form-control"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </div>
            </div>
          </div>
          <input type="hidden" name="issuer" value={issuer} />
          <div className="form-actions">
            <Button id="btn">Pay</Button>
          </div>
        </div>
        {formData && (
          <div className="App-highlight">
            {formatFormData(formData).map((d, i) => (
              <div key={i}>{d}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default PaymentDetails;
