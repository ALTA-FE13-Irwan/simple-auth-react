import { FC, ReactNode } from "react";

interface Props {
  message: string;
  label: string;
  handleClick: any;
}

export const Fobidden: FC<Props> = (props) => {
  const { message, label, handleClick } = props;
  return (
    <div className="static flex-col justify-items-center justify-center  text-center py-10 md:pt-30 bg-slate-50 dark:bg-slate-800  border-4 border-red-600 rounded-3xl shadow-md shadow-red-600 hover:shadow-xl ease-in-out duration-300 ">
      <div className="animate-bounce text-slate-800 dark:text-slate-50 text-4xl font-bold flex-col ">
        {message}
      </div>
      <button
        className="text-slate-800 text-2xl font-bold mt-20 bg-cyan-400 p-3 rounded-3xl shadow-md hover:shadow-xl hover:translate-y-1 duration-300  dark:text-slate-50"
        onClick={handleClick}
      >
        {label}
      </button>
    </div>
  );
};
