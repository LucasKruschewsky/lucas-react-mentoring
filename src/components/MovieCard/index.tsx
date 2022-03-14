import * as React from 'react';
import { BsThreeDotsVertical, BsX } from 'react-icons/bs';
import HandleClickOut from 'Components/HandleClickOut';
import { connect } from 'react-redux';
import { selectMovie } from '@/store/modules/movie/actions';
import { TStoreDispatch } from '@/store/types';
import { IMoviesListData } from '@/data/MockedDataTypes';
import { openModal } from '@/store/modules/modal/actions';
import { MovieCardContainer, MovieInfo, MovieOptionsMenu } from './styles';
import { buildMenuItems } from './helper';
import { IMovieCardProps, IMovieCardStoreProps } from './types';

const MovieCard: React.FunctionComponent<IMovieCardProps> = ({
  movie,
  setSelectedMovie,
  openDeleteModal,
  openEditModal,
}) => {
  const { image, genre, name, year } = movie;
  const [isMouseOver, setIsMouseOver] = React.useState(false);
  const [isOptionsMenuOpen, setIsOptionsMenuOpen] = React.useState(false);

  const chooseMovie = React.useCallback(
    () => setSelectedMovie(movie),
    [movie, setSelectedMovie]
  );

  const optionsMenuItems = React.useMemo(
    () => buildMenuItems(openDeleteModal, openEditModal, setIsOptionsMenuOpen),
    [openDeleteModal, openEditModal]
  );

  const showHoverEffect = React.useCallback(
    (): void => setIsMouseOver(true),
    []
  );
  const hideHoverEffect = React.useCallback(
    (): void => setIsMouseOver(false),
    []
  );
  const openOptionsMenu = React.useCallback(
    (): void => setIsOptionsMenuOpen(true),
    []
  );
  const closeOptionsMenu = React.useCallback(
    (): void => setIsOptionsMenuOpen(false),
    []
  );

  return (
    <MovieCardContainer showOptionsIcon={isMouseOver}>
      <button onClick={chooseMovie} type="button">
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

const mapDispatchToProps = (
  dispatch: TStoreDispatch
): IMovieCardStoreProps => ({
  setSelectedMovie: (movie: IMoviesListData) => dispatch(selectMovie(movie)),
  openDeleteModal: () => dispatch(openModal('delete')),
  openEditModal: () => dispatch(openModal('edit')),
});

export default connect(null, mapDispatchToProps)(MovieCard);
