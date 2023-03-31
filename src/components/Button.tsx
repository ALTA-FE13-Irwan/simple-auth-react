import { FC, ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: FC<Props> = (props) => {
  const { label } = props;
  return (
    <button
      className="rounded-md bg-gradient-to-r from-cyan-500 to-blue-500  hover:-translate-y-0.5 hover:scale-105 hover:drop-shadow-md duration-300 hover:bg-gradient-to-t from-blue-500 to-cyan-400 text-slate-50 uppercase font-bold mt-2 mb-2 p-3 w-full  disabled:pointer-events-none disabled:bg-rose-800"
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
