import React, { FC, InputHTMLAttributes } from "react";

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input
      className="w-full h-12 rounded-md mt-5 p-3 bg-gray-200 dark:bg-slate-800 dark:text-slate-50 text-slate-800 text-lg dark:border-slate-50 active:border-cyan-300 input hover:drop-shadow-md dark:drop-shadow-none"
      {...props}
    />
  );
};
