import * as React from 'react';
import MovieList from 'Components/MovieList';
import ErrorBoundary from 'Components/ErrorBoundary';
import HomepageBanner from 'Components/HomepageBanner';
import AppModal from 'Components/AppModal';

const Homepage: React.FunctionComponent = () => (
  <>
    <HomepageBanner />
    <AppModal title="Modal Title">XD</AppModal>
    <ErrorBoundary>
      <MovieList />
    </ErrorBoundary>
  </>
);

export default Homepage;
