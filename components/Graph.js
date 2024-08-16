"use client"
import React from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Graph = ({ percentile }) => {
    const distributionData = [
        2, 3, 4, 5, 7, 10, 15, 22, 30, 40, 52, 65, 80, 92, 98, 99, 98, 92, 85, 70, 50, 30, 15, 8, 5, 3, 2, 1, 1, 2, 3
    ];

    const data = {
        labels: [0, 25, 50, 75, 100],
        datasets: [
            {
                label: 'Percentile Distribution',
                data: distributionData.map((value, index) => ({ x: index * 3.33, y: value })),
                borderColor: 'black',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                fill: false,
                tension: 0.4,
                pointRadius: 2,
                pointHoverRadius: 4,
            },
            {
                label: 'Your Percentile',
                data: [{ x: percentile, y: distributionData[Math.floor(percentile / 3.33)] }],
                borderColor: 'black',
                backgroundColor: 'black',
                pointRadius: 6,
                pointHoverRadius: 8,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                min: 0,
                max: 100,
                ticks: {
                    callback: (value) => [0, 25, 50, 75, 100].includes(value) ? value : '',
                    font: {
                        size: 10,
                    },
                },
                grid: {
                    display: true,
                    color: 'rgba(0, 0, 0, 0.1)',
                },
            },
            y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    display: false,
                },
                grid: {
                    display: true,
                    color: 'rgba(0, 0, 0, 0.1)',
                },
                border: {
                    display: false,
                },
            },
        },
    };
    return (
        <>
            <div className="flex p-4 ">
                <div className="flex flex-col gap-4">
                    <p className="font-bold text-xl ">Comparison Graph</p>
                    <p className="mr-4">
                        <span className="font-bold">You Scored {percentile}% </span>which is {percentile > 72 ? 'higher' : 'lower'} than the average percentile 72% of all
                        the engineers who took the test.
                    </p>
                </div>
                <div className="flex flex-col justify-center">
                    <img
                        src="/graph.png"
                        className="w-13 h-13 border rounded-full p-2 bg-gray-100"
                        alt=""
                    />
                </div>
            </div>
            <Line data={data} options={options} style={{marginBottom: "5px"}}/>
        </>
    );
};

export default Graph;