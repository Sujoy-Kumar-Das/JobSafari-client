import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../../firebase/Firebase.init";

export const AuthContextProvider = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {
  // states
  const [user, setUser] = useState(null);

  //   create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   update user info
  const updateUserInfo = (usersInfo) => {
    return updateProfile(auth.currentUser, usersInfo);
  };

  //   observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    user,
    createUser,
    updateUserInfo,
  };
  return (
    <AuthContextProvider.Provider value={authInfo}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthContext;
