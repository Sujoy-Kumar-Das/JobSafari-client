import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import JobDetail from "../pages/jobDetail/JobDetail";
import Error from "../pages/shared/error/Error";
import SingUp from "../pages/registration/singUP/SingUp";
import Login from "../pages/registration/login/Login";
import ResgistrationLayout from "../layouts/ResgistrationLayout";
import SearchResultCompo from "../pages/shared/searchResult/SearchResultCompo";
import AllJobPosts from "../pages/allJobPosts/AllJobPosts";
import PostJob from "../pages/postJob/PostJob";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/job-posts", element: <AllJobPosts></AllJobPosts> },
      { path: "/job-detail/:id", element: <JobDetail></JobDetail> },
      { path: "/post-job", element: <PostJob></PostJob> },
      {
        path: "/job-search",
        element: <SearchResultCompo></SearchResultCompo>,
      },
      { path: "*", element: <Error></Error> },
    ],
  },
  {
    path: "/resgistration",
    element: <ResgistrationLayout></ResgistrationLayout>,
    children: [
      {
        path: "/resgistration/sing-up",
        element: <SingUp></SingUp>,
      },
      {
        path: "/resgistration/sing-in",
        element: <Login></Login>,
      },
    ],
  },
]);
