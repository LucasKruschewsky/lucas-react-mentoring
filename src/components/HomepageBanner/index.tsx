import { RootState } from '@/store/types';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { searchBanner, SelectedMovieBanner } from './helper';
import { IHomeBannerProps } from './types';

const HomepageBanner: React.FunctionComponent<IHomeBannerProps> = () => {
  const selectedMovie = useSelector((state: RootState) => state.selectedMovie);

  return selectedMovie ? (
    <SelectedMovieBanner selectedMovie={selectedMovie} />
  ) : (
    searchBanner
  );
};

export default HomepageBanner;
