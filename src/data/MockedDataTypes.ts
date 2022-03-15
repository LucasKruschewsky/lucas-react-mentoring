export interface IMovieFormFields {
  addAndEdit: {
    label: string;
    type: 'text' | 'textarea' | 'select' | 'date';
    placeholder: string;
    options?: string[];
    id?: string;
  }[];
}

export interface IMoviesListData {
  title: string;
  release_date: number;
  genres: string[];
  poster_path: string;
  vote_average: number;
  runtime: number;
  overview: string;
  id: number;
}

export type IGenreFilterList = string[];
