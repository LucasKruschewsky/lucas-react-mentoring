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
  name: string;
  genre: string;
  year: number;
  image: any;
  id: number;
}

export type IGenreFilterList = string[];
