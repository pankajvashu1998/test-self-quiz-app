import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import children from "../../../public/children_noise.mp3";
import correct from "../../../public/correct_sound.mp3";
import wrong from "../../../public/wrong_sound.mp3";
import collage from "../../../public/collage.mp3";
import Confetti from "react-confetti";
import { MdDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { FaCoins, FaClock, FaTrophy, FaStar } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";

const QuizePractice = () => {
  let location = useLocation();
  let state = location.state;
  let questionType = state.questionType;
  let pathname = location.pathname;
  let path = pathname.split("/");
  let quizName = path[2].toUpperCase();
  let [questionTimer, setQuestionTimer] = useState(60);
  let [questionNo, setQuestionNo] = useState(0);
  let [answerindex, setAnswerIndex] = useState(null);
  let [answred, setAnswred] = useState(false);
  let [rightAnswer, setRightAnswer] = useState(0);
  let [WrongAnswer, setWrongAnswer] = useState(0);
  let [skipQuestion, setSkipQuestion] = useState(0);
  let [coin, setCoin] = useState(0);
  let [score, setScore] = useState(false);
  let [totalTime, setTotalTime] = useState(0);
  let [calculatedTime, setCalculateTime] = useState({});
  
  //------------------------------Sounding-----------------------------------
  function children_noise() {
    new Audio(children).play();
  }

  function correct_sound() {
    new Audio(correct).play();
  }

  function wrong_sound() {
    new Audio(wrong).play();
  }

  function collage_sound() {
    new Audio(collage).play();
  }
  //--------------------------------------------------

  //-----------------------Get Ready -------------------
  let [getReady, setGetReady] = useState(1);
  let [timers, setTimers] = useState(3);
  let [go, setGo] = useState(1);

  let stopGetReady = setTimeout(() => {
    setGetReady((prev) => prev - 1);
  }, 1000);

  if (getReady == 0) {
    clearTimeout(stopGetReady);
  }
  //----------------------------------------------------------------------

  // ---------------------------------Timer-------------------------------
  if (getReady == 0) {
    let stopTimers = setTimeout(() => {
      setTimers((prev) => prev - 1);
    }, 1000);

    if (timers === 0) {
      clearTimeout(stopTimers);
    }
  }
  //-----------------------------------------------------------------------

  //---------------------------------Go page-------------------------------
  if (timers === 0) {
    let stopGo = setTimeout(() => {
      setGo((prev) => prev - 1);
    }, 1000);

    if (go === 0) {
      clearTimeout(stopGo);
    }
  }
  //----------------------------------------------------------------------

  //--------------------Question timer------------------------
  let stopTimer;
  if (go === 0) {
    stopTimer = setTimeout(() => {
      setQuestionTimer((prev) => prev - 1);
    }, 1000);
  }
  //---------------------------------------------------------

  //-------------------------Calculate seconds into minutes------------------
  let minute;
  let second;
  const calculateMinutes = (seconds) => {
    minute = Math.floor(seconds / 60);
    second = seconds % 60;
    return { minute: minute, second: second };
  };
  //-----------------------------------------------------------------------

  // ----------------------Question next ---------------------------------
  useEffect(() => {
    if (questionTimer == 0) {
      if (questionNo + 1 == questionType.length) {
        setScore(true);
        clearTimeout(stopTimer);
        let calculatedTime = calculateMinutes(totalTime);
        setCalculateTime(calculatedTime);
      }
      clearTimeout(stopTimer);
      setQuestionNo((prev) => prev + 1);
      setQuestionTimer(60);
    }
  });
  
  const nextQuestion = () => {
    if (questionNo + 1 == questionType.length) {
      setScore(true);
      children_noise();
      clearTimeout(stopTimer);
      let calculatedTime = calculateMinutes(totalTime);
      setCalculateTime(calculatedTime);
    }
    setQuestionTimer(60);
    clearTimeout(stopTimer);
    setAnswred(false);
    setQuestionNo((prev) => prev + 1);
  };

  if (score == true) {
    clearTimeout(stopTimer);
  }
  //---------------------------------------------------------------------

  //------------------------Select Answer--------------------------------
  if (answred) {
    clearTimeout(stopTimer);
  }

  const answering = (index, isCorrect) => {
    setTotalTime((prev) => prev + (60 - questionTimer));
    setAnswred(true);
    setAnswerIndex(index);
    if (isCorrect == true) {
      correct_sound();
      setRightAnswer((prev) => prev + 1);
      setCoin((prev) => prev + 4);
    }
    if (isCorrect == false) {
      wrong_sound();
      setWrongAnswer((prev) => prev + 1);
    }
  };
  //----------------------------------------------------------------------

  // Progress calculation
  const progress = ((questionNo) / questionType.length) * 100;

  // Animation variants
  const questionVariants = {
    initial: { 
      opacity: 0, 
      x: 100,
      scale: 0.9
    },
    in: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.5
      }
    },
    out: { 
      opacity: 0, 
      x: -100,
      scale: 0.9,
      transition: {
        duration: 0.3
      }
    }
  };

  const answerVariants = {
    initial: { opacity: 0, y: 20 },
    in: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.4
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
     
      
      {/* -----------------------------------Get ready page------------------------------------------- */}
      <div className={`${getReady == 0 ? "hidden" : "h-screen w-full flex justify-center items-center"}`}>
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center animate-pulse shadow-2xl">
            <span className="text-4xl font-bold text-white">!</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 animate-bounce">Get Ready!</h1>
          <p className="text-xl text-blue-200">The challenge begins in...</p>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------------- */}

      {/* --------------------------------------Timer---------------------------------------------- */}
      <div className={`${timers === 0 || getReady !== 0 ? "hidden" : "h-screen w-full flex justify-center items-center"}`}>
        <div className="text-center">
          <div className="relative">
            <div className="w-40 h-40  rounded-full border-4 border-green-400 flex items-center justify-center mx-auto mb-6 animate-pulse">
              <h1 className="text-6xl font-bold text-white">{timers}</h1>
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-green-300 animate-spin"></div>
          </div>
          <h1 className="text-2xl font-bold text-white mt-6">Quiz starts in</h1>
        </div>
      </div>
      {/* ----------------------------------------------------------------------------------------------------- */}

      {/* --------------------------------------------Go page -------------------------------------------- */}
      <div className={`${go === 0 || timers !== 0 ? "hidden" : "h-screen w-full flex justify-center items-center"}`}>
        <div className="text-center">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center animate-ping">
            <h1 className="text-5xl font-bold text-white">GO!</h1>
          </div>
          <p className="text-xl text-white animate-pulse">Let the game begin!</p>
        </div>
      </div>
      {/* -------------------------------------------------------------------------------------------- */}

      {/* Main Quiz Interface */}
      <div className={`${go === 0 ? "max-w-4xl mx-auto px-4 py-8" : "hidden"}`}>
        {/* Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-r from-blue-800 to-purple-800 rounded-xl p-4 shadow-2xl border border-blue-400">
            <div className="flex items-center">
              <div className="bg-blue-500 rounded-full p-2 mr-3">
                <FaTrophy className="text-yellow-300 text-xl" />
              </div>
              <div>
                <p className="text-blue-200 text-sm">Score</p>
                <p className="text-white font-bold text-xl">{rightAnswer}/{questionType.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-800 to-purple-800 rounded-xl p-4 shadow-2xl border border-blue-400">
            <div className="flex items-center">
              <div className="bg-green-500 rounded-full p-2 mr-3">
                <FaCoins className="text-yellow-300 text-xl" />
              </div>
              <div>
                <p className="text-blue-200 text-sm">Coins</p>
                <p className="text-white font-bold text-xl">{coin}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-800 to-purple-800 rounded-xl p-4 shadow-2xl border border-blue-400">
            <div className="flex items-center">
              <div className="bg-red-500 rounded-full p-2 mr-3">
                <FaClock className="text-white text-xl" />
              </div>
              <div>
                <p className="text-blue-200 text-sm">Time Left</p>
                <p className="text-white font-bold text-xl">{questionTimer}s</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-800 to-purple-800 rounded-xl p-4 shadow-2xl border border-blue-400">
            <div className="flex items-center">
              <div className="bg-purple-500 rounded-full p-2 mr-3">
                <FaStar className="text-yellow-300 text-xl" />
              </div>
              <div>
                <p className="text-blue-200 text-sm">Progress</p>
                <p className="text-white font-bold text-xl">{questionNo}/{questionType.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-white mb-2">
            <span>Question {questionNo} of {questionType.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Quiz Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
            {/* Quiz Header */}
            <div className="bg-gradient-to-r from-purple-800 to-blue-800 p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold text-white">{quizName}</h1>
                  <p className="text-blue-200">Test your knowledge!</p>
                </div>
                <div className="text-center">
                  <div className="relative flex justify-center items-center">
                    <div className="w-15 h-15 sm:w-20 sm:h-20 rounded-full border-4 border-green-400 flex items-center justify-center bg-gray-900 border-b-4 border-b-white animate-spin">
                     
                    </div>
                     <span className="text-2xl font-bold text-white absolute">{questionTimer}</span>
                  </div>
                  <p className="text-blue-200 text-xs mt-1">Seconds left</p>
                </div>
              </div>
            </div>

            {/* Quiz Content */}
            <div className="p-6">
              {score ? (
                <div className="text-center py-8">
                  <Confetti className="mx-auto max-w-full" />
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                    <FaTrophy className="text-white text-5xl" />
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-2">Quiz Completed!</h2>
                  <p className="text-blue-200 mb-8">You've mastered the challenge</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    <div className="bg-gradient-to-r from-green-800 to-emerald-700 p-5 rounded-xl border border-green-500">
                      <h3 className="text-white text-xl font-bold mb-2">Correct Answers</h3>
                      <p className="text-3xl font-bold text-yellow-300">{rightAnswer}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-red-800 to-rose-700 p-5 rounded-xl border border-red-500">
                      <h3 className="text-white text-xl font-bold mb-2">Wrong Answers</h3>
                      <p className="text-3xl font-bold text-yellow-300">{WrongAnswer}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-yellow-700 to-amber-700 p-5 rounded-xl border border-yellow-500">
                      <h3 className="text-white text-xl font-bold mb-2">Coins Earned</h3>
                      <p className="text-3xl font-bold text-yellow-300">{coin}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-800 to-indigo-700 p-5 rounded-xl border border-blue-500">
                      <h3 className="text-white text-xl font-bold mb-2">Your Level</h3>
                      <p className="text-xl font-bold text-yellow-300">
                        {rightAnswer == questionType.length
                          ? "🏆 Excellent!"
                          : rightAnswer > (questionType.length * 75) / 100
                          ? "⭐ Great!"
                          : rightAnswer > (questionType.length * 50) / 100
                          ? "👍 Good"
                          : rightAnswer > (questionType.length * 25) / 100
                          ? "😐 Poor"
                          : "💪 Keep Trying!"}
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-800 to-violet-700 p-5 rounded-xl border border-purple-500 md:col-span-2">
                      <h3 className="text-white text-xl font-bold mb-2">Performance Stats</h3>
                      <div className="flex justify-between text-white">
                        <span>Time: {calculatedTime.minute}m {calculatedTime.second}s</span>
                        <span>Skip: {skipQuestion}</span>
                        <span>Accuracy: {Math.round((rightAnswer / questionType.length) * 100)}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={questionNo}
                    variants={questionVariants}
                    initial="initial"
                    animate="in"
                    exit="out"
                  >
                    {/* Question */}
                    <motion.div 
                      className="mb-8 p-4 bg-gray-800 rounded-xl border border-gray-700"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                    >
                      <h1 className="text-xl font-bold text-white">
                        <span className="text-green-400">Q{questionNo + 1}:</span> {questionType[questionNo].questionText}
                      </h1>
                    </motion.div>

                    {/* Answers */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {questionType[questionNo].questionAnswer.map((option, index) => (
                        <motion.div 
                          key={index} 
                          className="relative"
                          variants={answerVariants}
                          initial="initial"
                          animate="in"
                          transition={{ delay: 0.2 + (index * 0.1) }}
                        >
                          <button
                            disabled={answred}
                            onClick={() => answering(index, option.isCorrect)}
                            className={`
                              w-full p-4 text-left rounded-xl border-2 transition-all duration-300
                              ${!answred 
                                ? "bg-gradient-to-r from-blue-800 to-purple-800 border-blue-500 hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-lg text-white" 
                                : option.isCorrect 
                                  ? "bg-gradient-to-r from-green-600 to-emerald-600 border-green-400 text-white shadow-lg" 
                                  : answerindex === index 
                                    ? "bg-gradient-to-r from-red-600 to-rose-600 border-red-400 text-white shadow-lg" 
                                    : "bg-gradient-to-r from-gray-700 to-gray-800 border-gray-600 text-gray-400"
                              }
                            `}
                          >
                            <div className="flex items-center">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                                !answred ? "bg-blue-600" : 
                                option.isCorrect ? "bg-green-500" : 
                                answerindex === index ? "bg-red-500" : "bg-gray-600"
                              }`}>
                                <span className="font-bold text-white">
                                  {String.fromCharCode(65 + index)}
                                </span>
                              </div>
                              <span>{option.answerText}</span>
                            </div>
                          </button>
                          
                          {answred && (
                            <motion.span 
                              className="absolute top-6 right-4 text-white text-2xl"
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ type: "spring", stiffness: 200 }}
                            >
                              {option.isCorrect ? (
                                <MdDone className="text-green-400" />
                              ) : answerindex === index ? (
                                <RxCross1 className="text-red-400" />
                              ) : null}
                            </motion.span>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Next Button */}
                    <motion.button
                      onClick={nextQuestion}
                      disabled={!answred}
                      className={`
                        w-full py-4 rounded-xl font-bold text-lg transition-all duration-300
                        ${answred 
                          ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg hover:scale-105 cursor-pointer" 
                          : "bg-gray-700 text-gray-400 cursor-not-allowed"
                        }
                      `}
                      whileHover={answred ? { scale: 1.02 } : {}}
                      whileTap={answred ? { scale: 0.98 } : {}}
                    >
                      {answred 
                        ? questionNo + 1 === questionType.length 
                          ? "Finish Quiz" 
                          : "Next Question →" 
                        : "Select an answer to continue"}
                    </motion.button>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizePractice;