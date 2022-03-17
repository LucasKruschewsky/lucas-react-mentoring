import * as React from 'react';
import { useState } from 'react';
import AppContainer from 'Global/styled/AppContainer';
import { useDispatch, useSelector } from 'react-redux';
import { BsSortDown, BsSortUp } from 'react-icons/bs';
import { RootState } from '@/store/types';
import { getAllMovies, getSortedMovies } from '@/store/modules/movieList';
import { Select } from 'Global/styled/InputAndLabel';
import { showGenreFilters, showMovies, sortOptions } from './helper';
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
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeSort, setActiveSort] = useState('none');
  const [sortOrder, setSortOrder] = useState('desc');
  const moviesListApi = useSelector((state: RootState) => state.movieList.list);

  const genreFilters = React.useMemo(
    () => showGenreFilters(setActiveFilter, activeFilter),
    [activeFilter]
  );

  const buildSortOptions = React.useMemo(() => sortOptions(), []);

  const movieListItems = React.useMemo(
    () => showMovies(moviesListApi),
    [moviesListApi]
  );

  const toggleSortOrder = React.useCallback(() => {
    if (sortOrder === 'asc') {
      dispatch(getSortedMovies({ sortBy: activeSort, sortOrder: 'desc' }));
      setSortOrder('desc');
      return;
    }

    // If sortOrder === 'desc'
    dispatch(getSortedMovies({ sortBy: activeSort, sortOrder: 'asc' }));
    setSortOrder('asc');
  }, [sortOrder, dispatch, activeSort]);

  const sortMovies = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>): void => {
      if (e.target.value === 'remove-filters') {
        setActiveSort('none');
        setSortOrder('desc');
        dispatch(getAllMovies());
        return;
      }

      setActiveSort(e.target.value);
      dispatch(getSortedMovies({ sortBy: e.target.value, sortOrder }));
    },
    [sortOrder, dispatch]
  );

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
