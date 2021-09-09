import {
  GET_STOCKS, GET_STOCKS_SUCCESS, GET_STOCKS_ERR,
} from '../slices/stocksSlices';

// Initial state

const initialState = {
  stocks: [],
};

// Actions
// Action Creators
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
    default:
      return state;
  }
};

export default reducer;
