import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar text-white bg-gray-600">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Teeth Wizard</a>
      </div>
      <div className="navbar-center hidden lg:flex gap-5">
        <NavLink to={"/"} className={({isActive}) => isActive ? "text-red-500" : ""}>Home</NavLink>
        <NavLink to={"/treatments"} className={({isActive}) => isActive ? "text-red-500" : ""}>Treatments</NavLink>
        <NavLink to={"/profile"} className={({isActive}) => isActive ? "text-red-500" : ""}>Profile</NavLink>
        <NavLink to={"/appointment"} className={({isActive}) => isActive ? "text-red-500" : ""}>Appointment</NavLink>
      </div>
      <div className="navbar-end">
        <a className="btn px-8 text-lg text-gray-600">Login</a>
      </div>
    </div>
  );
};

export default Navbar;