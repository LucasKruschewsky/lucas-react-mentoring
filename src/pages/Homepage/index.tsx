import * as React from 'react';
import MovieList from 'Components/MovieList';
import ErrorBoundary from 'Components/ErrorBoundary';
import HomepageBanner from 'Components/HomepageBanner';
import { IHomepageProps } from './types';

const Homepage: React.FunctionComponent<IHomepageProps> = ({
  selectedMovie,
  setSelectedMovie,
}) => (
  <>
    <HomepageBanner selectedMovie={selectedMovie} />
    <ErrorBoundary>
      <MovieList setSelectedMovie={setSelectedMovie} />
    </ErrorBoundary>
  </>
);

export default Homepage;
