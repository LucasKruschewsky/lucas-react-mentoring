import * as React from 'react';
import { BsThreeDotsVertical, BsX } from 'react-icons/bs';
import HandleClickOut from 'Components/HandleClickOut';
import { connect } from 'react-redux';
import { selectMovie } from '@/store/modules/movie/actions';
import { parseDate } from '@/functions/parseDate';
import { TStoreDispatch } from '@/store/types';
import { IMoviesListData } from '@/data/MockedDataTypes';
import { openModal } from '@/store/modules/modal/actions';
import { genresMap } from 'Components/MovieList/helper';
import { MovieCardContainer, MovieInfo, MovieOptionsMenu } from './styles';
import { buildMenuItems } from './helper';
import { IMovieCardProps, IMovieCardStoreProps } from './types';

const MovieCard: React.FunctionComponent<IMovieCardProps> = ({
  movie,
  setSelectedMovie,
  openDeleteModal,
  openEditModal,
}) => {
  const { poster_path, genres, title, release_date, id } = movie;
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

  const genre = React.useMemo(() => genresMap(genres), [genres]);

  const showHoverEffect = React.useCallback(
    (): void => setIsMouseOver(true),
    []
  );
  const hideHoverEffect = React.useCallback(
    (): void => setIsMouseOver(false),
    []
  );
  const toggleOptionsMenu = React.useCallback(
    (): void => setIsOptionsMenuOpen(!isOptionsMenuOpen),
    [isOptionsMenuOpen]
  );

  const parsedDate = React.useMemo(
    () => parseDate(release_date, 'year'),
    [release_date]
  );

  return (
    <MovieCardContainer showOptionsIcon={isMouseOver}>
      <button onClick={chooseMovie} type="button">
        <img
          onMouseEnter={showHoverEffect}
          onMouseLeave={hideHoverEffect}
          src={poster_path}
          alt={`${title} banner`}
        />
      </button>
      <BsThreeDotsVertical
        onMouseEnter={showHoverEffect}
        onClick={toggleOptionsMenu}
      />
      <HandleClickOut
        backgroundColor="transparent"
        clickCallback={toggleOptionsMenu}
        showClickHandler={isOptionsMenuOpen}
      >
        <MovieOptionsMenu showOptionsContainer={isOptionsMenuOpen}>
          <BsX onClick={toggleOptionsMenu} />
          {optionsMenuItems}
        </MovieOptionsMenu>
      </HandleClickOut>
      <MovieInfo>
        <div>
          <h1>{title}</h1>
          <div className="movie-card-genres" id={`${id}-genres`}>
            {genre}
          </div>
        </div>
        <p>{parsedDate}</p>
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
