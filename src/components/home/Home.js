import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getStocks from '../../redux/slices/stocksSlices';

const Home = () => {
  const state = useSelector((state) => state.homeReducer.stocks);

  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(getStocks());
    console.log(state);
  }, []);

  const displayStocks = state.map((stock) => (
    <p key="0">
      {stock.symbol}
      :
      $
      {stock.price}
    </p>
  ));

  return (
    <div>
      <p>
        Test p tag
        {displayStocks}
      </p>
    </div>
  );
};

export default Home;
