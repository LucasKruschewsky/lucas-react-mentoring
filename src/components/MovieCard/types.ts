import { IMoviesListData } from '@/data/MockedDataTypes';

export interface IMovieCardProps {
  movie: IMoviesListData;
  setSelectedMovie: React.Dispatch<React.SetStateAction<object>>;
}

export interface IMovieCardContainer {
  showOptionsIcon?: boolean;
}

export interface IMovieCardOptionsMenuProps {
  showOptionsContainer?: boolean;
}
