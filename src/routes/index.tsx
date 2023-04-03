import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import axios from "axios";

import Home from "@/pages";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Profile from "@/pages/Profile";
import NotFound from "@/pages/NotFound";

import { handleAuth } from "@/utils/redux/reducer/reducer";

axios.defaults.baseURL =
  "https://virtserver.swaggerhub.com/devanada/hells-kitchen/1.1.0";

const Router: FC = () => {
  const [cookie] = useCookies(["tkn", "uname"]);
  const dispatch = useDispatch();
  const checktoken = cookie.tkn;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />,
    },
    {
      path: "/login",
      element: checktoken ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: checktoken ? <Navigate to="/login" /> : <Register />,
    },
    {
      path: "/profile/:username",
      element: <Profile />,
    },
  ]);

  useEffect(() => {
    if (cookie.tkn) {
      dispatch(handleAuth({ isLoggedIn: true, uname: cookie.uname }));
    } else {
      dispatch(handleAuth({ isLoggedIn: false, uname: "" }));
    }
  }, [cookie]);

  return <RouterProvider router={router} />;
};

export default Router;
