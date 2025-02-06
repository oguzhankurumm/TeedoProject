// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ProductType } from '_types/product';

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: builder => ({
    getProducts: builder.query<ProductType[], { limit: number }>({
      query: ({ limit }) => `/products?limit=${limit}`,
    }),
    getSingleProductById: builder.query<ProductType, number>({
      query: id => `/products/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery, useGetSingleProductByIdQuery } = productsApi;
