import * as React from 'react';
import AppButton from 'Global/styled/AppButton';
import { IMoviesListData } from '@/data/MockedDataTypes';
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

export const selectedMovieBanner = (
  selectedMovie: IMoviesListData
): React.ReactElement => (
  <SelectedMovieContainer>
    <img src={selectedMovie.image} alt={`${selectedMovie.name} movie`} />
    <div id="selected-movie-details-banner">
      <MovieTitleAndRating>
        <h1>{selectedMovie.name}</h1>
        <div>{selectedMovie.rating}</div>
      </MovieTitleAndRating>
      <MovieGenre>{selectedMovie.genre}</MovieGenre>
      <MovieYearAndDuration>
        <p>{selectedMovie.year}</p>
        <p>{selectedMovie.duration}</p>
      </MovieYearAndDuration>
      <MovieDescription>{selectedMovie.description}</MovieDescription>
    </div>
  </SelectedMovieContainer>
);
