import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  signOut,
} from "firebase/auth";
import app from "../../firebase/Firebase.init";

export const AuthContextProvider = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {
  // states
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // google provider
  const googleProvider = new GoogleAuthProvider();
  const faceBookProvider = new FacebookAuthProvider();
  // create user with google
  const singInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // create user with facebook
  const singInWithFacebook = () => {
    setLoading(true);
    return signInWithPopup(auth, faceBookProvider);
  };
  //   create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   update user info
  const updateUserInfo = (usersInfo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, usersInfo);
  };

  // login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // singout user
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  //   observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    loading,
    setLoading,
    user,
    singInWithGoogle,
    singInWithFacebook,
    createUser,
    updateUserInfo,
    loginUser,
    logOutUser,
  };
  return (
    <AuthContextProvider.Provider value={authInfo}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthContext;
