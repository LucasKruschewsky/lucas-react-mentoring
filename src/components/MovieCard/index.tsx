import * as React from 'react';
import { BsThreeDotsVertical, BsX } from 'react-icons/bs';
import HandleClickOut from 'Components/HandleClickOut';
import AppModal from 'Components/AppModal';
import MovieForm from 'Components/MovieForm';
import { MovieCardContainer, MovieInfo, MovieOptionsMenu } from './styles';
import { buildMenuItems } from './helper';
import { IMovieCardProps } from './types';

const MovieCard: React.FunctionComponent<IMovieCardProps> = ({ movie }) => {
  const { image, genre, name, year } = movie;
  const [isMouseOver, setIsMouseOver] = React.useState(false);
  const [isOptionsMenuOpen, setIsOptionsMenuOpen] = React.useState(false);
  const [isEditMovieOpen, setIsEditMovieOpen] = React.useState(false);
  const [isDeleteMovieOpen, setIsDeleteMovieOpen] = React.useState(false);

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
  const closeModal = React.useCallback(() => {
    setIsDeleteMovieOpen(false);
    setIsEditMovieOpen(false);
  }, []);
  const showModal = React.useMemo(
    () => isEditMovieOpen || isDeleteMovieOpen,
    [isEditMovieOpen, isDeleteMovieOpen]
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
      <AppModal showModal={showModal} closeModal={closeModal}>
        {isEditMovieOpen && <MovieForm type="edit" />}
        {isDeleteMovieOpen && <MovieForm type="delete" />}
      </AppModal>
    </MovieCardContainer>
  );
};

export default MovieCard;
