import * as React from 'react';
import AppContainer from 'Global/styled/AppContainer';
import { useSelector } from 'react-redux';
import { RootState } from 'Root/store/types';
import MovieFilters from 'Components/MovieFilters';
import { showMovies } from './helper';
import { IMovieListProps } from './types';
import { MoviesFound, MoviesGrid } from './styles';

const MovieList: React.FunctionComponent<IMovieListProps> = () => {
  const { list, numberOfMoviesFound } = useSelector(
    (state: RootState) => state.movieList
  );

  const movieListItems = React.useMemo(() => showMovies(list), [list]);

  return (
    <AppContainer>
      <MovieFilters />
      <MoviesFound>{numberOfMoviesFound} Movies Found</MoviesFound>
      <MoviesGrid cols={3}>{movieListItems}</MoviesGrid>
    </AppContainer>
  );
};

export default MovieList;
