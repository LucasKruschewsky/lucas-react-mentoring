import { axiosRequest } from 'Root/functions/axiosRequest';
import { GET } from 'Root/functions/axiosRequest/constants';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { movieListInitialState } from './constants';
import { buildRequestUrlFromParams } from './helper';
import { TMovieList } from './types';

export const getAllMovies = createAsyncThunk(
  'movieList/getAllMovies',
  async () => {
    const response = await axiosRequest('/movies', GET);

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

    return {
      list: response.data.data,
      numberOfMoviesFound: response.data.totalAmount,
    };
  }
);

const movieListSlice = createSlice({
  name: 'movieList',
  initialState: movieListInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getMoviesFromSearch.fulfilled,
        (
          state,
          {
            payload,
          }: PayloadAction<{
            list: TMovieList;
            numberOfMoviesFound: any;
          }>
        ) => ({
          ...state,
          list: payload.list,
          numberOfMoviesFound: payload.numberOfMoviesFound,
          status: 'success',
        })
      )
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

// Reducer
export const movieListReducer = movieListSlice.reducer;
