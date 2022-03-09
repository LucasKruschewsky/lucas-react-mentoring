import { createContext } from 'react';
import { IUseSelectedMovieReturn } from '@/hooks/useSelectedMovie/types';
import { IUseModalReturn } from '@/hooks/useModal/types';

export const SelectedMovieContext = createContext<IUseSelectedMovieReturn>({
  currentMovie: null,
  setSelectedMovie: () => {},
  removeSelectedMovie: () => {},
});

export const UseModalContext = createContext<IUseModalReturn>({
  currentModal: null,
  openAddModal: () => {},
  openEditModal: () => {},
  openDeleteModal: () => {},
  closeModal: () => {},
});
