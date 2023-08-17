import React from "react";
import "./form-input.styles.scss";

const InputForm = ({ label, ...OtherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...OtherProps}></input>
      {label && (
        <label
          className={`${
            OtherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default InputForm;
