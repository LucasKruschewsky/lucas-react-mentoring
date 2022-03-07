import * as React from 'react';
import { BsThreeDotsVertical, BsX } from 'react-icons/bs';
import HandleClickOut from 'Components/HandleClickOut';
import AppModal from 'Components/AppModal';
import MovieForm from 'Components/MovieForm';
import { MovieCardContainer, MovieInfo, MovieOptionsMenu } from './styles';
import { buildMenuItems } from './helper';
import { IMovieCardProps } from './types';

const MovieCard: React.FunctionComponent<IMovieCardProps> = ({
  movie,
  setSelectedMovie,
}) => {
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

  const showHoverEffect = (): void => setIsMouseOver(true);
  const hideHoverEffect = (): void => setIsMouseOver(false);
  const openOptionsMenu = (): void => setIsOptionsMenuOpen(true);
  const closeOptionsMenu = (): void => setIsOptionsMenuOpen(false);
  const closeModal = (): void => {
    setIsDeleteMovieOpen(false);
    setIsEditMovieOpen(false);
  };
  const showModal = React.useMemo(
    () => isEditMovieOpen || isDeleteMovieOpen,
    [isEditMovieOpen, isDeleteMovieOpen]
  );

  const selectMovie = (): void => setSelectedMovie(movie);

  return (
    <MovieCardContainer showOptionsIcon={isMouseOver}>
      <button onClick={selectMovie} type="button">
        <img
          onMouseEnter={showHoverEffect}
          onMouseLeave={hideHoverEffect}
          src={image}
          alt={`${name} banner`}
        />
      </button>
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
