import { TMovieObject } from '@/store/modules/movieList/types';

export interface IMovieFormProps {
  type: 'add' | 'edit' | 'delete';
  movieId?: TMovieObject['id'];
}

export interface IAddAndEditFields {
  label: string;
  name: string;
  type: 'text' | 'textarea' | 'select' | 'date' | 'number';
  placeholder: string;
  options?: string[];
  id?: string;
}

export interface IMovieFormFields {
  addAndEdit: IAddAndEditFields[];
}
