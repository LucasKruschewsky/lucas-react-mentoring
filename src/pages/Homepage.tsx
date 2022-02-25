import * as React from 'react';
import MovieList from 'Components/MovieList';
import ErrorBoundary from 'Components/ErrorBoundary';
import HomepageBanner from 'Components/HomepageBanner';

const Homepage: React.FunctionComponent = () => (
  <>
    <HomepageBanner />
    <ErrorBoundary>
      <MovieList />
    </ErrorBoundary>
  </>
);

export default Homepage;
