import { createContext } from 'react';
import { IUseSelectedMovieReturn } from '@/hooks/useSelectedMovie/types';
import {
  IUseCurrentModalContext,
  IUseModalFunctionsContext,
} from '@/hooks/useModal/types';

export const SelectedMovieContext = createContext<IUseSelectedMovieReturn>({
  currentMovie: null,
  setSelectedMovie: () => {},
  removeSelectedMovie: () => {},
});

export const UseCurrentModalContext = createContext<IUseCurrentModalContext>({
  currentModal: null,
});

export const UseModalFunctionsContext =
  createContext<IUseModalFunctionsContext>({
    openAddModal: () => {},
    openEditModal: () => {},
    openDeleteModal: () => {},
    closeModal: () => {},
  });
