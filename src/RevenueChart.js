import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const COLORS = ["#38A169", "#3182CE", "#D69E2E", "#805AD5"]; // colors for treatment types

function RevenueChart({ revenueByDateType, treatmentTypes }) {
  const [chartType, setChartType] = useState("bar");

  const dates = Object.keys(revenueByDateType);
  const datasets = treatmentTypes.map((type, idx) => ({
    label: type,
    data: dates.map((date) => revenueByDateType[date]?.[type] || 0),
    backgroundColor: COLORS[idx],
    borderColor: COLORS[idx],
    fill: chartType === "line" ? false : true,
  }));

  const chartData = {
    labels: dates,
    datasets,
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
    },
    scales: {
      x: { stacked: chartType === "bar" },
      y: { stacked: chartType === "bar", beginAtZero: true },
    },
  };

  return (
    <div>
      <div className="flex gap-2 mb-2">
        <button
          onClick={() => setChartType("bar")}
          className={`px-3 py-1 rounded ${
            chartType === "bar" ? "bg-orange-600 text-white" : "bg-gray-200"
          }`}
        >
          Bar (Stacked)
        </button>
        <button
          onClick={() => setChartType("line")}
          className={`px-3 py-1 rounded ${
            chartType === "line" ? "bg-orange-600 text-white" : "bg-gray-200"
          }`}
        >
          Line
        </button>
      </div>

      <div className="h-56">
        {chartType === "bar" && <Bar data={chartData} options={chartOptions} />}
        {chartType === "line" && <Line data={chartData} options={chartOptions} />}
      </div>
    </div>
  );
}

export default RevenueChart;
