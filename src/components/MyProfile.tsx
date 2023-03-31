import React, { FC } from "react";

interface Props {
  image: any;
  first_name?: string;
  last_name?: string;
  username?: string;
  onClick: any;
  modal: any;
}

export const MyProfile: FC<Props> = (props) => {
  const { image, first_name, last_name, username, onClick, modal } = props;
  return (
    <div>
      <div className="card card-compact md:card-side bg-slate-50 shadow-xl text-slate-900">
        <figure>
          <img
            src={image}
            alt="Profile Avatar"
            className="w-full h-full md:w-96 hover:scale-105 duration-300"
          />
        </figure>
        <div className="card-body">
          <h2 className=" underline decoration-sky-500 underline-offset-8 card-title text-2xl md:text-4xl subpixel-antialiased font-bold pb-2 md:pb-6">
            Detail personal information
          </h2>
          <h2 className="text-xl md:text-2xl antialiased font-semibold">
            Name = {first_name} {last_name}
          </h2>
          <h2 className="text-xl md:text-2xl antialiased font-semibold">
            User Name = {username}
          </h2>
          <p className="italic text-md md:text-xl pt-5">
            Quote Of The Day : “Before software can be reusable it first has to
            be usable.” – Ralph Johnson
          </p>
          <div className=" flex gap-x-2 mt-3 mb-3">
            <img src="/linkedin.png" alt="" className="w-10" />
            <img src="/facebook.png" alt="" className="w-10" />
            <img src="/twitter.png" alt="" className="w-10" />
            <img src="/instagram.png" alt="" className="w-10" />
          </div>

          <div className="card-actions">
            <label onClick={onClick}>{modal}</label>
          </div>
        </div>
      </div>
    </div>
  );
};
