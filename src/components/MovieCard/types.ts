import { IMoviesListData } from '@/data/MockedDataTypes';
import { ISelectMovieActions } from '@/store/modules/movie/types';

export interface IMovieCardStateToProps {
  setSelectedMovie?: (movie: IMoviesListData) => ISelectMovieActions;
}

export interface IMovieCardProps extends IMovieCardStateToProps {
  movie: IMoviesListData;
}

export interface IMovieCardContainer {
  showOptionsIcon?: boolean;
}

export interface IMovieCardOptionsMenuProps {
  showOptionsContainer?: boolean;
}
