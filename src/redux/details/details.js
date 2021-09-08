import { GET_DETAILS, DETAILS_STOCK, GET_DETAILS_ERR } from '../slices/detailsSlices';

// Initial state

const initialState = {
  details: [{
    symbol: 'test',
    name: 'loading',
  }],
};

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return { ...state, pending: true };
    case DETAILS_STOCK:
      return { ...state, pending: false, details: action.details };
    case GET_DETAILS_ERR:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
