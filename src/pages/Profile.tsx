import React, { Component } from "react";
import Layout from "../components/Layout";
import { MyProfile } from "../components/MyProfile";
import { UserType } from "../utils/types/user";

interface PropsType {}

interface StateType {
  data: UserType;
}

export class Profile extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      data: {
        id: 1,
        first_name: "Irwan",
        last_name: "FicoFar",
        username: "Fico1",
        image: "/avatar.jpg",
      },
    };
  }

  render() {
    return (
      <Layout>
        <div className="grid-cols-1 p-6 ">
          <MyProfile
            image={this.state.data.image}
            first_name={this.state.data.first_name}
            last_name={this.state.data.last_name}
            username={this.state.data.username}
          />
        </div>
      </Layout>
    );
  }
}

export default Profile;
