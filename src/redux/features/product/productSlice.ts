import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProductType } from '_types/product';

interface ProductState {
  products: ProductType[];
  selectedProductId: number | null;
}

// STATE
const initialState: ProductState = {
  products: [],
  selectedProductId: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // Gerekli fonksiyonlarımızı buraya ekleyeceğiz.
    setProducts(state, action: PayloadAction<ProductType[]>) {
      state.products = action.payload;
    },
    selectProduct(state, action: PayloadAction<number>) {
      state.selectedProductId = action.payload;
    },
  },
});

export const { setProducts, selectProduct } = productSlice.actions;
export default productSlice.reducer;
