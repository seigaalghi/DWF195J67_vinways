const { UPLOAD_PAYMENT, GET_PAYMENTS } = require('../types');

const initialState = {
  loading: true,
  transactions: null,
};

const paymentReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case UPLOAD_PAYMENT:
      return {
        ...state,
      };
    case GET_PAYMENTS:
      return {
        ...state,
        loading: false,
        ...payload,
      };
    default:
      return state;
  }
};

export default paymentReducer;
