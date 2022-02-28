export interface IPropsMovieCard {
  movie: {
    image: string;
    name: string;
    genre: string;
    year: number;
  };
}

export interface IStyleProps {
  showOptionsIcon?: boolean;
  showOptionsContainer?: boolean;
}
