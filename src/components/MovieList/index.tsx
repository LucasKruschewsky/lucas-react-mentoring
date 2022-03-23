import * as React from 'react';
import AppContainer from 'Global/styled/AppContainer';
import { useDispatch, useSelector } from 'react-redux';
import { BsSortDown, BsSortUp } from 'react-icons/bs';
import { RootState } from '@/store/types';
import {
  changeActiveMovieFilters,
  getFilteredMovies,
} from '@/store/modules/movieList';
import { ASC, DESC, NONE } from '@/store/modules/movieList/constants';
import { SelectWrapper } from 'Global/styled/InputAndLabel';
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
  const { activeFilters, list: moviesListApi } = useSelector(
    (state: RootState) => state.movieList
  );

  const toggleSortOrder = React.useCallback(() => {
    if (activeFilters.sortOrder === ASC) {
      dispatch(changeActiveMovieFilters({ sortOrder: DESC }));
      return;
    }

    // If sortOrder === DESC
    dispatch(changeActiveMovieFilters({ sortOrder: ASC }));
  }, [dispatch, activeFilters.sortOrder]);

  const sortMovies = React.useCallback(
    (event): void => {
      if (event.target.value === 'remove-filters') {
        dispatch(changeActiveMovieFilters({ sortBy: NONE, sortOrder: DESC }));
        return;
      }

      dispatch(changeActiveMovieFilters({ sortBy: event.target.value }));
    },
    [dispatch]
  );

  const filterMovies = React.useCallback(
    (event) => {
      dispatch(changeActiveMovieFilters({ filterBy: event.target.value }));
    },
    [dispatch]
  );

  const genreFilters = React.useMemo(
    () =>
      genreFilterList.map((item) => (
        <button
          type="button"
          onClick={filterMovies}
          key={item}
          value={item}
          className={activeFilters.filterBy === item ? 'is-selected' : ''}
        >
          {item}
        </button>
      )),
    [activeFilters.filterBy, filterMovies]
  );

  const movieListItems = React.useMemo(
    () => showMovies(moviesListApi),
    [moviesListApi]
  );

  const buildSortOptions = React.useMemo(() => sortOptions(), []);

  React.useEffect(() => {
    dispatch(getFilteredMovies());
  }, [activeFilters, dispatch]);

  return (
    <AppContainer>
      <FiltersSection>
        <GenreFilters>{genreFilters}</GenreFilters>
        <SortSection>
          <p>Sort by</p>
          <SelectWrapper>
            <select
              id="sort-movie-list-select"
              onChange={sortMovies}
              value={activeFilters.sortBy}
            >
              <option hidden value={NONE} disabled>
                Select an option
              </option>
              {buildSortOptions}
            </select>
          </SelectWrapper>
          {activeFilters.sortOrder === DESC ? (
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
