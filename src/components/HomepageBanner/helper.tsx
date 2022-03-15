import * as React from 'react';
import AppButton from 'Global/styled/AppButton';
import { parseDate } from '@/functions/parseDate';
import { minutesToHours } from '@/functions/minutesToHours';
import {
  SearchBannerContainer,
  SearchTitle,
  SearchInputAndButton,
  SelectedMovieContainer,
  MovieTitleAndRating,
  MovieGenre,
  MovieYearAndDuration,
  MovieDescription,
} from './styles';
import { IHomeBannerStoreProps } from './types';

export const searchBanner = (
  <SearchBannerContainer>
    <div>
      <SearchTitle>Find Your Movies</SearchTitle>
      <SearchInputAndButton>
        <input
          id="searchMovie"
          type="text"
          placeholder="What do you want to watch?"
        />
        <AppButton> Search </AppButton>
      </SearchInputAndButton>
    </div>
  </SearchBannerContainer>
);

export const SelectedMovieBanner: React.FunctionComponent<
  IHomeBannerStoreProps
> = ({ selectedMovie }) => {
  const parsedRuntime = React.useMemo(
    () => minutesToHours(selectedMovie.runtime),
    [selectedMovie]
  );

  const parsedDate = React.useMemo(
    () => parseDate(selectedMovie.release_date),
    [selectedMovie]
  );

  return (
    <SelectedMovieContainer>
      <img
        src={selectedMovie.poster_path}
        alt={`${selectedMovie.title} movie`}
      />
      <div id="selected-movie-details-banner">
        <MovieTitleAndRating>
          <h1>{selectedMovie.title}</h1>
          <div>{selectedMovie.vote_average}</div>
        </MovieTitleAndRating>
        <MovieGenre>
          {selectedMovie.genres.map((genre) => (
            <p key={genre}>{genre}</p>
          ))}
        </MovieGenre>
        <MovieYearAndDuration>
          <p>{parsedDate}</p>
          <p>{parsedRuntime}</p>
        </MovieYearAndDuration>
        <MovieDescription>{selectedMovie.overview}</MovieDescription>
      </div>
    </SelectedMovieContainer>
  );
};
