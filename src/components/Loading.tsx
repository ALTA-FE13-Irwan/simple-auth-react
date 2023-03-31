import React, { FC } from "react";

const Loading: FC = () => {
  return (
    <div className="flex justify-center content-center item-center h-24 absolute mt-20 ">
      <progress className="progress w-56 bg-white "></progress>
    </div>
  );
};

export default Loading;
