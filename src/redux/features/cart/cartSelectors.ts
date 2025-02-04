import { RootState } from '_redux/store';

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export const selectCartTotalQuantity = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
