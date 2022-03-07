export interface IMovieCardProps {
  movie: {
    image: HTMLImageElement;
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
