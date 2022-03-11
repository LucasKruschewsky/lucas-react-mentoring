import { IMoviesListData } from '@/data/MockedDataTypes';
import { ISelectMovieActions } from '@/store/modules/movie/types';

export interface IMovieCardStoreProps {
  setSelectedMovie?: (movie: IMoviesListData) => ISelectMovieActions;
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
