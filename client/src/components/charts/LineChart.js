import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ['1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year'],
      datasets: [
        {
          label: '5 Year Plan',
          data: [10, 20, 40, 80, 160],
          backgroundColor: ['rgba(0, 170, 255, 0.8)'],
          borderWidth: 5,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
