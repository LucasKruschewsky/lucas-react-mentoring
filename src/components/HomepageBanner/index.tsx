import { IStoreState } from '@/store/types';
import * as React from 'react';
import { connect } from 'react-redux';
import { searchBanner, selectedMovieBanner } from './helper';
import { IHomeBannerProps, IHomeBannerStoreProps } from './types';

const HomepageBanner: React.FunctionComponent<IHomeBannerProps> = ({
  selectedMovie,
}) => (selectedMovie ? selectedMovieBanner(selectedMovie) : searchBanner);

const mapStateToProps = (state: IStoreState): IHomeBannerStoreProps => ({
  selectedMovie: state.selectedMovie,
});

export const homeBannerConnector = connect(mapStateToProps);

export default homeBannerConnector(HomepageBanner);
