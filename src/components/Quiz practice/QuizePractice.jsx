import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import children from "../../../public/children_noise.mp3";
import correct from "../../../public/correct_sound.mp3";
import wrong from "../../../public/wrong_sound.mp3";
import collage from "../../../public/collage.mp3";
import Confetti from "react-confetti";
import { MdDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
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

  return (
    <div>
      <Navbar coin={coin} />
      {/* -----------------------------------Get ready page------------------------------------------- */}
      <div
        className={`${
          getReady == 0
            ? "hidden"
            : "h-screen w-full p-4 flex justify-center items-center"
        } `}
      >
        <div>
          <h1 className="text-3xl font-bold text-green-700 text-center animate-ping">
            Get ready!
          </h1>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------------- */}

      {/* --------------------------------------Timer---------------------------------------------- */}
      <div
        className={`${
          timers === 0 || getReady !== 0
            ? "hidden"
            : "h-screen w-full p-4 flex justify-center items-center"
        } `}
      >
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-[70px] font-bold text-green-700 text-center animate-ping">
            {timers}
          </h1>
          <h1 className="font-bold my-3 text-2xl">Quiz start in</h1>
        </div>
      </div>
      {/* ----------------------------------------------------------------------------------------------------- */}

      {/* --------------------------------------------Go page -------------------------------------------- */}
      <div
        className={`${
          go === 0 || timers !== 0
            ? "hidden"
            : "h-screen w-full p-4 flex justify-center items-center"
        } `}
      >
        <div>
          <h1 className="text-4xl font-bold text-green-700 text-center animate-ping">
            Go!
          </h1>
        </div>
      </div>

      {/* -------------------------------------------------------------------------------------------- */}

      <div
        className={`${
          go === 0
            ? "flex justify-center items-center mt-[100px] p-4"
            : "hidden"
        } `}
      >
        <div className="w-[600px] border border-gray-200 shadow-2xl rounded-xl p-2">
          <div className="flex justify-between items-center px-5 pb-3">
            <div>
              <p className="text-xl font-semibold text-yellow-500">
                {quizName}
              </p>
              <p className="text-sm text-gray-500">
                Total Questions: {questionType.length}
              </p>
            </div>
            <div className="text-center flex justify-center flex-col items-center w-[70px] h-[70px] border rounded-full p-2 animation">
              <span className="text-xl font-bold text-green-500 ">
                {questionTimer}
              </span>
              <p className="text-[8px] text-gray-500">Seconds left</p>
            </div>
          </div>
          <hr className=" py-[2px]  border-0 bg-gray-400 " />

          {score ? (
            <div className="p-5">
              <Confetti className="mx-auto max-w-full" />
              <div className="md:flex justify-between items-center py-3 gap-10">
                <h1
                  className={`text-white bg-blue-800 py-2 w-full px-3 rounded-xl mt-4`}
                >
                  Total Score :{" "}
                  <span className="text-yellow-400 text-xl">{rightAnswer}</span>
                </h1>
                <h1
                  className={`text-white bg-blue-800 py-2 w-full px-3 rounded-xl mt-4 `}
                >
                  Total Wrong :{" "}
                  <span className="text-yellow-400 text-xl">{WrongAnswer}</span>
                </h1>
              </div>

              <div className="md:flex justify-between items-center py-3 gap-10">
                <h1
                  className={`text-white bg-blue-800 py-2 w-full px-3 rounded-xl mt-4`}
                >
                  Total Coin Earned :{" "}
                  <span className="text-yellow-400 text-xl">{coin}</span>
                </h1>
                <h1
                  className={`text-white bg-blue-800 py-2 w-full px-3 rounded-xl mt-4 `}
                >
                  Level :{" "}
                  <span className="text-yellow-400 font-semibold">
                    {rightAnswer == questionType.length
                      ? "Excellent"
                      : rightAnswer > (questionType.length * 75) / 100
                      ? "Great"
                      : rightAnswer > (questionType.length * 50) / 100
                      ? "Good"
                      : rightAnswer > (questionType.length * 25) / 100
                      ? "Poor"
                      : "You need to work hard!"}
                  </span>
                </h1>
              </div>

              <div className="md:flex justify-between items-center py-3 gap-10">
                <h1
                  className={`text-white bg-blue-800 py-2 w-full px-3 rounded-xl mt-4`}
                >
                  Total Time :{" "}
                  <span className="text-yellow-400 font-semibold">{`${calculatedTime.minute} min & ${calculatedTime.second} seconds`}</span>
                </h1>

                <h1
                  className={`text-white bg-blue-800 py-2 w-full px-3 rounded-xl mt-4 `}
                >
                  Total Skip :{" "}
                  <span className="text-yellow-400 font-semibold">
                    {skipQuestion}
                  </span>
                </h1>
              </div>
            </div>
          ) : (
            <div>
              <div className={`mt-5 p-4`}>
                <h1
                  className={`text-green-600 font-semibold pb-1 relative  ${
                    questionTimer < 60 ? "scale-[1]" : "scale-0"
                  } duration-150`}
                >
                  {questionType[questionNo]._id}.{" "}
                  {questionType[questionNo].questionText}
                </h1>
              </div>
              <div className="px-5 coinedParent">
                {questionType[questionNo].questionAnswer.map(
                  (option, index) => (
                    <div className="relative " key={index}>
                      <button
                        disabled={answred ? "disabled" : ""}
                        onClick={() => answering(index, option.isCorrect)}
                        className={`
                          ${questionTimer < 60 ? "scale-[1]" : "scale-0"}
                          py-2 px-4 cursor-pointer rounded border border-gray-500 shadow-md shadow-blue-500 my-3 text-sm text-left min-w-full  duration-300  ${
                            answred
                              ? option.isCorrect
                                ? "bg-green-500"
                                : answerindex === index
                                ? "bg-red-300"
                                : ""
                              : ""
                          }`}
                      >
                        {option.answerText}
                      </button>
                      <span
                        className={`absolute top-5 text-white font-bold right-5 text-2xl`}
                      >
                        {answred ? (
                          option.isCorrect ? (
                            <MdDone />
                          ) : answerindex === index ? (
                            <RxCross1 />
                          ) : (
                            ""
                          )
                        ) : (
                          ""
                        )}
                      </span>
                    </div>
                  )
                )}
                <button
                  onClick={nextQuestion}
                  disabled={answred ? "" : "disabled"}
                  className={`${
                    answred
                      ? " bg-blue-950 hover:bg-blue-900 cursor-pointer"
                      : "bg-gray-400 text-black cursor-not-allowed"
                  } py-3 px-4 w-full  duration-300  my-3 rounded-xl text-white`}
                >
                  {answred ? "Next" : "Please select option first"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizePractice;
