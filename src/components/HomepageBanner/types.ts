import { IMoviesListData } from '@/data/MockedDataTypes';

export interface IHomeBannerStateToProps {
  selectedMovie?: IMoviesListData;
}

export interface IHomeBannerProps extends IHomeBannerStateToProps {}
