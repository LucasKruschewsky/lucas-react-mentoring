import { fireEvent, render } from '@testing-library/react';
import MovieCard from 'Components/MovieCard';
import * as React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'Root/store';
import prepareTestEnv from 'Root/functions/prepareTestEnv';

describe('MovieCard', () => {
  prepareTestEnv();
  const mockedMovie = {
    id: 313369,
    title: 'La La Land',
    tagline: 'Here is to the fools who dream.',
    vote_average: 7.9,
    vote_count: 6782,
    release_date: '2016-12-29',
    poster_path: null,
    overview:
      'Mia, an aspiring actress, serves lattes to movie stars in between...',
    revenue: 445435700,
    runtime: 128,
    genres: ['Comedy', 'Drama', 'Romance'],
  };

  const { queryByTestId } = render(
    <Provider store={createStore()}>
      <MemoryRouter>
        <MovieCard movie={mockedMovie} />
      </MemoryRouter>
    </Provider>
  );

  const cardImage = queryByTestId('MovieCardFallback');
  const ThreeDotsVerticalOptions = queryByTestId('ThreeDotsVerticalOptions');

  it('Options menu visible on mouse enter, invisible on mouse leave', () => {
    fireEvent.mouseEnter(cardImage);
    expect(ThreeDotsVerticalOptions).toBeVisible();

    fireEvent.mouseLeave(cardImage);
    expect(ThreeDotsVerticalOptions).not.toBeVisible();
  });
});
