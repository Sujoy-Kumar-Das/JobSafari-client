import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/MainRouter";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a client react query client
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className=" bg-base-100">
        <div className=" ">
          <RouterProvider router={router}></RouterProvider>
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;
