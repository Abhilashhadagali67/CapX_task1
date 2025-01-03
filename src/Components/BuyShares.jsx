import React, { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BuyShares = ({ stock }) => {
  const [quantity, setQuantity] = useState(1);
  const { transactions, setTransactions, rupee, balance, updateBalance } = useContext(ShopContext);

  const stockPrice = parseFloat(stock.price.replace(rupee, "").replace(",", ""));
  const totalAmount = (quantity * stockPrice).toFixed(2); // Calculate total amount

  const handleBuy = () => {
    if (totalAmount > balance) {
      toast.error("Insufficient balance to complete the transaction.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const newTransaction = {
      name: stock.name,
      symbol: stock.symbol,
      price: `${rupee}${stockPrice.toLocaleString()}`,
      quantity,
      totalPrice: `${rupee}${parseFloat(totalAmount).toLocaleString()}`,
    };

    setTransactions([...transactions, newTransaction]);
    updateBalance(totalAmount); // Deduct balance

    toast.success(`Bought ${quantity} shares of ${stock.name} for ${newTransaction.totalPrice}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    setQuantity(1); // Reset quantity
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6">
      <div className="flex flex-col items-start mb-4">
        <p className="text-lg text-gray-600 font-bold">{stock.name}</p>
        <div className="flex flex-row text-sm gap-2 font-medium">
          <span className="block text-gray-600">Current Price:</span>
          <span className="text-gray-600">{stock.price}</span>
        </div>
        <div className="flex gap-2 items-center mt-10">
          <label className="text-lg text-gray-600 font-bold">Quantity:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="border rounded-md p-2 text-lg w-20"
          />
        </div>
        <div className="text-sm text-gray-500 mt-2">
          Amount Required : {" "}
          <span className="font-bold ">{`${rupee}${parseFloat(totalAmount).toLocaleString()}`}</span>
        </div>
        <div className="text-sm text-gray-500 mt-2">
          Balance : {" "}
          <span className="font-bold ">{`${rupee}${balance.toLocaleString()}`}</span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={handleBuy}
          className="bg-green-700 text-center text-white px-36 py-2 rounded-md hover:bg-green-600"
        >
          Buy Shares
        </button>
      </div>
    </div>
  );
};

export default BuyShares;
