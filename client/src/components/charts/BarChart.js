import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: [
        'Do Not Have Goals',
        'Have a Plan, But Goals Are Unwritten',
        'Do Have Goals Written Down',
      ],
      datasets: [
        {
          label: 'Percentage of U.S. Population - Setting Goals',
          data: [83, 14, 3],
          backgroundColor: [
            'rgba(255, 77, 106, 0.8)',
            'rgba(77, 255, 106, 0.8)',
            'rgba(255, 179, 25, 0.8)',
          ],
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
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
