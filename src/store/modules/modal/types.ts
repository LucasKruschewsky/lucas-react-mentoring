export interface IModalAction {
  type: 'OPEN_MODAL' | 'CLOSE_MODAL';
  payload?: 'add' | 'edit' | 'delete';
}

export type TModalState = IModalAction['payload'];

export interface IModalReturn {
  currentModal: IModalAction['payload'];
  openAddModal: () => void;
  openEditModal: () => void;
  openDeleteModal: () => void;
  closeModal: () => void;
}
