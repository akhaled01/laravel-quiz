import axios from "axios";
import { getCookie } from "cookies-next";

/**
 * Invokes a GET request to get all previous quizzes done by user 
 * from `/api/quiz/all` endpoint
 * 
 * Example Response:
 * 
        * {
            "quizzes": [
                {
                    "quiz_id": "e8f07b9d-6dc0-4a60-9b12-464aa5fd8230",
                    "quiz_correct_num": 4,
                    "quiz_xp_gained": 100,
                    "user_id": "9c67f5de-06d7-4f04-b6d8-7ec6ed48e8bf"
                }
            ]
        }

    @returns data from API 
 */
export const GetPreviousQuizzes = async (): Promise<any> => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/quiz/all/${getCookie("user_id")}`,
      {
        headers: {
          "Content-Type": "Application/json",
        },
      }
    );

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error getting previous quizzes:", error);
    throw error;
  }
};
