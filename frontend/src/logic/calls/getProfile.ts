import axios from "axios";
import { getCookie } from "cookies-next";

/**
 * Invokes a GET request to `/api/profile` that gets user's profile
 * 
 * Example Response:
 * 
            * {
                "username": "fatabbas",
                "email": "fatabbas@gmail.com",
                "rank": "Quiz Apprentice",
                "correct_percentages": [
                    {
                        "Art": 100
                    },
                    {
                        "Science": 100
                    },
                    {
                        "Geography": 100
                    },
                    {
                        "History": 100
                    },
                    {
                        "Sports": 0
                    }
                ],
                "correct_numbers": [
                    {
                        "Art": 1
                    },
                    {
                        "Science": 1
                    },
                    {
                        "Geography": 1
                    },
                    {
                        "History": 1
                    },
                    {
                        "Sports": 0
                    }
                ],
                "total_numbers": [
                    {
                        "Art": 1
                    },
                    {
                        "Science": 1
                    },
                    {
                        "Geography": 1
                    },
                    {
                        "History": 1
                    },
                    {
                        "Sports": 1
                    }
                ]
            }
 * 
 * @returns response from the API
 */
export const GetProfile = async (): Promise<any> => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/profile/${getCookie("user_id")}`,
      {
        headers: {
          "Content-Type": "Application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error getting profile:", error);
    throw error;
  }
};
