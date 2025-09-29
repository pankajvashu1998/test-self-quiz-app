import React from "react";
import { useNavigate } from "react-router-dom";
import { courseInfo } from "../../assets/asset.js";
import { courseCard } from "../../assets/courseCard.js";

const Card = () => {
  let navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-8 px-4">
      {/* Enhanced Header */}
      <div className="text-center mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent blur-xl"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent py-4">
          Top Latest Test Series
        </h1>
        <p className="relative text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          Level up your skills with our premium test series. Challenge yourself
          and climb the leaderboard!
        </p>

        {/* Animated gaming elements */}
        <div className="relative mt-8 flex justify-center space-x-4">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-150"></div>
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
        </div>
      </div>

      {/* Enhanced Cards Grid */}
      <div className="flex justify-center items-center flex-wrap gap-6 max-w-6xl mx-auto">
        {courseCard.map((value, index) => {
          return (
            <div
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              key={index}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Card content */}
              <div className="relative z-10">
                {/* Image container with gaming-style overlay */}
                <div className="relative overflow-hidden">
                  <img
                    src={value.image}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={value.courseName}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>

                  {/* Level indicator */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white text-sm font-semibold drop-shadow-lg">
                        Ready
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-4">
                  <h1 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {value.courseName}
                  </h1>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-cyan-400 text-sm font-bold">
                          ⚡
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs">Questions</p>
                        <p className="text-white font-bold">{value.queNo}</p>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Button */}
                  <button
                    className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 group/btn relative overflow-hidden"
                    onClick={() =>
                      navigate(`/quiz/${value._id}`, {
                        state: { courseInfo, questionType: value.questionType },
                      })
                    }
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <span>Start Challenge</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform duration-300">
                        🎯
                      </span>
                    </span>

                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                  </button>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-12">
        <p className="text-gray-400 text-sm">
          Ready to master your skills? Choose your challenge above!
        </p>
      </div>
    </div>
  );
};

export default Card;
