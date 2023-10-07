import React, { useContext } from "react";
import { AuthContextProvider } from "../contexts/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../pages/shared/loaders/Loader";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContextProvider);
  const location = useLocation();
  if (loading) {
    return <Loader />;
  }
  if (user && user?.uid) {
    return children;
  } else {
    return (
      <Navigate
        state={{ from: location }}
        replace
        to={"/resgistration/sing-in"}
      ></Navigate>
    );
  }
};

export default PrivateRouter;
