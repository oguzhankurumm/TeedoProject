import { combineReducers } from '@reduxjs/toolkit';

import { productsApi } from '_services/productServicesdata';
import { todoApi } from '_services/todoServicesdata';

import cartReducer from './features/cart/cartSlice';
import productReducer from './features/product/productSlice';

const rootReducer = combineReducers({
  // Gerekli reducer'lar buraya eklenecek.
  // Eklenecek olanlar: auth, cart
  [productsApi.reducerPath]: productsApi.reducer,
  [todoApi.reducerPath]: todoApi.reducer,
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
