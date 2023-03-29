import React, { Component } from "react";

import Layout from "../../components/Layout";
import Input from "../../components/Input";
import Button from "../../components/Button";
import account from "../../assets/account.png";

export class Register extends Component {
  render() {
    return (
      <Layout>
        <div>
          {/* <div className="login-css bg-slate-50">Login Page</div> */}
          <div className="flex justify-center">
            <div className="basis-3/4 md:basic-2/4 lg:basis-1/4 bg-slate-50 p-10 rounded-lg drop-shadow-lg hover:drop-shadow-2xl hover:-translate-y-0.5 hover:scale-101 duration-300 mt-12">
              <div className="text-center mt-4">
                <img
                  src="/user.png"
                  alt="register image"
                  className="mx-auto w-24 md:w-28 md:block "
                />
                <h1 className="font-bold text-2xl md:text-3xl mt-3 uppercase ">
                  register
                </h1>
              </div>
              <form className="mt-6">
                <Input type="user" placeholder="Input user name" />
                <Input type="password" placeholder="Input Password" />

                <div className="grid grid-cols-2 gap-4">
                  <Input type="user" placeholder="First Name" />
                  <Input type="user" placeholder="Last Name" />
                </div>
                <div className="">
                  <Button>sign in</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Register;
