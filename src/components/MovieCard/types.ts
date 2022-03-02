import { IHomepageProps } from '@/pages/Homepage/types';

export interface IMovieCardProps extends IHomepageProps {
  movie: {
    image: string;
    name: string;
    genre: string;
    year: number;
  };
}

export interface IMovieCardContainer {
  showOptionsIcon?: boolean;
}

export interface IMovieCardOptionsMenuProps {
  showOptionsContainer?: boolean;
}
