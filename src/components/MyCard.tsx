import { Component } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

interface Props {
  image: string;
  first_name: string;
  last_name: string;
  username: string;
  label: string;
}

export class MyCard extends Component<Props> {
  render() {
    const { image, username, first_name, last_name, label } = this.props;
    return (
      <div className="card card-compact w-5/6 bg-slate-50 shadow-xl text-slate-900 hover:translate-y-0.5 hover:shadow-2xl hover:scale-105 duration-300">
        <figure>
          <img
            src={image}
            alt={` ${username}'s picture`}
            className="hover:scale-105 duration-300"
          />
        </figure>
        <div className="card-body">
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
  }
}

export default MyCard;
