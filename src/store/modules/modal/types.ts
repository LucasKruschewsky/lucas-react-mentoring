export interface IModalAction {
  type: 'OPEN_MODAL' | 'CLOSE_MODAL';
  payload?: 'add' | 'edit' | 'delete';
}

export type TModalState = IModalAction['payload'];

export interface ICurrentModalContext {
  currentModal: IModalAction['payload'];
}

export interface IModalFunctionsContext {
  openAddModal: () => void;
  openEditModal: () => void;
  openDeleteModal: () => void;
  closeModal: () => void;
}

export interface IModalReturn
  extends IModalFunctionsContext,
    ICurrentModalContext {}
