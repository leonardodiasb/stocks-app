const GET_STOCKS = 'stocks/STOCKSslice/GET_STOCKS';
const GET_STOCKS_SUCCESS = 'stocks/STOCKSslice/GET_STOCKS_SUCCESS';
const GET_STOCKS_ERR = 'stocks/STOCKSslice/GET_STOCKS_ERR';

const apiKey = '?apikey=012d82d97b95faa27f5feaa689e5f843';
const StocksURL = `https://financialmodelingprep.com/api/v3/stock/list${apiKey}`;

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
