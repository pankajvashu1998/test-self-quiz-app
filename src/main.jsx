import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import ComputerQue from "./components/Question Start Page/ComputerQue";
import QuizePractice from "./components/Quiz practice/QuizePractice";
import AnswerDashboard from "./answer dashboard/AnswerDashboard";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/quiz/:id" element={<ComputerQue />} />
      <Route path="/quiz-practice/:id" element={<QuizePractice/>} />
      <Route path="/answer-dashboard" element={<AnswerDashboard/>} />
    </Routes>
  </BrowserRouter>
);
