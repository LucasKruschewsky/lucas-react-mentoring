import { IMoviesListData } from '@/data/MockedDataTypes';
import * as React from 'react';
import { createContext, useCallback, useReducer } from 'react';
import {
  REMOVE_SELECTED_MOVIE,
  selectedMovieReducer,
  SELECT_MOVIE,
} from './reducer';
import { IUseSelectedMovieReturn } from './types';

const SelectedMovieContext = createContext<IUseSelectedMovieReturn>({
  currentMovie: null,
  setSelectedMovie: () => {},
  removeSelectedMovie: () => {},
});

const useSelectedMovieManager = (
  defaultSelectedMovie: IMoviesListData
): IUseSelectedMovieReturn => {
  const [currentMovie, dispatch] = useReducer(
    selectedMovieReducer,
    defaultSelectedMovie
  );

  const setSelectedMovie = useCallback((movie: IMoviesListData) => {
    dispatch({
      type: SELECT_MOVIE,
      payload: movie,
    });
  }, []);

  const removeSelectedMovie = useCallback(() => {
    dispatch({
      type: REMOVE_SELECTED_MOVIE,
    });
  }, []);

  return { currentMovie, setSelectedMovie, removeSelectedMovie };
};

export const SelectedMovieProvider: React.FunctionComponent = ({
  children,
}) => (
  <SelectedMovieContext.Provider value={useSelectedMovieManager(null)}>
    {children}
  </SelectedMovieContext.Provider>
);

export const useCurrentMovie = (): IMoviesListData => {
  const { currentMovie } = React.useContext(SelectedMovieContext);
  return currentMovie;
};

export const useRemoveSelectedMovie =
  (): IUseSelectedMovieReturn['removeSelectedMovie'] => {
    const { removeSelectedMovie } = React.useContext(SelectedMovieContext);
    return removeSelectedMovie;
  };

export const useSelectMovie =
  (): IUseSelectedMovieReturn['setSelectedMovie'] => {
    const { setSelectedMovie } = React.useContext(SelectedMovieContext);
    return setSelectedMovie;
  };
