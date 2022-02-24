import * as React from 'react';
import { useEffect } from 'react';
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
  useEffect(() => {
    console.log(props.movie.image);
  });

  return (
    <MovieCardContainer>
      <img src={props.movie.image} alt={`${props.movie.name} banner`} />
      <MovieInfo>
        <div>
          <h1>{props.movie.name}</h1>
          <p>{props.movie.genre}</p>
        </div>
        <p>{props.movie.year}</p>
      </MovieInfo>
    </MovieCardContainer>
  );
}
