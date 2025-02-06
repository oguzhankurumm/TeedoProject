import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  category: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.totalQuantity += action.payload.quantity;
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; change: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.change;
        if (item.quantity <= 0) {
          state.items = state.items.filter(i => i.id !== action.payload.id);
        } else {
          state.totalQuantity += action.payload.change;
          state.totalPrice += item.price * action.payload.change;
        }
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload);
      if (itemIndex !== -1) {
        state.totalQuantity -= state.items[itemIndex].quantity;
        state.totalPrice -= state.items[itemIndex].price * state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    clearCart: state => {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
