import React, { Component } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import account from "../../assets/account.png";
import Layout from "../../components/Layout";

import "../../styles/Login.css";

export class Login extends Component {
  render() {
    return (
      <Layout>
        <div className="flex justify-center pt-1 md:pt-10">
          <div className="basis-3/4 md:basic-2/4 lg:basis-1/4 bg-slate-50 p-10 rounded-lg drop-shadow-lg hover:drop-shadow-2xl hover:-translate-y-0.5 hover:scale-101 duration-300 mt-12">
            <div className="text-center mt-4">
              <img
                src="/login.png"
                alt=""
                className="mx-auto w-24 md:w-28 md:block "
              />
              <h1 className="font-bold text-2xl md:text-3xl mt-3 uppercase ">
                LOGIN page
              </h1>
            </div>
            <form className="mt-5">
              <p className="text-slate-500 ">Login to your account</p>
              <Input type="user" placeholder="Input user name" />
              <Input type="password" placeholder="Input password" />
              <div className="">
                <Button>sign in</Button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Login;
