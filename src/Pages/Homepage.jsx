import React from 'react';
import HomepageBanner from '../Components/HomepageBanner';
import MovieList from '../Components/MovieList';
import ErrorBoundary from '../Components/ErrorBoundary';

export default function Homepage() {
  return (
    <>
      <HomepageBanner />
      <ErrorBoundary>
        <MovieList />
      </ErrorBoundary>
    </>
  );
}
