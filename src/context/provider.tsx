import * as React from 'react';
import { useSelectedMovieManager } from '@/hooks/useSelectedMovie';
import { useModal } from '@/hooks/useModal';
import { SelectedMovieContext, UseModalContext } from './contexts';

export const AppContextProvider: React.FunctionComponent = ({ children }) => (
  <UseModalContext.Provider value={useModal()}>
    <SelectedMovieContext.Provider value={useSelectedMovieManager(null)}>
      {children}
    </SelectedMovieContext.Provider>
  </UseModalContext.Provider>
);
