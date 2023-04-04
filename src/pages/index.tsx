import { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { UserType } from "@/utils/types/user";
import Loading from "@/components/Loading";
import { useTitle } from "@/utils/hooks";
import Layout from "@/components/Layout";
import MyCard from "@/components/MyCard";

const Home: FC = () => {
  // constructor
  const [datas, setDatas] = useState<UserType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const params = useParams();

  useTitle("Homepage | User Management");

  // side effect
  useEffect(() => {
    fetchData();
  }, []);

  // fetch Data
  function fetchData() {
    axios
      .get("users")
      .then((response) => {
        const { data } = response.data;
        setDatas(data);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  }

  return (
    <Layout>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-6 gap-x-1 md:gap-y-10 pb-10 justify-items-center py-10 ">
        {loading ? (
          <Loading />
        ) : (
          datas.map((data) => {
            return (
              <MyCard
                key={data.id}
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
};

export default Home;
