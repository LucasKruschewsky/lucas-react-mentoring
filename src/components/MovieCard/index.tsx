import * as React from 'react';
import { BsThreeDotsVertical, BsX } from 'react-icons/bs';
import HandleClickOut from 'Components/HandleClickOut';
import { MovieCardContainer, MovieInfo, MovieOptionsMenu } from './styles';
import { buildMenuItems } from './helper';
import { IMovieCardProps } from './types';

const MovieCard: React.FunctionComponent<IMovieCardProps> = ({
  movie,
  setIsDeleteMovieOpen,
  setIsEditMovieOpen,
}) => {
  const { image, genre, name, year } = movie;
  const [isMouseOver, setIsMouseOver] = React.useState(false);
  const [isOptionsMenuOpen, setIsOptionsMenuOpen] = React.useState(false);

  const optionsMenuItems = React.useMemo(
    () =>
      buildMenuItems(
        setIsDeleteMovieOpen,
        setIsEditMovieOpen,
        setIsOptionsMenuOpen
      ),
    [setIsDeleteMovieOpen, setIsEditMovieOpen]
  );

  const showHoverEffect = React.useCallback(() => setIsMouseOver(true), []);
  const hideHoverEffect = React.useCallback(() => setIsMouseOver(false), []);
  const openOptionsMenu = React.useCallback(
    () => setIsOptionsMenuOpen(true),
    []
  );
  const closeOptionsMenu = React.useCallback(
    () => setIsOptionsMenuOpen(false),
    []
  );

  return (
    <MovieCardContainer showOptionsIcon={isMouseOver}>
      <img
        onMouseEnter={showHoverEffect}
        onMouseLeave={hideHoverEffect}
        src={image}
        alt={`${name} banner`}
      />
      <BsThreeDotsVertical
        onMouseEnter={showHoverEffect}
        onClick={openOptionsMenu}
      />
      <HandleClickOut
        backgroundColor="transparent"
        clickCallback={closeOptionsMenu}
        showClickHandler={isOptionsMenuOpen}
      >
        <MovieOptionsMenu showOptionsContainer={isOptionsMenuOpen}>
          <BsX onClick={closeOptionsMenu} />
          {optionsMenuItems}
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
