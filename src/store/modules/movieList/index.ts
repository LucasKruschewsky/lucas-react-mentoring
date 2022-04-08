import { axiosRequest } from '@/functions/axiosRequest';
import { GET } from '@/functions/axiosRequest/constants';
import { RootState } from '@/store/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ALL, DESC, NONE } from './constants';
import { requestUrlBuilder } from './helper';
import { IMovieListAction, TMovieList, TMovieListState } from './types';

export const getAllMovies = createAsyncThunk(
  'movieList/getAllMovies',
  async () => {
    const response = await axiosRequest('/movies', GET);

    return response.data.data;
  }
);

export const getFilteredMovies = createAsyncThunk<
  {
    list: TMovieList;
    numberOfMoviesFound: number;
  },
  void,
  { state: RootState }
>('movieList/getFilteredMovies', async (_, { getState }) => {
  const { sortBy, sortOrder, filterBy } = getState().movieList.activeFilters;

  const response = await axiosRequest(
    requestUrlBuilder(sortBy, sortOrder, filterBy),
    GET
  );

  return {
    list: response.data.data,
    numberOfMoviesFound: response.data.totalAmount,
  };
});

const movieListInitialState: TMovieListState = {
  list: [],
  numberOfMoviesFound: null,
  activeFilters: {
    sortBy: NONE,
    sortOrder: DESC,
    filterBy: ALL,
  },
  status: null,
};

const movieListSlice = createSlice({
  name: 'movieList',
  initialState: movieListInitialState,
  reducers: {
    changeActiveMovieFilters: (state, action: IMovieListAction) => ({
      ...state,
      activeFilters: { ...state.activeFilters, ...action.payload },
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
      .addCase(getFilteredMovies.fulfilled, (state, { payload }) => ({
        ...state,
        list: payload.list,
        numberOfMoviesFound: payload.numberOfMoviesFound,
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

// Action creators
export const { changeActiveMovieFilters } = movieListSlice.actions;

// Reducer
export const movieListReducer = movieListSlice.reducer;
