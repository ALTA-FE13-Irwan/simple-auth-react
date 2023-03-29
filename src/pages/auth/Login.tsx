import { Component, FormEvent } from "react";
import axios from "axios";

import Button from "@/components/Button";
import { Input } from "@/components/Input";
import Layout from "@/components/Layout";

import "@/styles/Login.css";

interface PropsType {}

interface StateType {
  username: string;
  password: string;
  loading: boolean;
}

export class Login extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loading: false,
    };
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    const { username, password } = this.state;
    event.preventDefault();
    const body = {
      username: username,
      password: password,
    };
    axios
      .post("login", body)
      .then((response) => {
        const { data } = response;
        console.log(data);
        alert(data.message.toString());
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => {
        this.setState({
          username: "",
          password: "",
        });
        window.location.reload();
      });
  }

  render() {
    return (
      <Layout>
        <div className="flex justify-center pt-1 md:pt-10">
          <div className="w-[80%] md:w-[60%] lg:w-[40%] xl:w-[28%] bg-slate-50 p-10 rounded-lg drop-shadow-lg hover:drop-shadow-2xl hover:-translate-y-0.5 hover:scale-101 duration-300 mt-12">
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
            <form
              className="mt-6"
              onSubmit={(event) => this.handleSubmit(event)}
            >
              <p className="text-slate-500 ">Login to your account</p>
              <Input
                type="user"
                placeholder="Input user name"
                id="input-unname"
                onChange={(event) =>
                  this.setState({ username: event.target.value })
                }
              />
              <Input
                type="password"
                placeholder="Input password"
                id="input-password"
                onChange={(event) =>
                  this.setState({ password: event.target.value })
                }
              />
              <div className="mt-10">
                <Button
                  label="sign in"
                  id="button-login"
                  type="submit"
                  disabled={
                    this.state.username === "" || this.state.password === ""
                  }
                />
              </div>
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Login;
