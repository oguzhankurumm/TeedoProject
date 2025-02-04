import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  rating: number;
}

interface ProductState {
  products: Product[];
  selectedProduct: Product | null;
}

// STATE
const initialState: ProductState = {
  products: [],
  selectedProduct: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // Gerekli fonksiyonlarımızı buraya ekleyeceğiz.
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    selectProduct(state, action: PayloadAction<Product>) {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setProducts, selectProduct } = productSlice.actions;
export default productSlice.reducer;
