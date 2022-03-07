import * as React from 'react';
import { searchBanner, selectedMovieBanner } from './helper';

import { IHomeBannerProps } from './types';

const HomepageBanner: React.FunctionComponent<IHomeBannerProps> = ({
  selectedMovie,
}) => (selectedMovie ? selectedMovieBanner(selectedMovie) : searchBanner);

export default HomepageBanner;
