import { IMoviesListData } from '@/data/MockedDataTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL }),
  tagTypes: ['Movies'],
  endpoints: (builder) => ({
    getAllMovies: builder.query<IMoviesListData[], void>({
      query: () => '/movies',
      providesTags: [{ type: 'Movies', id: 'LIST' }],
    }),
  }),
});

export const { useGetAllMoviesQuery } = moviesApi;
