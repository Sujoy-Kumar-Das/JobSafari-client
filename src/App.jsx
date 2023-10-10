import React, { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/MainRouter";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthContextProvider } from "./contexts/AuthContext/AuthContext";
import PageLoader from "./pages/shared/loaders/PageLoader";

// Create a client react query client
const queryClient = new QueryClient();
const App = () => {
  const { loading } = useContext(AuthContextProvider);
  if (loading) {
    return <PageLoader />;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <div className=" bg-base-100 ">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </QueryClientProvider>
  );
};

export default App;
