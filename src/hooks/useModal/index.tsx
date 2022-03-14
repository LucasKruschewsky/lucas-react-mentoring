import * as React from 'react';
import {
  UseCurrentModalContext,
  UseModalFunctionsContext,
} from '@/context/contexts';
import { CLOSE_MODAL, OPEN_MODAL, useModalReducer } from './reducer';
import { IUseCurrentModalContext, IUseModalReturn } from './types';

export const useModal = (): IUseModalReturn => {
  const [currentModal, dispatch] = React.useReducer(useModalReducer, null);

  const openAddModal = React.useCallback((): void => {
    dispatch({
      type: OPEN_MODAL,
      payload: 'add',
    });
  }, []);

  const openEditModal = React.useCallback((): void => {
    dispatch({
      type: OPEN_MODAL,
      payload: 'edit',
    });
  }, []);

  const openDeleteModal = React.useCallback((): void => {
    dispatch({
      type: OPEN_MODAL,
      payload: 'delete',
    });
  }, []);

  const closeModal = React.useCallback((): void => {
    dispatch({
      type: CLOSE_MODAL,
    });
  }, []);

  return {
    currentModal,
    openAddModal,
    openEditModal,
    openDeleteModal,
    closeModal,
  };
};

export const useCurrentModal = (): IUseCurrentModalContext['currentModal'] => {
  const { currentModal } = React.useContext(UseCurrentModalContext);

  return currentModal;
};

export const useAddModal = (): IUseModalReturn['openAddModal'] => {
  const { openAddModal } = React.useContext(UseModalFunctionsContext);

  return openAddModal;
};

export const useEditModal = (): IUseModalReturn['openEditModal'] => {
  const { openEditModal } = React.useContext(UseModalFunctionsContext);

  return openEditModal;
};

export const useDeleteModal = (): IUseModalReturn['openDeleteModal'] => {
  const { openDeleteModal } = React.useContext(UseModalFunctionsContext);

  return openDeleteModal;
};

export const useCloseModal = (): IUseModalReturn['openDeleteModal'] => {
  const { closeModal } = React.useContext(UseModalFunctionsContext);

  return closeModal;
};
