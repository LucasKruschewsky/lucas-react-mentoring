import { createSlice } from '@reduxjs/toolkit';
import { ICurrentModalAction, TCurrentModalState } from './types';

const initialModalState: TCurrentModalState = {
  modalType: null,
  movieId: null,
};

export const modalSlice = createSlice({
  name: 'currentModal',
  initialState: initialModalState,
  reducers: {
    openModal: (state: TCurrentModalState, action: ICurrentModalAction) => ({
      ...state,
      modalType: action.payload.modalType,
      movieId: action.payload.movieId,
    }),
    closeModal: (state: TCurrentModalState) => ({
      ...state,
      modalType: null,
      movieId: null,
    }),
  },
});

// Action creators
export const { closeModal, openModal } = modalSlice.actions;

// Reducer
export const modalReducer = modalSlice.reducer;
