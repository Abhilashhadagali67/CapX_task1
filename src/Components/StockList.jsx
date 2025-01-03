import React, { useContext } from "react";
import {ShopContext} from '../context/ShopContext' 

const StockList = () => {
  const { symbols, prices, rupee } = useContext(ShopContext);

  return (
    <div>
      {symbols.map((symbol) => (
        <div key={symbol}>
          <h2>{symbol}</h2>
          <p>
            Price: {prices[symbol] ? `${rupee} ${prices[symbol]}` : "Loading..."}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StockList;
