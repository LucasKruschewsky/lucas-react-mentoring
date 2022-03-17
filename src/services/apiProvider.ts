import { TMovieList } from '@/store/modules/movieList/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL }),
  tagTypes: ['Movies'],
  endpoints: (builder) => ({
    getAllMovies: builder.query<{ data: TMovieList }, void>({
      query: () => '/movies',
      providesTags: [{ type: 'Movies', id: 'LIST' }],
    }),
  }),
});

export const { useGetAllMoviesQuery } = moviesApi;
