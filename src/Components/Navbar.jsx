import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import profile_pic from "../assets/profile_pic.png";
import dropdown_icon from "../assets/dropdown_icon.svg";
import menu_icon from "../assets/menu_icon.svg";
import cross_icon from "../assets/cross_icon.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [token, settoken] = useState(true);
  const [showMenu, setshowMenu] = useState(false);

  return (
    <div className="flex items-center justify-between font-medium py-4">
      {/* Logo and Navigation Links */}
      <div className="flex items-center gap-8">
        <Link to="/">
          <img src={Logo} className="w-60" alt="Logo" />
        </Link>

        <ul className="hidden px-4 sm:flex items-center gap-5 text-base text-gray-700 font-semibold">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p className=" hover:text-orange-400 duration-300 ">Explore</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink to="/dashboard" className="flex flex-col items-center gap-1">
            <p className=" hover:text-orange-400 duration-300 ">Dashboard</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>
      </div>

      {/* Profile and Menu */}
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={profile_pic} alt="Profile" />
            <img className="w-2.5" src={dropdown_icon} alt="Dropdown Icon" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-500 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-slate-100 rounded flex flex-col gap-4 p-4">
                <p
                  className="hover:text-black cursor-pointer"
                  onClick={() => navigate("dashboard")}
                >
                  Dashboard
                </p>
                <p
                  className="hover:text-black cursor-pointer"
                  onClick={() => settoken(false)}
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-medium hidden md:block"
          >
            Create account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
