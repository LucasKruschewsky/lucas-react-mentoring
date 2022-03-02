import * as React from 'react';
import { Input, Label, TextArea, Select } from 'Global/styled/InputAndLabel';
import { IMovieFormFields, IMovieFormProps } from './types';

export const showFormTitle = (type: IMovieFormProps['type']): string => {
  if (type === 'add') return 'Add Movie';
  if (type === 'edit') return 'Edit Movie';
  if (type === 'delete') return 'Delete Movie';

  return 'Form Title';
};

export const movieFormFields: IMovieFormFields = {
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

export const addAndEditFormFields = movieFormFields.addAndEdit.map(
  (field): React.ReactElement => {
    if (field.type === 'textarea') {
      return (
        <Label id="add-movie-textarea">
          {field.label}
          <TextArea rows={7} placeholder={field.placeholder} />
        </Label>
      );
    }

    if (field.type === 'select') {
      return (
        <Label>
          {field.label}
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
      <Label>
        {field.label}
        <Input type={field.type} placeholder={field.placeholder} />
      </Label>
    );
  }
);
