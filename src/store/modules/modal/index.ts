import { createSlice } from '@reduxjs/toolkit';
import { ICurrentModalAction, TCurrentModalState } from './types';

const initialModalState = null as TCurrentModalState;

export const modalSlice = createSlice({
  name: 'currentModal',
  initialState: initialModalState,
  reducers: {
    openModal: (state, action: ICurrentModalAction) => action.payload,
    closeModal: () => null,
  },
});

// Action creators
export const { closeModal, openModal } = modalSlice.actions;

// Reducer
export const modalReducer = modalSlice.reducer;
