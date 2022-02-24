import * as React from 'react';
import { useState } from 'react';
import AppContainer from 'Styles/AppContainer';
import * as Movie1 from 'Images/movie-1.png';
import * as Movie2 from 'Images/movie-2.png';
import * as Movie3 from 'Images/movie-3.png';
import * as ArrowDown from 'Images/ArrowDown.png';
import {
  FiltersSection,
  GenreFilters,
  MoviesFound,
  MoviesGrid,
  SortSection,
} from './styles';
import MovieCard from '../MovieCard';

export default function MovieList() {
  const [activeFilter, setActiveFilter] = useState('All');

  React.useEffect(() => {
    console.log(Movie1);
  });
  // Mocked data
  const genreFilterList = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
  const moviesList = [
    {
      name: 'Pulp Fiction',
      genre: 'Crime',
      year: 2004,
      image: Movie1,
      id: 1,
    },
    {
      name: 'Bohemian Rhapsody',
      genre: 'Comedy',
      year: 2003,
      image: Movie2,
      id: 2,
    },
    {
      name: 'Bill: Vol. 2',
      genre: 'Horror',
      year: 1994,
      image: Movie3,
      id: 3,
    },
  ];

  const showGenreFilters = genreFilterList.map((item) => (
    <button
      type="button"
      onClick={() => setActiveFilter(item)}
      key={item}
      className={activeFilter === item ? 'is-selected' : ''}
    >
      {item}
    </button>
  ));

  const showMovies = moviesList.map((movie) => (
    <MovieCard key={movie.id} movie={movie} />
  ));

  const numberOfMoviesFound = moviesList.length;

  return (
    <AppContainer>
      <FiltersSection>
        <GenreFilters>{showGenreFilters}</GenreFilters>
        <SortSection>
          <p>Sort by</p>
          <div>
            Release Date <img src={ArrowDown} alt="Arrow Down" />{' '}
          </div>
        </SortSection>
      </FiltersSection>
      <MoviesFound>{numberOfMoviesFound} Movies Found</MoviesFound>
      <MoviesGrid cols={3}>{showMovies}</MoviesGrid>
    </AppContainer>
  );
}
