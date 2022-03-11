import * as React from 'react';
import { useModal } from '@/hooks/useModal';

// Temporarily here
import { Provider } from 'react-redux';
import store from '@/store';

import { UseModalContext } from './contexts';

export const AppContextProvider: React.FunctionComponent = ({ children }) => (
  <Provider store={store}>
    <UseModalContext.Provider value={useModal()}>
      {children}
    </UseModalContext.Provider>
  </Provider>
);
