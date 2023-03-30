import React, { Component } from "react";
import Layout from "@/components/Layout";
import MyCard from "@/components/MyCard";

import { UserType } from "@/utils/types/user";
import axios from "axios";
import Loading from "@/components/Loading";

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
    axios
      .get("users")
      .then((response) => {
        const { data } = response.data;
        this.setState({ datas: data });
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <Layout>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-6 gap-x-1 md:gap-y-10 pb-10 justify-items-center pt-10 relative">
          {this.state.loading ? (
            <Loading />
          ) : (
            this.state.datas.map((data) => {
              return (
                <MyCard
                  key={data.id} // <~~ wajib ada sebagai pengenal satu sama lain
                  first_name={data.first_name}
                  last_name={data.last_name}
                  username={data.username}
                  image={data.image}
                  label="detail"
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
