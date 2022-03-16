export type TMovie = {
  title: string;
  release_date: number;
  genres: string[];
  poster_path: string;
  vote_average: number;
  runtime: number;
  overview: string;
  id: number;
};

export type TMovieList = TMovie[];
