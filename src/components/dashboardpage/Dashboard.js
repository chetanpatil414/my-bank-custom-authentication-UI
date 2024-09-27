import { dash } from "../../api/DashboardService";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "/Users/chetanpatil/ReactJs/live-bank-project/src/styles/Dashboard.css";
const Dashboard = () => {
  const location = useLocation();
  const userdata = location.state?.data || "No data available";
  const navigate = useNavigate();
  const [data, setData] = useState("");

  const dashboardHandle = async () => {
    try {
      const responseData = await dash();
      setData(responseData);
      navigate("/display", { state: { data: responseData } });
      console.log("Login successful", responseData);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };
  return (
    <div className="dashboard">
      <button onClick={dashboardHandle}>Dashboard</button>
      <h1>{userdata} </h1>
    </div>
  );
};

export default Dashboard;
