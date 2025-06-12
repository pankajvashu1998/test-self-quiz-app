import React from "react";
import Navbar from "../Navbar/Navbar";
import { useLocation,useNavigate } from "react-router-dom";

const ComputerQue = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const pathname = location.pathname;
  const path = pathname.split("/");
  const state = location.state;
  return (
    <div>
      <Navbar />

      <div className="flex justify-center w-full py-[20px] px-4 mt-[70px]">
        {state.courseInfo.map((value, index) => {
          if (value._id === path[2]) {
            return (
              
                <div key={index} className=" w-[300px]">
                  <div className="overflow-hidden">
                    <img
                      src={value.image}
                      className="w-full rounded hover:scale-[1.07] duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <h1 className="text-2xl font-bold py-2">
                      {value.courseName}
                    </h1>
                    <p className=" font-semibold">{value.description}</p>
                    <p className="text-xl font-semibold py-2">
                      Difficulty Level:{" "}
                      <span className="px-6 py-1 bg-green-100 text-green-700 rounded">
                        {value.level}
                      </span>
                    </p>
                    <p className="text-xl">{value.ques}</p>
                    <button className="py-2 w-[200px] bg-green-700 rounded-full mt-3 text-white hover:bg-green-800 duration-300 cursor-pointer" onClick={()=> navigate(`/quiz-practice/${value._id}`, {state})}>
                      Play
                    </button>
                  </div>
                </div>
              
            );
          }
        })}
      </div>
    </div>
  );
};

export default ComputerQue;
