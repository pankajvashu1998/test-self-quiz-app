import computer_course from "../../public/images.png";
import gk_course from "../../public/gk-quiz.png";
import { all_question } from "./allQuestionPackege";

export let courseCard = [
  {
    _id: "computer-quiz",
    image: computer_course,
    courseName: "Computer Quiz",
    queNo: all_question.computerQuestion.length,
    questionType: all_question.computerQuestion
  },
  {
    _id: "gk-quiz",
    image: gk_course,
    courseName: "GK Quiz Hindi",
    queNo: all_question.gkQuestion.length,
    questionType:all_question.gkQuestion
    
  },

  //  {
  //   _id: "gk-quiz",
  //   image: gk_course,
  //   courseName: "GK Quiz Hindi",
  //   queNo: 0,
  // },

  //  {
  //   _id: "gk-quiz",
  //   image: gk_course,
  //   courseName: "GK Quiz Hindi",
  //   queNo: 0,
  // },

   

   
   
  
];
