import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProductType } from '_types/product';

interface ProductState {
  products: ProductType[];
  selectedProductId: number | null;
  loading: boolean;
}

// STATE
const initialState: ProductState = {
  products: [],
  selectedProductId: null,
  loading: false,
};

export const fetchProducts = createAsyncThunk<ProductType[], void>(
  'products',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${process.env.API_URL}/products`);

      if (!response.ok) {
        throw new Error('Ürünler alınırken bir hata oluştu');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

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
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, state => {
      state.loading = false;
    });
  },
});

export const { setProducts, selectProduct } = productSlice.actions;
export default productSlice.reducer;
