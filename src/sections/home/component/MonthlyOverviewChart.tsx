"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const MonthlyOverviewChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Cleanup previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create new chart
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // October days data
      const days = Array.from({ length: 31 }, (_, i) => i + 1);

      // Values that match the chart in the image
      const values = [
        5, 8, 10, 12, 14, 15, 17, 19, 20, 20, 20, 20, 20, 24, 28, 29, 29, 29,
        29, 30, 31, 32, 32, 33, 33, 32, 32, 32, 32, 32, 32,
      ];

      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: days.map((day) => `${day}\nOct`),
          datasets: [
            {
              label: "Applications",
              data: values,
              borderColor: "#38BDF8",
              backgroundColor: "rgba(56, 189, 248, 0.1)",
              tension: 0.3,
              fill: false,
              pointRadius: 0,
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              mode: "index",
              intersect: false,
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              titleColor: "#333",
              bodyColor: "#333",
              borderColor: "#ddd",
              borderWidth: 1,
              padding: 10,
              displayColors: false,
              callbacks: {
                title: (items) => {
                  if (!items.length) return "";
                  const index = items[0].dataIndex;
                  return `October ${days[index]}`;
                },
              },
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                maxRotation: 0,
                autoSkip: true,
                maxTicksLimit: 15,
                callback: function (value, index) {
                  const label = this.getLabelForValue(index);
                  return label.split("\n")[0];
                },
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                color: "rgba(0, 0, 0, 0.05)",
              },
              max: 40,
              ticks: {
                stepSize: 10,
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "220px" }}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default MonthlyOverviewChart;
