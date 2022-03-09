import * as React from 'react';
import { SelectedMovieContext } from '@/context/contexts';
import { IMoviesListData } from '@/data/MockedDataTypes';
import { useCallback, useReducer } from 'react';
import {
  REMOVE_SELECTED_MOVIE,
  selectedMovieReducer,
  SELECT_MOVIE,
} from './reducer';
import { IUseSelectedMovieReturn } from './types';

export const useSelectedMovieManager = (
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
