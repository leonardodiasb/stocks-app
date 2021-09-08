import axios from 'axios';

const GET_DETAILS = 'stocks/STOCKSslice/GET_DETAILS';
const DETAILS_STOCK = 'stocks/Stocksslice/DETAILS_STOCK';
const GET_DETAILS_ERR = 'stocks/STOCKSslice/GET_DETAILS_ERR';

const apiKey = '?apikey=012d82d97b95faa27f5feaa689e5f843';
const DetailsURL = 'https://financialmodelingprep.com/api/v3/quote/';

// eslint-disable-next-line
const detailsStock = (symbol) => async (dispatch, getState) => {
  dispatch({ type: GET_DETAILS });
  // const response = await fetch(DetailsURL + symbol + apiKey);
  const response = await axios.get(DetailsURL + symbol + apiKey);

  // const details = await response.json();
  const details = response.data;
  return dispatch({ type: DETAILS_STOCK, details });
};

export {
  detailsStock as default,
  GET_DETAILS,
  DETAILS_STOCK,
  GET_DETAILS_ERR,
};
