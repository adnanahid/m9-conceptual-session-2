import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  // handle Sign out user
  const handleSignOut = () => {
    signOutUser();
  };
  return (
    <div className="navbar text-white bg-gray-600 my-6 rounded-xl">
      {/* Navbar start */}
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Teeth Wizard</a>
      </div>

      {/* Navbar center */}
      <div className="navbar-center hidden lg:flex gap-5">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/treatments"}
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          Treatments
        </NavLink>
        <NavLink
          to={"/profile"}
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          Profile
        </NavLink>
        <NavLink
          to={"/appointment"}
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          Appointment
        </NavLink>
      </div>

      {/* Navbar end */}
      <div className="navbar-end">
        {/* showing button dynamically */}
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn px-8 text-lg text-gray-600 hover:text-white hover:bg-gray-600"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="btn px-8 text-lg text-gray-600 hover:text-white hover:bg-gray-600"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
