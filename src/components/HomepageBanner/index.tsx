import { RootState } from '@/store/types';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SearchBanner, SelectedMovieBanner } from './helper';
import { IHomeBannerProps } from './types';

const HomepageBanner: React.FunctionComponent<IHomeBannerProps> = () => {
  const selectedMovie = useSelector((state: RootState) => state.selectedMovie);
  const { searchQuery } = useParams();

  return selectedMovie ? (
    <SelectedMovieBanner selectedMovie={selectedMovie} />
  ) : (
    <SearchBanner searchQuery={searchQuery} />
  );
};

export default HomepageBanner;
