import React, { Component } from "react";
import withRouter, { NavigateParam } from "@/utils/navigation";
import { Link } from "react-router-dom";
import { MdAccountCircle, MdLogin } from "react-icons/Md";

export class MyNavbar extends Component {
  render() {
    return (
      <div className="navbar bg-slate-50 py-6 md:py-8 text-slate-700">
        <div className="flex-1 px-2 lg:flex-none">
          <Link to={"/"}>
            <a className="text-lg font-bold  md:text-3xl">HOME PAGE</a>
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
                  <Link className="active:bg-cyan-500" to={"/"}>
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
                  </Link>
                </li>

                <li className="hover-bordered">
                  <Link className="active:bg-cyan-500" to={`/profile/testing`}>
                    <MdAccountCircle className="h-5 w-5" />
                    Profile
                  </Link>
                </li>

                <li className="hover-bordered">
                  <Link className="active:bg-cyan-500" to={"/login"}>
                    <MdLogin className="h-5 w-5" />
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyNavbar;
