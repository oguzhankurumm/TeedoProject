// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TodoType } from '_types/todo';

// Define a service using a base URL and expected endpoints
export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL }),
  endpoints: builder => ({
    getTodos: builder.query<TodoType[], void>({
      query: () => '/todos',
    }),
    addTodo: builder.mutation<void, TodoType>({
      query: newTodo => ({
        url: '/todo/add',
        method: 'POST',
        body: newTodo,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddTodoMutation } = todoApi;
