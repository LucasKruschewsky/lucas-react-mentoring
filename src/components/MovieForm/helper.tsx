import * as React from 'react';
import * as Yup from 'yup';
import {
  InputWrapper,
  Label,
  TextAreaWrapper,
} from 'Global/styled/InputAndLabel';
import {
  Field,
  FormikErrors,
  FormikProps,
  FormikTouched,
  FormikValues,
} from 'formik';
import { TMovieObject } from 'Root/store/modules/movieList/types';
import { ADD, DELETE, EDIT } from 'Root/store/modules/modal/constants';
import { genreFilterList } from 'Components/MovieFilters/helper';
import ReactMultiSelect from 'Components/ReactMultiSelect/ReactMultiSelect';
import { ALL } from 'Root/store/modules/movieList/constants';
import { IAddAndEditFields, IMovieFormFields, IMovieFormProps } from './types';

export const emptyMovieObject: TMovieObject = {
  title: '',
  vote_average: 0,
  release_date: '',
  poster_path: '',
  overview: '',
  runtime: 0,
  genres: null,
};

export const formValidationSchema = Yup.object().shape({
  title: Yup.string().max(50, 'Title is too long').required(),
  release_date: Yup.string().required(),
  genres: Yup.array().of(Yup.string()).nullable().required(),
  poster_path: Yup.string().required(),
  vote_average: Yup.number(),
  runtime: Yup.number().required(),
  overview: Yup.string().required(),
});

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
      type: 'number',
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
      type: 'number',
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

const genreSelectOptions = genreFilterList
  .filter((genre) => genre !== ALL)
  .map((filteredGenre) => ({
    value: filteredGenre,
    label: filteredGenre,
  }));

export const showFormTitle = (type: IMovieFormProps['type']): string => {
  if (type === ADD) return 'Add Movie';
  if (type === EDIT) return 'Edit Movie';
  if (type === DELETE) return 'Delete Movie';

  return 'Form Title';
};

export const displayFormikError = (
  errors: FormikErrors<FormikValues>,
  touched: FormikTouched<FormikValues>,
  fieldName: IAddAndEditFields['name']
): React.ReactElement =>
  errors[fieldName] && touched[fieldName] ? (
    <div className="formik-error-message">{errors[fieldName]}</div>
  ) : null;

export const addAndEditFormFields = (
  form: FormikProps<TMovieObject>
): React.ReactElement[] =>
  movieFormFields.addAndEdit.map(
    (field: IAddAndEditFields): React.ReactElement => {
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
            {displayFormikError(form.errors, form.touched, field.name)}
          </Label>
        );
      }

      if (field.type === 'select') {
        return (
          <Label key={`${field.label}-${field.type}`}>
            <p>Genres</p>
            <div>
              <Field
                id="react-select"
                name={field.name}
                fieldName={field.name}
                placeholder={field.placeholder}
                as={ReactMultiSelect}
                options={genreSelectOptions}
              />
            </div>
            {displayFormikError(form.errors, form.touched, field.name)}
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
          {displayFormikError(form.errors, form.touched, field.name)}
        </Label>
      );
    }
  );
