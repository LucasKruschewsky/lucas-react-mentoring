import { IMoviesListData } from '@/data/MockedDataTypes';
import { createSlice } from '@reduxjs/toolkit';

type TSelectedMovie = IMoviesListData | null;

const selectedMovieInitialState = null as TSelectedMovie;

export const selectedMovieSlice = createSlice({
  name: 'selectedMovie',
  initialState: selectedMovieInitialState,
  reducers: {
    selectMovie: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    removeSelectedMovie: () => null,
  },
});

// Action creators
export const { removeSelectedMovie, selectMovie } = selectedMovieSlice.actions;

// Reducer
export const selectedMovieReducer = selectedMovieSlice.reducer;
