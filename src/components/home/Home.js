import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toggleStocks } from '../../redux/home/home';

const Home = () => {
  const state = useSelector((state) => state.homeReducer.stocks);

  const dispatch = useDispatch();

  const clickEvent = (e) => {
    const ide = e.target.parentNode.parentNode.id;
    console.log(ide);
    dispatch(toggleStocks(ide));
  };

  const mainStock = state.slice(0, 1).map((stock) => (
    <div key={stock.symbol} id={stock.symbol}>
      <button type="button" onClick={clickEvent}>
        {stock.symbol}
        :
        $
        {stock.price}
      </button>
    </div>
  ));

  const displayStocks = state.slice(1, 12).map((stock) => (
    <div id={stock.symbol} key={stock.symbol}>
      <NavLink to="/details">
        <button type="button" onClick={clickEvent}>
          {stock.symbol}
          :
          $
          {stock.price}
        </button>
      </NavLink>
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
