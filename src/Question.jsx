import React from "react";

const Question = ({ question, index, onAnswerChange }) => {
  const handleChange = (e) => {
    onAnswerChange(index, e.target.value);
  };

  return (
    <div className="question">
      <h3>{question.question}</h3>
      {question.answers.map((answer, i) => (
        <div key={i}>
          <input
            type="radio"
            id={`q${index}_a${i}`}
            name={`question_${index}`}
            value={i + 1}
            onChange={handleChange}
          />
          <label htmlFor={`q${index}_a${i}`}>{answer}</label>
        </div>
      ))}
    </div>
  );
};

export default Question;
