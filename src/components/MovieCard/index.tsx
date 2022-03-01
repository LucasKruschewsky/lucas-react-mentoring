import * as React from 'react';
import { MovieCardContainer, MovieInfo } from './styles';
import { IPropsMovieCard } from './types';

const MovieCard: React.FunctionComponent<IPropsMovieCard> = ({ movie }) => {
  const { image, genre, name, year } = movie;

  return (
    <MovieCardContainer>
      <img src={image} alt={`${name} banner`} />
      <MovieInfo>
        <div>
          <h1>{name}</h1>
          <p>{genre}</p>
        </div>
        <p>{year}</p>
      </MovieInfo>
    </MovieCardContainer>
  );
};

export default MovieCard;
