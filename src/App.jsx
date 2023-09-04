import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/MainRouter";

const App = () => {
  return (
    <div className=" bg-base-100">
      <div className=" w-11/12 mx-auto">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
};

export default App;
