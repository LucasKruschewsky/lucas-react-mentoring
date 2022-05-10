import * as React from 'react';
import { BsThreeDotsVertical, BsX } from 'react-icons/bs';
import HandleClickOut from 'Components/HandleClickOut';
import { parseDate } from '@/functions/parseDate';
import { useDispatch } from 'react-redux';
import { genresMap } from 'Components/MovieList/helper';
import { selectMovie } from '@/store/modules/selectedMovie';
import MovieCardImage from 'Components/MovieCardImage';
import { MovieCardContainer, MovieInfo, MovieOptionsMenu } from './styles';
import { buildMenuItems } from './helper';
import { IMovieCardProps } from './types';

const MovieCard: React.FunctionComponent<IMovieCardProps> = ({ movie }) => {
  const { poster_path, genres, title, release_date, id } = movie;
  const [isMouseOver, setIsMouseOver] = React.useState(false);
  const [isOptionsMenuOpen, setIsOptionsMenuOpen] = React.useState(false);
  const dispatch = useDispatch();

  const chooseMovie = React.useCallback(
    () => dispatch(selectMovie(movie)),
    [movie, dispatch]
  );

  const optionsMenuItems = React.useMemo(
    () => buildMenuItems(setIsOptionsMenuOpen, dispatch, id),
    [dispatch, id]
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
        <MovieCardImage
          hideHoverEffect={hideHoverEffect}
          showHoverEffect={showHoverEffect}
          imgUrl={poster_path}
          imgAlt={`${title} banner`}
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

export default MovieCard;
