import axios from "axios";
import { getCookie } from "cookies-next";
import { Quiz } from "../interfaces";

export const GetNewQuiz = async (): Promise<Quiz> => {
  try {
    const userId = getCookie("user_id");
    if (!userId) {
      throw new Error("User ID cookie is missing");
    }

    const res = await axios.get(`http://localhost:8000/api/quiz/new/${userId}`);

    if (res.status !== 200) {
      throw new Error(`Failed to fetch quiz, status code: ${res.status}`);
    }

    const quizData = res.data;
    console.log(quizData);
    const parsedQuizArray = quizData.map((question: any) => {
      const {
        question_id,
        question_content,
        question_category,
        question_xp,
        question_possible_answers,
      } = question;

      const answers = question_possible_answers.map((answer: any) => ({
        text: answer.answer_text,
        is_correct: answer.answer_is_correct !== 0,
      }));

      return {
        id: question_id,
        content: question_content,
        category: question_category,
        xp: question_xp,
        answers,
      };
    });

    return {
      content: parsedQuizArray,
      current_index: 0,
    };
  } catch (error) {
    console.error("Error generating quiz:", error);
    throw error;
  }
};
