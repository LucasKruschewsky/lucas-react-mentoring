import { createContext } from 'react';
import { IUseSelectedMovieReturn } from '@/hooks/useSelectedMovie/types';

export const SelectedMovieContext = createContext<IUseSelectedMovieReturn>({
  currentMovie: null,
  setSelectedMovie: () => {},
  removeSelectedMovie: () => {},
});
