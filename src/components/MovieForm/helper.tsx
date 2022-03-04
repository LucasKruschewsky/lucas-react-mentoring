import * as React from 'react';
import { Input, Label, TextArea, Select } from 'Global/styled/InputAndLabel';
import { movieFormFields } from '@/data/MockData';
import { IMovieFormProps } from './types';

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
          {field.label}
          <TextArea rows={7} placeholder={field.placeholder} />
        </Label>
      );
    }

    if (field.type === 'select') {
      return (
        <Label key={`${field.label}-${field.type}`}>
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
      <Label key={`${field.label}-${field.type}`}>
        {field.label}
        <Input type={field.type} placeholder={field.placeholder} />
      </Label>
    );
  }
);
