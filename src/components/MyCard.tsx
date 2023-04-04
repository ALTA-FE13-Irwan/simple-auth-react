import { Link } from "react-router-dom";
import { FC } from "react";

import Button from "./Button";

interface Props {
  image: string;
  first_name: string;
  last_name: string;
  username: string;
  label: string;
}

const MyCard: FC<Props> = (props) => {
  const { image, username, first_name, last_name, label } = props;
  return (
    <div className="card card-compact w-5/6 bg-slate-50 dark:bg-slate-800 dark:text-slate-50 shadow-xl text-slate-900 hover:translate-y-0.5 hover:shadow-2xl hover:scale-105 duration-300">
      <figure className="bg-slate-300 h-36 md:h-56">
        <img
          src={image}
          alt={` ${username}'s picture`}
          className="hover:scale-125 duration-300 object-cover w-full h-full"
        />
      </figure>
      <div className="card-body flex-col justify-between">
        <h2 className="card-title font-semibold">
          {first_name} {last_name}
        </h2>
        <h5 className="text-sky-400/100 font-medium">{username}</h5>
        <Link to={`profile/${username}`}>
          <div className="card-actions mt-0 pt-2">
            <Button label={label} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MyCard;
