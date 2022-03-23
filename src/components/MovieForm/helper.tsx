import * as React from 'react';
import { Input, Label, TextArea, Select } from 'Global/styled/InputAndLabel';
import { ADD, DELETE, EDIT } from '@/store/modules/modal/constants';
import { IMovieFormFields, IMovieFormProps } from './types';

const movieFormFields: IMovieFormFields = {
  addAndEdit: [
    {
      label: 'Title',
      type: 'text',
      placeholder: 'Movie Title',
    },
    {
      label: 'Release Date',
      type: 'date',
      placeholder: 'Select Date',
    },
    {
      label: 'Movie Url',
      type: 'text',
      placeholder: 'https://',
    },
    {
      label: 'Rating',
      type: 'text',
      placeholder: '7.8',
    },
    {
      label: 'Genre',
      type: 'select',
      placeholder: 'Select Genre',
    },
    {
      label: 'Runtime',
      type: 'text',
      placeholder: 'minutes',
    },
    {
      label: 'Overview',
      type: 'textarea',
      placeholder: 'Movie Description',
    },
  ],
};

export const showFormTitle = (type: IMovieFormProps['type']): string => {
  if (type === ADD) return 'Add Movie';
  if (type === EDIT) return 'Edit Movie';
  if (type === DELETE) return 'Delete Movie';

  return 'Form Title';
};

export const addAndEditFormFields = movieFormFields.addAndEdit.map(
  (field): React.ReactElement => {
    if (field.type === 'textarea') {
      return (
        <Label key={`${field.label}-${field.type}`} id="add-movie-textarea">
          <p>{field.label}</p>
          <TextArea rows={7} placeholder={field.placeholder} />
        </Label>
      );
    }

    if (field.type === 'select') {
      return (
        <Label key={`${field.label}-${field.type}`}>
          <p>{field.label}</p>
          <Select defaultValue="default-disabled-value">
            <option value="default-disabled-value" disabled>
              {field.placeholder}
            </option>
          </Select>
        </Label>
      );
    }

    // Default return for type text/date
    return (
      <Label key={`${field.label}-${field.type}`}>
        <p>{field.label}</p>
        <Input type={field.type} placeholder={field.placeholder} />
      </Label>
    );
  }
);
