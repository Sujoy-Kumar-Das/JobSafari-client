import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const menuItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "Job Search", link: "/job-search" },
    { id: 3, text: "Post a Job", link: "/post-job" },
    { id: 4, text: "My Account", link: "/my-profile" },
    { id: 5, text: "My Applications", link: "/my-applications" },
    { id: 6, text: "Blogs", link: "/blogs" },
  ];
  const handleClick = (itemId) => {
    setActiveMenuItem(itemId);
  };

  return (
    <nav className="navbar flex justify-between sticky top-0 left-0 bg-base-200 px-5 z-50">
      <div>
        <a
          
          className={` font-bold cursor-pointer normal-case text-xl hover:text-primary transition-all duration-500  ${
            activeMenuItem === 20 ? " text-primary" : " text-secondary"
          } `}
          onClick={() => handleClick(20)}
        >
          JobSafari
        </a>
      </div>
      <div className=" ">
        <ul className=" hidden gap-x-5  px-1 lg:flex">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={` font-bold cursor-pointer hover:text-primary transition-all duration-500 ${
                activeMenuItem === item.id ? " text-primary" : " text-secondary"
              }`}
            >
              <Link to={item.link}>{item.text}</Link>
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
                  <li
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                    className={` font-bold hover:text-primary transition-all duration-500 mb-2 cursor-pointer ${
                      activeMenuItem === item.id
                        ? " text-primary"
                        : " text-secondary"
                    }`}
                  >
                    <Link>{item.text}</Link>
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
