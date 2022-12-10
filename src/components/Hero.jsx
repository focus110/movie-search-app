import React from "react";

const Hero = () => {
  return (
    <div className="wrapper bg-hero bg-cover h-[257px] md:h-[550px] flex justify-center lg:justify-start items-center">
      <h2 className="block sm:hidden text-center font-bold text-[28px] md:text-[72px] text-white leading-[36px] md:leading-[72px] ">
        Watch something incredible.
      </h2>
      <h2 className="hidden sm:block lg:hidden font-bold text-[28px] md:text-[72px] text-white leading-[72px] text-center ">
        Watch <br /> something <br /> incredible.
      </h2>

      <h2 className="hidden lg:block font-bold text-[28px] md:text-[72px] text-white leading-[72px] ">
        Watch <br /> something <br /> incredible.
      </h2>
    </div>
  );
};

export default Hero;
