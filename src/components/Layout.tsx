import React, { Component, ReactNode } from "react";

import MyNavbar from "./Navbar";

interface Props {
  children: ReactNode;
}

export class Layout extends Component<Props> {
  render() {
    return (
      <div className="static w-full h-full h-screen  bg-gradient-to-r from-cyan-500 to-blue-500 ">
        <MyNavbar />
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
