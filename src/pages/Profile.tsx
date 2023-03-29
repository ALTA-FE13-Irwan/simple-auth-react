import React, { Component, FormEvent } from "react";
import axios from "axios";

import Layout from "@/components/Layout";
import { MyProfile } from "@/components/MyProfile";
import { UserEdit } from "@/utils/types/user";
import { Input } from "@/components/Input";
import Button from "@/components/Button";

interface PropsType {}

interface StateType {
  data: Partial<UserEdit>;
  loading: boolean;
  isEdit: boolean;
  image: string;
  objSubmit: Partial<UserEdit>;
}

export class Profile extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      objSubmit: {},
      image: "",
      data: {},
      loading: true,
      isEdit: false,
    };
  }

  componentDidMount(): void {
    this.fetchData();
  }

  fetchData() {
    axios
      .get("users/testing")
      .then((response) => {
        const { data } = response.data;
        this.setState({ data: data, image: data.image });
        console.log(data);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => this.setState({ loading: false }));
  }

  handleChange(value: string | File, key: keyof typeof this.state.objSubmit) {
    let temp = { ...this.state.objSubmit };
    temp[key] = value;
    this.setState({ objSubmit: temp });
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData();
    let key: keyof typeof this.state.objSubmit;
    for (key in this.state.objSubmit) {
      formData.append(key, this.state.objSubmit[key]);
    }

    axios
      .put("users", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const { data } = response;
        alert(data.message.toString());
        this.setState({ isEdit: false });
      })
      .finally(() => this.fetchData());
  }

  handleEditMode = () => {
    this.setState({ isEdit: !this.state.isEdit });
  };

  render() {
    return (
      <Layout>
        <div className="grid-cols-1 p-6">
          {this.state.isEdit ? (
            <div>
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative bg-slate-50">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                    onClick={this.handleEditMode}
                  >
                    ✕
                  </label>
                  <div className="flex justify-center">
                    <img
                      src={this.state.image}
                      alt={`${this.state.data.username}'s profile picture`}
                      className="w-44 h-44 rounded-full"
                    />
                  </div>

                  <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input
                      className="file-input file-input-bordered file-input-accent  w-full bg-gradient-to-b from-slate-50 to-slate-100 mt-5 hover:drop-shadow-md "
                      placeholder="Select Image"
                      type="file"
                      onChange={(event) => {
                        if (!event.currentTarget.files) {
                          return;
                        }
                        this.setState({
                          image: URL.createObjectURL(
                            event.currentTarget.files[0]
                          ),
                        });
                        this.handleChange(
                          event.currentTarget.files[0],
                          "image"
                        );
                      }}
                    />
                    <Input
                      placeholder="First Name"
                      defaultValue={this.state.data.first_name}
                      onChange={(event) =>
                        this.handleChange(event.target.value, "first_name")
                      }
                    />
                    <Input
                      placeholder="Last Name"
                      defaultValue={this.state.data.last_name}
                      onChange={(event) =>
                        this.handleChange(event.target.value, "last_name")
                      }
                    />
                    <Input
                      placeholder="Username"
                      defaultValue={this.state.data.username}
                      onChange={(event) =>
                        this.handleChange(event.target.value, "username")
                      }
                    />
                    <Input
                      placeholder="Password"
                      defaultValue={this.state.data.password}
                      onChange={(event) =>
                        this.handleChange(event.target.value, "password")
                      }
                    />
                    <div className="mt-5">
                      <Button
                        label="Submit"
                        id="button-submit"
                        type="submit"
                        disabled={
                          this.state.data.username === "" ||
                          this.state.data.password === "" ||
                          this.state.data.first_name === "" ||
                          this.state.data.last_name === ""
                        }
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          <MyProfile
            image={this.state.image}
            first_name={this.state.data.first_name}
            last_name={this.state.data.last_name}
            username={this.state.data.username}
            onClick={this.handleEditMode}
            modal={
              <label
                htmlFor="my-modal-3"
                className="h-full border-none btn px-12 bg-gradient-to-r from-cyan-500 to-blue-500 hover:-translate-y-0.5 hover:scale-105 hover:drop-shadow-md duration-300 hover:bg-gradient-to-t from-blue-500 to-cyan-400 text-slate-50 uppercase font-bold mt-2 mb-2 p-3 w-full text-base tracking-wider"
                onClick={this.handleEditMode}
              >
                EDIT
              </label>
            }
          />
        </div>
      </Layout>
    );
  }
}

export default Profile;
