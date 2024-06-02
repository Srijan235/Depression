import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";
import "./Questionnaire.css"; // Add this line to import the CSS file

const questions = [
  {
    id: 1,
    question: "Do you feel sad or down most of the time?",
    answers: ["Never", "Sometimes", "Often", "Always"],
  },
  {
    id: 2,
    question:
      "Have you lost interest or pleasure in activities you once enjoyed?",
    answers: ["Never", "Sometimes", "Often", "Always"],
  },
  {
    id: 3,
    question: "Do you experience changes in appetite or weight?",
    answers: ["Never", "Sometimes", "Often", "Always"],
  },
  {
    id: 4,
    question: "Do you have trouble sleeping or sleep too much?",
    answers: ["Never", "Sometimes", "Often", "Always"],
  },
  {
    id: 5,
    question: "Do you feel fatigued or have low energy?",
    answers: ["Never", "Sometimes", "Often", "Always"],
  },
  {
    id: 6,
    question: "Do you feel worthless or guilty?",
    answers: ["Never", "Sometimes", "Often", "Always"],
  },
  {
    id: 7,
    question: "Do you have difficulty concentrating or making decisions?",
    answers: ["Never", "Sometimes", "Often", "Always"],
  },
  {
    id: 8,
    question: "Do you experience thoughts of death or suicide?",
    answers: ["Never", "Sometimes", "Often", "Always"],
  },
  {
    id: 9,
    question: "Do you feel restless or slowed down?",
    answers: ["Never", "Sometimes", "Often", "Always"],
  },
  {
    id: 10,
    question: "Do you find it difficult to manage your daily responsibilities?",
    answers: ["Never", "Sometimes", "Often", "Always"],
  },
];

const Questionnaire = () => {
  const [responses, setResponses] = useState(
    Array(questions.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);

  const handleAnswerChange = (index, answer) => {
    const newResponses = [...responses];
    newResponses[index] = answer;
    setResponses(newResponses);
  };

  const calculateScore = () => {
    let score = 0;
    responses.forEach((response) => {
      if (response !== null) {
        score += parseInt(response);
      }
    });
    return score;
  };

  const handleSubmit = () => {
    if (responses.includes(null)) {
      alert("Please answer all questions.");
    } else {
      setShowResult(true);
    }
  };

  const leftQuestions = questions.slice(0, 5);
  const rightQuestions = questions.slice(5);

  return (
    <div className="questionnaire">
      <h1>Depression Detection System</h1>
      {showResult ? (
        <Result score={calculateScore()} />
      ) : (
        <div style={{display:"flex",flexDirection:"column"}}>
        <div className="questionnaire-container">
          <div className="questions-column">
            {leftQuestions.map((q, index) => (
              <Question
                key={q.id}
                question={q}
                index={index}
                onAnswerChange={handleAnswerChange}
              />
            ))}
          </div>
          <div className="questions-column">
            {rightQuestions.map((q, index) => (
              <Question
                key={q.id}
                question={q}
                index={index + 5}
                onAnswerChange={handleAnswerChange}
              />
            ))}
          </div>
        
        </div>
        <div>
  <button onClick={handleSubmit}>Submit</button>
        </div>
        </div>
      )}
    </div>
  );
};

export default Questionnaire;
