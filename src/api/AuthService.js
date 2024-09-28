import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const loginUser = async (userName, Password) => {
  const credentials = btoa(`${userName}:${Password}`);
  try {
    const response = await axios.post(
      "http://localhost:8080/user",
      {
        userName,
        Password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${credentials}`,
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    if (error.response?.status === 401) {
      // throw new Error("Invalid credentials. Please try again.");
      throw new Error(error.response?.data?.message || "Login failed");
    }
  }
};
