import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../Components/Title";
import StockDataBox from "../Components/StockDataBox";
import IndianIndices from '../Components/IndianIndices'

const Home = () => {
  const { mostBoughtStocks, topGainersStocks, stocksInNews } =
    useContext(ShopContext);

  return (
    <div className="flex flex-col justify-center">
      <Title text1={"Indices"} text2={"All indices"} />
      <IndianIndices />
      {/* <p className="mt-8"></p> */}
      <Title text1={"Most Bought on Growdha"} text2={"See more"} />
      <StockDataBox stocks={mostBoughtStocks} />

      <Title text1={"Top Gainers"} text2={"See more"} />
      <StockDataBox stocks={topGainersStocks} />

      <Title text1={"Stocks in News"} text2={"See more"} />
      <StockDataBox stocks={stocksInNews} />
      <p className="mb-8"></p>

    </div>
  );
};

export default Home;
