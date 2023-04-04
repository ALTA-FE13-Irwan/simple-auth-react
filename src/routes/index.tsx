import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { FC, useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import axios from "axios";

import Home from "@/pages";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Profile from "@/pages/Profile";
import { NotFound } from "@/pages/NotFound";

import { handleAuth } from "@/utils/redux/reducer/reducer";
import { ThemeContext } from "@/utils/context";

// axios.defaults.baseURL =
//   "https://virtserver.swaggerhub.com/devanada/hells-kitchen/1.1.0";
axios.defaults.baseURL = "https://hells-kitchen.onrender.com/api/v1";

const Router: FC = () => {
  const [cookie] = useCookies(["tkn", "uname"]);
  const dispatch = useDispatch();
  const getToken = cookie.tkn;
  const [theme, setTheme] = useState<string>("light");
  const background = useMemo(() => ({ theme, setTheme }), [theme]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />,
    },
    {
      path: "/login",
      element: getToken ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: getToken ? <Navigate to="/login" /> : <Register />,
    },
    {
      path: "/profile/:username",
      element: <Profile />,
    },
  ]);

  useEffect(() => {
    if (getToken) {
      dispatch(
        handleAuth({ isLoggedIn: true, uname: cookie.uname, token: getToken })
      );
    } else {
      dispatch(handleAuth({ isLoggedIn: false, uname: "", token: "" }));
    }
  }, [cookie]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={background}>
      <RouterProvider router={router} />;
    </ThemeContext.Provider>
  );
};

export default Router;
