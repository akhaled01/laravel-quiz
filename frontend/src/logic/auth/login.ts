import axios from "axios";
import { setCookie } from "cookies-next";

export interface AuthInterface {
  email: string;
  password: string;
}

/**
 * `AuthHandler` Invokes a POST request to a Laravel API endpoint to authenticate a user with the
 * provided email and password, and establishes a session by setting cookies with the token and user ID if the response status is
 * 200.
 *
 * @param {AuthInterface} info - The user's authentication details.
 * @returns {Promise<any>} The data returned by the API call.
 */
export const AuthHandler = async (info: AuthInterface): Promise<any> => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/auth",
      {
        user_email: info.email,
        user_password: info.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      const data = response.data;
      setCookie("user_id", data.user_id, { maxAge: 60 * 60, sameSite: "none" });
    }

    return response.data;
  } catch (error) {
    console.error("Authentication error:", error);
    throw error;
  }
};
