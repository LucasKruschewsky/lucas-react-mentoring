import * as React from 'react';
import { useSelectedMovieManager } from '@/hooks/useSelectedMovie';
import { SelectedMovieContext } from './contexts';

export const AppContextProvider: React.FunctionComponent = ({ children }) => (
  <SelectedMovieContext.Provider value={useSelectedMovieManager(null)}>
    {children}
  </SelectedMovieContext.Provider>
);
