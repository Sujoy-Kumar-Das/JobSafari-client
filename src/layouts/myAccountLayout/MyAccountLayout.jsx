import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContextProvider } from "../../contexts/AuthContext/AuthContext";
import { AiFillHome, AiOutlineGlobal, AiOutlineMenu } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { FaBloggerB, FaDownload, FaFileUpload, FaUser } from "react-icons/fa";
import { BsFillPenFill } from "react-icons/bs";

const MyAccountLayout = () => {
  // contexts
  const { user } = useContext(AuthContextProvider);
  const menuItems = [
    { id: 1, text: "Home", link: "/home" },
    { id: 2, text: "Job Posts", link: "/job-posts" },
    { id: 3, text: "Post a Job", link: "/post-job" },
    { id: 6, text: "Blogs", link: "/blogs" },
  ];

  const myProfileItems = [
    { id: 1, text: "My Profile", link: "/my-account/my-profile" },
    { id: 2, text: "My Resume", link: "/my-account/my-resume" },
    { id: 3, text: "My Applications", link: "/my-account/my-application" },
  ];
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet></Outlet>
      </div>

      <label
        htmlFor="my-drawer-2"
        className="btn btn-primary drawer-button lg:hidden"
      >
        <AiOutlineMenu />
      </label>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className=" p-10 w-80 min-h-full bg-base-200 text-base-content ">
          {myProfileItems.map((item) => (
            <li key={item.id} className=" p-1">
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
                ) : item.text === "My Resume" ? (
                  <p className=" flex items-center space-x-2 ">
                    <span>
                      <BsFillPenFill></BsFillPenFill>
                    </span>
                    <span>{item.text} </span>
                  </p>
                ) : (
                  <p className=" flex items-center space-x-2 ">
                    <span>
                      <FaDownload></FaDownload>
                    </span>
                    <span>{item.text} </span>
                  </p>
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
          <button className=" mt-3 btn btn-sm w-full lg:w-3/5  btn-primary  border-none ">
            logout <FiLogOut />{" "}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default MyAccountLayout;
