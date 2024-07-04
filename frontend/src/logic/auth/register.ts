import axios from "axios";

export interface RegistrationInterface {
  username: string;
  email: string;
  password: string;
}

/**
 * `RegistrationHandler` Invokes a POST request to our Laravel API endpoint for user
 * registration with the provided username, email, and password.
 *
 * @param {RegistrationInterface} info - The user's registration details.
 * @returns {Promise<void>} A promise that resolves when the request is complete.
 */
export const RegistrationHandler = async (
  info: RegistrationInterface
): Promise<void> => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/register",
      {
        user_name: info.username,
        user_email: info.email,
        user_password: info.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};
