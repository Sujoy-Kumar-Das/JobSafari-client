import React, { useContext } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContextProvider } from "../../contexts/AuthContext/AuthContext";
import { AiFillHome, AiOutlineGlobal, AiOutlineMenu } from "react-icons/ai";
import { FiLogOut, FiUsers } from "react-icons/fi";
import {
  FaBlog,
  FaBloggerB,
  FaDownload,
  FaFileUpload,
  FaUser,
} from "react-icons/fa";
import { BsFillCreditCard2BackFill, BsFillPenFill } from "react-icons/bs";
import { successMessage } from "../../commonFuntions/successMessage";
import useIsAdmin from "../../hooks/useIsAdmin";
import Loader from "../../pages/shared/loaders/Loader";

const MyAccountLayout = () => {
  // contexts
  const { user, loading, logOutUser } = useContext(AuthContextProvider); // auth context

  const [isAdmin, adminLoading] = useIsAdmin(user?.email); // is admin custom hook

  // menu items
  const menuItems = [
    { id: 1, text: "Home", link: "/home" },
    { id: 2, text: "Job Posts", link: "/job-posts" },
    { id: 3, text: "Post a Job", link: "/post-job" },
    { id: 4, text: "Blogs", link: "/blogs" },
  ];

  // my account items
  const myProfileItems = [
    {
      id: 1,
      text: "My Profile",
      link: "/my-account/my-profile",
      isAdminAccess: true,
      access: true,
    },
    {
      id: 2,
      text: "My Resume",
      link: "/my-account/my-resume",
      isAdminAccess: true,
      access: true,
    },
    {
      id: 3,
      text: "Edit Resume",
      link: "/my-account/edit-my-resume",
      isAdminAccess: true,
      access: true,
    },
    {
      id: 4,
      text: "My Applications",
      link: "/my-account/my-application",
      isAdminAccess: true,
      access: true,
    },
    {
      id: 5,
      text: "All Users",
      link: "/my-account/all-users",
      isAdminAccess: true,
      access: false,
    },
    {
      id: 6,
      text: "Post A Blog",
      link: "/my-account/post-a-blog",
      isAdminAccess: true,
      access: true,
    },
  ];

  // navigate hook
  const navigate = useNavigate();

  // handle logout
  const handleLogOut = async () => {
    await logOutUser();
    successMessage("Logout Successfully");
    navigate("/");
  };

  if (adminLoading || loading) {
    return <Loader />;
  }

  return (
    <div className=" flex flex-col-reverse lg:flex-row-reverse justify-between lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className=" w-full lg:w-10/12">
        <Outlet></Outlet>
      </div>
      <div className="bg-base-200  lg:hidden">
        <div className=" w-11/12 mx-auto h-12 flex items-center justify-between ">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-ghost btn-lg drawer-button "
          >
            <AiOutlineMenu />
          </label>
          <Link to={"/home"} className=" btn btn-ghost">
            Job Safari
          </Link>
        </div>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className=" p-10 w-80 bg-base-200 text-base-content min-h-screen">
          {myProfileItems.map((item) => (
            <li
              key={item.id}
              className={`p-1 ${
                item.isAdminAccess && isAdmin
                  ? "block"
                  : item.access
                  ? "block"
                  : "hidden"
              }`}
            >
              <NavLink
                className={(navlink) =>
                  navlink.isActive
                    ? "text-primary font-bold cursor-pointer"
                    : "font-bold cursor-pointer hover:text-primary transition-all duration-500 text-secondary"
                }
                to={item.link}
              >
                {item.text === "My Profile" ? (
                  <p className=" flex items-center space-x-2 ">
                    <span>
                      <FaUser></FaUser>
                    </span>
                    <span>{item.text} </span>
                  </p>
                ) : item.text === "Edit Resume" ? (
                  <p className=" flex items-center space-x-2 ">
                    <span>
                      <BsFillPenFill></BsFillPenFill>
                    </span>
                    <span>{item.text} </span>
                  </p>
                ) : item.text === "My Resume" ? (
                  <p className=" flex items-center space-x-2 ">
                    <span>
                      <BsFillCreditCard2BackFill></BsFillCreditCard2BackFill>
                    </span>
                    <span>{item.text} </span>
                  </p>
                ) : item.text === "My Applications" ? (
                  <p className=" flex items-center space-x-2 ">
                    <span>
                      <FaDownload></FaDownload>
                    </span>
                    <span>{item.text} </span>
                  </p>
                ) : item.text === "All Users" ? (
                  <p className=" flex items-center space-x-2 ">
                    <span>
                      <FiUsers></FiUsers>
                    </span>
                    <span>{item.text} </span>
                  </p>
                ) : item.text === "Post A Blog" ? (
                  <p className=" flex items-center space-x-2 ">
                    <span>
                      <FaBlog></FaBlog>
                    </span>
                    <span>{item.text} </span>
                  </p>
                ) : (
                  ""
                )}
              </NavLink>
            </li>
          ))}

          <div className=" divider "></div>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`  ${item?.user ? "hidden" : "block"} p-1`}
            >
              <NavLink
                className={(navlink) =>
                  navlink.isActive
                    ? "text-primary font-bold cursor-pointer"
                    : "font-bold cursor-pointer hover:text-primary transition-all duration-500 text-secondary"
                }
                to={item.link}
              >
                {item.text === "Home" ? (
                  <p className=" flex items-center space-x-2 ">
                    <span>
                      <AiFillHome></AiFillHome>
                    </span>
                    <span>{item.text} </span>
                  </p>
                ) : item.text === "Job Posts" ? (
                  <p className=" flex items-center space-x-2 ">
                    <span>
                      <AiOutlineGlobal></AiOutlineGlobal>
                    </span>
                    <span>{item.text} </span>
                  </p>
                ) : item.text === "Post a Job" ? (
                  <p className=" flex items-center space-x-2 ">
                    <span>
                      <FaFileUpload></FaFileUpload>
                    </span>
                    <span>{item.text} </span>
                  </p>
                ) : item.text === "Blogs" ? (
                  <p className=" flex items-center space-x-2 ">
                    <span>
                      <FaBloggerB></FaBloggerB>
                    </span>
                    <span>{item.text} </span>
                  </p>
                ) : (
                  ""
                )}
              </NavLink>
            </li>
          ))}
          {!user ? (
            <Link
              to={"/resgistration/sing-in"}
              className=" mt-3 btn btn-sm w-full lg:w-3/5  btn-primary  border-none "
            >
              Login now
            </Link>
          ) : (
            <button
              onClick={handleLogOut}
              className=" mt-3 btn btn-sm w-full lg:w-3/5  btn-primary  border-none "
            >
              logout <FiLogOut />{" "}
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MyAccountLayout;
