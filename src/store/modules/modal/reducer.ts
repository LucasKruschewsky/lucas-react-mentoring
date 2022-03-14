import { IModalAction, TModalState } from './types';
import { OPEN_MODAL, CLOSE_MODAL } from './actions';

const modalInitialState: TModalState = null;

export const modalReducer = (
  state = modalInitialState,
  action: IModalAction
): TModalState => {
  switch (action.type) {
    case OPEN_MODAL:
      return action.payload;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
};
