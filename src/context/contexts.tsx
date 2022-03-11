import { createContext } from 'react';
import { IUseModalReturn } from '@/hooks/useModal/types';

export const UseModalContext = createContext<IUseModalReturn>({
  currentModal: null,
  openAddModal: () => {},
  openEditModal: () => {},
  openDeleteModal: () => {},
  closeModal: () => {},
});
