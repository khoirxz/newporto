import React from "react";

const Hero = ({ children }) => {
  return (
    <div className="max-w-screen-lg mx-auto h-[35rem] flex flex-row items-center">
      <div className="max-w-[800px] px-6 lg:px-0">
        <p className="font-medium text-lg text-gray-600 dark:text-gray-400">
          khoir
          <span className="cursor-pointer hover:text-black hover:dark:text-white mx-2">
            "Roox"
          </span>
          rurrohman
        </p>
        <h1 className="font-bold text-3xl lg:text-5xl my-4">
          FULL STACK DEVELOPER
        </h1>

        {children}
      </div>
    </div>
  );
};

export default Hero;
