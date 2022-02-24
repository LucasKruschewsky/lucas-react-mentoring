import * as React from 'react';
import HomepageBanner from '../components/HomepageBanner';
import MovieList from '../components/MovieList';
import ErrorBoundary from '../components/ErrorBoundary';

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
