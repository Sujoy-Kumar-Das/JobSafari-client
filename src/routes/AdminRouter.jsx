import React, { useContext } from "react";
import { AuthContextProvider } from "../contexts/AuthContext/AuthContext";
import useIsAdmin from "../hooks/useIsAdmin";
import { Navigate } from "react-router-dom";
import Loader from "../pages/shared/loaders/Loader";

const AdminRouter = ({ children }) => {
  const { user, loading, logOutUser } = useContext(AuthContextProvider); // auth context
  const [isAdmin, adminLoading] = useIsAdmin(user?.email); // is admin cutom hook

  if (adminLoading || loading) {
    return <Loader />;
  }

  if (isAdmin && user) {
    return children;
  } else {
    return (
      <>
        {logOutUser()}
        <Navigate to={"/resgistration/sing-in"}></Navigate>
      </>
    );
  }
};

export default AdminRouter;
