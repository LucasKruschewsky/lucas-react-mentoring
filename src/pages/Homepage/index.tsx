import * as React from 'react';
import MovieList from 'Components/MovieList';
import ErrorBoundary from 'Components/ErrorBoundary';
import HomepageBanner from 'Components/HomepageBanner';
import { IHomepageProps } from './types';

const Homepage: React.FunctionComponent<IHomepageProps> = ({
  setIsDeleteMovieOpen,
  setIsEditMovieOpen,
}) => (
  <>
    <HomepageBanner />
    <ErrorBoundary>
      <MovieList
        setIsEditMovieOpen={setIsEditMovieOpen}
        setIsDeleteMovieOpen={setIsDeleteMovieOpen}
      />
    </ErrorBoundary>
  </>
);

export default Homepage;
