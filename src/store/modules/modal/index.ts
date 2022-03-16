import { createSlice } from '@reduxjs/toolkit';

type TCurrentModal = 'add' | 'edit' | 'delete' | null;

const initialModalState = null as TCurrentModal;

export const modalSlice = createSlice({
  name: 'currentModal',
  initialState: initialModalState,
  reducers: {
    openModal: (state, action: { payload: TCurrentModal }) => action.payload,
    closeModal: () => null,
  },
});

// Action creators
export const { closeModal, openModal } = modalSlice.actions;

// Reducer
export const modalReducer = modalSlice.reducer;
