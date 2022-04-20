import * as React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import MovieCardImage from 'Components/MovieCardImage';
import prepareTestEnv from 'Root/functions/prepareTestEnv';

describe('MovieCardImage', () => {
  prepareTestEnv();

  const mockedShowHoverEffect = jest.fn();
  const mockedHideHoverEffect = jest.fn();
  const workingImageUrl =
    'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg';
  const faultyImageUrl = null;

  it('Renders fallback image when imageUrl is faulty', async () => {
    const { queryByTestId } = render(
      <MovieCardImage
        imgUrl={faultyImageUrl}
        imgAlt="Testing image"
        hideHoverEffect={mockedHideHoverEffect}
        showHoverEffect={mockedShowHoverEffect}
      />
    );

    await waitFor(() =>
      expect(queryByTestId('MovieCardFallback')).toBeTruthy()
    );
  });

  it('Renders image from url when it is valid', async () => {
    const { queryByTestId } = render(
      <MovieCardImage
        imgUrl={workingImageUrl}
        imgAlt="Testing image"
        hideHoverEffect={mockedHideHoverEffect}
        showHoverEffect={mockedShowHoverEffect}
      />
    );

    await waitFor(() => expect(queryByTestId('MovieCardImage')).toBeTruthy());
  });

  it('Hover effect onMouseEnter, hides effect onMouseLeave', async () => {
    const { queryByTestId } = render(
      <MovieCardImage
        imgUrl={workingImageUrl}
        imgAlt="Testing image"
        hideHoverEffect={mockedHideHoverEffect}
        showHoverEffect={mockedShowHoverEffect}
      />
    );

    await waitFor(() => {
      const ImageCard = queryByTestId('MovieCardImage');
      fireEvent.mouseEnter(ImageCard);
      expect(mockedHideHoverEffect).not.toHaveBeenCalled();
      expect(mockedShowHoverEffect).toHaveBeenCalledTimes(1);

      fireEvent.mouseLeave(ImageCard);
      expect(mockedHideHoverEffect).toHaveBeenCalledTimes(1);
      expect(mockedShowHoverEffect).toHaveBeenCalledTimes(1);
    });
  });
});
