import * as React from 'react';
import { UseModalContext } from '@/context/contexts';
import { CLOSE_MODAL, OPEN_MODAL, useModalReducer } from './reducer';
import { IUseModalReturn } from './types';

export const useModal = (): IUseModalReturn => {
  const [currentModal, dispatch] = React.useReducer(useModalReducer, null);

  const openAddModal = (): void => {
    dispatch({
      type: OPEN_MODAL,
      payload: 'add',
    });
  };

  const openEditModal = (): void => {
    dispatch({
      type: OPEN_MODAL,
      payload: 'edit',
    });
  };

  const openDeleteModal = (): void => {
    dispatch({
      type: OPEN_MODAL,
      payload: 'delete',
    });
  };

  const closeModal = (): void => {
    dispatch({
      type: CLOSE_MODAL,
    });
  };

  return {
    currentModal,
    openAddModal,
    openEditModal,
    openDeleteModal,
    closeModal,
  };
};

export const useCurrentModal = (): IUseModalReturn['currentModal'] => {
  const { currentModal } = React.useContext(UseModalContext);

  return currentModal;
};

export const useAddModal = (): IUseModalReturn['openAddModal'] => {
  const { openAddModal } = React.useContext(UseModalContext);

  return openAddModal;
};

export const useEditModal = (): IUseModalReturn['openEditModal'] => {
  const { openEditModal } = React.useContext(UseModalContext);

  return openEditModal;
};

export const useDeleteModal = (): IUseModalReturn['openDeleteModal'] => {
  const { openDeleteModal } = React.useContext(UseModalContext);

  return openDeleteModal;
};

export const useCloseModal = (): IUseModalReturn['openDeleteModal'] => {
  const { closeModal } = React.useContext(UseModalContext);

  return closeModal;
};
