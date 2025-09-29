import React from "react";
import Navbar from "../Navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

const ComputerQue = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const path = pathname.split("/");
  const state = location.state;

  const getDifficultyColor = (level) => {
    switch (level?.toLowerCase()) {
      case "easy":
        return "from-green-500 to-emerald-400";
      case "medium":
        return "from-yellow-500 to-amber-400";
      case "hard":
        return "from-red-500 to-orange-400";
      default:
        return "from-blue-500 to-cyan-400";
    }
  };

  const getDifficultyGlow = (level) => {
    switch (level?.toLowerCase()) {
      case "easy":
        return "shadow-lg shadow-green-500/25";
      case "medium":
        return "shadow-lg shadow-yellow-500/25";
      case "hard":
        return "shadow-lg shadow-red-500/25";
      default:
        return "shadow-lg shadow-blue-500/25";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-slate-900">
      <div className="flex justify-center w-full py-8 px-4">
        {state.courseInfo.map((value, index) => {
          if (value._id === path[2]) {
            return (
              <div
                key={index}
                className="w-full max-w-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-lg rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden"
              >
                {/* Header Section with Gradient */}
                <div className="relative h-48 md:h-64 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 overflow-hidden">
                  {/* Animated Background Elements */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-10 w-20 h-20 bg-cyan-400 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute bottom-4 right-16 w-16 h-16 bg-purple-400 rounded-full blur-lg animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-400 rounded-full blur-xl animate-pulse delay-500"></div>
                  </div>

                  {/* Course Image */}
                  <div className="relative h-full flex items-center justify-center px-8">
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                      <div className="relative">
                        <img
                          src={value.image}
                          className="  rounded-2xl object-contain border-4 border-white/20 shadow-2xl transform group-hover:scale-110 transition-transform duration-300"
                          alt={value.courseName}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 ">
                  <div className="text-center mb-5">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                      {value.courseName}
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                      {value.description}
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className=" mb-8">
                    {/* Questions Count */}
                    <div className="text-center">
                      <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl max-w-[200px] mx-auto p-4 shadow-lg">
                        <div className=" font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                          {value.ques}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="text-center">
                    <button
                      onClick={() =>
                        navigate(`/quiz-practice/${value._id}`, { state })
                      }
                      className="relative group cursor-pointer"
                    >
                      {/* Button Glow Effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                      {/* Main Button */}
                      <div className="relative sm:px-12 px-4 py-4 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full font-bold text-white sm:text-lg  tracking-wider transform group-hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center gap-3">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        START CHALLENGE
                      </div>

                      {/* Hover Ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/30 transition-all duration-300"></div>
                    </button>

                    {/* Additional Info */}
                    <p className="text-gray-400 text-sm mt-4">
                      Test your skills and climb the leaderboard!
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full -translate-x-16 -translate-y-16 blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full translate-x-20 translate-y-20 blur-2xl"></div>
              </div>
            );
          }
        })}
      </div>

      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[length:20px_20px]"></div>
      </div>
    </div>
  );
};

export default ComputerQue;
