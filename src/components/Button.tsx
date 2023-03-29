import React, { ButtonHTMLAttributes, Component, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: ReactNode;
}

export class Button extends Component<Props> {
  render() {
    return (
      <button
        className="rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:-translate-y-0.5 hover:scale-105 hover:drop-shadow-md duration-300 hover:bg-gradient-to-t from-blue-500 to-cyan-400 text-slate-50 uppercase font-bold mt-2 mb-2 p-3 w-full  disabled:bg-rose-800"
        {...this.props}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Button;
