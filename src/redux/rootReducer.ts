import { combineReducers } from '@reduxjs/toolkit';

import cartReducer from './features/cart/cartSlice';
import productReducer from './features/product/productSlice';

const rootReducer = combineReducers({
  // Gerekli reducer'lar buraya eklenecek.
  // Eklenecek olanlar: auth, cart
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
