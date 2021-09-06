const GET_STOCKS = 'books/STOCKSslice/GET_STOCKS';
const GET_STOCKS_SUCCESS = 'STOCKS/STOCKSslice/GET_STOCKS_SUCCESS';
const GET_STOCKS_ERR = 'STOCKS/STOCKSslice/GET_STOCKS_ERR';

// const apiKey = '012d82d97b95faa27f5feaa689e5f843';
const StocksURL = 'https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=012d82d97b95faa27f5feaa689e5f843';

const getStocks = () => async (dispatch) => {
  dispatch({ type: GET_STOCKS });
  const response = await fetch(StocksURL);
  const stocks = await response.json();
  return dispatch({ type: GET_STOCKS_SUCCESS, stocks });
};

export {
  getStocks as default,
  GET_STOCKS,
  GET_STOCKS_SUCCESS,
  GET_STOCKS_ERR,
};
