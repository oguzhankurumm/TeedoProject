import { RootState } from '_redux/store';

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartTotalPrice = (state: RootState) => state.cart.totalPrice;
export const selectCartTotalQuantity = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
