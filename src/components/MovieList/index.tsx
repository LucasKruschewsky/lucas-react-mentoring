import * as React from 'react';
import { useState } from 'react';
import AppContainer from 'Global/styled/AppContainer';
import * as ArrowDown from 'Images/ArrowDown.png';
import MovieCard from 'Components/MovieCard';
import { moviesList } from '@/data/MockData';
import { numberOfMoviesFound, showGenreFilters } from './helper';
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
      <MoviesGrid cols={3}>
        {moviesList.map((movie) => (
          <MovieCard
            setIsDeleteMovieOpen={setIsDeleteMovieOpen}
            setIsEditMovieOpen={setIsEditMovieOpen}
            key={movie.id}
            movie={movie}
          />
        ))}
      </MoviesGrid>
    </AppContainer>
  );
};

export default MovieList;
