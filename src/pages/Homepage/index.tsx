import * as React from 'react';
import MovieList from 'Components/MovieList';
import ErrorBoundary from 'Components/ErrorBoundary';
import HomepageBanner from 'Components/HomepageBanner';
import { useDispatch } from 'react-redux';
import { getAllMovies } from '@/store/modules/movieList';
import { IHomepageProps } from './types';

const Homepage: React.FunctionComponent<IHomepageProps> = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  return (
    <>
      <HomepageBanner />
      <ErrorBoundary>
        <MovieList />
      </ErrorBoundary>
    </>
  );
};

export default Homepage;
