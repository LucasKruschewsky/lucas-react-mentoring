import { useAxiosRequest } from '@/hooks/useAxiosRequest';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestUrlBuilder } from './helper';
import { TGetFilteredMoviesParams, TMovieListState } from './types';

export const getAllMovies = createAsyncThunk(
  'movieList/getAllMovies',
  async () => {
    const response = await useAxiosRequest('/movies', 'get');

    return response.data.data;
  }
);

export const getFilteredMovies = createAsyncThunk(
  'movieList/getFilteredMovies',
  async ({ sortBy, sortOrder, filterBy }: TGetFilteredMoviesParams) => {
    const response = await useAxiosRequest(
      requestUrlBuilder(sortBy, sortOrder, filterBy),
      'get'
    );

    return response.data.data;
  }
);

const movieListInitialState: TMovieListState = {
  list: [],
  status: null,
};

const movieListSlice = createSlice({
  name: 'movieList',
  initialState: movieListInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMovies.fulfilled, (state, { payload }) => ({
        ...state,
        list: payload,
        status: 'success',
      }))
      .addCase(getAllMovies.pending, (state) => ({
        ...state,
        status: 'pending',
      }))
      .addCase(getAllMovies.rejected, (state) => ({
        ...state,
        status: 'failed',
      }))
      .addCase(getFilteredMovies.fulfilled, (state, { payload }) => ({
        ...state,
        list: payload,
        status: 'success',
      }))
      .addCase(getFilteredMovies.pending, (state) => ({
        ...state,
        status: 'pending',
      }))
      .addCase(getFilteredMovies.rejected, (state) => ({
        ...state,
        status: 'failed',
      }));
  },
});

// Reducer
export const movieListReducer = movieListSlice.reducer;
