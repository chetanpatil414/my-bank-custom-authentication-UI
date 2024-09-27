import React from "react";
import Header from "./components/loginpage/Header";
import LoginForm from "./components/loginpage/LoginForm";
import HelpSection from "./components/loginpage/HelpSection";
import Dashboard from "./components/dashboardpage/Dashboard";
import Display from "./components/dashboardpage/Display";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"; // For any global styles

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="container">
          <Routes>
            {/* <Route path="/" element={<LoginForm />} /> */}
            <Route path="/" element={<LoginForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/display" element={<Display />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
