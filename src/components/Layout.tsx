import { FC, ReactNode } from "react";

import { MyNavbar } from "./Navbar";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = (props) => {
  return (
    <div className="static w-full h-full h-screen  bg-gradient-to-r from-cyan-500 to-blue-500 dark:bg-slate-800">
      <MyNavbar />
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-full p-3 dark:from-cyan-900 dark:to-blue-900">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
