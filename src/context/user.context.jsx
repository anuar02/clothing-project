import React, { createContext, useState, useEffect } from "react";
import {
  createUserDocFromAuth,
  onAuthStateChangedListener,
  signOutUser,
} from "../utils/firebase/firebase.utils";

//actual value that i want to access
export const UserContext = createContext({
  currentUser: null,
  setcurrentUser: () => null,
  userCartOpen: false,
  setUserCartOpen: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userCartOpen, setUserCartOpen] = useState(false);
  const value = { currentUser, setCurrentUser, userCartOpen, setUserCartOpen };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setCurrentUser(user);
      if (user) {
        createUserDocFromAuth(user);
      }
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
