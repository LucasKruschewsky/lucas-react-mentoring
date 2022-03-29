import { getMoviesFromSearch } from '@/store/modules/movieList';
import { ALL, ASC, DESC, NONE } from '@/store/modules/movieList/constants';
import { SelectWrapper } from 'Global/styled/InputAndLabel';
import * as React from 'react';
import { BsSortDown, BsSortUp } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { genreFilterList, sortOptions } from './helper';
import { FiltersSection, GenreFilters, SortSection } from './styles';

const MovieFilters = (): React.ReactElement => {
  const { searchQuery } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const sortMovies = React.useCallback(
    (event): void => {
      if (event.target.value === 'remove-filters') {
        setSearchParams({ sortBy: NONE, sortOrder: DESC });
        return;
      }

      setSearchParams({ sortBy: event.target.value });
    },
    [setSearchParams]
  );

  const toggleSortOrder = React.useCallback(() => {
    if (searchParams.get('sortOrder') === ASC) {
      setSearchParams({ sortOrder: DESC });
      return;
    }

    // If sortOrder === DESC
    setSearchParams({ sortOrder: ASC });
  }, [setSearchParams, searchParams]);

  const checkUrlGenre = React.useCallback(
    (value: string): boolean =>
      searchParams.get('genre')?.toLowerCase().includes(value.toLowerCase()) ||
      (searchParams.get('genre') === null && value === ALL),
    [searchParams]
  );

  const buildSortOptions = React.useMemo(() => sortOptions(), []);

  const genreFilters = React.useMemo(
    () =>
      genreFilterList.map((item) => (
        <button
          type="button"
          onClick={() => setSearchParams({ genre: [item] })}
          key={item}
          value={item}
          className={checkUrlGenre(item) ? 'is-selected' : ''}
        >
          {item}
        </button>
      )),
    [setSearchParams, checkUrlGenre]
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
        {searchParams.get('sortOrder') === DESC ? (
          <BsSortDown onClick={toggleSortOrder} id="asc-desc-sort-icon" />
        ) : (
          <BsSortUp onClick={toggleSortOrder} id="asc-desc-sort-icon" />
        )}
      </SortSection>
    </FiltersSection>
  );
};

export default MovieFilters;
