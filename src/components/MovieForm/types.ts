import { TMovieObject } from '@/store/modules/movieList/types';

export interface IMovieFormProps {
  type: 'add' | 'edit' | 'delete';
  movieId?: TMovieObject['id'];
}

export interface IMovieFormFields {
  addAndEdit: {
    label: string;
    name: string;
    type: 'text' | 'textarea' | 'select' | 'date';
    placeholder: string;
    options?: string[];
    id?: string;
  }[];
}
