import React, { Component, ReactNode } from "react";

import MyNavbar from "./Navbar";

interface Props {
  children: ReactNode;
}

export class Layout extends Component<Props> {
  render() {
    return (
      <div className="w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 pb-20">
        <MyNavbar />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
