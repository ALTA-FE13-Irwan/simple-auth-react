import React, { Component, FormEvent } from "react";
import axios from "axios";

import Layout from "@/components/Layout";
import { Input } from "@/components/Input";
import Button from "@/components/Button";
import withRouter, { NavigateParam } from "@/utils/navigation";

interface PropsType extends NavigateParam {}

interface StateType {
  username: string;
  password: string;
  first_name: string;
  last_name: string;
}

export class Register extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
    };
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    const { username, password, first_name, last_name } = this.state;
    event.preventDefault();
    const body = {
      username: username,
      password: password,
      first_name: first_name,
      last_name: last_name,
    };
    axios
      .post("register", body)
      .then((response) => {
        const { data } = response;
        console.log(data);
        alert(data.message);
        this.props.navigate("/login");
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => {
        this.setState({
          username: "",
          password: "",
          first_name: "",
          last_name: "",
        });
        window.location.reload();
      });
  }

  render() {
    return (
      <Layout>
        <div>
          <div className="flex justify-center">
            <div className="w-[80%] md:w-[60%] lg:w-[40%] xl:w-[28%] bg-slate-50 p-10 rounded-2xl drop-shadow-lg hover:drop-shadow-2xl hover:-translate-y-0.5 hover:scale-101 duration-300 mt-12">
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
              <form
                className="mt-6"
                onSubmit={(event) => this.handleSubmit(event)}
              >
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
                  placeholder="Input Password"
                  id="input-password"
                  onChange={(event) =>
                    this.setState({ password: event.target.value })
                  }
                />

                <div className="grid grid-cols-2 gap-4">
                  <Input
                    type="user"
                    placeholder="First Name"
                    id="input-first_name"
                    onChange={(event) =>
                      this.setState({ first_name: event.target.value })
                    }
                  />
                  <Input
                    type="user"
                    placeholder="Last Name"
                    id="input-last_name"
                    onChange={(event) =>
                      this.setState({ last_name: event.target.value })
                    }
                  />
                </div>
                <div className="mt-10">
                  <Button
                    type="submit"
                    label="submit"
                    id="button-register"
                    disabled={
                      this.state.username === "" ||
                      this.state.password === "" ||
                      this.state.first_name === "" ||
                      this.state.last_name === ""
                    }
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRouter(Register);
