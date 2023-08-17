import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import UserDropdown from "../user-dropdown/userDropdown.component";

const NavUser = () => {
  const { currentUser, userCartOpen, setUserCartOpen } =
    useContext(UserContext);
  const toogleUserCart = () => {
    setUserCartOpen(!userCartOpen);
  };
  return (
    <>
      {currentUser && userCartOpen ? <UserDropdown /> : null}
      {currentUser && currentUser.displayName ? (
        <div>
          {
            <span className="nav-link" onClick={toogleUserCart}>
              {currentUser.displayName}
            </span>
          }
        </div>
      ) : currentUser ? (
        <div>
          {
            <span className="nav-link" onClick={toogleUserCart}>
              {currentUser.email}
            </span>
          }
        </div>
      ) : (
        <Link className="nav-link user " to="/auth">
          <>Sign in</>
        </Link>
      )}
    </>
  );
};

export default NavUser;
