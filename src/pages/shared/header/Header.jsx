import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const menuItems = [
    { id: 1, text: "Home", link: "/home" },
    { id: 2, text: "Job Search", link: "/job-search" },
    { id: 3, text: "Post a Job", link: "/post-job" },
    { id: 4, text: "My Account", link: "/my-profile" },
    { id: 5, text: "My Applications", link: "/my-applications" },
    { id: 6, text: "Blogs", link: "/blogs" },
    { id: 7, text: "Sing up", link: "/resgistration/sing-up" },
    { id: 8, text: "Sing In", link: "/resgistration/sing-in" },
  ];

  return (
    <nav className="navbar flex justify-between sticky top-0 left-0 bg-base-200 px-5 z-50">
      <div>
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
        <ul className=" hidden gap-x-5  px-1 lg:flex">
          {menuItems.map((item) => (
            <li key={item.id} className={` `}>
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
                  <li key={item.id} className={` `}>
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
