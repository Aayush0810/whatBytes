import React from "react";

const QuestionAnalysis = ({ correct, total }) => {
  const percentage = (correct / total) * 100;
  const dashArray = 283;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl m-4 p-6">
      <h2 className="text-xl font-bold mb-2 flex justify-between">
        Question Analysis{" "}
        <span className="text-right text-blue-600 font-bold mb-2">{`${correct}/${total}`}</span>
      </h2>
      <p className="text-gray-600 mb-4">
        <span className="font-bold">You scored {correct} question{correct !== 1 ? "s" : ""} correct out of{" "}
        {total}.</span>{correct < total && " However it still needs some improvements"}
      </p>
      <div className="relative w-40 h-40 mx-auto">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-gray-200 stroke-current"
            strokeWidth="10"
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
          />
          <circle
            className="text-blue-600 progress-ring__circle stroke-current"
            strokeWidth="10"
            strokeLinecap="round"
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset,
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/focus.png" alt="bulls-eye" />
        </div>
      </div>
    </div>
  );
};

export default QuestionAnalysis;
