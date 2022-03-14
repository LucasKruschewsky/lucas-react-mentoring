import { IModalAction } from './types';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (
  modalType: IModalAction['payload']
): IModalAction => ({
  type: OPEN_MODAL,
  payload: modalType,
});

export const closeModal = (): IModalAction => ({
  type: CLOSE_MODAL,
});
