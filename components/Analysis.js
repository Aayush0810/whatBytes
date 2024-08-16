import React from 'react';

const SyllabusAnalysis = () => {
  const subjects = [
    { name: 'HTML Tools, Forms, History', percentage: 80, color: '#4285F4' },
    { name: 'Tags & References in HTML', percentage: 60, color: '#FA7B17' },
    { name: 'Tables & References in HTML', percentage: 24, color: '#EA4335' },
    { name: 'Tables & CSS Basics', percentage: 96, color: '#34A853' },
  ];

  return (
    <div className="mx-auto p-8 rounded-lg">
      <h2 className="text-xl font-bold mb-8">Syllabus Wise Analysis</h2>
      {subjects.map((subject, index) => (
        <div key={index} className="mb-8">
          <p className="text-sm text-gray-800 font-medium mb-4">{subject.name}</p>
          <div className="flex items-center">
            <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
              <div
                className="h-2.5 rounded-full"
                style={{
                  width: `${subject.percentage}%`,
                  backgroundColor: subject.color,
                }}
              ></div>
            </div>
            <span className="text-sm font-medium" style={{ color: subject.color }}>
              {subject.percentage}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SyllabusAnalysis;