import React from "react";
import "./sign-in-form.styles.scss";
import { useState, useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import {
  SignInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import InputForm from "../input-form/InputForm.component";
import Button from "../button/button.component";
import { signInUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const navigate = useNavigate();
  const [FormFields, setFormfields] = useState(defaultFormFields);
  const { email, password } = FormFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormfields({ ...FormFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);

      setFormfields(defaultFormFields); // Clear inputs
    } catch (error) {
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        alert("Wrong email or password!");
      } else if (error.code === "auth/too-many-requests") {
        alert(
          "Access to this account has been temporarily disabled due to many failed login attempts."
        );
      }
      console.log(error);
    }
    navigate("/shop");
  };

  const signInWithGoogle = async () => {
    await SignInWithGooglePopup();
    navigate("/shop");
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account? </h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={(event) => handleSubmit(event)}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={"google"}
            onClick={signInWithGoogle}
          >
            Google sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
