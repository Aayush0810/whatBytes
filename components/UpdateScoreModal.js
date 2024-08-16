import React, { useState } from "react";

const UpdateScoreModal = ({ isOpen, onClose, onUpdate }) => {
  const [rank, setRank] = useState("");
  const [percentile, setPercentile] = useState("");
  const [currentScore, setCurrentScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({
      rank: parseInt(rank),
      percentile: parseInt(percentile),
      currentScore: parseInt(currentScore),
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Update scores</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Update your Rank</label>
            <input
              type="number"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
              className="border p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Update your Percentile</label>
            <input
              type="number"
              value={percentile}
              onChange={(e) => setPercentile(e.target.value)}
              className="border p-2 w-full"
              required
              min="0"
              max="100"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Update your Current Score (out of 15)</label>
            <input
              type="number"
              value={currentScore}
              onChange={(e) => setCurrentScore(e.target.value)}
              className="border p-2 w-full"
              required
              min="0"
              max="15"
            />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 px-4 py-2 border rounded">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateScoreModal;