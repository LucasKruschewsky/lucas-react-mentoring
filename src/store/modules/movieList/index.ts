import { axiosRequest } from '@/functions/axiosRequest';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { buildRequestUrlFromParams } from './helper';
import { IMovieListAction, TMovieListState } from './types';

export const getAllMovies = createAsyncThunk(
  'movieList/getAllMovies',
  async () => {
    const response = await axiosRequest('/movies', 'get');

    return response.data.data;
  }
);

export const getMoviesFromSearch = createAsyncThunk(
  'movieList/getMoviesFromSearch',
  async ({
    searchQuery,
    genre,
    sortBy,
    sortOrder,
  }: {
    searchQuery?: string | null;
    genre?: string[] | null;
    sortBy?: string | null;
    sortOrder?: string | null;
  }) => {
    const response = await axiosRequest(
      buildRequestUrlFromParams(searchQuery, genre, sortBy, sortOrder),
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
  reducers: {
    changeActiveMovieFilters: (state, action: IMovieListAction) => ({
      ...state,
      activeFilters: { ...action.payload },
    }),
  },
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
      .addCase(getMoviesFromSearch.fulfilled, (state, { payload }) => ({
        ...state,
        list: payload,
        status: 'success',
      }))
      .addCase(getMoviesFromSearch.pending, (state) => ({
        ...state,
        status: 'pending',
      }))
      .addCase(getMoviesFromSearch.rejected, (state) => ({
        ...state,
        status: 'failed',
      }));
  },
});

// Action creators
export const { changeActiveMovieFilters } = movieListSlice.actions;

// Reducer
export const movieListReducer = movieListSlice.reducer;
