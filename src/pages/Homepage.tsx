import * as React from 'react';
import MovieList from 'Components/MovieList';
import ErrorBoundary from 'Components/ErrorBoundary';
import HomepageBanner from 'Components/HomepageBanner';

export default function Homepage(): JSX.Element {
  return (
    <>
      <HomepageBanner />

      <ErrorBoundary>
        <MovieList />
      </ErrorBoundary>
    </>
  );
}
