import { TCurrentModalState } from '@/store/modules/modal/types';
import { TMovieObject } from '@/store/modules/movieList/types';

export interface IMovieFormProps {
  type: TCurrentModalState['modalType'];
  movieId?: TMovieObject['id'];
}

export interface IAddAndEditFields {
  label: string;
  name: keyof TMovieObject;
  type: 'text' | 'textarea' | 'select' | 'date' | 'number';
  placeholder: string;
  options?: string[];
  id?: string;
}

export type TMovieFormFieldTypes = 'text' | 'textarea' | 'select' | 'date';

export interface IMovieFormFields {
  addAndEdit: IAddAndEditFields[];
}
