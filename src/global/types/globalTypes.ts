import { Dispatch, SetStateAction } from 'react';

export type ISetStateBoolean = Dispatch<SetStateAction<boolean>>;

declare global {
  interface Window {
    __PRELOADED_STATE__: any;
  }
}
