import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { stockData } from "../context/StockData";
import { Line } from "react-chartjs-2";
import { ShopContext } from "../context/ShopContext";
import BuyShares from "../Components/BuyShares";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const StockPage = () => {
  const { stockid } = useParams(); // Get stock ID from the URL
  const { rupee } = useContext(ShopContext); // Access the rupee symbol from context
  const stock = stockData.find((item) => item.id === stockid); // Find stock by ID

  if (!stock) {
    return <div className="text-center py-8 text-xl">Stock not found!</div>; // Fallback if stock ID is invalid
  }

  // Dummy chart data
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // X-axis labels
    datasets: [
      {
        label: `${stock.name} Price Trend`,
        data: [120, 150, 180, 170, 200, 230], // Dummy Y-axis data
        borderColor: "rgba(54, 162, 235, 1)", // Line color
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Fill color
        borderWidth: 2,
        tension: 0.3, // Curve smoothness
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
          color: "#333",
        },
      },
      y: {
        title: {
          display: true,
          text: `Price in ${rupee}`,
          color: "#333",
        },
      },
    },
  };

  return (
    <div className="px-4 py-8 sm:px-8 lg:px-12 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Stock Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
          <img
            src={stock.photo}
            alt={stock.name}
            className="w-20 h-20 sm:w-14 sm:h-14 lg:w-14 lg:h-14 object-contain"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-lg font-semibold text-gray-600">{stock.name}</h1>
          </div>
        </div>

        {/* Stock Price Details */}
        <div className="flex flex-row gap-14 mb-8">
          <div className="text-sm font-medium">
            <span className="block text-gray-600">Current Price:</span>
            <span className="font-bold text-gray-600">{stock.price}</span>
          </div>
          <div className="text-sm font-medium">
            <span className="block text-gray-600">Change:</span>
            <span className={`${stock.changeClass} font-bold`}>
              {stock.change} {stock.percentage}
            </span>
          </div>
        </div>

        {/* Chart Section */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-600 mb-4">Price Trend</h2>
          <Line data={chartData} options={chartOptions} />
        </div>

        {/* Buy Shares Section */}
        <div className="flex justify-center">
          <BuyShares stock={stock} />
        </div>

        {/* Description Section */}
        <div className="text-gray-600 text-sm leading-relaxed mt-8">
          <p>
            <strong>{stock.name}</strong> is a leading player in its industry. Explore detailed
            financials, performance metrics, and latest trends to make informed decisions. Stay
            updated with real-time insights and analysis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StockPage;
