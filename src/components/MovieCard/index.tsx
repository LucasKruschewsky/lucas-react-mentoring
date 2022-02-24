import * as React from 'react';
import { MovieCardContainer, MovieInfo } from './styles';

interface Props {
  movie: {
    image: string;
    name: string;
    genre: string;
    year: number;
  };
}

export default function MovieCard(props: Props): JSX.Element {
  const { movie } = props;

  return (
    <MovieCardContainer>
      <img src={movie.image} alt={`${movie.name} banner`} />
      <MovieInfo>
        <div>
          <h1>{movie.name}</h1>
          <p>{movie.genre}</p>
        </div>
        <p>{movie.year}</p>
      </MovieInfo>
    </MovieCardContainer>
  );
}
