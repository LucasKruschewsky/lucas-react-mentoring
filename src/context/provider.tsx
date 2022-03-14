import * as React from 'react';
import { useSelectedMovieManager } from '@/hooks/useSelectedMovie';
import { useModal } from '@/hooks/useModal';
import {
  SelectedMovieContext,
  UseCurrentModalContext,
  UseModalFunctionsContext,
} from './contexts';

export const AppContextProvider: React.FunctionComponent = ({ children }) => {
  const {
    currentModal,
    openAddModal,
    openDeleteModal,
    openEditModal,
    closeModal,
  } = useModal();

  const { currentMovie, removeSelectedMovie, setSelectedMovie } =
    useSelectedMovieManager();

  const useCurrentModal = React.useMemo(
    () => ({
      currentModal,
    }),
    [currentModal]
  );

  const useModalFunction = React.useMemo(
    () => ({
      openAddModal,
      openDeleteModal,
      openEditModal,
      closeModal,
    }),
    [openAddModal, openDeleteModal, openEditModal, closeModal]
  );

  const useSelectedMovie = React.useMemo(
    () => ({
      currentMovie,
      removeSelectedMovie,
      setSelectedMovie,
    }),
    [currentMovie, removeSelectedMovie, setSelectedMovie]
  );

  return (
    <UseModalFunctionsContext.Provider value={useModalFunction}>
      <SelectedMovieContext.Provider value={useSelectedMovie}>
        <UseCurrentModalContext.Provider value={useCurrentModal}>
          {children}
        </UseCurrentModalContext.Provider>
      </SelectedMovieContext.Provider>
    </UseModalFunctionsContext.Provider>
  );
};
