"use client";
import React, { useState } from "react";
import HtmlScore from "./HtmlScore";
import Statistics from "./Statistics";
import Graph from "./Graph";
import SyllabusAnalysis from "./Analysis";
import QuestionAnalysis from "./QuestionAnalysis";
import UpdateScoreModal from "./UpdateScoreModal";

const SkillTest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rank, setRank] = useState(0);
  const [percentile, setPercentile] = useState(75);
  const [currentScore, setCurrentScore] = useState(0);

  const handleUpdateScores = (newScores) => {
    setRank(newScores.rank);
    setPercentile(newScores.percentile);
    setCurrentScore(newScores.currentScore);
  };

  return (
    <>
      <div className="heading p-7">Skill Test</div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col flex-grow md:w-5/9 gap-7">
          <div className="border rounded-lg flex flex-col justify-center">
            <HtmlScore onUpdateClick={() => setIsModalOpen(true)} />
          </div>
          <div className="border rounded-lg flex flex-col justify-center">
            <Statistics rank={rank} percentile={percentile} score={currentScore} />
          </div>
          <div className="border-2 rounded-lg flex flex-col justify-center">
            <Graph percentile={percentile} />
          </div>
        </div>
        <div className="flex-grow md:w-4/9 flex flex-col gap-4 min-w-[200px]">
          <div className="border rounded-lg flex-grow">
            <SyllabusAnalysis />
          </div>
          <div className="border rounded-lg flex-grow">
            <QuestionAnalysis correct={currentScore} total={15} />
          </div>
        </div>
      </div>
      <UpdateScoreModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpdate={handleUpdateScores}
      />
    </>
  );
};

export default SkillTest;