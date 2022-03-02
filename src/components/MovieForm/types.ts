export interface IMovieFormProps {
  type: 'add' | 'edit' | 'delete';
}

export interface IMovieFormFields {
  addAndEdit: {
    label: string;
    type: 'text' | 'textarea' | 'select' | 'date';
    placeholder: string;
    options?: string[];
    id?: string;
  }[];
}
