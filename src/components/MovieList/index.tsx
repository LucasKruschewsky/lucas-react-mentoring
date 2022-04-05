import * as React from 'react';
import { useState } from 'react';
import AppContainer from 'Global/styled/AppContainer';
import { useDispatch, useSelector } from 'react-redux';
import { BsSortDown, BsSortUp } from 'react-icons/bs';
import { RootState } from '@/store/types';
import { getFilteredMovies } from '@/store/modules/movieList';
import { Select } from 'Global/styled/InputAndLabel';
import {
  TMovieFilterBy,
  TMovieSortBy,
  TMovieSortOrder,
} from '@/store/modules/movieList/types';
import { showMovies, sortOptions, genreFilterList } from './helper';
import { IMovieListProps } from './types';
import {
  FiltersSection,
  GenreFilters,
  MoviesFound,
  MoviesGrid,
  SortSection,
} from './styles';

const MovieList: React.FunctionComponent<IMovieListProps> = () => {
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState<TMovieFilterBy>('All');
  const [activeSort, setActiveSort] = useState<TMovieSortBy>('none');
  const [sortOrder, setSortOrder] = useState<TMovieSortOrder>('desc');
  const moviesListApi = useSelector((state: RootState) => state.movieList.list);

  const toggleSortOrder = React.useCallback(() => {
    if (sortOrder === 'asc') {
      setSortOrder('desc');
      return;
    }

    // If sortOrder === 'desc'
    setSortOrder('asc');
  }, [sortOrder]);

  const sortMovies = React.useCallback((event): void => {
    if (event.target.value === 'remove-filters') {
      setActiveSort('none');
      setSortOrder('desc');
      return;
    }

    setActiveSort(event.target.value);
  }, []);

  const filterMovies = React.useCallback((event) => {
    setActiveFilter(event.target.value);
  }, []);

  const genreFilters = React.useMemo(
    () =>
      genreFilterList.map((item) => (
        <button
          type="button"
          onClick={filterMovies}
          key={item}
          value={item}
          className={activeFilter === item ? 'is-selected' : ''}
        >
          {item}
        </button>
      )),
    [activeFilter, filterMovies]
  );

  const movieListItems = React.useMemo(
    () => showMovies(moviesListApi),
    [moviesListApi]
  );

  const buildSortOptions = React.useMemo(() => sortOptions(), []);

  React.useEffect(() => {
    dispatch(
      getFilteredMovies({
        sortBy: activeSort,
        sortOrder,
        filterBy: activeFilter,
      })
    );
  }, [activeFilter, activeSort, sortOrder, dispatch]);

  return (
    <AppContainer>
      <FiltersSection>
        <GenreFilters>{genreFilters}</GenreFilters>
        <SortSection>
          <p>Sort by</p>
          <Select
            id="sort-movie-list-select"
            onChange={sortMovies}
            value={activeSort}
          >
            <option hidden value="none" disabled>
              Select an option
            </option>
            {buildSortOptions}
          </Select>
          {sortOrder === 'desc' ? (
            <BsSortDown onClick={toggleSortOrder} id="asc-desc-sort-icon" />
          ) : (
            <BsSortUp onClick={toggleSortOrder} id="asc-desc-sort-icon" />
          )}
        </SortSection>
      </FiltersSection>
      <MoviesFound>{moviesListApi?.length} Movies Found</MoviesFound>
      <MoviesGrid cols={3}>{movieListItems}</MoviesGrid>
    </AppContainer>
  );
};

export default MovieList;
