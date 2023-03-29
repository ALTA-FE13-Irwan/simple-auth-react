import React, { Component } from "react";
import Layout from "../components/Layout";
import MyCard from "../components/MyCard";

import { UserType } from "../utils/types/user";

interface PropsType {}

interface StateType {
  datas: UserType[];
  loading: boolean;
}

export class index extends Component<PropsType, StateType> {
  // constructor
  constructor(props: PropsType) {
    super(props);
    this.state = {
      datas: [],
      loading: true,
    };
  }

  // side effect
  componentDidMount(): void {
    // jika dilakukan perubahan nilai dari sebuah state didalam side effect, maka akan dilakukan render ulang
    this.fetchData();
  }

  fetchData() {
    let tempData: UserType[] = [];
    for (let i = 0; i < 12; i++) {
      const obj = {
        id: i,
        first_name: "Irwan",
        last_name: "FicoFar",
        username: `irwan_Fico${i}`,
        image: "/avatar.jpg",
      };
      tempData.push(obj);
    }

    setTimeout(() => {
      this.setState({
        datas: tempData,
        loading: false,
      });
    }, 2000);
  }

  render() {
    return (
      <Layout>
        <div className="grid gap-y-6 gap-x-1 md:gap-y-10 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 pb-10 justify-items-center">
          {this.state.loading ? (
            <div className="h-screen">wait</div>
          ) : (
            this.state.datas.map((data) => {
              return (
                <MyCard
                  key={data.id} // <~~ wajib ada sebagai pengenal satu sama lain
                  first_name={data.first_name}
                  last_name={data.last_name}
                  username={data.username}
                  image={data.image}
                />
              );
            })
          )}
        </div>
      </Layout>
    );
  }
}

export default index;
