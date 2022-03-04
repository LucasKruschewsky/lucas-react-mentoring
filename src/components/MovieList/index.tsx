import * as React from 'react';
import { useState } from 'react';
import AppContainer from 'Global/styled/AppContainer';
import * as ArrowDown from 'Images/ArrowDown.png';
import { moviesList } from '@/data/MockData';
import {
  numberOfMoviesFound,
  showGenreFilters,
  showMovies,
  sortMovies,
} from './helper';
import { IMovieListProps } from './types';
import {
  FiltersSection,
  GenreFilters,
  MoviesFound,
  MoviesGrid,
  SortSection,
} from './styles';

const MovieList: React.FunctionComponent<IMovieListProps> = ({
  setIsDeleteMovieOpen,
  setIsEditMovieOpen,
}) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [timesSorted, setTimesSorted] = useState(0);
  const [sortedMoviesList, setSortedMoviesList] = useState(moviesList);

  const genreFilters = React.useMemo(
    () => showGenreFilters(setActiveFilter, activeFilter),
    [activeFilter]
  );

  const moviesListSorted = React.useMemo(
    () =>
      showMovies(sortedMoviesList, setIsDeleteMovieOpen, setIsEditMovieOpen),
    [sortedMoviesList, setIsDeleteMovieOpen, setIsEditMovieOpen]
  );

  const sortMoviesCallback = React.useCallback((): any => {
    sortMovies(
      timesSorted,
      setTimesSorted,
      sortedMoviesList,
      setSortedMoviesList
    );
  }, [timesSorted, sortedMoviesList]);

  return (
    <AppContainer>
      <FiltersSection>
        <GenreFilters>{genreFilters}</GenreFilters>
        <SortSection>
          <p>Sort by</p>
          <button type="button" onClick={sortMoviesCallback}>
            Release Date <img src={ArrowDown} alt="Arrow Down" />
          </button>
        </SortSection>
      </FiltersSection>
      <MoviesFound>{numberOfMoviesFound} Movies Found</MoviesFound>
      <MoviesGrid cols={3}>{moviesListSorted}</MoviesGrid>
    </AppContainer>
  );
};

export default MovieList;
