import SignUpForm from "../../components/sign-up/SignUpForm.component";
import SignInForm from "../../components/sign-in-form/SignInForm.component";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
