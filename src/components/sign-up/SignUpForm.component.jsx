import React from "react";
import "./sign-up-form.styles.scss";
import { useState } from "react";
import { createAuthUser } from "../../utils/firebase/firebase.utils";
import { createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import InputForm from "../input-form/InputForm.component";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmedPassword: "",
};

const SignUpForm = () => {
  const [FormFields, setFormfields] = useState(defaultFormFields);
  const { displayName, email, password, confirmedPassword } = FormFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormfields({ ...FormFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (FormFields.confirmedPassword !== FormFields.password) {
      alert("Passwords doesn't match!");
      return;
    }

    try {
      const { user } = await createAuthUser(email, password);
      await createUserDocFromAuth(user, { displayName });
      setFormfields(defaultFormFields); // Clear inputs
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("This email has already been used");
        return;
      }
      console.log(error, " You got error");
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account? </h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={(event) => handleSubmit(event)}>
        <InputForm
          label="Display name"
          required
          type="text"
          onChange={(event) => handleChange(event)}
          name="displayName"
          value={displayName}
        />
        <InputForm
          label="Email"
          required
          type="email"
          onChange={(event) => handleChange(event)}
          name="email"
          autoComplete="new-email"
          value={email}
        />
        <InputForm
          label="Password"
          required
          type="password"
          autoComplete="new-password"
          onChange={(event) => handleChange(event)}
          name="password"
          value={password}
        />
        <InputForm
          label="Confirmed Password"
          required
          type="password"
          onChange={(event) => handleChange(event)}
          autoComplete="new-password"
          name="confirmedPassword"
          value={confirmedPassword}
        />
        <Button style={{ width: "100%" }} type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
