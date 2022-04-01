import * as React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { SearchBanner, SelectedMovieBanner } from './helper';
import { IHomeBannerProps } from './types';

const HomepageBanner: React.FunctionComponent<IHomeBannerProps> = () => {
  const { searchQuery } = useParams();
  const [searchParams] = useSearchParams();

  return searchParams.has('movie') ? (
    <SelectedMovieBanner selectedMovieId={searchParams.get('movie')} />
  ) : (
    <SearchBanner searchQuery={searchQuery} />
  );
};

export default HomepageBanner;
