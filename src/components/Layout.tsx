import { FC, ReactNode } from "react";

import { MyNavbar } from "./Navbar";

interface Props {
  children: any;
}

const Layout: FC<Props> = (props) => {
  return (
    <div className="static w-full h-full h-screen  bg-gradient-to-r from-cyan-500 to-blue-500 ">
      <MyNavbar />
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
