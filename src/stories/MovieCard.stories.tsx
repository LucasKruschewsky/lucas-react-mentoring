import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'Root/store';
import Image from 'Images/NoImageFallback.png';
import { TMovieObject } from '../store/modules/movieList/types';
import MovieCard from '../components/MovieCard';

const mockedMovieNoImage: TMovieObject = {
  id: 313369,
  title: 'La La Land',
  tagline: 'Here is to the fools who dream.',
  vote_average: 7.9,
  vote_count: 6782,
  release_date: '2016-12-29',
  poster_path: Image,
  overview:
    'Mia, an aspiring actress, serves lattes to movie stars in between...',
  revenue: 445435700,
  runtime: 128,
  genres: ['Comedy', 'Drama', 'Romance'],
};

const mockedMovieWithImage: TMovieObject = {
  ...mockedMovieNoImage,
  poster_path:
    'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
};

export default {
  title: 'MovieCard',
  component: MovieCard,
} as ComponentMeta<typeof MovieCard>;

export const MovieCardNoImage: ComponentStory<typeof MovieCard> = () => (
  <Provider store={createStore({})}>
    <MemoryRouter>
      <div style={{ maxWidth: '300px' }}>
        <MovieCard movie={mockedMovieNoImage} />
      </div>
    </MemoryRouter>
  </Provider>
);

export const MovieCardWithImage: ComponentStory<typeof MovieCard> = () => (
  <Provider store={createStore({})}>
    <MemoryRouter>
      <div style={{ maxWidth: '300px' }}>
        <MovieCard movie={mockedMovieWithImage} />
      </div>
    </MemoryRouter>
  </Provider>
);
