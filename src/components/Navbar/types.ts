import { IMoviesListData } from '@/data/MockedDataTypes';
import { ISelectMovieActions } from '@/store/modules/movie/types';

export interface INavbarStateToProps {
  removeSelectedMovie?: () => ISelectMovieActions;
}

export interface INavbarProps extends INavbarStateToProps {
  currentMovie?: IMoviesListData;
}
