import React, { useEffect } from "react";
import { IoIosStarOutline } from "react-icons/io";
const Navbar = ({coin}) => {
 
  return (
    <div>
      <nav className="p-4 shadow-xl flex justify-between items-center w-full fixed top-0 bg-black">
        <h1 className="text-3xl font-bold text-white">Test-self</h1>
        <div className="flex justify-between items-center gap-2 px-4">
          <span className="text-[18px] font-semibold bg-amber-400 p-1 rounded-full">
            <IoIosStarOutline />
          </span>
          <span className="text-2xl font-bold text-white">{coin?coin:0}</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
