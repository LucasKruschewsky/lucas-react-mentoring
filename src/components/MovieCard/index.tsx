import * as React from 'react';
import { BsThreeDotsVertical, BsX } from 'react-icons/bs';
import HandleClickOut from 'Components/HandleClickOut';
import { MovieCardContainer, MovieInfo, MovieOptionsMenu } from './styles';
import { showMenuItems } from './helper';
import { IPropsMovieCard } from './types';

const MovieCard: React.FunctionComponent<IPropsMovieCard> = ({ movie }) => {
  const { image, genre, name, year } = movie;
  const [isMouseOver, setIsMouseOver] = React.useState(false);
  const [isOptionsMenuOpen, setIsOptionsMenuOpen] = React.useState(false);

  return (
    <MovieCardContainer showOptionsIcon={isMouseOver}>
      <img
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        src={image}
        alt={`${name} banner`}
      />
      <BsThreeDotsVertical
        onMouseEnter={() => setIsMouseOver(true)}
        onClick={() => setIsOptionsMenuOpen(true)}
      />
      <HandleClickOut
        clickCallback={() => setIsOptionsMenuOpen(false)}
        showClickHandler={isOptionsMenuOpen}
      >
        <MovieOptionsMenu showOptionsContainer={isOptionsMenuOpen}>
          <BsX onClick={() => setIsOptionsMenuOpen(false)} />
          {showMenuItems}
        </MovieOptionsMenu>
      </HandleClickOut>
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
