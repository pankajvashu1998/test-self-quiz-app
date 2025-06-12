import React from "react";

const Header = () => {
  return (
    <div className='bg-purple-950 bg-cover bg-center mt-[66px]'>
      <div className="w-full h-[300px] flex  flex-col items-center text-center">
        <h1 className="text-[60px] md:text-[80px] lg:text-[90px] xl:text-[100px] text-white font-bold">Test-self</h1>
        <h1 className=" text-[27px] xl:text-4xl font-bold text-white">
          Welcome to <span className="text-yellow-600">Test-self</span> quiz
          game.
        </h1>
      </div>
    </div>
  );
};

export default Header;
