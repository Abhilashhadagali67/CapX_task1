import React, { createContext, useState, useEffect } from "react";
import { stockData } from "./StockData";

export const ShopContext = createContext();

const API_KEY = import.meta.env.VITE_API_KEY;

const ShopContextProvider = (props) => {
  // State for symbols and prices
  const [symbols, setSymbols] = useState(["AAPL", "GOOGL", "MSFT", "AMZN", "TSLA", "META", "NFLX", "NVDA", "BRK.A", "V", "JPM", "DIS", "BABA", "ORCL", "CSCO"]);
  const [prices, setPrices] = useState({});
  const [transactions, setTransactions] = useState([]); // State to track transactions
  const rupee = "₹";

  // Other states
  const [mostBoughtStocks, setMostBoughtStocks] = useState([]);
  const [topGainersStocks, setTopGainersStocks] = useState([]);
  const [stocksInNews, setStocksInNews] = useState([]);

  const [balance, setBalance] = useState(10000000); // ₹1 crore initial balance

const updateBalance = (amount) => {
  setBalance((prevBalance) => prevBalance - amount);
};

  // Helper function to fetch stock prices
  const fetchStockPrice = async (symbol) => {
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`
      );
      const data = await response.json();

      if (data && data["Time Series (5min)"]) {
        const latestData = Object.values(data["Time Series (5min)"])[0];
        return latestData["1. open"]; // Return the opening price
      } else {
        const apiError = data["Note"] || data["Error Message"] || JSON.stringify(data);
        console.warn(`Error fetching data for ${symbol}: ${apiError}`);
        return null;
      }
    } catch (error) {
      console.error(`Failed to fetch stock price for ${symbol}: ${error.message}`);
      return null;
    }
  };

  // Fetch all stock prices for symbols
  const fetchAllStockPrices = async () => {
    const newPrices = {};
    for (const symbol of symbols) {
      const price = await fetchStockPrice(symbol);
      if (price) {
        newPrices[symbol] = price;
      }
    }
    setPrices(newPrices);
    console.log("Updated stock prices:", newPrices);
  };

  // Helper function to get random stocks for a section
  const getRandomStocks = (data, count) => {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Initialize stocks for different sections
  const initializeSections = () => {
    setMostBoughtStocks(getRandomStocks(stockData, 4)); // Change count as needed
    setTopGainersStocks(getRandomStocks(stockData, 6));
    setStocksInNews(getRandomStocks(stockData, 10));
  };

  useEffect(() => {
    initializeSections();
    // fetchAllStockPrices(); // Uncomment this if you want live stock prices
  }, []);

  return (
    <ShopContext.Provider
      value={{
        rupee,
        symbols,
        setSymbols,
        prices,
        mostBoughtStocks,
        topGainersStocks,
        stocksInNews,
        transactions,
        setTransactions, // Expose transactions
        balance,          // Expose balance
    updateBalance, 
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
