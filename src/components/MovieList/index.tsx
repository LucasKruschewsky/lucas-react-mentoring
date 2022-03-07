import * as React from 'react';
import { useState } from 'react';
import AppContainer from 'Global/styled/AppContainer';
import { moviesList } from '@/data/MockData';
import { Select } from 'Global/styled/InputAndLabel';
import {
  numberOfMoviesFound,
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
  const [sortedMoviesList, setSortedMoviesList] = useState([...moviesList]);

  const genreFilters = React.useMemo(
    () => showGenreFilters(setActiveFilter, activeFilter),
    [activeFilter]
  );

  const buildSortOptions = React.useMemo(() => sortOptions(), []);

  const moviesListSorted = React.useMemo(
    () => showMovies(sortedMoviesList),
    [sortedMoviesList]
  );

  const removeFilters = React.useCallback(() => {
    setActiveSort('none');
    setSortedMoviesList(moviesList);
  }, []);

  const sortMoviesCallback = React.useCallback(
    (e) => {
      setActiveSort(e.target.value);
      if (e.target.value === 'remove-filters') {
        removeFilters();
        return;
      }
      sortMovies(e.target.value, { sortedMoviesList, setSortedMoviesList });
    },
    [sortedMoviesList, removeFilters]
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
      <MoviesFound>{numberOfMoviesFound} Movies Found</MoviesFound>
      <MoviesGrid cols={3}>{moviesListSorted}</MoviesGrid>
    </AppContainer>
  );
};

export default MovieList;
