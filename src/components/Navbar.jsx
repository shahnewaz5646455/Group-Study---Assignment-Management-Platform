import React, { use } from "react";
import { FiLogIn, FiLogOut, FiSun, FiMoon } from "react-icons/fi";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import { RiTeamFill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";

export default function Navbar() {
  const { setDarkMode, darkMode, user, logout } = use(AuthContext);
  const damyphoto =
    "https://i.postimg.cc/HWwKx0JW/307ce493-b254-4b2d-8ba4-d12c080d6651.jpg";

  const handledark = () => {
    setDarkMode(!darkMode);
  };

  const ThemeToggle = () => (
    <button
      className="btn btn-ghost btn-circle text-xl"
      onClick={handledark}
      aria-label="Toggle Theme"
      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {darkMode ? (
        <FiSun className="text-yellow-400 transition-transform duration-300 scale-110" />
      ) : (
        <FiMoon className="text-primary transition-transform duration-300 scale-110" />
      )}
    </button>
  );

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully!");
    } catch (err) {
      console.log(err);
      toast.error("Logout failed!");
    }
  };

  const closeDrawer = () => {
    const drawer = document.getElementById("nav-drawer");
    if (drawer) drawer.checked = false;
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/" onClick={closeDrawer} className="font-medium">
          <IoHome className="inline-block text-lg mr-1" />
          Home
        </NavLink>
      </li>
      <li>
        
        <NavLink to="about" onClick={closeDrawer} className="font-medium">
          <RiTeamFill className="inline-block text-lg mr-1" />
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Assignments"
          onClick={closeDrawer}
          className="font-medium"
        >
          <MdAssignmentTurnedIn className="inline-block text-lg mr-1" />
          Assignments
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/pending"
              onClick={closeDrawer}
              className="font-medium"
            >
              Pending
            </NavLink>
          </li>
          <li>
            <button
              onClick={() => {
                handleLogout();
                closeDrawer();
              }}
              className="font-semibold border-2"
            >
              <FiLogOut className="inline-block mr-1 text-lg" />
              Logout
            </button>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className=" fixed top-0 left-0 w-full p-2.5 z-50 ">
      {/* Mobile Navbar */}
      <div className="drawer md:hidden">
        <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex items-center justify-between p-4">
          {/* Menu Button on Left */}
          <div className="flex items-center gap-2">
            <label htmlFor="nav-drawer" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <Link to="/" onClick={closeDrawer}>
              <h1 className="text-2xl font-bold">
                Think<span className="text-orange-500">Fast</span>
              </h1>
            </Link>
          </div>
          <ThemeToggle />
        </div>

        <div className="drawer-side z-40">
          <label htmlFor="nav-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64 bg-base-200 space-y-2 h-screen">
            {navLinks}
            {user ? (
              <li className="mt-4 border-t pt-4">
                <div className="dropdown dropdown-bottom">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img
                        src={user.photoURL || damyphoto}
                        alt="profile"
                        onError={(e) => (e.target.src = damyphoto)}
                      />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li className="text-center font-semibold">
                      {user.displayName}
                    </li>
                    <li>
                      <NavLink to="/CreateAssignment" onClick={closeDrawer}>
                        Create Assignments
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/mysubmission" onClick={closeDrawer}>
                        My Assignments
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
            ) : (
              <li className="mt-4 border-t pt-4 space-y-2">
                <Link
                  to="/login"
                  onClick={closeDrawer}
                  className="btn text-white btn-primary w-full"
                >
                  <FiLogIn className="mr-1" />
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={closeDrawer}
                  className="btn text-white btn-primary w-full"
                >
                  <FiLogIn className="mr-1" />
                  Register
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div
        className={`hidden md:flex justify-between  items-center px-6 py-2 w-11/12 max-w-7xl mx-auto border-2 rounded-lg shadow-sm transition-colors duration-300 ${
          darkMode
            ? "bg-white text-gray-900 border-black"
            : "bg-[#1d232a] text-white border-white"
        }`}
      >
        <Link to="/">
          <h1 className="text-2xl font-bold tracking-tight">
            Think<span className="text-orange-500">Fast</span>
          </h1>
        </Link>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <ul className="menu menu-horizontal gap-3 font-medium">{navLinks}</ul>

          {!user ? (
            <>
              <Link
                to="/login"
                className="btn text-white btn-primary shadow-md"
              >
                <FiLogIn className="mr-1" />
                Login
              </Link>
              <Link
                to="/register"
                className="btn text-white btn-primary shadow-md"
              >
                <FiLogIn className="mr-1" />
                Register
              </Link>
            </>
          ) : (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                  <img
                    src={user.photoURL || damyphoto}
                    alt="profile"
                    onError={(e) => (e.target.src = damyphoto)}
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className={`menu dropdown-content mt-3 p-2 shadow-lg rounded-box w-52 ${
                  darkMode ? "bg-[#1d232a] text-white" : "bg-base-100"
                }`}
              >
                <li className="text-center font-semibold">
                  {user.displayName}
                </li>
                <li>
                  <NavLink to="/CreateAssignment">Create Assignments</NavLink>
                </li>
                <li>
                  <NavLink to="/mysubmission">My Assignments</NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
