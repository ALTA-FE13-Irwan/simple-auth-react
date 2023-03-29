import { Component } from "react";
import Button from "./Button";

interface Props {
  image: string;
  first_name: string;
  last_name: string;
  username: string;
}

export class MyCard extends Component<Props> {
  render() {
    return (
      <div className="card card-compact w-5/6 bg-slate-50 shadow-xl text-slate-900 hover:translate-y-0.5 hover:shadow-2xl hover:scale-105 duration-300">
        <figure>
          <img
            src={this.props.image}
            alt="card-picture"
            className="hover:scale-105 duration-300"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-semibold">
            {this.props.first_name} {this.props.last_name}
          </h2>
          <h5 className="text-sky-400/100 font-medium">
            {this.props.username}{" "}
          </h5>
          <div className="card-actions mt-0 pt-2">
            <Button>detail</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default MyCard;
