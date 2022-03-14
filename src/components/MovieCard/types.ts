import { IMoviesListData } from '@/data/MockedDataTypes';
import { IModalAction } from '@/store/modules/modal/types';
import { ISelectMovieActions } from '@/store/modules/movie/types';

export interface IMovieCardStoreProps {
  setSelectedMovie?: (movie: IMoviesListData) => ISelectMovieActions;
  openEditModal?: () => IModalAction;
  openDeleteModal?: () => IModalAction;
}

export interface IMovieCardProps extends IMovieCardStoreProps {
  movie: IMoviesListData;
}

export interface IMovieCardContainer {
  showOptionsIcon?: boolean;
}

export interface IMovieCardOptionsMenuProps {
  showOptionsContainer?: boolean;
}
