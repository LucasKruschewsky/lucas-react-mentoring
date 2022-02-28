import * as React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MovieCardContainer, MovieInfo } from './styles';
import { IPropsMovieCard } from './types';

const MovieCard: React.FunctionComponent<IPropsMovieCard> = ({ movie }) => {
  const { image, genre, name, year } = movie;
  const [isMouseOver, setIsMouseOver] = React.useState(false);

  return (
    <MovieCardContainer showOptions={isMouseOver}>
      <img
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        src={image}
        alt={`${name} banner`}
      />
      <BsThreeDotsVertical onMouseEnter={() => setIsMouseOver(true)} />
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
