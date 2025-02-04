import { RootState } from '_redux/store';

export const selectProducts = (state: RootState) => state.product.products;
export const selectSelectedProduct = (state: RootState) => state.product.selectedProduct;
