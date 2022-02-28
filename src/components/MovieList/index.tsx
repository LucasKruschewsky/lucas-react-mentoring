import * as React from 'react';
import { useState } from 'react';
import AppContainer from 'Styles/AppContainer';
import * as ArrowDown from 'Images/ArrowDown.png';
import {
  numberOfMoviesFound,
  renderMovieCards,
  showGenreFilters,
} from './helper';
import {
  FiltersSection,
  GenreFilters,
  MoviesFound,
  MoviesGrid,
  SortSection,
} from './styles';

const MovieList: React.FunctionComponent = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const genreFilters = showGenreFilters(setActiveFilter, activeFilter);

  return (
    <AppContainer>
      <FiltersSection>
        <GenreFilters>{genreFilters}</GenreFilters>
        <SortSection>
          <p>Sort by</p>
          <div>
            Release Date <img src={ArrowDown} alt="Arrow Down" />{' '}
          </div>
        </SortSection>
      </FiltersSection>
      <MoviesFound>{numberOfMoviesFound} Movies Found</MoviesFound>
      <MoviesGrid cols={3}>{renderMovieCards}</MoviesGrid>
    </AppContainer>
  );
};

export default MovieList;
