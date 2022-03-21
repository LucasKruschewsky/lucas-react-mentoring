import * as React from 'react';
import {
  InputWrapper,
  Label,
  TextAreaWrapper,
  SelectWrapper,
} from 'Global/styled/InputAndLabel';
import { Field } from 'formik';
import { TMovieObject } from '@/store/modules/movieList/types';
import { IMovieFormFields, IMovieFormProps } from './types';

export const emptyMovieObject: TMovieObject = {
  title: '',
  release_date: '',
  genres: [],
  poster_path: '',
  vote_average: '',
  runtime: '',
  overview: '',
  id: '',
};

const movieFormFields: IMovieFormFields = {
  addAndEdit: [
    {
      label: 'Title',
      name: 'title',
      type: 'text',
      placeholder: 'Movie Title',
    },
    {
      label: 'Release Date',
      name: 'release_date',
      type: 'date',
      placeholder: 'Select Date',
    },
    {
      label: 'Movie Url',
      name: 'poster_path',
      type: 'text',
      placeholder: 'https://',
    },
    {
      label: 'Rating',
      name: 'vote_average',
      type: 'text',
      placeholder: '7.8',
    },
    {
      label: 'Genre',
      name: 'genres',
      type: 'select',
      placeholder: 'Select Genre',
    },
    {
      label: 'Runtime',
      name: 'runtime',
      type: 'text',
      placeholder: 'minutes',
    },
    {
      label: 'Overview',
      name: 'overview',
      type: 'textarea',
      placeholder: 'Movie Description',
    },
  ],
};

export const showFormTitle = (type: IMovieFormProps['type']): string => {
  if (type === 'add') return 'Add Movie';
  if (type === 'edit') return 'Edit Movie';
  if (type === 'delete') return 'Delete Movie';

  return 'Form Title';
};

export const addAndEditFormFields = movieFormFields.addAndEdit.map(
  (field): React.ReactElement => {
    if (field.type === 'textarea') {
      return (
        <Label key={`${field.label}-${field.type}`} id="add-movie-textarea">
          <p>{field.label}</p>
          <TextAreaWrapper>
            <Field
              name={field.name}
              as="textarea"
              rows={7}
              placeholder={field.placeholder}
            />
          </TextAreaWrapper>
        </Label>
      );
    }

    if (field.type === 'select') {
      return (
        <Label key={`${field.label}-${field.type}`}>
          <p>{field.label}</p>
          <SelectWrapper>
            <Field name={field.name} value="default-disabled-value" as="select">
              <option value="default-disabled-value" disabled>
                {field.placeholder}
              </option>
            </Field>
          </SelectWrapper>
        </Label>
      );
    }

    // Default return for type text/date
    return (
      <Label key={`${field.label}-${field.type}`}>
        <p>{field.label}</p>
        <InputWrapper>
          <Field
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
          />
        </InputWrapper>
      </Label>
    );
  }
);
