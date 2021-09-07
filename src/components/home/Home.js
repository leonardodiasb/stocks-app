import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const state = useSelector((state) => state.homeReducer.stocks);

  const mainStock = state.slice(0, 1).map((stock) => (
    <div key={stock.symbol}>
      {stock.symbol}
      :
      $
      {stock.price}
    </div>
  ));

  const displayStocks = state.slice(1, 12).map((stock) => (
    <div key={stock.symbol}>
      {stock.symbol}
      :
      $
      {stock.price}
    </div>
  ));

  return (
    <div className="home-container">
      <div className="main-stk">
        {mainStock}
      </div>
      <div className="stk-list">
        {displayStocks}
      </div>
    </div>
  );
};

export default Home;
