import React, { FC, FormEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";

import { RegisterFormData } from "@/utils/types/user";
import { Input } from "@/components/Input";
import { useTitle } from "@/utils/hooks";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Swal from "@/utils/swal";

const Register: FC = () => {
  const [objSubmit, setObjSubmit] = useState<RegisterFormData>({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
  });
  const [isEmpty, setIsEmpty] = useState(true);
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  useTitle("Register | User Management");

  useEffect(() => {
    setIsEmpty(Object.values(objSubmit).every((val) => val === ""));
  }, [objSubmit]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      objSubmit.username === "" ||
      objSubmit.password === "" ||
      objSubmit.first_name === "" ||
      objSubmit.last_name === ""
    ) {
      MySwal.fire({
        title: "Not completed",
        text: "Please fill all input",
        showCancelButton: false,
      });
      return;
    }

    axios
      .post("register", objSubmit)
      .then((response) => {
        const { data, message } = response.data;
        MySwal.fire({
          title: "Success",
          text: message,
          showCancelButton: false,
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login");
          }
        });
      })
      .catch((error) => {
        const { data } = error.response;
        MySwal.fire({
          title: "Failed",
          text: data.message,
          showCancelButton: false,
        });
      })
      .finally(() => {});
  };

  return (
    <Layout>
      <div>
        <div className="flex justify-center">
          <div className="w-[80%] md:w-[60%] lg:w-[40%] xl:w-[28%] bg-slate-50 dark:bg-slate-800 p-10 rounded-2xl drop-shadow-lg hover:drop-shadow-2xl hover:-translate-y-0.5 hover:scale-101 duration-300 mt-12">
            <div className="text-center mt-4">
              <img
                src="/order.png"
                alt="register image"
                className="mx-auto w-24 md:w-28 md:block "
              />
              <h1 className="font-bold text-2xl md:text-3xl mt-3 uppercase ">
                register
              </h1>
            </div>
            <form className="mt-6" onSubmit={(event) => handleSubmit(event)}>
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
                placeholder="Input Password"
                id="input-password"
                onChange={(event) =>
                  setObjSubmit({ ...objSubmit, password: event.target.value })
                }
              />

              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="user"
                  placeholder="First Name"
                  id="input-first_name"
                  onChange={(event) =>
                    setObjSubmit({
                      ...objSubmit,
                      first_name: event.target.value,
                    })
                  }
                />
                <Input
                  type="user"
                  placeholder="Last Name"
                  id="input-last_name"
                  onChange={(event) =>
                    setObjSubmit({
                      ...objSubmit,
                      last_name: event.target.value,
                    })
                  }
                />
              </div>
              <div className="mt-10">
                <Button
                  type="submit"
                  label="submit"
                  id="button-register"
                  disabled={isEmpty}
                />
              </div>
              <div className="flex justify-center mt-5">
                <p className="text-slate-500">
                  already have account ?{" "}
                  <Link to={"/login"} className="text-cyan-400/100" id="login">
                    {" "}
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
