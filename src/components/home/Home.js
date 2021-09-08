import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import detailsStock from '../../redux/slices/detailsSlices';

const Home = () => {
  const state = useSelector((state) => state.homeReducer.stocks);

  const dispatch = useDispatch();

  const clickEvent = (e) => {
    const ide = e.target.id;
    dispatch(detailsStock(ide));
  };

  const mainStock = state.slice(0, 1).map((stock) => (
    <div className="main-stock" key={stock.symbol}>
      <NavLink className="main-stock-btn" id={stock.symbol} to={`/${stock.symbol}`} onClick={clickEvent}>
        {stock.symbol}
        :
        $
        {stock.price}
      </NavLink>
      <p className="main-stock-details">{stock.name}</p>
    </div>
  ));

  const displayStocks = state.slice(1, 13).map((stock) => (
    <NavLink className="stock-item-container" to={`/${stock.symbol}`} id={stock.symbol} key={stock.symbol} onClick={clickEvent}>
      {stock.symbol}
      :
      $
      {stock.price}
      <p>{stock.name}</p>
    </NavLink>
  ));

  return (
    <div className="home-container">
      <div className="main-stk">
        {mainStock}
      </div>
      <div className="details-breakline">
        <p>BREAKLINE</p>
      </div>
      <div className="stk-list">
        {displayStocks}
      </div>
    </div>
  );
};

export default Home;
