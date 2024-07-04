import { getCookie } from "cookies-next";
import { Quiz, Result } from "../interfaces";
import axios from "axios";
import { CacheResults } from "../context/result";

/**
 * Invokes a POST request to save quiz data and return results
 */
export const SubmitQuiz = async (quiz: Quiz): Promise<void> => {
  try {
    let user_id = getCookie("user_id");
    let total_xp_gained = 0;
    let correct_num = 0;
    let question_details: { question_id: number; is_answered: boolean }[] = [];

    quiz.content.forEach((question, index) => {
      let is_selected = false;
      question.answers.forEach((ans) => {
        if (ans.selected) {
          is_selected = true;

          if (ans.is_correct) {
            total_xp_gained += question.xp;
            correct_num += 1;
            question_details.push({
              question_id: question.id,
              is_answered: true,
            });
          } else {
            question_details.push({
              question_id: question.id,
              is_answered: false,
            });
          }
        }
      });

      if (!is_selected) {
        throw new Error(`question ${index + 1} has no answer selected`);
      }
    });

    const response = await axios.post(
      "http://localhost:8000/api/quiz/save",
      {
        user_id,
        total_xp_gained,
        correct_num,
        question_details,
      },
      {
        headers: {
          "Content-Type": "Application/json",
        },
      }
    );

    if (response.status !== 201) {
      throw new Error(
        `network response code was not 201, it was ${response.status}`
      );
    }

    let result: Result = {
      correct_num: response.data.results.correct_num,
      cat_answered: response.data.results.cat_answered,
    };

    CacheResults(result);
  } catch (error) {
    console.error("submission error:", error);
    throw error;
  }
};
