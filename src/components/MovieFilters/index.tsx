import {
  changeActiveMovieFilters,
  getFilteredMovies,
} from '@/store/modules/movieList';
import { ASC, DESC, NONE } from '@/store/modules/movieList/constants';
import { RootState } from '@/store/types';
import { SelectWrapper } from 'Global/styled/InputAndLabel';
import * as React from 'react';
import { BsSortDown, BsSortUp } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { genreFilterList, sortOptions } from './helper';
import { FiltersSection, GenreFilters, SortSection } from './styles';

const MovieFilters = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { activeFilters } = useSelector((state: RootState) => state.movieList);

  const filterMovies = React.useCallback(
    (event) => {
      dispatch(changeActiveMovieFilters({ filterBy: event.target.value }));
    },
    [dispatch]
  );

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

  const toggleSortOrder = React.useCallback(() => {
    if (activeFilters.sortOrder === ASC) {
      dispatch(changeActiveMovieFilters({ sortOrder: DESC }));
      return;
    }

    // If sortOrder === DESC
    dispatch(changeActiveMovieFilters({ sortOrder: ASC }));
  }, [dispatch, activeFilters.sortOrder]);

  const buildSortOptions = React.useMemo(() => sortOptions(), []);

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

  React.useEffect(() => {
    dispatch(getFilteredMovies());
  }, [dispatch, activeFilters]);

  return (
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
  );
};

export default MovieFilters;
