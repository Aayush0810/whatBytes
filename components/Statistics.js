import React from "react";

const StatItem = ({ icon, value, label }) => (
  <div className="flex flex-wrap md:flex-nowrap gap-3">
    <div className="flex flex-col justify-center">
      <img 
        src={`/${icon}.png`} 
        alt={icon} 
        className="w-12 h-12 border rounded-full p-2 bg-gray-100"
      />
    </div>
    <div className="flex flex-col justify-center align-middle">
      <p className="font-bold text-sm md:text-xl flex">{value}</p>
      <p className="text-gray-500 font-light text-xs md:text-base">{label}</p>
    </div>
  </div>
);

const Statistics = ({ rank, percentile, score }) => {
  const stats = [
    { icon: "trophy", value: rank, label: "YOUR RANK" },
    { icon: "results", value: `${percentile}%`, label: "PERCENTILE" },
    { icon: "check", value: `${score}/15`, label: "CORRECT ANSWERS" }
  ];

  return (
    <>
      <div className="heading p-4 font-bold text-xl">Quick Statistics</div>
      <div className="grid grid-cols-3 p-3 gap-5">
        {stats.map((stat, index) => (
          <div key={stat.icon} className={index < 2 ? "border-r" : ""}>
            <StatItem {...stat} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Statistics;