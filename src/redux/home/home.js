// import { useSelector } from 'react-redux';
import {
  GET_STOCKS, GET_STOCKS_SUCCESS, GET_STOCKS_ERR,
} from '../slices/stocksSlices';

// Initial state

const initialState = {
  stocks: [],
  filtered: [],
};

// Actions

export const FILTER_STOCKS = 'stocks/stocks/FILTER_STOCKS';
export const RESTORE_STOCKS = 'stocks/stocks/RESTORE_STOCKS';

export const restoreStocks = (payload) => ({
  type: RESTORE_STOCKS,
  payload,
});

export const searchStkAction = (newArr, saveStocks) => ({
  type: FILTER_STOCKS,
  payload: [saveStocks, newArr],
});

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STOCKS:
      return { ...state, pending: true };
    case GET_STOCKS_SUCCESS:
    {
      const data = action.stocks;
      const subset = [];
      data.forEach((stocks) => {
        subset.push(
          {
            symbol: stocks.symbol,
            price: stocks.price,
            name: stocks.name,
          },
        );
      });
      return { ...state, pending: false, stocks: subset };
    }
    case GET_STOCKS_ERR:
      return { ...state, pending: false, error: action.error };
    case FILTER_STOCKS:
      return {
        ...state,
        pending: false,
        stocks: action.payload[0],
        filtered: action.payload[1],
      };
    case RESTORE_STOCKS:
      return { ...state, pending: false, filtered: action.payload };
    default:
      return state;
  }
};

export default reducer;
