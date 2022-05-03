import * as React from 'react';
import AppContainer from 'Global/styled/AppContainer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'Root/store/types';
import MovieFilters from 'Components/MovieFilters';
import { useParams } from 'react-router-dom';
import useCustomSearchParams from 'Root/hooks/useCustomSearchParams';
import { getMoviesFromSearch } from 'Root/store/modules/movieList';
import { showMovies } from './helper';
import { IMovieListProps } from './types';
import { MoviesFound, MoviesGrid } from './styles';

const MovieList: React.FunctionComponent<IMovieListProps> = () => {
  const dispatch = useDispatch();
  const { searchQuery } = useParams();
  const [searchParams] = useCustomSearchParams();

  React.useEffect(() => {
    dispatch(
      getMoviesFromSearch({
        searchQuery,
        genre: searchParams.getAll('genre'),
        sortBy: searchParams.get('sortBy'),
        sortOrder: searchParams.get('sortOrder'),
      })
    );
  }, [dispatch, searchQuery, searchParams]);

  const { list, numberOfMoviesFound } = useSelector(
    (state: RootState) => state.movieList
  );

  const movieListItems = React.useMemo(() => showMovies(list), [list]);

  return (
    <AppContainer>
      <MovieFilters />
      <MoviesFound>{numberOfMoviesFound} Movies Found</MoviesFound>
      <MoviesGrid data-testid="MovieListGrid" cols={3}>
        {movieListItems}
      </MoviesGrid>
    </AppContainer>
  );
};

export default MovieList;
