import { IMoviesListData } from '@/data/MockedDataTypes';

export interface IHomeBannerStoreProps {
  selectedMovie?: IMoviesListData;
}

export interface IHomeBannerProps extends IHomeBannerStoreProps {}
