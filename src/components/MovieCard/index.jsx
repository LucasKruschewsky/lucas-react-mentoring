import PropTypes from 'prop-types';
import React from 'react';
import { MovieCardContainer, MovieInfo } from './styles';

export default function MovieCard({ movie }) {
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

MovieCard.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};
