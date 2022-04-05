import { TCurrentModalState } from '@/store/modules/modal/types';

export interface IMovieFormProps {
  type: TCurrentModalState;
}

export type TMovieFormFieldTypes = 'text' | 'textarea' | 'select' | 'date';

export interface IMovieFormFields {
  addAndEdit: {
    label: string;
    type: TMovieFormFieldTypes;
    placeholder: string;
    options?: string[];
    id?: string;
  }[];
}
