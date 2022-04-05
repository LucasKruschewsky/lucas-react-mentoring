import { createSlice } from '@reduxjs/toolkit';
import { ISelectedMovieAction, TSelectedMovieState } from './types';

const selectedMovieInitialState = null as TSelectedMovieState;

export const selectedMovieSlice = createSlice({
  name: 'selectedMovie',
  initialState: selectedMovieInitialState,
  reducers: {
    selectMovie: (state, action: ISelectedMovieAction) => ({
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
