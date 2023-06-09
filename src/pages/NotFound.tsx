import { FC } from "react";

export const NotFound: FC = () => {
  return (
    <div className="static w-full h-full h-screen  bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center pt-20 md:pt-32">
      <div className="grid-col-1 bg-slate-50 h-[20%] w-[90%] md:h-[50%] md:w-[50%] flex justify-center items-center text-4xl md:text-6xl text-slate-500 rounded-3xl">
        <h1>404 Page Not Found</h1>
      </div>
    </div>
  );
};
