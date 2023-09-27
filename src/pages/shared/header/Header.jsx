import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContextProvider } from "../../../contexts/AuthContext/AuthContext";
import { successMessage } from "../../../commonFuntions/successMessage";

const Header = () => {
  // contexts
  const { user, logOutUser } = useContext(AuthContextProvider);
  const menuItems = [
    { id: 1, text: "Home", link: "/home" },
    { id: 2, text: "Job Posts", link: "/job-posts" },
    { id: 3, text: "Post a Job", link: "/post-job" },
    { id: 4, text: "My Account", link: "/my-account/my-profile" },
    { id: 5, text: "My Applications", link: "/my-applications" },
    { id: 6, text: "Blogs", link: "/blogs" },
    {
      id: 8,
      text: "Sing up",
      link: "/resgistration/sing-up",
      user: user ? true : false,
    },
    {
      id: 9,
      text: "Sing In",
      link: "/resgistration/sing-in",
      user: user ? true : false,
    },
  ];

  // logout
  const handleLogOut = () => {
    logOutUser().then(() => {
      successMessage(`Logout succesfully`);
    });
  };
  return (
    <nav className="navbar flex justify-between sticky top-0 left-0 bg-base-200 px-5 z-50">
      <div className=" flex items-center">
        <NavLink
          className={
            "font-bold cursor-pointer hover:text-primary transition-all duration-500 text-secondary"
          }
          to={"/"}
        >
          JobSafari
        </NavLink>
      </div>
      <div className=" ">
        <ul className=" hidden px-1 lg:flex items-center gap-x-5">
          {menuItems.map((item) => (
            <li key={item.id} className={` ${item?.user ? "hidden" : "inline"}`}>
              <NavLink
                className={(navlink) =>
                  navlink.isActive
                    ? "text-primary font-bold cursor-pointer"
                    : "font-bold cursor-pointer hover:text-primary transition-all duration-500 text-secondary hover:border-b-2 border-black pb-[2px]"
                }
                to={item.link}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
          <button
            onClick={handleLogOut}
            className={`btn btn-info btn-sm ${!user && "hidden"}`}
          >
            Singout
          </button>
        </ul>
        <div className="drawer lg:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer" className="drawer-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <div className=" p-4 w-80 min-h-full bg-base-200 text-base-content flex">
              <ul>
                {menuItems.map((item) => (
                  <li
                    key={item.id}
                    className={`${item?.user && "hidden"} my-1 `}
                  >
                    <NavLink
                      className={(navlink) =>
                        navlink.isActive
                          ? "text-primary font-bold cursor-pointer"
                          : "font-bold cursor-pointer hover:text-primary transition-all duration-500 text-secondary"
                      }
                      to={item.link}
                    >
                      {item.text}
                    </NavLink>
                  </li>
                ))}
                <button
                  onClick={handleLogOut}
                  className={`btn btn-info btn-sm ${!user && "hidden"}`}
                >
                  Singout
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
