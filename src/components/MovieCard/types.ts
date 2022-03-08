import { IMoviesListData } from '@/data/MockedDataTypes';

export interface IMovieCardProps {
  movie: IMoviesListData;
}

export interface IMovieCardContainer {
  showOptionsIcon?: boolean;
}

export interface IMovieCardOptionsMenuProps {
  showOptionsContainer?: boolean;
}
