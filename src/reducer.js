import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from './actions';

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === DECREASE) {
    console.log('you decreased amount');
  }
  if (action.type === INCREASE) {
    console.log('you increased amount');
  }
  if (action.type === REMOVE) {
    console.log('you removed amount');
  }
  return state;
};

export default reducer;

// switch (action.type) {
//   case CLEAR_CART:
//     return { ...state, cart: [] };
//   default:
//     return state;
// }
