import * as React from 'react';
import { useState } from 'react';
import AppContainer from 'Global/styled/AppContainer';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';
import { Select } from 'Global/styled/InputAndLabel';
import {
  showGenreFilters,
  showMovies,
  sortMovies,
  sortOptions,
} from './helper';
import { IMovieListProps } from './types';
import {
  FiltersSection,
  GenreFilters,
  MoviesFound,
  MoviesGrid,
  SortSection,
} from './styles';

const MovieList: React.FunctionComponent<IMovieListProps> = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeSort, setActiveSort] = useState('none');
  const [sortedMoviesList, setSortedMoviesList] = useState([]);
  const moviesListApi = useSelector((state: RootState) => state.movieList.list);

  const genreFilters = React.useMemo(
    () => showGenreFilters(setActiveFilter, activeFilter),
    [activeFilter]
  );

  const buildSortOptions = React.useMemo(() => sortOptions(), []);

  const movieListItems = React.useMemo(
    () =>
      sortedMoviesList.length
        ? showMovies(sortedMoviesList)
        : showMovies(moviesListApi),
    [moviesListApi, sortedMoviesList]
  );

  const removeFilters = React.useCallback(() => {
    setActiveSort('none');
    setSortedMoviesList([]);
  }, []);

  const sortMoviesCallback = React.useCallback(
    (e) => {
      setActiveSort(e.target.value);
      if (e.target.value === 'remove-filters') {
        removeFilters();
        return;
      }
      sortMovies(e.target.value, { moviesListApi, setSortedMoviesList });
    },
    [moviesListApi, removeFilters]
  );

  return (
    <AppContainer>
      <FiltersSection>
        <GenreFilters>{genreFilters}</GenreFilters>
        <SortSection>
          <p>Sort by</p>
          <Select
            id="sort-movie-list-select"
            onChange={sortMoviesCallback}
            value={activeSort}
          >
            <option hidden value="none" disabled>
              Select an option
            </option>
            {buildSortOptions}
          </Select>
        </SortSection>
      </FiltersSection>
      <MoviesFound>{moviesListApi?.length} Movies Found</MoviesFound>
      <MoviesGrid cols={3}>{movieListItems}</MoviesGrid>
    </AppContainer>
  );
};

export default MovieList;
