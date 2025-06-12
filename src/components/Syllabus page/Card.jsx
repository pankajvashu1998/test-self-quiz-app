import React from "react";
import { useNavigate } from "react-router-dom";
import { courseInfo } from "../../assets/asset.js";
import { courseCard } from "../../assets/courseCard.js";

const Card = () => {
  
  let navigate = useNavigate();
  return (
    <div>
      <h1 className="py-5 px-2 my-3 font-bold text-2xl text-gray-600">
        Top Latest Test Series
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2   gap-5 min-w-full">
        {courseCard.map((value, index) => {
          return (
            <div
              className="mb-4 p-1 mx-auto shadow-xl shadow-blue-500  rounded bg-purple-700"
              key={index}
            >
              <div className="overflow-hidden ">
                <img
                  src={value.image}
                  className="w-full rounded hover:scale-[1.07] duration-300"
                />
              </div>
              <div className="py-5 px-1 flex justify-between flex-col text-white">
                <h1 className="text-xl font-bold">{value.courseName}</h1>
                <p className="font-semibold pt-2">{`Total Questions: ${value.queNo}`}</p>
                <button
                  className="mt-[10px] py-2 px-1 border text-white w-full rounded text-sm cursor-pointer hover:bg-purple-900 duration-300"
                  onClick={() =>
                    navigate(`/quiz/${value._id}`, { state: {courseInfo,questionType:value.questionType} })
                  }
                >
                  Start Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
