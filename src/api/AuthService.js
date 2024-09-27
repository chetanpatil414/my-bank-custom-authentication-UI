import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const loginUser = async (userName, Password) => {
  try {
    const response = await axios.post("http://localhost:8080/user", {
      userName,
      Password,
    });
    return response.data;
  } catch (error) {
    if (error.response?.status === 401) {
      // throw new Error("Invalid credentials. Please try again.");
      throw new Error(error.response?.data?.message || "Login failed");
    }
  }
};

// export const loginUser = async (userName, Password) => {
//   try {
//     const response = await axios.post("${BASE_URL/logIn}", {
//       userName,
//       Password,
//     });
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response?.data?.message || "Login failed");
//   }
// };
