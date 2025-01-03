import React from "react";
import { useNavigate } from "react-router-dom";

const StockDataBox = ({ stocks }) => {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-6 max-w-36 w-max">
        {stocks.map((stock) => (
          <div
            onClick={() => navigate(`/stock/${stock.id}`)} // Navigate to stock details page
            key={stock.symbol}
            className="border hover:translate-y-[-10px] transition-all duration-500 cursor-pointer rounded-lg pl-6 pr-14 py-4 text-xs font-medium bg-white"
          >
            <div className="flex flex-col items-start justify-center mb-2">
              <img
                src={stock.photo}
                alt={stock.name}
                className="w-10 h-10 object-contain mr-4"
              />
              <h2 className="text-xs mt-4 font-semibold">{stock.name}</h2>
            </div>
            <div className="stock-info">
              <p className="text-sm">
                <span className="font-bold">{stock.price}</span>
              </p>
              <p className="text-md">
                <span className={`${stock.changeClass} font-bold`}>
                  {stock.change}
                </span>
                <span className={`${stock.changeClass} font-bold`}>
                  {stock.percentage}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockDataBox;
