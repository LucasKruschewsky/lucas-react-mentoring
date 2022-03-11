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

  return (
    <UseCurrentModalContext.Provider value={useCurrentModal}>
      <UseModalFunctionsContext.Provider value={useModalFunction}>
        <SelectedMovieContext.Provider value={useSelectedMovieManager(null)}>
          {children}
        </SelectedMovieContext.Provider>
      </UseModalFunctionsContext.Provider>
    </UseCurrentModalContext.Provider>
  );
};
