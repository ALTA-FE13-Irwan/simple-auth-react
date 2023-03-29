import React, { Component } from "react";

export class MyNavbar extends Component {
  render() {
    return (
      <div className="navbar bg-slate-50 shadow-lg py-6 md:py-8 text-slate-700">
        <div className="flex-1 px-2 lg:flex-none">
          <a className="text-lg font-bold  md:text-3xl">NAVBAR</a>
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
                className="menu dropdown-content p-2 drop-shadow-xl border-2 rounded-box w-52 mt-4 bg-slate-50"
              >
                <li className="hover-bordered ">
                  <a className="active:bg-cyan-500">
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
                  </a>
                </li>

                <li className="hover-bordered">
                  <a className="active:bg-cyan-500">Profile</a>
                </li>

                <li className="hover-bordered">
                  <a className="active:bg-cyan-500">Log out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      // <div className="z-40 sticky top-0 navbar w-full min-h-fit shadow-lg px-4 py-6 md:py-8  font-bold text-slate-700 text-lg bg-slate-50 hover:-translate-y-1 duration-300 flex justify-between mb-10 ">
      //   <div>NAVBAR</div>
      //   <div>
      //     <div className="dropdown dropdown-end z-50">
      //       <label tabIndex={0} className="btn btn-ghost btn-circle">
      //         <svg
      //           xmlns="http://www.w3.org/2000/svg"
      //           className="h-5 w-5"
      //           fill="none"
      //           viewBox="0 0 24 24"
      //           stroke="currentColor"
      //         >
      //           <path
      //             strokeLinecap="round"
      //             strokeLinejoin="round"
      //             strokeWidth="2"
      //             d="M4 6h16M4 12h16M4 18h7"
      //           />
      //         </svg>
      //       </label>
      //       <ul
      //         tabIndex={0}
      //         className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-50 rounded-box w-52 z-40 "
      //       >
      //         <li>
      //           <a className="active:bg-cyan-500">Homepage</a>
      //         </li>
      //         <li>
      //           <a className="active:bg-cyan-500">Portfolio</a>
      //         </li>
      //         <li>
      //           <a className="active:bg-cyan-500">About</a>
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default MyNavbar;
