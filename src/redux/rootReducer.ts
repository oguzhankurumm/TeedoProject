import { combineReducers } from '@reduxjs/toolkit';

import authReducer from '_redux/features/auth/authSlice';
import cartReducer from '_redux/features/cart/cartSlice';
import productReducer from '_redux/features/product/productSlice';

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  auth: authReducer,
});

export default rootReducer;
