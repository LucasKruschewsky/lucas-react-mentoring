import { IModalAction, TModalState } from '@/store/modules/modal/types';

export interface IModalHandlerStoreProps {
  currentModal?: TModalState;
  closeCurrentModal?: () => IModalAction;
}
