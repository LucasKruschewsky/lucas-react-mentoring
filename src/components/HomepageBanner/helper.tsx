import * as React from 'react';
import AppButton from 'Global/styled/AppButton';
import { parseDate } from 'Root/functions/parseDate';
import { minutesToHours } from 'Root/functions/minutesToHours';
import { Field, Form, Formik } from 'formik';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { axiosRequest } from 'Root/functions/axiosRequest';
import { retrieveAllSearchParams } from 'Root/functions/retrieveSearchParams';
import {
  SearchBannerContainer,
  SearchTitle,
  SearchInputAndButton,
  SelectedMovieContainer,
  MovieTitleAndRating,
  MovieGenre,
  MovieYearAndDuration,
  MovieDescription,
  MovieImageContainer,
  MovieDetailsContainer,
} from './styles';
import { IHomeBannerProps, ISearchBannerProps } from './types';

export const SearchBanner: React.FunctionComponent<ISearchBannerProps> = ({
  searchQuery,
}) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleSubmitSearch = React.useCallback(
    ({ searchField }) => {
      if (searchField.length) {
        navigate({
          pathname: `/search/${searchField}`,
          search: `?${createSearchParams({
            ...retrieveAllSearchParams(searchParams),
          })}`,
        });
      }
    },
    [navigate, searchParams]
  );

  const initialSearchValue: { searchField: string } = {
    searchField: searchQuery ?? '',
  };

  return (
    <SearchBannerContainer>
      <div>
        <SearchTitle>Find Your Movies</SearchTitle>
        <Formik
          onSubmit={handleSubmitSearch}
          initialValues={initialSearchValue}
        >
          <Form data-testid="FormikSearchMovie">
            <SearchInputAndButton>
              <Field
                data-testid="BannerSearchField"
                name="searchField"
                id="searchMovie"
                type="text"
                placeholder="What do you want to watch?"
              />
              <AppButton
                data-testid="searchFieldButton"
                name="searchFieldButton"
                type="submit"
              >
                Search
              </AppButton>
            </SearchInputAndButton>
          </Form>
        </Formik>
      </div>
    </SearchBannerContainer>
  );
};

export const SelectedMovieBanner: React.FunctionComponent<IHomeBannerProps> = ({
  selectedMovieId,
}) => {
  const [selectedMovie, setSelectedMovie] = React.useState(null);

  React.useEffect(() => {
    const fetchSelectedMovie = async (): Promise<void> => {
      const response = await axiosRequest(`/movies/${selectedMovieId}`, 'get');
      setSelectedMovie(response.data);
    };

    fetchSelectedMovie();
  }, [selectedMovieId]);

  const parsedRuntime = React.useMemo(
    () => minutesToHours(selectedMovie?.runtime),
    [selectedMovie]
  );

  const parsedDate = React.useMemo(
    () => parseDate(selectedMovie?.release_date),
    [selectedMovie]
  );

  return (
    <SelectedMovieContainer>
      <MovieImageContainer>
        <img
          src={selectedMovie?.poster_path}
          alt={`${selectedMovie?.title} movie`}
        />
      </MovieImageContainer>
      <MovieDetailsContainer id="selected-movie-details-banner">
        <MovieTitleAndRating>
          <h1>{selectedMovie?.title}</h1>
          <div>{selectedMovie?.vote_average}</div>
        </MovieTitleAndRating>
        <MovieGenre>
          {selectedMovie?.genres.map((genre: string) => (
            <p key={genre}>{genre}</p>
          ))}
        </MovieGenre>
        <MovieYearAndDuration>
          <p>{parsedDate}</p>
          <p>{parsedRuntime}</p>
        </MovieYearAndDuration>
        <MovieDescription>{selectedMovie?.overview}</MovieDescription>
      </MovieDetailsContainer>
    </SelectedMovieContainer>
  );
};
