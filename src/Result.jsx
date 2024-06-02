import React from "react";

const Result = ({ score }) => {
  const getResult = () => {
    if (score <= 10) return "No Depression";
    if (score <= 20) return "Mild Depression";
    if (score <= 30) return "Moderate Depression";
    return "Severe Depression";
  };

  return (
    <div className="result">
      <h2>Your Score: {score}</h2>
      <h3>{getResult()}</h3>
    </div>
  );
};

export default Result;
