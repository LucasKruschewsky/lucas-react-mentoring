import { TMovieObject } from '@/store/modules/movieList/types';

export interface IMovieCardProps {
  movie: TMovieObject;
}

export interface IMovieCardContainer {
  showOptionsIcon?: boolean;
}

export interface IMovieCardOptionsMenuProps {
  showOptionsContainer?: boolean;
}
