export interface IUseModalAction {
  type: 'OPEN_MODAL' | 'CLOSE_MODAL';
  payload?: 'add' | 'edit' | 'delete';
}

export type TUseModalState = IUseModalAction['payload'];

export interface IUseModalReturn {
  currentModal: IUseModalAction['payload'];
  openAddModal: () => void;
  openEditModal: () => void;
  openDeleteModal: () => void;
  closeModal: () => void;
}
