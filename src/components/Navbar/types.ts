import { IMoviesListData } from '@/data/MockedDataTypes';
import { ISelectMovieActions } from '@/store/modules/movie/types';

export interface INavbarStoreProps {
  removeSelectedMovie?: () => ISelectMovieActions;
}

export interface INavbarProps extends INavbarStoreProps {
  currentMovie?: IMoviesListData;
}
