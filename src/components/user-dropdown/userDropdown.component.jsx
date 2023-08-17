import React, { useContext } from "react";
import "./user-dropdown.styles.scss";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const UserDropdown = () => {
  return (
    <div className="user-dropdown-container">
      <div className="user-items">
        <div className="item">Profile</div>
        <div className="item" onClick={signOutUser}>
          Logout
        </div>
      </div>
    </div>
  );
};

export default UserDropdown;
