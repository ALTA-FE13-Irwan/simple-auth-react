import React, { Component } from "react";
import Button from "./Button";

interface Props {
  image: string;
  first_name: string;
  last_name: string;
  username: string;
}

export class MyProfile extends Component<Props> {
  render() {
    return (
      <div>
        <div className="card card-compact md:card-side bg-slate-50 shadow-xl text-slate-900">
          <figure>
            <img
              src={this.props.image}
              alt="Profile Avatar"
              className="w-full md:w-96"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Information About Me</h2>
            <h1>
              My Name = {this.props.first_name} {this.props.last_name}
            </h1>
            <h1>User Name = {this.props.username}</h1>
            <p>this is my profile</p>
            <div className="card-actions md:w-1/4">
              <Button>Edit</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyProfile;
