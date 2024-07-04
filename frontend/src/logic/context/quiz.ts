import { Quiz } from "../interfaces";
import { GetNewQuiz } from "../calls/newQuiz";

/**
 * Caches a quiz in localstorage
 * 
 * @param data the quiz data 
 */
export const CacheQuiz = (data: Quiz) => {
  localStorage.setItem("current_quiz", JSON.stringify(data));
};

/**
 * clears localstorage
 */
export const PurgeQuiz = () => {
  localStorage.removeItem("current_quiz");
};

/**
 * returns cached quiz if any, otherwise fetches and returns a new quiz from the backend
 */
export const GetQuiz = async (): Promise<Quiz> => {
  if (localStorage.getItem("current_quiz")) {
    console.log("using cached quiz");
    return JSON.parse(localStorage.getItem("current_quiz")!) as Quiz;
  } else {
    const quiz = await GetNewQuiz();
    CacheQuiz(quiz);
    return quiz;
  }
};
