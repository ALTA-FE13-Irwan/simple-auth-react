import { FC, FormEvent, useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";

import Button from "@/components/Button";
import { Input } from "@/components/Input";
import Layout from "@/components/Layout";
import { LoginFormData } from "@/utils/types/user";
import { useTitle } from "@/utils/hooks";

const Login: FC = () => {
  const [objSubmit, setObjSubmit] = useState<LoginFormData>({
    username: "",
    password: "",
  });
  const [isEmpty, setIsEmpty] = useState(true);
  const navigate = useNavigate();
  const [, setCookie] = useCookies();
  useTitle("Login | User Management");

  useEffect(() => {
    setIsEmpty(Object.values(objSubmit).every((val) => val === ""));
  }, [objSubmit]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (objSubmit.username === "" || objSubmit.password === "") {
      alert("Please enter your username and password.");
      return;
    }

    axios
      .post("login", objSubmit)
      .then((response) => {
        const { data, message } = response.data;
        // console.log(data);
        setCookie("tkn", data.token);
        setCookie("uname", data.username);
        alert(message);
        navigate("/");
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => {});
  };

  return (
    <Layout>
      <div className="flex justify-center pt-1 md:pt-10">
        <div className="w-[80%] md:w-[60%] lg:w-[40%] xl:w-[28%] bg-slate-50 dark:bg-slate-800 p-10 rounded-2xl drop-shadow-lg hover:drop-shadow-2xl hover:-translate-y-0.5 hover:scale-101 duration-300 mt-12">
          <div className="text-center mt-4">
            <img
              src="/login.png"
              alt=""
              className="mx-auto w-24 md:w-28 md:block "
            />
            <h1 className="font-bold text-2xl md:text-3xl mt-3 uppercase ">
              login page
            </h1>
          </div>
          <form className="mt-6" onSubmit={(event) => handleSubmit(event)}>
            <p className="text-slate-500 ">Login to your account</p>
            <Input
              type="user"
              placeholder="Input user name"
              id="input-unname"
              onChange={(event) =>
                setObjSubmit({ ...objSubmit, username: event.target.value })
              }
            />
            <Input
              type="password"
              placeholder="Input password"
              id="input-password"
              onChange={(event) =>
                setObjSubmit({ ...objSubmit, password: event.target.value })
              }
            />
            <div className="mt-10">
              <Button
                label="sign in"
                id="button-login"
                type="submit"
                disabled={isEmpty}
              />
            </div>
            <div className="flex justify-center mt-5">
              <p className="text-slate-500">
                don't have an account?{" "}
                <Link to={"/register"} className="text-cyan-400/100">
                  {" "}
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
