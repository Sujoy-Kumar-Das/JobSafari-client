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
import MyAccountLayout from "../layouts/myAccountLayout/MyAccountLayout";
import MyProfile from "../pages/myAccount/myProfile/MyProfile";
import EditResume from "../pages/myAccount/EditResume/EditResume";
import MyResume from "../pages/myAccount/myResume/MyResume";
import AllUsers from "../pages/myAccount/allUsers/AllUsers";
import MyApplication from "../pages/myAccount/myApplications/MyApplication";
import PrivateRouter from "./PrivateRouter";
import AdminRouter from "./AdminRouter";
import AddBlog from "../pages/myAccount/addBlog/AddBlog";
import MyBlogs from "../pages/myAccount/myBlogs/MyBlogs";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/job-posts", element: <AllJobPosts></AllJobPosts> },
      { path: "/job-detail/:id", element: <JobDetail></JobDetail> },
      {
        path: "/post-job",
        element: (
          <PrivateRouter>
            <PostJob></PostJob>
          </PrivateRouter>
        ),
      },
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
  {
    path: "/my-account",
    element: (
      <PrivateRouter>
        <MyAccountLayout></MyAccountLayout>
      </PrivateRouter>
    ),
    children: [
      {
        path: "/my-account/my-profile",
        element: <MyProfile></MyProfile>,
      },

      {
        path: "/my-account/my-resume",
        element: <MyResume></MyResume>,
      },
      {
        path: "/my-account/edit-my-resume",
        element: <EditResume></EditResume>,
      },
      {
        path: "/my-account/my-application",
        element: <MyApplication></MyApplication>,
      },
      {
        path: "/my-account/all-users",
        element: (
          <AdminRouter>
            <AllUsers></AllUsers>
          </AdminRouter>
        ),
      },
      {
        path: "/my-account/post-a-blog",
        element: <AddBlog></AddBlog>,
      },
      {
        path: "/my-account/my-blogs",
        element: <MyBlogs></MyBlogs>,
      },
    ],
  },
]);
