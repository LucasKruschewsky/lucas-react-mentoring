import { IStoreState } from '@/store/types';
import * as React from 'react';
import { connect } from 'react-redux';
import { searchBanner, selectedMovieBanner } from './helper';
import { IHomeBannerProps, IHomeBannerStateToProps } from './types';

const HomepageBanner: React.FunctionComponent<IHomeBannerProps> = ({
  selectedMovie,
}) => (selectedMovie ? selectedMovieBanner(selectedMovie) : searchBanner);

const mapStateToProps = (state: IStoreState): IHomeBannerStateToProps => ({
  selectedMovie: state.selectedMovie,
});

export default connect(mapStateToProps)(HomepageBanner);
