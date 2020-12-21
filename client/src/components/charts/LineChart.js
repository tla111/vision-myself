import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ['1st Quarter', '2nd Quarter', '3rd Quarter', '4th Quarter'],
      datasets: [
        {
          label: '1 Year of Setting Goals - # of Tasks Completed',
          data: [12, 20, 40, 80],
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
