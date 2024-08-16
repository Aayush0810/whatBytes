import React from "react";

const HtmlScore = ({ onUpdateClick }) => {
  return (
    <div className="flex flex-col p-3 gap-5 md:flex-row">
      <div className="flex gap-3">
        <img src="/html-icon.png" alt="" />
        <div className="flex flex-col justify-center">
          <p className="font-bold text-lg">Hyper Text Markup Language</p>
          <p className="font-semibold text-sm text-gray-500">
            Questions: 8 | Duration: 15 min | Submitted on: 15th Aug, 2024
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <button
          className="p-3 px-7 rounded-lg bg-blue-900 text-white"
          onClick={onUpdateClick}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default HtmlScore;