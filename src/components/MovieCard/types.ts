import { TMovieObject } from '@/store/modules/movieList/types';

export interface ICardImage {
  imgUrl: string;
  imgAlt: string;
  showHoverEffect: () => void;
  hideHoverEffect: () => void;
}

export interface IMovieCardProps {
  movie: TMovieObject;
}

export interface IMovieCardContainer {
  showOptionsIcon?: boolean;
}

export interface IMovieCardOptionsMenuProps {
  showOptionsContainer?: boolean;
}
