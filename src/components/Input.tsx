import React, { Component, ReactNode } from "react";

interface Props {
  type: string;
  placeholder: string;
}

export class Input extends Component<Props> {
  render() {
    return (
      <input
        type={this.props.type}
        className="w-full h-12 rounded-md mt-4 p-3 bg-gray-200 text-sky-600 text-md"
        placeholder={this.props.placeholder}
      />
    );
  }
}

export default Input;
