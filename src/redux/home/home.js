import {
  GET_STOCKS, GET_STOCKS_SUCCESS, GET_STOCKS_ERR,
} from '../slices/stocksSlices';

// Initial state

const initialState = {
  stocks: [],
};

// Actions

const TOGGLE_STOCK = 'stocks/stocks/TOGGLE_STOCK';

// Action Creators

export const toggleStocks = (payload) => ({
  type: TOGGLE_STOCK,
  payload,
});

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_STOCK:
      return { ...state, details: action.payload };
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
            website: stocks.website,
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
