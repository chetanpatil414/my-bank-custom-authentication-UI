import axios from "axios";

const BASE_URL = "http://localhost:8080";

const getCsrfToken = () => {
  const csrfCookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("XSRF-TOKEN="));
  return csrfCookie ? csrfCookie.split("=")[1] : null;
};

export const dash = async () => {
  const csrfToken = getCsrfToken();
  console.log("CSRF Token:", csrfToken);
  try {
    const response = await axios.get("http://localhost:8080/dashboard", {
      headers: {
        "X-XSRF-TOKEN": csrfToken,
      },
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    if (error.response?.status === 401) {
      // React should now handle 401 without triggering a popup
      console.error("Unauthorized access - Custom handling.");
      throw new Error("Unauthorized");
    } else {
      throw new Error(error.response?.data?.message || "Login failed");
    }
  }
};
