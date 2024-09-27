import React from "react";
import { useLocation } from "react-router-dom";

const Display = () => {
  const location = useLocation();
  const data = location.state?.data || "No data available"; // Access the passed data

  return (
    <div>
      <h1>{data}</h1> {/* Display the fetched data */}
    </div>
  );
};

export default Display;
