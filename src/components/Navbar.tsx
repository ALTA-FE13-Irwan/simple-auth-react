import React, { Component } from "react";
import withRouter, { NavigateParam } from "@/utils/navigation";
import { Link, useNavigate } from "react-router-dom";
import { MdAccountCircle, MdLogin, MdLogout } from "react-icons/Md";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { FC, useContext } from "react";
import { RootState } from "@/utils/types/redux";

export const MyNavbar: FC = () => {
  const { isLoggedIn, uname } = useSelector((state: RootState) => state.data);

  const [, , removeCookie] = useCookies();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie("tkn");
    removeCookie("uname");
    alert("you sure to logout");
    navigate("/");
  };

  return (
    <div className="navbar bg-slate-50 py-6 md:py-8 text-slate-700">
      <div className="flex-1 px-2 lg:flex-none">
        <Link to={"/"}>
          <a className="text-lg font-bold  md:text-2xl">SIMPLE-AUTH-REACT</a>
        </Link>
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content p-2 drop-shadow-xl border-2 rounded-box w-52 mt-4 bg-slate-50 "
            >
              <li className="hover-bordered ">
                <button
                  className="hover:border-l-4 hover:border-sky-400 active:bg-sky-400"
                  onClick={() => navigate("/")}
                >
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
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Homepage
                </button>
              </li>
              {isLoggedIn && (
                <li>
                  <button
                    className="hover:border-l-4 hover:border-sky-400 active:bg-sky-400"
                    onClick={() => navigate("/profile/testing")}
                  >
                    <MdAccountCircle className="h-5 w-5" />
                    Profile
                  </button>
                </li>
              )}
              {isLoggedIn ? (
                <li>
                  <button
                    onClick={() => handleLogout()}
                    className="hover:border-l-4 hover:border-sky-400 active:bg-sky-400"
                  >
                    <MdLogout className="h-5 w-5" />
                    Logout
                  </button>
                </li>
              ) : (
                <li className="hover-bordered">
                  <button
                    onClick={() => navigate("/login")}
                    className="hover:border-l-4 hover:border-sky-400 active:bg-sky-400"
                  >
                    <MdLogout className="h-5 w-5" />
                    Login
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
