import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import AllJobPosts from "../pages/allJobPosts/AllJobPosts";
import JobDetail from "../pages/jobDetail/JobDetail";
import Error from "../pages/shared/error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/job-search", element: <AllJobPosts></AllJobPosts> },
      { path: "/job-detail/:id", element: <JobDetail></JobDetail> },
      { path: "*", element: <Error></Error> },
    ],
  },
]);
