import React from "react";
import { useState } from "react";
import "/Users/chetanpatil/ReactJs/live-bank-project/src/styles/LoginForm.css";
import { loginUser } from "../../api/AuthService.js";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, sateData] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const responseData = await loginUser(username, password);
      sateData(responseData);
      console.log("Login successful", responseData);
      navigate("/dashboard", { state: { data: responseData } });
    } catch (error) {
      console.error("Login failed:", error.message);
      setErrorMessage("Incorrect Username or Password");
    }
  };

  return (
    <div className="login-box">
      <div className="login-form">
        <h2>Log in</h2>
        <form>
          <input
            type="text"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <select>
            <option>Take me to:</option>
            <option>Dashboard</option>
          </select>
          <button onClick={handleLogin} type="submit">
            Log In
          </button>
          {/* <input type="submit" value="Log In" /> */}
        </form>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <div className="agreement">
          By Logging in I acknowledge that I have read, understood and I am
          bound by the version of the
          <a href="#">Electronic Banking Agreement</a> that is posted at the
          website at the time of Logging in.
        </div>
      </div>
      <div className="help">
        <h3>Need help?</h3>
        <a href="#">Forgot your Log in details?</a>
        <a href="#">Retrieve your username</a>
        <a href="#">Retrieve your password</a>
        <a href="#">Read our Security tips</a>
        <h3>Not yet registered?</h3>
        <input type="submit" value="Sign Up" className="sign-up-btn" />
      </div>
    </div>
  );
};

export default LoginForm;
