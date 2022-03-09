import { IUseModalAction, TUseModalState } from './types';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const useModalReducer = (
  state: TUseModalState,
  action: IUseModalAction
): TUseModalState => {
  switch (action.type) {
    case OPEN_MODAL:
      return action.payload;
    case CLOSE_MODAL:
      return null;
    default:
      throw new Error('Wrong action type');
  }
};
