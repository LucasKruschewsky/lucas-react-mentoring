import { IMoviesListData } from '@/data/MockedDataTypes';
import { IModalAction } from '@/store/modules/modal/types';
import { ISelectMovieActions } from '@/store/modules/movie/types';

export interface INavbarStoreProps {
  removeSelectedMovie?: () => ISelectMovieActions;
  openAddModal?: () => IModalAction;
}

export interface INavbarProps extends INavbarStoreProps {
  currentMovie?: IMoviesListData;
}
