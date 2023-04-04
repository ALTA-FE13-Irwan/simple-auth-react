import { FC, FormEvent, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { MyProfile } from "@/components/MyProfile";
import { RootState } from "@/utils/types/redux";
import { UserEdit } from "@/utils/types/user";
import { Input } from "@/components/Input";
import Loading from "@/components/Loading";
import Layout from "@/components/Layout";
import Button from "@/components/Button";

const Profile: FC = () => {
  const [data, setData] = useState<Partial<UserEdit>>({});
  const [objSubmit, setObjSubmit] = useState<Partial<UserEdit>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const params = useParams();
  const isLoggedIn = useSelector((state: RootState) => state.data.isLoggedIn);
  const navigate = useNavigate();

  // Side Effect
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const { username } = params;
    axios
      .get(`users/${username}`)
      .then((response) => {
        const { data } = response.data;
        setData(data);
        document.title = `${data.username} | User Management`; // cara lain title document selain hook
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  }

  function handleChange(value: string | File, key: keyof typeof objSubmit) {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData();
    let key: keyof typeof objSubmit;
    for (key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }

    axios
      .put("users", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const { data } = response;
        alert(data.message);
        setIsEdit(false);
      })
      .finally(() => fetchData());
  }

  const handleEditMode = () => {
    setIsEdit(!isEdit);
  };

  const showProfile = () => {
    return (
      <MyProfile
        key={data.id}
        image={data.image}
        first_name={data.first_name}
        last_name={data.last_name}
        username={data.username}
        onClick={handleEditMode}
        modal={
          <label
            htmlFor="my-modal-3"
            className="h-full border-none btn px-12 bg-gradient-to-r from-cyan-500 to-blue-500 hover:-translate-y-0.5 hover:scale-105 hover:drop-shadow-md duration-300 hover:bg-gradient-to-t from-blue-500 to-cyan-400 text-slate-50 uppercase font-bold mt-2 mb-2 p-3 w-full text-base tracking-wider"
            id="edit"
          >
            EDIT
          </label>
        }
      />
    );
  };

  return (
    <Layout>
      <div className="grid-cols-1 py-6 px-5 md:px-10 md:py-16 justify-items-center relative">
        {isEdit ? (
          <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative bg-slate-50">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                  id="handle-edit"
                  onClick={handleEditMode}
                >
                  ✕
                </label>
                <div className="flex justify-center">
                  <img
                    src={data.image}
                    alt={`${data.username}'s profile picture`}
                    className="w-44 h-44 rounded-full"
                  />
                </div>

                <form onSubmit={(event) => handleSubmit(event)}>
                  <input
                    id="img-input"
                    className="file-input file-input-bordered file-input-accent  w-full bg-gradient-to-b from-slate-50 to-slate-100 mt-5 hover:drop-shadow-md "
                    placeholder="Select Image"
                    type="file"
                    onChange={(event) => {
                      if (!event.currentTarget.files) {
                        return;
                      }
                      setData({
                        ...data,
                        image: URL.createObjectURL(
                          event.currentTarget.files[0]
                        ),
                      });
                      handleChange(event.currentTarget.files[0], "image");
                    }}
                  />
                  <Input
                    id="handle-first-name"
                    placeholder="First Name"
                    defaultValue={data.first_name}
                    onChange={(event) =>
                      handleChange(event.target.value, "first_name")
                    }
                  />
                  <Input
                    id="handle-last-name"
                    placeholder="Last Name"
                    defaultValue={data.last_name}
                    onChange={(event) =>
                      handleChange(event.target.value, "last_name")
                    }
                  />
                  <Input
                    id="handle-username"
                    placeholder="Username"
                    defaultValue={data.username}
                    onChange={(event) =>
                      handleChange(event.target.value, "username")
                    }
                  />
                  <Input
                    id="handle-password"
                    placeholder="Password"
                    defaultValue={data.password}
                    onChange={(event) =>
                      handleChange(event.target.value, "password")
                    }
                  />
                  <div className="mt-5">
                    <Button
                      label="Submit"
                      id="button-submit"
                      type="submit"
                      disabled={
                        data.username === "" ||
                        data.password === "" ||
                        data.first_name === "" ||
                        data.last_name === ""
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
        {loading ? (
          <Loading />
        ) : isLoggedIn ? (
          showProfile()
        ) : (
          <Navigate to="/" />
        )}
      </div>
    </Layout>
  );
};

export default Profile;
