import * as React from 'react';
import { useCurrentMovie } from '@/hooks/useSelectedMovie';
import { searchBanner, selectedMovieBanner } from './helper';

import { IHomeBannerProps } from './types';

const HomepageBanner: React.FunctionComponent<IHomeBannerProps> = () => {
  const currentMovie = useCurrentMovie();

  return currentMovie ? selectedMovieBanner(currentMovie) : searchBanner;
};

export default HomepageBanner;
