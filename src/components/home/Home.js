import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import detailsStock from '../../redux/slices/detailsSlices';
import { searchStkAction } from '../../redux/home/home';

const Home = () => {
  const state = useSelector((state) => state.homeReducer.stocks);
  const filtered = useSelector((state) => state.homeReducer.filtered);

  const dispatch = useDispatch();

  const clickEvent = (e) => {
    const ide = e.target.id;
    dispatch(detailsStock(ide));
  };

  const searchStock = (e) => {
    const saveStocks = state.slice(0, 13);
    const newArr = [state[0]];
    state.slice(1, 13).forEach((stk) => {
      if ((stk.symbol).includes(e.target.value.toUpperCase())) {
        newArr.push(stk);
      }
    });
    dispatch(searchStkAction(newArr, saveStocks));
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

  const displayFiltered = filtered.slice(1, 13).map((stock) => (
    <NavLink className="stock-item-container" to={`/${stock.symbol}`} id={stock.symbol} key={stock.symbol} onClick={clickEvent}>
      {stock.symbol}
      :
      $
      {stock.price}
      <p>{stock.name}</p>
    </NavLink>
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
        <input placeholder="Search" onChange={searchStock} />
      </div>
      {
        filtered.length === 0
          ? <div className="stk-list">{displayStocks}</div>
          : <div className="stk-list">{displayFiltered}</div>
      }
    </div>
  );
};

export default Home;
