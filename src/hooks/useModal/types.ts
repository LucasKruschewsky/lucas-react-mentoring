export interface IUseModalAction {
  type: 'OPEN_MODAL' | 'CLOSE_MODAL';
  payload?: 'add' | 'edit' | 'delete';
}

export type TUseModalState = IUseModalAction['payload'];

export interface IUseCurrentModalContext {
  currentModal: IUseModalAction['payload'];
}

export interface IUseModalFunctionsContext {
  openAddModal: () => void;
  openEditModal: () => void;
  openDeleteModal: () => void;
  closeModal: () => void;
}

export interface IUseModalReturn
  extends IUseModalFunctionsContext,
    IUseCurrentModalContext {}
