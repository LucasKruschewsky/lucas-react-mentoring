import * as React from 'react';
import { getMoviesFromSearch } from '@/store/modules/movieList';
import { ASC, DESC, NONE } from '@/store/modules/movieList/constants';
import { SelectWrapper } from 'Global/styled/InputAndLabel';
import { BsSortDown, BsSortUp } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import {
  genreFilterList,
  sortOptions,
  retrieveSearchParam,
  matchGenreFromSearchParams,
} from './helper';
import { FiltersSection, GenreFilters, SortSection } from './styles';

const MovieFilters = (): React.ReactElement => {
  const { searchQuery } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const sortMovies = React.useCallback(
    (event): void => {
      if (event.target.value === 'remove-filters') {
        setSearchParams({ ...retrieveSearchParam(searchParams, 'genre') });
        return;
      }

      setSearchParams({
        sortBy: event.target.value,
        ...retrieveSearchParam(searchParams, 'sortOrder'),
        ...retrieveSearchParam(searchParams, 'genre'),
      });
    },
    [setSearchParams, searchParams]
  );

  const toggleSortOrder = React.useCallback(() => {
    if (searchParams.get('sortOrder') === ASC) {
      setSearchParams({
        sortOrder: DESC,
        ...retrieveSearchParam(searchParams, 'sortBy'),
        ...retrieveSearchParam(searchParams, 'genre'),
      });
      return;
    }

    // If sortOrder === DESC
    setSearchParams({
      sortOrder: ASC,
      ...retrieveSearchParam(searchParams, 'sortBy'),
      ...retrieveSearchParam(searchParams, 'genre'),
    });
  }, [setSearchParams, searchParams]);

  const filterMovies = React.useCallback(
    (event) => {
      setSearchParams({
        genre: [event.target.value],
        ...retrieveSearchParam(searchParams, 'sortBy'),
        ...retrieveSearchParam(searchParams, 'sortOrder'),
      });
    },
    [searchParams, setSearchParams]
  );

  const buildSortOptions = React.useMemo(() => sortOptions(), []);

  const genreFilters = React.useMemo(
    () =>
      genreFilterList.map((item) => (
        <button
          type="button"
          onClick={filterMovies}
          key={item}
          value={item}
          className={
            matchGenreFromSearchParams(searchParams, item) ? 'is-selected' : ''
          }
        >
          {item}
        </button>
      )),
    [filterMovies, searchParams]
  );

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

  return (
    <FiltersSection>
      <GenreFilters>{genreFilters}</GenreFilters>
      <SortSection>
        <p>Sort by</p>
        <SelectWrapper>
          <select
            id="sort-movie-list-select"
            onChange={sortMovies}
            value={searchParams.get('sortBy') ?? NONE}
          >
            <option hidden value={NONE} disabled>
              Select an option
            </option>
            {buildSortOptions}
          </select>
        </SelectWrapper>
        {searchParams.get('sortOrder') === ASC ? (
          <BsSortUp onClick={toggleSortOrder} id="asc-desc-sort-icon" />
        ) : (
          <BsSortDown onClick={toggleSortOrder} id="asc-desc-sort-icon" />
        )}
      </SortSection>
    </FiltersSection>
  );
};

export default MovieFilters;
