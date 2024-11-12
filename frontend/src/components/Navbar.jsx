import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img
        onClick={() => {
          navigate("/"); // Keep this as it is for your current homepage
        }}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt="DriveSphere Logo"
      />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to={"/"}>
          {" "}
          {/* Keep the home link */}
          <li className="py-1">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/aimglobal"}>
          {" "}
          {/* Updated text for AI-Powered Solutions */}
          <li className="py-1">AI-Powered Solutions</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/mobileapp"}>
          {" "}
          {/* Updated text for AutoTech Apps */}
          <li className="py-1">AutoTech Apps</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/generativeai"}>
          {" "}
          {/* Updated text for AI Innovations */}
          <li className="py-1">AI Innovations</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/partners"}>
          {" "}
          {/* Updated text for Collaborations */}
          <li className="py-1">Collaborations</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-8 rounded-full"
              src={userData?.image}
              alt="User Avatar"
            />
            <img
              className="w-2.5"
              src={assets.dropdown_icon}
              alt="Dropdown Icon"
            />
            <div className="absolute top-0 right-0 pt-14 text-base text-gray-600 z-10 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => {
                    navigate("/my-projects"); // Updated to reflect projects in DriveSphere
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  My Projects
                </p>
                <p
                  onClick={() => {
                    navigate("/my-solutions"); // Updated to reflect solutions
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  My Solutions
                </p>
                <p
                  onClick={() => {
                    logout();
                  }}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}
        <img
          onClick={() => {
            setShowMenu(true);
          }}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt="Menu Icon"
        />
        {/** mobile nav */}
        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 bottom-0 top-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="DriveSphere Logo" />
            <img
              className="w-7"
              onClick={() => {
                setShowMenu(false);
              }}
              src={assets.cross_icon}
              alt="Close Menu Icon"
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink to={"/"}>
              {" "}
              {/* Keep home link */}
              <p
                className={`px-4 py-2 rounded inline-block`}
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                HOME
              </p>
            </NavLink>
            <NavLink to={"/aimglobal"}>
              {" "}
              {/* Updated link for AI-Powered Solutions */}
              <p
                className={`px-4 py-2 rounded inline-block`}
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                AI-Powered Solutions
              </p>
            </NavLink>
            <NavLink to={"/mobileapp"}>
              {" "}
              {/* Updated link for AutoTech Apps */}
              <p
                className={`px-4 py-2 rounded inline-block`}
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                AutoTech Apps
              </p>
            </NavLink>
            <NavLink to={"/generativeai"}>
              {" "}
              {/* Updated link for AI Innovations */}
              <p
                className={`px-4 py-2 rounded inline-block`}
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                AI Innovations
              </p>
            </NavLink>
            <NavLink to={"/partners"}>
              {" "}
              {/* Updated link for Collaborations */}
              <p
                className={`px-4 py-2 rounded inline-block`}
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                Collaborations
              </p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
