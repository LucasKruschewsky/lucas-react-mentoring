import * as React from 'react';
import { BsThreeDotsVertical, BsX } from 'react-icons/bs';
import HandleClickOut from 'Components/HandleClickOut';
import { useDeleteModal, useEditModal } from '@/hooks/useModal';
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

  const openDeleteModal = useDeleteModal();
  const openEditModal = useEditModal();

  const optionsMenuItems = React.useMemo(
    () => buildMenuItems(openDeleteModal, openEditModal, setIsOptionsMenuOpen),
    [openDeleteModal, openEditModal]
  );

  const showHoverEffect = (): void => setIsMouseOver(true);
  const hideHoverEffect = (): void => setIsMouseOver(false);
  const openOptionsMenu = (): void => setIsOptionsMenuOpen(true);
  const closeOptionsMenu = (): void => setIsOptionsMenuOpen(false);

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
    </MovieCardContainer>
  );
};

export default MovieCard;
