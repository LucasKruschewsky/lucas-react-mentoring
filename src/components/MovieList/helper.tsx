import * as React from 'react';
import MovieCard from 'Components/MovieCard';
import { TMovieList } from 'Root/store/modules/movieList/types';

export const genresMap = (genres: string[]): React.ReactElement[] =>
  genres.map((genre) => <p key={genre}>{genre}</p>);

export const showMovies = (sortedMovies: TMovieList): React.ReactElement[] =>
  sortedMovies?.map((movie) => <MovieCard key={movie.id} movie={movie} />);
