import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import DashBoardLogo from "../assets/rb_4496.png";
import Title from "../Components/Title";

const DashBoard = () => {
  const { transactions } = useContext(ShopContext);

  // Ensure valid default values for transactions array
  const validTransactions = Array.isArray(transactions) ? transactions : [];

  const totalInvested = validTransactions.reduce((sum, t) => {
    const price = parseFloat(t.price.replace("₹", "").replace(",", "")) || 0;
    return sum + price * (t.quantity || 0);
  }, 0);

  const totalCurrentValue = validTransactions.reduce((sum, t) => {
    const total =
      parseFloat(t.totalPrice.replace("₹", "").replace(",", "")) || 0;
    return sum + total;
  }, 0);

  const totalReturns = totalCurrentValue - totalInvested;
  const totalReturnPercentage = totalInvested
    ? ((totalReturns / totalInvested) * 100).toFixed(2)
    : 0;

  return (
    <div className="px-4 flex flex-col justify-center items-center py-8 sm:px-8 lg:px-12">
      {/* Title */}
      <Title text1={"Summary "} text2={""} />

      {/* Compact Summary Section */}
      <div className="p-4 bg-white max-w-md w-full px-6 py-8 rounded-lg shadow-lg mb-6">
        <div className="flex flex-col gap-4 space-y-2 text-sm">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col items-start justify-between">
              <span>Current Value:</span>
              <span className="font-bold text-gray-700">
                ₹{totalCurrentValue.toFixed(2)}
              </span>
            </div>
            <div className="flex flex-col justify-between items-center">
              <span>Total Invested:</span>
              <span className="font-bold text-gray-700">
                ₹{totalInvested.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span>Total Returns:</span>
            <span
              className={`font-bold ${
                totalReturns >= 0 ? "text-green-600" : "text-red-500"
              }`}
            >
              {totalReturns >= 0 ? "+" : "-"}₹
              {Math.abs(totalReturns).toFixed(2)} ({totalReturnPercentage}%)
            </span>
          </div>
        </div>
      </div>

      <Title text1={"Holdings"} text2={""} />

      {/* Transactions Section */}
      {validTransactions.length > 0 ? (
        <div className="p-4 bg-white max-w-md sm:max-w-2xl w-full px-6 py-6 rounded-lg shadow-lg">
          
          <div className="space-y-4 py-4">
            {validTransactions.map((transaction, index) => (
              <div
                key={index}
                className="flex px-4 justify-between items-center border-b pb-4 mb-4 last:mb-0 last:pb-0 last:border-b-0"
              >
                {/* Left Section: Stock Name and Quantity */}
                <div className="flex flex-col">
                  <p className="text-gray-800 font-semibold text-base">
                    {transaction.name}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {transaction.quantity} shares
                  </p>
                </div>

                {/* Right Section: Current and Invested Value */}
                <div className="text-right text-sm">
                  {/* Current Value */}
                  <p
                      className={`text-base font-semibold ${
                        parseFloat(transaction.price.replace("₹", "").replace(",", "")) >=
                        parseFloat(transaction.totalPrice.replace("₹", "").replace(",", ""))
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      ₹
                      {parseFloat(transaction.price.replace("₹", "").replace(",", "")).toFixed(2)}
                    </p>


                  
                  <p className="text-gray-500 text-xs">
                    Invested : ₹  
                    {(
                      parseFloat(transaction.price.replace("₹", "").replace(",", "")) *
                      transaction.quantity
                    ).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <img
            src={DashBoardLogo}
            alt="Dashboard Empty"
            className="w-full max-w-md mb-6"
          />
          <p className="text-gray-700 text-lg">
            Your Dashboard is Empty!! You haven't purchased any shares yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
