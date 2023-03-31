import React, { FC, InputHTMLAttributes } from "react";

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input
      className="w-full h-12 rounded-md mt-5 p-3 bg-gray-200 text-slate-800 text-lg active:border-cyan-300 input hover:drop-shadow-md disabled:bg-rose-800"
      {...props}
    />
  );
};
