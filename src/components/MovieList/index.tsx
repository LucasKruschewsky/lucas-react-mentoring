import * as React from 'react';
import AppContainer from 'Global/styled/AppContainer';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import MovieFilters from 'Components/MovieFilters';
import { showMovies } from './helper';
import { IMovieListProps } from './types';
import { MoviesFound, MoviesGrid } from './styles';

const MovieList: React.FunctionComponent<IMovieListProps> = () => {
  const moviesListApi = useSelector((state: RootState) => state.movieList.list);

  const movieListItems = React.useMemo(
    () => showMovies(moviesListApi),
    [moviesListApi]
  );

  return (
    <AppContainer>
      <MovieFilters />
      <MoviesFound>{moviesListApi?.length} Movies Found</MoviesFound>
      <MoviesGrid cols={3}>{movieListItems}</MoviesGrid>
    </AppContainer>
  );
};

export default MovieList;
